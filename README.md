# Marcus

A Stoic daily wisdom app. One nugget per day from Marcus Aurelius, Seneca, and Epictetus — tailored to themes you choose (e.g. anxiety, anger, procrastination).

- **Mobile & web**: React Native + Expo (iOS, Android, web).
- **Onboarding**: Pick your struggles; daily quotes are filtered and prioritised by them.
- **Optional sign-in**: Sync preferences across devices (Supabase).

## Run

```bash
npm install
npx expo start
```

Then press `i` for iOS simulator, `a` for Android, or `w` for web.

## Optional: Sign-in and sync

1. Create a [Supabase](https://supabase.com) project.
2. Copy `.env.example` to `.env` and set:
   - `EXPO_PUBLIC_SUPABASE_URL`
   - `EXPO_PUBLIC_SUPABASE_ANON_KEY`
3. In Supabase SQL editor, create the table (optional; for future preference sync):

```sql
create table if not exists user_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  selected_struggle_ids jsonb default '[]',
  notification_time text,
  updated_at timestamptz default now()
);
```

Without these env vars, the app works fully offline with local storage only.

## Scripts

- `npm start` — start Expo dev server
- `npm run ios` — open iOS simulator
- `npm run android` — open Android emulator
- `npm run web` — open in browser
