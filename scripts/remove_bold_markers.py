import os
import re

def remove_bold_markers(directory):
    # 正则表达式匹配 **text** 并捕获 text
    pattern = re.compile(r'\*\*(.*?)\*\*')
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # 替换所有匹配项
                    new_content = pattern.sub(r'\1', content)
                    
                    if new_content != content:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Processed: {file_path}")
                        
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    # 从脚本所在目录的上级目录开始遍历（即项目根目录）
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    print(f"Starting to remove bold markers in: {project_root}")
    remove_bold_markers(project_root)
    print("Done.")
