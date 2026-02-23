/**
 * Optional auth for syncing preferences across devices.
 * When EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY are set,
 * uses Supabase; otherwise no-op (app works without auth).
 */

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

type SupabaseClient = {
  auth: {
    signInWithPassword: (o: { email: string; password: string }) => Promise<{ data: unknown; error: { message: string } | null }>;
    signUp: (o: { email: string; password: string }) => Promise<{ data: unknown; error: { message: string } | null }>;
    signOut: () => Promise<void>;
    getSession: () => Promise<{ data: { session: { user?: { id: string } } | null } }>;
  };
  from: (table: string) => {
    select: () => { eq: (col: string, id: string) => { single: () => Promise<{ data: unknown }> }; single: () => Promise<{ data: unknown }> };
    upsert: (row: object, opts?: { onConflict: string }) => Promise<{ error: { message: string } | null }>;
  };
};

let supabaseClient: SupabaseClient | null = null;

async function getClient(): Promise<SupabaseClient> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error(
      'Auth is not configured. Set EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY to enable sign-in.'
    );
  }
  if (!supabaseClient) {
    const { createClient } = await import('@supabase/supabase-js');
    supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY) as SupabaseClient;
  }
  return supabaseClient;
}

export async function signIn(email: string, password: string): Promise<void> {
  const client = await getClient();
  const { error } = await client.auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);
}

export async function signUp(email: string, password: string): Promise<void> {
  const client = await getClient();
  const { error } = await client.auth.signUp({ email, password });
  if (error) throw new Error(error.message);
}

export async function signOut(): Promise<void> {
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
}

export async function getUserId(): Promise<string | null> {
  try {
    const client = await getClient();
    const { data } = await client.auth.getSession();
    return data?.session?.user?.id ?? null;
  } catch {
    return null;
  }
}

export async function isConfigured(): Promise<boolean> {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}
