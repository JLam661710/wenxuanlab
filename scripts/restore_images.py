import os
import shutil

# Configuration
SOURCE_ROOT = "/Users/lishuyi/Downloads/文玄 Lab/BBB 内容素材与结构索引"
TARGET_ROOT = "/Users/lishuyi/Downloads/文玄 Lab/文玄_Lab_Web"

# Mapping logic must match the migration scripts
# 1. AI Coding -> ai-coding
# 2. Project Maia -> project-maia
# 3. PawsomeArt -> pawsome-art
# 4. Agent Skills -> agent-skills

MAPPINGS = {
    "【1】AI Coding 的心得、收获和建议——用武侠小说的方式打开": "ai-coding",
    "【2】智能体应用程序产品开发——Project Maia（多智能体驱动的 AI 产品战略访谈局）": "project-maia",
    "【3】AI Coding 赋能实体制造与商业化——PawsomeArt（宠物艺术定制文创）": "pawsome-art",
    "【4】智能体范式下的工具开发——Agent`s Skills（智能体技能）": "agent-skills"
}

IMG_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'}

def sync_images():
    print("Starting image sync from BBB to Web...")
    
    for source_dir_name, target_dir_name in MAPPINGS.items():
        source_path = os.path.join(SOURCE_ROOT, source_dir_name)
        target_path = os.path.join(TARGET_ROOT, target_dir_name)
        
        if not os.path.exists(source_path):
            print(f"Source not found: {source_path}")
            continue
            
        # Walk through source, if image found, copy to target relative path
        for root, dirs, files in os.walk(source_path):
            # Calculate relative path from the specific section root
            rel_path = os.path.relpath(root, source_path)
            
            # Target directory for these files
            target_subdir = os.path.join(target_path, rel_path)
            
            if not os.path.exists(target_subdir):
                # If target directory doesn't exist (maybe md file missing?), create it?
                # Or maybe migration script skipped empty folders.
                # Let's ensure it exists if we have images.
                pass 
            
            for file in files:
                ext = os.path.splitext(file)[1].lower()
                if ext in IMG_EXTENSIONS:
                    src_file = os.path.join(root, file)
                    dst_file = os.path.join(target_subdir, file)
                    
                    if not os.path.exists(target_subdir):
                        os.makedirs(target_subdir)
                        
                    shutil.copy2(src_file, dst_file)
                    print(f"Restored: {rel_path}/{file}")

if __name__ == "__main__":
    sync_images()
