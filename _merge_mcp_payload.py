#!/usr/bin/env python3
import json, sys
from pathlib import Path
meta = json.loads(Path("_mcp_args_no_body.json").read_text(encoding="utf-8"))
body = Path("_mcp_body.txt").read_text(encoding="utf-8")
meta["body"] = body
json.dump(meta, sys.stdout, ensure_ascii=False, separators=(",",":"))
sys.stdout.write("\n")
