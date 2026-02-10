---
layout: home

hero:
  name: ""
  text: ""
  image:
    src: /logo.jpeg
    alt: 文玄 Lab
  tagline: 这里的每一行代码与文字，都是思想的延伸。
  actions:
    - theme: brand
      text: 进入花园
      link: /about
    - theme: alt
      text: 浏览项目
      link: /project-maia/01 缘起（1）/

features:
  - title: "AI Coding 的心得、收获和建议<br>——用武侠小说的方式打开"
    details: 深入 AI Coding 的底层逻辑与心法，像侠客一样修炼内功。
    link: /ai-coding/00 用武侠漫画的方式打开-示例/示例 1/
  - title: "智能体应用程序产品开发<br>——Project Maia（多智能体驱动的 AI 产品战略访谈局）"
    details: 从 PawsomeArt 到 Project Maia，见证智能体产品的诞生。
    link: /project-maia/01 缘起（1）/
  - title: "AI Coding 赋能实体制造与商业化<br>——PawsomeArt（宠物艺术定制文创）"
    details: AI Coding 开发品牌独立站辅助商业推广与变现。
    link: /pawsome-art/AI Coding 开发品牌独立站辅助商业推广与变现/01 PawsomeArt 作品与展览/
  - title: "智能体范式下的工具开发<br>——Agent's Skills（智能体技能）"
    details: 打造属于你的智能体技能库，沉淀可复用的工作流。
    link: /agent-skills/01 实验一：智能体技能的嵌套式开发/由 AI 开发工具，再由 AI 沉淀工作流，最后封装为新工具
---

<style>
/* Make the hero image larger */
.VPHero .image-src {
  max-width: 400px !important;
  max-height: 400px !important;
}

@media (min-width: 960px) {
  .VPHero .image-src {
    max-width: 500px !important;
    max-height: 500px !important;
  }
}

/* Customize Feature Cards to look more like large buttons/blocks */
.VPFeatures .VPFeature {
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
  height: 100%;
  cursor: pointer;
  position: relative; /* For absolute positioning of the arrow */
}

.VPFeatures .VPFeature:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft-up);
}

.VPFeatures .title {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* Add an arrow icon using pseudo-element */
.VPFeatures .VPFeature::after {
  content: "→";
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 1.5rem;
  color: var(--vp-c-brand-1);
  opacity: 0.5;
  transition: opacity 0.25s, transform 0.25s;
}

.VPFeatures .VPFeature:hover::after {
  opacity: 1;
  transform: translateX(5px);
}

/* Hide the default link text if it appears (VitePress might render it if linkText is missing but link exists? No, it usually just links the whole card or title) 
   Actually, VitePress default theme: if link is present, the whole card is clickable if features is used.
   If linkText is omitted, it doesn't render the footer link.
*/

/* Force 2x2 Layout on Desktop */
@media (min-width: 960px) {
  .VPFeatures .items {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
  }
  
  .VPFeatures .item {
    width: 50% !important;
    padding: 8px;
  }
}
</style>
