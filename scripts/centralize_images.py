import os
import shutil
import re
import hashlib

# Configuration
SOURCE_DIR = "/Users/lishuyi/Downloads/文玄 Lab/文玄_Lab_Web"
ASSETS_DIR = "/Users/lishuyi/Downloads/文玄 Lab/文玄_Lab_Web/public/assets"
PUBLIC_URL_PREFIX = "/assets/"

# Extensions to look for
IMG_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'}

def setup():
    if not os.path.exists(ASSETS_DIR):
        os.makedirs(ASSETS_DIR)

def process_files():
    # Walk through all files in the web project
    # We need to find image files that are NOT in public folder yet
    # And we need to find markdown files to update links
    
    # Strategy:
    # 1. Walk through directories.
    # 2. If an image is found (and not in public/assets), move it to public/assets.
    #    To avoid name collisions, we can prepend the parent folder name or use a hash.
    #    Let's use a flat structure with unique names: {hash}_{filename}
    # 3. Keep a mapping of {original_abs_path : new_public_path}
    # 4. Walk through MD files, regex replace image links based on the mapping.
    
    mapping = {} # old_rel_path -> new_public_url
    
    # Step 1: Find and move images
    print("Step 1: Moving images...")
    for root, dirs, files in os.walk(SOURCE_DIR):
        # Skip public folder itself to avoid recursion or double processing
        if "/public" in root:
            continue
            
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in IMG_EXTENSIONS:
                original_path = os.path.join(root, file)
                
                # Generate unique name
                # Use hash of full path to ensure uniqueness
                path_hash = hashlib.md5(original_path.encode()).hexdigest()[:8]
                new_filename = f"{path_hash}_{file.replace(' ', '_')}"
                new_path = os.path.join(ASSETS_DIR, new_filename)
                
                # Copy instead of move first to be safe, or just move.
                # Let's move to clean up the source folders.
                shutil.move(original_path, new_path)
                
                # Record mapping
                # The tricky part: how are they referenced in MD?
                # Usually relative: ./img.png or ../img.png
                # We need to resolve the absolute path of the referenced image in MD to match this.
                
                # Store absolute path as key
                mapping[original_path] = f"{PUBLIC_URL_PREFIX}{new_filename}"
                print(f"Moved: {file} -> {new_filename}")

    # Step 2: Update Markdown files
    print("Step 2: Updating Markdown links...")
    for root, dirs, files in os.walk(SOURCE_DIR):
        for file in files:
            if file.endswith(".md"):
                md_path = os.path.join(root, file)
                
                with open(md_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                def replace_link(match):
                    alt = match.group(1)
                    link = match.group(2)
                    
                    # Ignore web links
                    if link.startswith('http'):
                        return match.group(0)
                    
                    # Resolve absolute path of the referenced image
                    # The link is relative to md_path
                    try:
                        # Decode URL encoding if present (e.g. %20)
                        link_decoded = link.replace('%20', ' ')
                        abs_image_path = os.path.abspath(os.path.join(os.path.dirname(md_path), link_decoded))
                        
                        if abs_image_path in mapping:
                            return f"![{alt}]({mapping[abs_image_path]})"
                    except Exception as e:
                        pass
                        
                    return match.group(0)

                new_content = re.sub(r'!\[(.*?)\]\((.*?)\)', replace_link, content)
                
                if new_content != content:
                    with open(md_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated: {file}")

if __name__ == "__main__":
    setup()
    process_files()
