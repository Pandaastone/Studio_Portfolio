# Studio Portfolio 官网维护说明

这是一套静态工作室官网项目，主要由 HTML、CSS、少量 JavaScript 和本地图片 / 视频素材组成。当前项目没有复杂的构建流程，也没有依赖框架；大多数维护工作都可以通过修改对应的 `.html` 文件、`lang.js` 文案文件，以及 `images/`、`logos/`、`videos/` 中的素材完成。

## 项目结构

```text
.
├── index.html              # 首页
├── work.html               # 作品列表页
├── about.html              # 关于、团队、客户、联系方式页面
├── course.html             # 课程页
├── coming-soon.html        # 暂未上线案例的占位页
├── lang.js                 # 全站中英文切换文案
├── project-*.html          # 各个项目案例详情页
├── project-template.html   # 新增案例时可参考的模板
├── images/                 # 图片、案例素材、二维码、奖项图
├── logos/                  # 客户品牌 Logo
├── videos/                 # 通用视频素材
└── CNAME                   # 自定义域名配置
```

## 主要文件说明

- `index.html`：首页，包含首屏视频、工作室介绍、精选作品、客户 Logo 跑马灯。
- `work.html`：作品总览页。作品卡片数据主要在 `projectsData` 中维护，包括标题、分类、封面图、悬停视频和跳转链接。
- `about.html`：关于页，包含工作室介绍、奖项、核心成员、客户 Logo、联系方式和微信二维码。
- `course.html`：课程页，目前包含三个课程卡片。
- `coming-soon.html`：作品尚未完善时使用的占位页面。
- `lang.js`：统一管理中英文文案。页面中带有 `data-i18n` 的文字会从这里读取。
- `project-template.html`：案例页模板，新增项目案例时建议从它复制。
- `project-*.html`：具体项目案例页面，例如 CEMOY、Audi、Dove、BYD 等。
- `images/`：主要图片和项目素材目录。
- `logos/`：客户 Logo 目录。
- `videos/`：首页或作品卡片用的视频素材目录。
- `CNAME`：域名部署配置，不建议随便修改。

## 当前页面模块

首页包含：

- 固定导航栏
- 中英文切换
- Hero 首屏视频
- Studio 介绍文字
- 精选作品网格
- 查看全部作品按钮
- 客户 Logo 跑马灯

作品页包含：

- 页面标题
- 作品分类筛选
- 动态作品网格
- 作品卡片悬停播放视频
- 页脚

关于页包含：

- 工作室介绍
- 奖项展示
- 核心成员介绍
- 客户 Logo 墙
- 联系方式
- 微信二维码

课程页包含：

- 课程标题
- 课程说明
- 三个课程卡片
- 页脚

案例页通常包含：

- 顶部 Hero 图 / 视频
- 项目标题与类别
- Client / Role / Software 信息
- 项目描述
- 图片、视频、双列、三列、图文混排内容模块
- 页脚

## 常见维护任务

### 修改首页文案

首页 Studio 介绍等多语言文案主要在 `lang.js` 中维护：

- `studio_p1`
- `studio_p2`
- `studio_p3`
- `view_all`
- `clients_title`

如果页面文字带有 `data-i18n`，优先修改 `lang.js` 中对应的中英文内容。

### 修改作品列表

作品列表数据在 `work.html` 的 `projectsData` 中。

每个作品通常包含：

```js
{
    title: { en: "English Title", zh: "中文标题" },
    category: { en: "Category", zh: "分类" },
    type: "automotive",
    image: "images/example/cover.webp",
    video: "images/example/preview.mp4",
    link: "project-example.html"
}
```

`type` 要和 `categories` 中的分类 `id` 对应。当前主要分类包括：

- `automotive`
- `tvc`
- `3c`

### 新增案例页

推荐流程：

1. 在 `images/` 下新建清晰的项目素材文件夹，例如 `images/project-name/`。
2. 放入封面图、详情图、视频等素材。
3. 复制 `project-template.html`，命名为新的案例页，例如 `project-new-name.html`。
4. 修改新案例页中的 Hero、标题、项目类别、Client、Role、Software 和项目描述。
5. 在案例页的 `content-container` 中添加图片、视频和文字模块。
6. 到 `work.html` 的 `projectsData` 中新增作品数据。
7. 如果需要首页展示，再同步修改 `index.html` 的精选作品区。
8. 打开相关页面检查图片、视频和链接是否正常。

### 替换首页视频

首页首屏视频在 `index.html` 的 `.hero-video` 附近：

```html
<video class="hero-video" autoplay muted loop playsinline>
    <source src="videos/CEMOY.mp4" type="video/mp4">
</video>
```

替换时建议先把新视频放入 `videos/`，再修改 `src` 路径。

### 替换图片或视频素材

如果只是替换同一个素材，最稳妥的方式是保留原文件名，直接替换文件内容。

如果需要改文件名或移动位置，必须同步修改所有引用路径，否则页面会出现图片或视频加载失败。

### 更新联系方式

联系方式可能出现在多个位置：

- 导航栏的 `mailto:`
- `about.html` 的联系区
- 各页面页脚
- `lang.js` 中的联系文案
- `images/wechat_qr.jpg` 微信二维码

更新邮箱、社交媒体或二维码时，建议全站搜索旧内容，避免漏改。

### 更新客户 Logo

客户 Logo 文件放在 `logos/`。

首页 Logo 跑马灯在 `index.html`，关于页客户 Logo 墙在 `about.html`。新增或删除 Logo 时，两个页面可能都需要同步。

### 更新课程内容

课程卡片结构在 `course.html`，课程文案主要在 `lang.js`：

- `course_title_1`
- `course_title_2`
- `course_sub`
- `c1_title` / `c1_desc` / `c1_link`
- `c2_title` / `c2_desc` / `c2_link`
- `c3_title` / `c3_desc` / `c3_link`

## 多语言维护

多语言由 `lang.js` 控制。

页面里如果有这样的结构：

```html
<p data-i18n="studio_p1">Default text</p>
```

那么实际显示内容会从 `lang.js` 中的 `translations.en.studio_p1` 和 `translations.zh.studio_p1` 读取。

维护规则：

- 修改已有多语言文案时，优先改 `lang.js`。
- 新增 `data-i18n` key 时，要同时添加英文和中文。
- 不要随意改 key 名，比如 `nav_work`、`studio_p1`、`about_hero_title`，除非同步修改所有页面引用。
- 如果只改 HTML 默认文字，切换语言后可能会被 `lang.js` 覆盖。

## 素材命名建议

- 新项目素材建议单独建文件夹，例如 `images/cemoy/`、`images/byd06gt/`。
- 文件名尽量清晰，便于以后查找。
- 已经被页面引用的素材不要随便改名。
- 视频建议使用 `.mp4`、`.webm` 或 `.m4v`，图片建议使用 `.webp`、`.jpg`、`.png`。
- 首页和作品卡片的视频文件尽量控制体积，避免加载过慢。

## 不建议随便修改的内容

- `CNAME`：关系到网站域名。
- Google Analytics 代码：页面头部的统计脚本和 ID。
- `lang.js` 中已有 key 名。
- `work.html` 中的渲染函数，例如 `renderGallery`、`renderFilters`。
- 导航栏、页脚、语言切换器的基础结构。
- 案例页布局类名，例如 `project-hero`、`project-meta`、`content-container`、`layout-module`、`grid-2`、`grid-3`。
- 已经被页面引用的图片、视频、Logo 路径。
- 响应式 CSS，尤其是移动端相关规则。

## 发布前检查清单

每次更新后建议检查：

- 首页能正常打开。
- 作品页分类筛选正常。
- 新增或修改的作品卡片封面显示正常。
- 悬停视频能播放，或者没有明显报错。
- 案例详情页图片和视频显示正常。
- 所有跳转链接正确。
- 邮箱、二维码、社交链接正确。
- 中英文切换后文案正常。
- 手机屏幕下导航、作品网格和案例内容没有明显错位。

## 推荐维护方式

如果只是日常更新，建议按照这个顺序：

1. 明确要改的是文案、素材、案例、联系方式还是页面结构。
2. 先准备好新素材，并放到合适目录。
3. 只修改和本次任务相关的页面或数据。
4. 修改多语言内容时，同时维护中文和英文。
5. 更新后本地打开相关页面检查。
6. 确认无误后再发布或提交。

