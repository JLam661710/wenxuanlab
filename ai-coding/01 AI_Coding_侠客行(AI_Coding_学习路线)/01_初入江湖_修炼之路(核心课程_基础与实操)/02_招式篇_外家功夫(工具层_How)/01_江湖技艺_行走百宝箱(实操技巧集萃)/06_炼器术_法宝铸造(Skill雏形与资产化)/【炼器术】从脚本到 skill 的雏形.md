# 从一次性脚本到可复用 Skill：代码的“胶囊化”

> **核心观点**：AI Coding 的初级阶段是让 AI 帮你写代码解决当下的问题（Script）；进阶阶段是让 AI 帮你把解决问题的代码打包成工具，供未来的 AI 自动调用（Skill）。

## 1. 什么是“从脚本到 Skill”的跨越？

在 AI Coding 的日常中，我们经常会经历这样的场景：
1.  **需求**：“帮我把这个文件夹里的所有图片都压缩到 500kb 以下。”
2.  **执行**：AI 写了一个 Python 脚本，你运行它，任务完成。
3.  **遗忘**：脚本被丢在角落。下次有类似需求时，你又重新让 AI 写一遍。

**“从脚本到 Skill”**，就是拒绝这种重复劳动。我们要把这次生成的代码“胶囊化”，变成一个随时待命的**技能（Skill）**。

### 区别在哪？
*   **脚本 (Script)**：
    *   **特征**：路径写死、参数硬编码、依赖当前上下文。
    *   **使用者**：人（你需要懂怎么运行它）。
    *   **寿命**：一次性。
*   **技能 (Skill)**：
    *   **特征**：参数化、有清晰的输入输出定义、附带“使用说明书”（Prompt/Schema）。
    *   **使用者**：AI（Agent 可以通过阅读说明书来决定何时调用它）。
    *   **寿命**：长期复用。

---

## 2. 演进三部曲：如何把代码“胶囊化”

要把一个脚本变成 Skill，通常需要经历三个步骤的重构。我们以“PDF 转 Markdown”为例。

### 第一阶段：一次性脚本 (The Raw Script)
这是 AI 第一次生成的代码，通常长这样：
```python
# 路径是写死的
pdf_path = "/Users/me/Downloads/report.pdf"
output_path = "/Users/me/Downloads/report.md"

def convert():
    # ... 转换逻辑 ...
    print("转换完成")

convert()
```
*   **问题**：换个文件就得改代码。

### 第二阶段：工具化/参数化 (The Tool)
你要求 AI：“把路径改成可以通过命令行参数传入。”
```python
import argparse

def convert(input_path, output_path):
    # ... 转换逻辑 ...

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", help="输入文件路径")
    # ...
```
*   **进步**：变得通用了，但还得人来敲命令行。

### 第三阶段：技能化 (The Skill)
这是关键的一步。你需要**为代码写一段“写给 AI 看的文档”**。
一个 Skill = **可执行代码** + **接口描述（Manifest）**。

接口描述示例（伪代码/JSON Schema）：
```json
{
  "name": "pdf_to_markdown",
  "description": "当用户需要读取 PDF 内容或将 PDF 转换为可编辑文本时使用此工具。输入必须是绝对路径。",
  "parameters": {
    "type": "object",
    "properties": {
      "file_path": {
        "type": "string",
        "description": "PDF 文件的绝对路径"
      }
    }
  }
}
```
*   **质变**：现在，你可以对你的 Agent 说：“帮我读一下桌面上那个财报。”
*   Agent 会：
    1.  搜索自己的工具箱。
    2.  读到 `pdf_to_markdown` 的 `description`，发现匹配。
    3.  自动提取路径参数。
    4.  调用代码。

---

## 3. 为什么这是“实操技巧”而非“教学设计”？

这不仅是写代码的技巧，更是**思维方式的转变**。

*   **作为实操技巧**：它要求你在写代码时保持一种“嗅觉”——*“这个功能我以后还会用到吗？”* 如果是，就不要只满足于让代码跑通，而要顺手把它封装好。
*   **作为通往 Agent 的桥梁**：Agent 不是凭空而来的。Agent 的能力（Capabilities）就是由这一个个具体的 Skill 堆砌而成的。
    *   **AI Coding** = 生产零部件。
    *   **Agent 开发** = 组装零部件。
    *   **本技巧** = **把零部件打磨标准化的过程**。

## 4. 实战建议：建立你的 `my-skills` 文件夹

从今天开始，在你的项目根目录下建一个 `skills/` 文件夹。
每当 AI 帮你写了一个好用的脚本（比如批量重命名、提取网页正文、自动格式化数据），就多花 2 分钟：
1.  让 AI 把硬编码改成参数。
2.  让 AI 生成一段这个脚本的“功能简介”。
3.  把它丢进 `skills/`。

这就是最朴素的 **Agent 资产积累**。
