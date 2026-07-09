# Connect Cursor to Braze (MCP)

This guide sets up the **Braze MCP server** so Cursor can query your Braze data (campaigns, segments, catalogs, etc.) in natural language. The connection is **read-only** and does not expose PII.

---

## Quick setup (do this)

The Braze MCP server has already been wired into your **global** Cursor config at `~/.cursor/mcp.json` (kept out of this repo so your API key is never committed — the project `.cursor/mcp.json` is tracked in git). `uv`/`uvx` is already installed and the `braze-mcp-server` package has been verified to launch. You just need to add your credentials:

1. **Add your Braze credentials** in **`~/.cursor/mcp.json`** (the `braze` block):
   - Replace `your-braze-api-key` with your real API key (Braze → Settings → APIs and Identifiers → API Keys; create a new read-only key).
   - Confirm `BRAZE_BASE_URL` matches your cluster. It currently defaults to **US-01** (`https://rest.iad-01.braze.com`); if you’re on EU, change it to `https://rest.fra-01.braze.eu`.

2. **Restart Cursor.** Then open **Cmd+Shift+J** → MCP and confirm the `braze` server is listed and enabled. Try: *“List my Braze campaigns”* in Composer.

> If `uv` ever goes missing (e.g. new machine): `brew install uv` or see [Install uv](https://docs.astral.sh/uv/getting-started/installation/), then restart your terminal.

---

## 1. Install `uv` (required to run the Braze MCP server)

The Braze MCP server runs via `uvx`, which comes from [uv](https://docs.astral.sh/uv/).

**macOS / Linux:**
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

**Windows (PowerShell):**
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Restart your terminal (or Cursor) so `uv`/`uvx` is on your PATH.

## 2. Create a Braze API key

1. In Braze, go to **Settings** → **APIs and Identifiers** → **API Keys**.
2. Create a **new** API key (do not reuse an existing one).
3. Grant **read-only** permissions for the data you want (e.g. campaigns, canvases, segments, catalogs, content blocks, events, KPIs). See [Braze MCP server setup](https://www.braze.com/docs/user_guide/brazeai/mcp_server/setup/) for the full permission table.
4. Copy the **API key** and keep it secret.

## 3. Get your Braze REST endpoint URL

Use the REST base URL for your Braze instance:

| Instance | `BRAZE_BASE_URL` |
|----------|-------------------|
| **US-01** | `https://rest.iad-01.braze.com` |
| **EU-01** | `https://rest.fra-01.braze.eu` |

If you use a different cluster (e.g. US-02, US-03), check [Braze data centers](https://www.braze.com/docs/user_guide/data/data_centers) and [API endpoints](https://www.braze.com/docs/api/basics).

## 4. Add the Braze MCP server in Cursor

**Option A – Via Cursor UI (recommended)**

1. Open **Cursor** → **Settings** (⌘,) → **Tools and Integrations** → **MCP Tools**.
2. Click **Add Custom MCP** (or **New MCP Server**).
3. Add a server with:

| Field | Value |
|-------|--------|
| **Name** | `braze` (or any name you like) |
| **Command** | `uvx` |
| **Args** | `--native-tls`, `braze-mcp-server@latest` |
| **Env** | See below |

**Environment variables:**

- `BRAZE_API_KEY` = your Braze API key from step 2  
- `BRAZE_BASE_URL` = your REST endpoint from step 3 (e.g. `https://rest.iad-01.braze.com`)

Save and restart Cursor.

**Option B – Project-level config (`.cursor/mcp.json`)**

This repo includes a template at `.cursor/mcp.json`. Copy it and replace the placeholders:

- `your-braze-api-key` → your actual API key  
- `https://rest.iad-01.braze.com` → your `BRAZE_BASE_URL` if different  

Then restart Cursor. Prefer **project-level** config if you want Braze only for this codebase; use **global** config if you want it in every project.

## 5. Verify the connection

1. Restart Cursor after changing MCP config.
2. Open the **MCP** tab: **Cmd+Shift+J** → MCP, and confirm the Braze server is listed and enabled.
3. In Composer or Chat, ask something like: *“List my Braze campaigns”* or *“What segments exist in Braze?”*  
   The AI should use the Braze MCP tools to answer.

## Security notes

- Use an API key **only for the MCP client**, with **read-only**, **non-PII** permissions.
- Do not commit real API keys. If you use `.cursor/mcp.json`, add it to `.gitignore` or use environment variable references if your setup supports them.

## Links

- [Braze MCP server – Setup](https://www.braze.com/docs/user_guide/brazeai/mcp_server/setup/)
- [Braze MCP server – Usage](https://www.braze.com/docs/user_guide/brazeai/mcp_server/usage/)
- [Braze MCP – Available API functions](https://www.braze.com/docs/user_guide/brazeai/mcp_server/available_api_functions/)
