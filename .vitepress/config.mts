import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "文玄 Lab",
  description: "极简禅意数字花园",
  lang: 'zh-CN',
  cleanUrls: true,
  outDir: 'dist',
  themeConfig: {
    logo: '/logo.jpeg',
    siteTitle: false,
    nav: [
      { text: '首页', link: '/' },
      { text: 'Project Maia', link: '/project-maia/01 缘起（2）/Maia作为一种技术人文主义实践.md' },
      { text: 'PawsomeArt', link: '/pawsome-art/AI Coding 开发品牌独立站辅助商业推广与变现/03 当前的 PawsomeArt 品牌与下单官网/PawsomeArt 公网访问网址.md' },
      { text: 'Agent Skills', link: '/agent-skills/01 实验一：智能体技能的嵌套式开发/由 AI 开发工具，再由 AI 沉淀工作流，最后封装为新工具.md' },
      { text: 'AI Coding 侠客行', link: '/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/01_筑基篇_内功心法(内核层_Why)/01_入门心诀_气沉丹田(基础知识普及)/一切的一切开始于“我要”这个核心意图/【心法】从我要到可复用解决方案.md' },
      { text: '我的介绍', link: '/about' },
    ],
    sidebar: {
        "/ai-coding/": [
          {
            "text": "用武侠漫画的方式打开-示例",
            "collapsed": true,
            "items": [
              {
                "text": "示例 1",
                "link": "/ai-coding/00 用武侠漫画的方式打开-示例/示例 1/"
              },
              {
                "text": "示例 2",
                "link": "/ai-coding/00 用武侠漫画的方式打开-示例/示例 2/"
              }
            ]
          },
          {
            "text": "AI_Coding_侠客行(AI_Coding_学习路线)",
            "collapsed": true,
            "items": [
              {
                "text": "初入江湖_修炼之路(核心课程_基础与实操)",
                "collapsed": true,
                "items": [
                  {
                    "text": "筑基篇_内功心法(内核层_Why)",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "入门心诀_气沉丹田(基础知识普及)",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "【心法】AI_Coding趋势与概念清单",
                            "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/01_筑基篇_内功心法(内核层_Why)/01_入门心诀_气沉丹田(基础知识普及)/【心法】AI_Coding趋势与概念清单.md"
                          },
                          {
                            "text": "【心法】产品工程与应用程序概念",
                            "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/01_筑基篇_内功心法(内核层_Why)/01_入门心诀_气沉丹田(基础知识普及)/【心法】产品工程与应用程序概念.md"
                          },
                          {
                            "text": "【心法】架构启蒙_通过安全与管理理解前后端",
                            "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/01_筑基篇_内功心法(内核层_Why)/01_入门心诀_气沉丹田(基础知识普及)/【心法】架构启蒙_通过安全与管理理解前后端.md"
                          },
                          {
                            "text": "一切的一切开始于“我要”这个核心意图",
                            "collapsed": true,
                            "items": [
                              {
                                "text": "【心法】从我要到可复用解决方案",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/01_筑基篇_内功心法(内核层_Why)/01_入门心诀_气沉丹田(基础知识普及)/一切的一切开始于“我要”这个核心意图/【心法】从我要到可复用解决方案.md"
                              },
                              {
                                "text": "【心法】第一性原理与概念辨析速查",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/01_筑基篇_内功心法(内核层_Why)/01_入门心诀_气沉丹田(基础知识普及)/一切的一切开始于“我要”这个核心意图/【心法】第一性原理与概念辨析速查.md"
                              }
                            ]
                          },
                          {
                            "text": "为什么要做基础知识普及？",
                            "collapsed": true,
                            "items": [
                              {
                                "text": "【心法】认知门槛与脚手架_技术平权",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/01_筑基篇_内功心法(内核层_Why)/01_入门心诀_气沉丹田(基础知识普及)/为什么要做基础知识普及？/【心法】认知门槛与脚手架_技术平权.md"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "招式篇_外家功夫(工具层_How)",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "江湖技艺_行走百宝箱(实操技巧集萃)",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "悬赏令_任务拆解(PRD与需求)",
                            "collapsed": true,
                            "items": [
                              {
                                "text": "【悬赏令】PRD 文档是 AI Coding 过程中我们的核心资产之一",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/01_悬赏令_任务拆解(PRD与需求)/【悬赏令】PRD 文档是 AI Coding 过程中我们的核心资产之一.md"
                              },
                              {
                                "text": "【悬赏令】产品哲学_双前端架构与运维思维",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/01_悬赏令_任务拆解(PRD与需求)/【悬赏令】产品哲学_双前端架构与运维思维.md"
                              },
                              {
                                "text": "【悬赏令】产品框架五要素与关键问题",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/01_悬赏令_任务拆解(PRD与需求)/【悬赏令】产品框架五要素与关键问题.md"
                              },
                              {
                                "text": "【悬赏令】慢思考：PRD写作",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/01_悬赏令_任务拆解(PRD与需求)/【悬赏令】慢思考：PRD写作.md"
                              },
                              {
                                "text": "【悬赏令】需求挖掘_具体与真实_案例",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/01_悬赏令_任务拆解(PRD与需求)/【悬赏令】需求挖掘_具体与真实_案例.md"
                              }
                            ]
                          },
                          {
                            "text": "木剑试锋_初试牛刀(MVP与可行性)",
                            "collapsed": true,
                            "items": [
                              {
                                "text": "【木剑】可行性与MVP",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/02_木剑试锋_初试牛刀(MVP与可行性)/【木剑】可行性与MVP.md"
                              }
                            ]
                          },
                          {
                            "text": "金钟罩_排毒疗伤(Debug与止损)",
                            "collapsed": true,
                            "items": [
                              {
                                "text": "【疗伤篇】Bug即是Vibe_Coding的一部分",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/03_金钟罩_排毒疗伤(Debug与止损)/【疗伤篇】Bug即是Vibe_Coding的一部分.md"
                              },
                              {
                                "text": "【疗伤篇】止损的艺术",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/03_金钟罩_排毒疗伤(Debug与止损)/【疗伤篇】止损的艺术.md"
                              },
                              {
                                "text": "【疗伤篇】调试的艺术",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/03_金钟罩_排毒疗伤(Debug与止损)/【疗伤篇】调试的艺术.md"
                              },
                              {
                                "text": "【疗伤篇】错误分层认知",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/03_金钟罩_排毒疗伤(Debug与止损)/【疗伤篇】错误分层认知.md"
                              }
                            ]
                          },
                          {
                            "text": "千里传音_万物互联(API与连接)",
                            "collapsed": true,
                            "items": [
                              {
                                "text": "【传音术】理解 api而后指挥 AI 去连接世界",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/04_千里传音_万物互联(API与连接)/【传音术】理解 api而后指挥 AI 去连接世界.md"
                              },
                              {
                                "text": "【传音术】网站解析与API的关系",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/04_千里传音_万物互联(API与连接)/【传音术】网站解析与API的关系.md"
                              },
                              {
                                "text": "【传音术】解析 json：api 数据寻宝之旅",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/04_千里传音_万物互联(API与连接)/【传音术】解析 json：api 数据寻宝之旅.md"
                              },
                              {
                                "text": "【传音术】链接 api 是学习 vibe Coding 的完美学习桥梁",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/04_千里传音_万物互联(API与连接)/【传音术】链接 api 是学习 vibe Coding 的完美学习桥梁.md"
                              }
                            ]
                          },
                          {
                            "text": "洗髓经_心性修炼(元认知与心态)",
                            "collapsed": true,
                            "items": [
                              {
                                "text": "【洗髓经】AI_Coding_工程思维_隐喻篇",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/05_洗髓经_心性修炼(元认知与心态)/【洗髓经】AI_Coding_工程思维_隐喻篇.md"
                              },
                              {
                                "text": "【洗髓经】AI_Coding_核心认知地图",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/05_洗髓经_心性修炼(元认知与心态)/【洗髓经】AI_Coding_核心认知地图.md"
                              },
                              {
                                "text": "如何做工具选择？",
                                "collapsed": true,
                                "items": [
                                  {
                                    "text": "【洗髓经】AI_Coding_工具进阶论",
                                    "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/05_洗髓经_心性修炼(元认知与心态)/如何做工具选择？/【洗髓经】AI_Coding_工具进阶论.md"
                                  },
                                  {
                                    "text": "【洗髓经】工具选择策略",
                                    "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/05_洗髓经_心性修炼(元认知与心态)/如何做工具选择？/【洗髓经】工具选择策略.md"
                                  },
                                  {
                                    "text": "【洗髓经】认知重塑_从餐厅点菜到进入后厨",
                                    "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/05_洗髓经_心性修炼(元认知与心态)/如何做工具选择？/【洗髓经】认知重塑_从餐厅点菜到进入后厨.md"
                                  },
                                  {
                                    "text": "【洗髓经】课程过渡指南_第三课到第四课的桥梁",
                                    "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/05_洗髓经_心性修炼(元认知与心态)/如何做工具选择？/【洗髓经】课程过渡指南_第三课到第四课的桥梁.md"
                                  }
                                ]
                              },
                              {
                                "text": "如何做认知管理？",
                                "collapsed": true,
                                "items": [
                                  {
                                    "text": "【洗髓经】AI应用开发陷阱",
                                    "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/05_洗髓经_心性修炼(元认知与心态)/如何做认知管理？/【洗髓经】AI应用开发陷阱.md"
                                  },
                                  {
                                    "text": "【洗髓经】知识管理的同心圆",
                                    "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/05_洗髓经_心性修炼(元认知与心态)/如何做认知管理？/【洗髓经】知识管理的同心圆.md"
                                  }
                                ]
                              },
                              {
                                "text": "如何看待 AI？",
                                "collapsed": true,
                                "items": [
                                  {
                                    "text": "【洗髓经】原子化迭代",
                                    "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/05_洗髓经_心性修炼(元认知与心态)/如何看待 AI？/【洗髓经】原子化迭代.md"
                                  },
                                  {
                                    "text": "【洗髓经】强协作：文档与循环",
                                    "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/05_洗髓经_心性修炼(元认知与心态)/如何看待 AI？/【洗髓经】强协作：文档与循环.md"
                                  },
                                  {
                                    "text": "【洗髓经】破解AI依赖陷阱的实战指南",
                                    "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/05_洗髓经_心性修炼(元认知与心态)/如何看待 AI？/【洗髓经】破解AI依赖陷阱的实战指南.md"
                                  }
                                ]
                              },
                              {
                                "text": "遇到问题怎么办？你自己的心态调整",
                                "collapsed": true,
                                "items": [
                                  {
                                    "text": "【洗髓经】拒绝习得性无助",
                                    "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/05_洗髓经_心性修炼(元认知与心态)/遇到问题怎么办？你自己的心态调整/【洗髓经】拒绝习得性无助.md"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "text": "炼器术_法宝铸造(Skill雏形与资产化)",
                            "collapsed": true,
                            "items": [
                              {
                                "text": "【炼器术】从脚本到 skill 的雏形",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/01_初入江湖_修炼之路(核心课程_基础与实操)/02_招式篇_外家功夫(工具层_How)/01_江湖技艺_行走百宝箱(实操技巧集萃)/06_炼器术_法宝铸造(Skill雏形与资产化)/【炼器术】从脚本到 skill 的雏形.md"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "绝世高手_破碎虚空(进阶课程_思想升维)",
                "collapsed": true,
                "items": [
                  {
                    "text": "破除心魔_幻境试炼(反思层_批判)",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "看破虚妄_Vibe幻象(Vibe_Coding_批判)",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "【破幻】从消费到驾驭",
                            "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/02_绝世高手_破碎虚空(进阶课程_思想升维)/01_破除心魔_幻境试炼(反思层_批判)/01_看破虚妄_Vibe幻象(Vibe_Coding_批判)/【破幻】从消费到驾驭.md"
                          },
                          {
                            "text": "【破幻】幻象与误区",
                            "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/02_绝世高手_破碎虚空(进阶课程_思想升维)/01_破除心魔_幻境试炼(反思层_批判)/01_看破虚妄_Vibe幻象(Vibe_Coding_批判)/【破幻】幻象与误区.md"
                          },
                          {
                            "text": "【破幻】技术先验",
                            "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/02_绝世高手_破碎虚空(进阶课程_思想升维)/01_破除心魔_幻境试炼(反思层_批判)/01_看破虚妄_Vibe幻象(Vibe_Coding_批判)/【破幻】技术先验.md"
                          },
                          {
                            "text": "【破幻】洋葱结构",
                            "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/02_绝世高手_破碎虚空(进阶课程_思想升维)/01_破除心魔_幻境试炼(反思层_批判)/01_看破虚妄_Vibe幻象(Vibe_Coding_批判)/【破幻】洋葱结构.md"
                          },
                          {
                            "text": "从解构到建构——我这样看待 Vibe Coding",
                            "collapsed": true,
                            "items": [
                              {
                                "text": "【破幻】AI_Coder宣言",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/02_绝世高手_破碎虚空(进阶课程_思想升维)/01_破除心魔_幻境试炼(反思层_批判)/01_看破虚妄_Vibe幻象(Vibe_Coding_批判)/从解构到建构——我这样看待 Vibe Coding/【破幻】AI_Coder宣言.md"
                              },
                              {
                                "text": "【破幻】Vibe与Engineering的光谱",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/02_绝世高手_破碎虚空(进阶课程_思想升维)/01_破除心魔_幻境试炼(反思层_批判)/01_看破虚妄_Vibe幻象(Vibe_Coding_批判)/从解构到建构——我这样看待 Vibe Coding/【破幻】Vibe与Engineering的光谱.md"
                              },
                              {
                                "text": "【破幻】人与技术共演_实践飞轮",
                                "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/02_绝世高手_破碎虚空(进阶课程_思想升维)/01_破除心魔_幻境试炼(反思层_批判)/01_看破虚妄_Vibe幻象(Vibe_Coding_批判)/从解构到建构——我这样看待 Vibe Coding/【破幻】人与技术共演_实践飞轮.md"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "text": "慧眼识珠_破除迷障(技术盲视批判)",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "【慧眼】产品思维的知识诅咒与悖论",
                            "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/02_绝世高手_破碎虚空(进阶课程_思想升维)/01_破除心魔_幻境试炼(反思层_批判)/02_慧眼识珠_破除迷障(技术盲视批判)/【慧眼】产品思维的知识诅咒与悖论.md"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "text": "开宗立派_化身万千(跃迁层_Agent)",
                    "collapsed": true,
                    "items": [
                      {
                        "text": "机关术_傀儡演练(Agent开发实战)",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "【机关术】Agent skills 的 github 实践",
                            "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/02_绝世高手_破碎虚空(进阶课程_思想升维)/02_开宗立派_化身万千(跃迁层_Agent)/01_机关术_傀儡演练(Agent开发实战)/【机关术】Agent skills 的 github 实践.md"
                          }
                        ]
                      },
                      {
                        "text": "天道感悟_飞升宏愿(Agent开发创想)",
                        "collapsed": true,
                        "items": [
                          {
                            "text": "【天书】Agent 趋势技术调研与梳理",
                            "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/02_绝世高手_破碎虚空(进阶课程_思想升维)/02_开宗立派_化身万千(跃迁层_Agent)/02_天道感悟_飞升宏愿(Agent开发创想)/【天书】Agent 趋势技术调研与梳理.md"
                          },
                          {
                            "text": "【天书】agent_manifesto_slogans",
                            "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/02_绝世高手_破碎虚空(进阶课程_思想升维)/02_开宗立派_化身万千(跃迁层_Agent)/02_天道感悟_飞升宏愿(Agent开发创想)/【天书】agent_manifesto_slogans.md"
                          },
                          {
                            "text": "【天书】agent_political_economy",
                            "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/02_绝世高手_破碎虚空(进阶课程_思想升维)/02_开宗立派_化身万千(跃迁层_Agent)/02_天道感悟_飞升宏愿(Agent开发创想)/【天书】agent_political_economy.md"
                          },
                          {
                            "text": "【天书】agent_simultaneity_tech",
                            "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/02_绝世高手_破碎虚空(进阶课程_思想升维)/02_开宗立派_化身万千(跃迁层_Agent)/02_天道感悟_飞升宏愿(Agent开发创想)/【天书】agent_simultaneity_tech.md"
                          },
                          {
                            "text": "【天书】agent_skills_synthesis",
                            "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/02_绝世高手_破碎虚空(进阶课程_思想升维)/02_开宗立派_化身万千(跃迁层_Agent)/02_天道感悟_飞升宏愿(Agent开发创想)/【天书】agent_skills_synthesis.md"
                          },
                          {
                            "text": "【天书】智能体开发作为范式跃迁",
                            "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/02_绝世高手_破碎虚空(进阶课程_思想升维)/02_开宗立派_化身万千(跃迁层_Agent)/02_天道感悟_飞升宏愿(Agent开发创想)/【天书】智能体开发作为范式跃迁.md"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "text": "藏经阁_宗师手记(教研内功_教育理念)",
                "collapsed": true,
                "items": [
                  {
                    "text": "【宗师手记】API教学案例库设计",
                    "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/03_藏经阁_宗师手记(教研内功_教育理念)/【宗师手记】API教学案例库设计.md"
                  },
                  {
                    "text": "【宗师手记】关于怎么教的策略-现阶段",
                    "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/03_藏经阁_宗师手记(教研内功_教育理念)/【宗师手记】关于怎么教的策略-现阶段.md"
                  },
                  {
                    "text": "【宗师手记】分层教学安排与疑难解答",
                    "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/03_藏经阁_宗师手记(教研内功_教育理念)/【宗师手记】分层教学安排与疑难解答.md"
                  },
                  {
                    "text": "【宗师手记】教育范式之争",
                    "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/03_藏经阁_宗师手记(教研内功_教育理念)/【宗师手记】教育范式之争.md"
                  },
                  {
                    "text": "【宗师手记】用户画像谱系",
                    "link": "/ai-coding/01 AI_Coding_侠客行(AI_Coding_学习路线)/03_藏经阁_宗师手记(教研内功_教育理念)/【宗师手记】用户画像谱系.md"
                  }
                ]
              }
            ]
          }
        ],
        "/project-maia/": [
          {
            "text": "🚀 立即体验：Maia 访谈",
            "link": "/project-maia/02 现状/公网访问网址.md"
          },
          {
            "text": "🚀 立即体验：项目落地页",
            "link": "/project-maia/03 展望/03 项目落地页——角色化与风格化的视觉设计/项目落地页公网访问地址.md"
          },
          {
            "text": "缘起（1）",
            "link": "/project-maia/01 缘起（1）/"
          },
          {
            "text": "缘起（2）",
            "collapsed": true,
            "items": [
              {
                "text": "Maia作为一种技术人文主义实践",
                "link": "/project-maia/01 缘起（2）/Maia作为一种技术人文主义实践.md"
              }
            ]
          },
          {
            "text": "现状",
            "collapsed": true,
            "items": [
              {
                "text": "访谈过程",
                "link": "/project-maia/02 现状/01 访谈过程/"
              },
              {
                "text": "交付产物",
                "link": "/project-maia/02 现状/02 交付产物/"
              },
              {
                "text": "主页与验证",
                "link": "/project-maia/02 现状/03 主页与验证/"
              },
              {
                "text": "公网访问网址",
                "link": "/project-maia/02 现状/公网访问网址.md"
              }
            ]
          },
          {
            "text": "展望",
            "collapsed": true,
            "items": [
              {
                "text": "多模态交互——语音&图像输入+语音播报输出",
                "link": "/project-maia/03 展望/01 多模态交互——语音&图像输入+语音播报输出/"
              },
              {
                "text": "沉浸感交互——氛围感与趣味性并存的访谈窗口",
                "link": "/project-maia/03 展望/02 沉浸感交互——氛围感与趣味性并存的访谈窗口/"
              },
              {
                "text": "项目落地页——角色化与风格化的视觉设计",
                "collapsed": true,
                "items": [
                  {
                    "text": "项目落地页公网访问地址",
                    "link": "/project-maia/03 展望/03 项目落地页——角色化与风格化的视觉设计/项目落地页公网访问地址.md"
                  }
                ]
              }
            ]
          }
        ],
        "/pawsome-art/": [
          {
            "text": "🚀 立即体验：PawsomeArt 官网",
            "link": "/pawsome-art/AI Coding 开发品牌独立站辅助商业推广与变现/03 当前的 PawsomeArt 品牌与下单官网/PawsomeArt 公网访问网址.md"
          },
          {
            "text": "🚀 立即体验：Pet2Paint (早期)",
            "link": "/pawsome-art/AI Coding 开发品牌独立站辅助商业推广与变现/02 早期版本的 Pet2paint 项目介绍网页/Pet2paint 公网访问网址.md"
          },
          {
            "text": "AI Coding 开发品牌独立站辅助商业推广与变现",
            "collapsed": true,
            "items": [
              {
                "text": "PawsomeArt 作品与展览",
                "link": "/pawsome-art/AI Coding 开发品牌独立站辅助商业推广与变现/01 PawsomeArt 作品与展览/"
              },
              {
                "text": "早期版本的 Pet2paint 项目介绍网页",
                "collapsed": true,
                "items": [
                  {
                    "text": "Pet2paint 公网访问网址",
                    "link": "/pawsome-art/AI Coding 开发品牌独立站辅助商业推广与变现/02 早期版本的 Pet2paint 项目介绍网页/Pet2paint 公网访问网址.md"
                  }
                ]
              },
              {
                "text": "当前的 PawsomeArt 品牌与下单官网",
                "collapsed": true,
                "items": [
                  {
                    "text": "PawsomeArt 公网访问网址",
                    "link": "/pawsome-art/AI Coding 开发品牌独立站辅助商业推广与变现/03 当前的 PawsomeArt 品牌与下单官网/PawsomeArt 公网访问网址.md"
                  }
                ]
              },
              {
                "text": "未来的 PawsomeArt 跨境电商独立站",
                "collapsed": false,
                "items": []
              }
            ]
          },
          {
            "text": "AI Coding 开发图像生产引擎（人智协同的图像创作智能体）",
            "link": "/pawsome-art/AI Coding 开发图像生产引擎（人智协同的图像创作智能体）/"
          }
        ],
        "/agent-skills/": [
          {
            "text": "实验一：智能体技能的嵌套式开发",
            "collapsed": true,
            "items": [
              {
                "text": "由 AI 开发工具，再由 AI 沉淀工作流，最后封装为新工具",
                "link": "/agent-skills/01 实验一：智能体技能的嵌套式开发/由 AI 开发工具，再由 AI 沉淀工作流，最后封装为新工具.md"
              }
            ]
          },
          {
            "text": "实验二：开源生态下的迁移式智能体开发",
            "collapsed": true,
            "items": [
              {
                "text": "从极客玩具到大众利器：用 AI 唤醒 GitHub 的沉睡宝藏",
                "link": "/agent-skills/02 实验二：开源生态下的迁移式智能体开发/从极客玩具到大众利器：用 AI 唤醒 GitHub 的沉睡宝藏.md"
              }
            ]
          },
          {
            "text": "实验三：智能体技能的人智交互创新设计——Project Jerry",
            "collapsed": true,
            "items": [
              {
                "text": "Jerry的形态——从对话框到“晶体与折纸”",
                "link": "/agent-skills/03 实验三：智能体技能的人智交互创新设计——Project Jerry/Jerry的形态——从对话框到“晶体与折纸”.md"
              }
            ]
          }
        ]
    },
    socialLinks: [],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 文玄 Lab'
    }
  },
  appearance: false, // Disable dark mode toggle for consistent Zen theme
})
