import os
import json
from datetime import datetime
import sys

# ---- CONFIG ----
PROJECT_DIR = os.path.dirname(os.path.dirname(__file__))
LOGS_DIR = os.path.join(PROJECT_DIR, "projects", "zs40", "logs")
INDEX_FILE = os.path.join(LOGS_DIR, "index.json")

# ---- INPUT ----
if len(sys.argv) < 2:
    print("Usage: python new_log.py \"Log title\"")
    sys.exit(1)

title = sys.argv[1]

# YYYY-MM-DD format
date = datetime.now().strftime("%Y-%m-%d")
filename = f"{title}.md"
filepath = os.path.join(LOGS_DIR, filename)

# ---- CREATE MARKDOWN TEMPLATE ----
md_content = f"""# {title}

**Date:** {date}

## Progress

Write your update here...

## Notes

- 

## Next Steps

- 
"""

# Ensure logs folder exists
os.makedirs(LOGS_DIR, exist_ok=True)

# Don't overwrite existing log
if not os.path.exists(filepath):
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(md_content)
    print(f"Created markdown log: {filename}")
else:
    print("Log already exists for today, not overwritten.")

# ---- UPDATE INDEX.JSON ----
if os.path.exists(INDEX_FILE):
    with open(INDEX_FILE, "r", encoding="utf-8") as f:
        try:
            index = json.load(f)
        except json.JSONDecodeError:
            index = []
else:
    index = []

# Add new entry
index.append({
    "date": date,
    "title": title,
    "file": filename
})

# Sort newest first
index.sort(key=lambda x: x["date"], reverse=True)

with open(INDEX_FILE, "w", encoding="utf-8") as f:
    json.dump(index, f, indent=2)

print(f"Updated index.json with: {title}")