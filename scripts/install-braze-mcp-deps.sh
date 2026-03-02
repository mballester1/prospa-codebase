#!/usr/bin/env bash
# Installs uv so Cursor can run the Braze MCP server (uvx braze-mcp-server@latest).
# Run once: ./scripts/install-braze-mcp-deps.sh

set -e

if command -v uvx &>/dev/null; then
  echo "uv/uvx is already installed: $(uvx --version 2>/dev/null || uv --version 2>/dev/null)"
  exit 0
fi

# Prefer Homebrew on macOS (avoids curl SSL issues on some networks)
if command -v brew &>/dev/null; then
  echo "Installing uv via Homebrew..."
  brew install uv
  echo "Done. Restart your terminal (or Cursor) and ensure you have added your Braze API key and BRAZE_BASE_URL in .cursor/mcp.json"
  exit 0
fi

# Fallback: official install script
echo "Installing uv via official script (requires curl)..."
curl -LsSf https://astral.sh/uv/install.sh | sh
echo "Done. Restart your terminal (or Cursor) and ensure you have added your Braze API key and BRAZE_BASE_URL in .cursor/mcp.json"
exit 0
