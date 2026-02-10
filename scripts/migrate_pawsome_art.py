import os
import shutil
import json
import re

SOURCE_ROOT = "/Users/lishuyi/Downloads/文玄 Lab/BBB 内容素材与结构索引/【3】AI Coding 赋能实体制造与商业化——PawsomeArt（宠物艺术定制文创）"
TARGET_ROOT = "/Users/lishuyi/Downloads/文玄 Lab/文玄_Lab_Web/pawsome-art"

def get_sidebar_item(path, relative_path):
    items = []
    try:
        entries = sorted(os.listdir(path))
    except FileNotFoundError:
        return None

    entries = [e for e in entries if not e.startswith('.')]

    files = [e for e in entries if os.path.isfile(os.path.join(path, e)) and e.endswith('.md')]
    dirs = [e for e in entries if os.path.isdir(os.path.join(path, e))]

    sidebar_group = {
        "text": os.path.basename(path),
        "collapsed": True,
        "items": []
    }

    for f in files:
        name_no_ext = os.path.splitext(f)[0]
        link = f"{relative_path}/{f}"
        sidebar_group["items"].append({
            "text": name_no_ext,
            "link": link
        })

    for d in dirs:
        sub_path = os.path.join(path, d)
        sub_relative = f"{relative_path}/{d}"
        sub_item = get_sidebar_item(sub_path, sub_relative)
        if sub_item and sub_item["items"]:
             sub_item["text"] = d
             sidebar_group["items"].append(sub_item)
    
    return sidebar_group

def migrate():
    if os.path.exists(TARGET_ROOT):
        shutil.rmtree(TARGET_ROOT)
    
    shutil.copytree(SOURCE_ROOT, TARGET_ROOT)
    
    sidebar = []
    
    root_items = sorted([e for e in os.listdir(TARGET_ROOT) if not e.startswith('.')])
    
    for item in root_items:
        abs_path = os.path.join(TARGET_ROOT, item)
        if os.path.isdir(abs_path):
            group = get_sidebar_item(abs_path, f"/pawsome-art/{item}")
            if group:
                group["collapsed"] = False
                sidebar.append(group)
    
    print(json.dumps(sidebar, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    migrate()
