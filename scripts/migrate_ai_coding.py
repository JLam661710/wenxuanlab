import os
import shutil
import json
import re

SOURCE_ROOT = "/Users/lishuyi/Downloads/文玄 Lab/BBB 内容素材与结构索引/【1】AI Coding 的心得、收获和建议——用武侠小说的方式打开"
TARGET_ROOT = "/Users/lishuyi/Downloads/文玄 Lab/文玄_Lab_Web/ai-coding"

# Mapping for simplification (optional, but good for cleaner URLs)
# If a dir name is not here, we can sanitize it automatically.

def sanitize_name(name):
    # Extract numbering if exists, e.g., "01_Name..." -> "01-Name"
    # Remove special chars, replace spaces/underscores with hyphens
    # Handle Chinese characters: Keep them or translate? 
    # VitePress supports Chinese URLs. Let's keep it simple but safe.
    # We will keep the numbering for ordering.
    
    # Strategy: Keep original logic but replace spaces/underscores with hyphens
    # Remove special chars like brackets
    clean = name.replace(' ', '-').replace('_', '-')
    clean = re.sub(r'[（\(].*?[）\)]', '', clean) # Remove content in brackets
    return clean

def get_sidebar_item(path, relative_path):
    items = []
    # List directories and files
    try:
        entries = sorted(os.listdir(path))
    except FileNotFoundError:
        return None

    # Filter out .DS_Store
    entries = [e for e in entries if not e.startswith('.')]

    has_index = False
    
    # Process files first to check for index (optional)
    
    files = [e for e in entries if os.path.isfile(os.path.join(path, e)) and e.endswith('.md')]
    dirs = [e for e in entries if os.path.isdir(os.path.join(path, e))]

    sidebar_group = {
        "text": os.path.basename(path),
        "collapsed": True,
        "items": []
    }

    # Add files
    for f in files:
        name_no_ext = os.path.splitext(f)[0]
        link = f"{relative_path}/{f}"
        sidebar_group["items"].append({
            "text": name_no_ext,
            "link": link
        })

    # Add directories recursively
    for d in dirs:
        sub_path = os.path.join(path, d)
        sub_relative = f"{relative_path}/{d}"
        sub_item = get_sidebar_item(sub_path, sub_relative)
        if sub_item and sub_item["items"]: # Only add if it has content
             # If the subdir has only files, maybe flatten? No, keep hierarchy.
             # Use directory name as text
             sub_item["text"] = d
             sidebar_group["items"].append(sub_item)
    
    return sidebar_group

def migrate():
    if os.path.exists(TARGET_ROOT):
        shutil.rmtree(TARGET_ROOT)
    
    # We want to copy the structure but maybe flatten the top level if needed.
    # Actually, shutil.copytree is easiest, but we want to generate sidebar.
    
    shutil.copytree(SOURCE_ROOT, TARGET_ROOT)
    
    # Generate Sidebar
    # The root of sidebar should be the content of TARGET_ROOT
    
    sidebar = []
    
    # We need to walk TARGET_ROOT to build the sidebar structure
    # But os.walk is depth-first. We want explicit control.
    
    root_items = sorted([e for e in os.listdir(TARGET_ROOT) if not e.startswith('.')])
    
    for item in root_items:
        abs_path = os.path.join(TARGET_ROOT, item)
        if os.path.isdir(abs_path):
            group = get_sidebar_item(abs_path, f"/ai-coding/{item}")
            if group:
                group["collapsed"] = False # Top level expanded
                sidebar.append(group)
    
    print(json.dumps(sidebar, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    migrate()
