import os
import re
import urllib.parse

ROOT_DIR = "/Users/lishuyi/Downloads/文玄 Lab/文玄_Lab_Web"

def fix_image_links():
    # Walk through all markdown files
    for root, dirs, files in os.walk(ROOT_DIR):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Regex to find image links: ![alt](path)
                
                def replace_link(match):
                    alt_text = match.group(1)
                    link_path = match.group(2)
                    
                    if link_path.startswith('http') or link_path.startswith('/'):
                        return match.group(0)
                    
                    # Fix: Replace spaces with %20
                    fixed_path = link_path.replace(' ', '%20')
                    
                    if fixed_path != link_path:
                        return f'![{alt_text}]({fixed_path})'
                    return match.group(0)

                new_content = re.sub(r'!\[(.*?)\]\((.*?)\)', replace_link, content)
                
                if new_content != content:
                    print(f"Fixed links in: {file}")
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)

if __name__ == "__main__":
    fix_image_links()
