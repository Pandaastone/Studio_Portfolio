# Codex 项目维护规则

本文件是给 Codex 使用的项目规则。以后修改本仓库时，必须优先遵守这里的约定。

## 项目性质

这是一个静态工作室官网项目，主要由独立 HTML 文件、内联 CSS、少量 JavaScript 和本地素材组成。

当前没有构建系统、包管理依赖或前端框架。除非用户明确要求，不要引入 React、Vue、Vite、Next.js、Tailwind、构建脚本或新的依赖体系。

## 修改原则

- 优先保持现有架构和视觉风格。
- 优先做小范围、低风险修改。
- 不做无关重构。
- 不随意格式化整份 HTML 文件。
- 不改动用户没有要求的案例、素材、文案或页面结构。
- 修改前先理解现有页面结构和已有写法。
- 如果用户只要求分析，不要修改任何文件。

## 常见维护入口

- 首页内容：`index.html`
- 作品列表：`work.html` 中的 `projectsData`
- 多语言文案：`lang.js`
- 关于和联系方式：`about.html`
- 课程页：`course.html`
- 案例详情页：`project-*.html`
- 新案例模板：`project-template.html`
- 图片素材：`images/`
- 品牌 Logo：`logos/`
- 视频素材：`videos/`

## 多语言规则

本项目通过 `lang.js` 和页面中的 `data-i18n` 实现多语言。

修改可见文案时必须检查：

- 页面中是否有 `data-i18n`
- `lang.js` 是否已有对应 key
- 英文和中文是否都需要同步修改

不要只改 HTML 中的默认文字，因为页面加载后可能会被 `lang.js` 覆盖。

新增多语言文案时：

1. 在 HTML 中添加稳定的 `data-i18n` key。
2. 在 `lang.js` 的 `en` 和 `zh` 中同时添加对应翻译。
3. 避免复用语义不一致的旧 key。

不要随意修改已有 key 名，例如：

- `nav_work`
- `nav_about`
- `nav_course`
- `nav_contact`
- `studio_p1`
- `about_hero_title`
- `work_title`

如果确实要改 key，必须同步更新所有引用。

## 作品列表维护规则

作品列表由 `work.html` 中的 `projectsData` 驱动。

新增或修改作品时，优先只改对应对象：

- `title`
- `category`
- `type`
- `image`
- `video`
- `link`

`type` 必须和 `categories` 中的 `id` 对应。当前常见值：

- `automotive`
- `tvc`
- `3c`

不要随意修改 `renderGallery`、`renderFilters`、`bindHoverEffects`、`bindScrollAnimations`，除非用户明确要求修复交互或重构作品页。

新增作品时必须检查：

- 封面图路径是否存在。
- 悬停视频路径是否存在。
- `link` 指向的案例页是否存在，或是否应该指向 `coming-soon.html`。
- 中英文标题和分类是否完整。
- 是否需要同步到首页精选作品区。

## 案例页维护规则

新增案例页时，优先复制 `project-template.html`，然后按现有案例页结构修改。

案例页核心结构不要随意破坏：

- `.project-hero`
- `.hero-text`
- `.project-meta`
- `.content-container`
- `.layout-module`
- `.grid-2`
- `.grid-3`
- `.text-module`
- `.text-media-grid`

内容模块可以按需要增删，但要保持已有类名和布局习惯。

添加图片或视频时，路径必须相对于项目根目录正确，例如：

```html
<img src="images/project-name/example.webp">
<video src="images/project-name/example.mp4" autoplay muted loop playsinline></video>
```

对作为展示动图使用的视频，通常保留：

```html
autoplay muted loop playsinline
```

对主视频或需要用户控制的视频，可以使用：

```html
controls muted loop
```

## 首页维护规则

`index.html` 包含首页 Hero、Studio 介绍、精选作品和客户 Logo 跑马灯。

修改首页精选作品时，检查：

- 图片路径存在。
- 视频路径存在。
- 首页展示是否和 `work.html` 的作品列表保持合理一致。

替换 Hero 视频时，优先将视频放入 `videos/`，再修改 `.hero-video` 的 `source src`。

不要随意修改首屏动画、遮罩、导航层级和滚动揭示逻辑。

## 关于页维护规则

`about.html` 管理团队、奖项、客户和联系方式。

修改联系方式时，必须检查：

- 导航栏 `mailto:`
- 关于页联系卡片
- 页脚联系方式
- 微信二维码 `images/wechat_qr.jpg`
- `lang.js` 中联系相关文案

修改客户 Logo 时，检查 `about.html` 的客户 Logo 墙，以及 `index.html` 的 Logo 跑马灯是否也要同步。

## 课程页维护规则

课程页结构在 `course.html`，文案主要在 `lang.js`。

修改课程标题、描述、按钮文字时，优先修改 `lang.js` 中：

- `course_title_1`
- `course_title_2`
- `course_sub`
- `c1_title`
- `c1_desc`
- `c1_link`
- `c2_title`
- `c2_desc`
- `c2_link`
- `c3_title`
- `c3_desc`
- `c3_link`

如果新增课程卡片，要同时考虑 HTML 结构和多语言 key。

## 素材规则

- 不要随意改名或移动已有素材。
- 如果必须改名或移动，必须同步更新所有引用路径。
- 新素材应放入清晰目录，例如 `images/new-project/`。
- 品牌 Logo 放入 `logos/`。
- 通用视频放入 `videos/`。
- 大视频可能影响加载速度，修改首页或作品页视频时要谨慎。

## 高风险区域

以下内容不要轻易改动：

- `CNAME`
- Google Analytics 脚本和统计 ID
- 语言切换逻辑
- `work.html` 的作品渲染逻辑
- 导航栏基础结构
- 页脚基础结构
- 移动端响应式 CSS
- 案例页布局类名
- 已被页面引用的素材路径

涉及这些区域时，除非用户明确要求，否则先说明风险并确认。

## 验证规则

完成修改后，根据修改范围检查：

- 相关 HTML 页面能打开。
- 图片和视频路径无明显错误。
- 作品卡片链接正确。
- 中英文切换正常。
- 手机尺寸下没有明显布局错位。
- 邮箱、二维码、社交链接正确。

如果项目没有构建和测试命令，不要假装运行了测试。应明确说明做了哪些人工或静态检查。

## 沟通规则

以下情况需要先向用户确认：

- 删除作品、案例页或素材。
- 大幅调整视觉风格。
- 修改域名、部署、统计代码。
- 引入新框架、新依赖或构建流程。
- 批量重构多个页面。
- 不确定某个素材是否仍在使用。

用户要求“只分析、不修改”时，必须严格只读。

