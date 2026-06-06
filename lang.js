// lang.js - 全局多语言控制脚本

const translations = {
    'en': {
        // 导航与页脚
        'nav_home': 'HOME', 'nav_work': 'WORK', 'nav_about': 'ABOUT', 'nav_course': 'COURSE', 'nav_contact': 'CONTACT',
        'footer_desc': 'Creative Design Studio.<br>Based in Shanghai, available Worldwide.',
        'footer_rights': '© 2024 Zachary Shee. All Rights Reserved.',
        'footer_sitemap': 'SITEMAP', 'footer_social': 'SOCIAL', 'footer_contact_title': 'CONTACT',
        
        // 首页 (Index)
        'studio_p1': 'We are a design studio driven by creative services, and we believe our visual expertise can create greater value for our clients. We are committed to providing high-quality solutions for clients with varying budget ranges. Our team consists of designers, animators, 3D artists, and VFX artists.',
        'studio_p2': 'Our services encompass various creative fields, including TV commercials, 3C digital products, mobile phones, and automotive visualization. We have also won numerous awards, including the MUSE Design Award, Vega Award, and NYX Award.',
        'studio_p3': 'We have served many well-known brands, such as Audi, XPeng Motors, BMW, BYD Auto, Yangwang Auto, Denza, Pigeon, Cemoy, Hisense, POP MART, and many others.',
        'view_all': 'VIEW ALL WORKS',
        'clients_title': 'CLIENTS & PARTNERS',

        'work_title': 'Selected Works',
        'work_subtitle': 'MOTION GRAPHICS / 3D ART / VISUALIZATION',
        
        // 关于页 (About)
        'about_hero_title': 'A COLLECTIVE OF<br>CREATIVE MINDS',
        'about_hero_desc': 'We are a team of independent artists active on the frontline of the industry. We provide creative services and technical support in digital imaging, spanning product advertising, motion graphics, 3D design, visualization, and creative rendering.',
        'about_team_title': 'Core Members',
        'about_tagline': 'Sculpting light between motion and stillness.',
        'bio_z_p1': 'My world exists between dimensions—where light and shadow are sculpted, and rhythm breathes in the spaces between frames. My tools are not just keys and pixels, but intuition and algorithm.',
        'bio_z_p2': 'Moving between the virtual and the real, I choose not only software—but dimensions. Each platform is more than a tool; it is a tangible dream. And every time I bridge different applications, I stretch the horizon of imagination a little further.',
        'bio_z_p3': 'CG space is both my canvas and my stage—where I choreograph light, direct motion, and give static ideas a narrative soul.',
        'bio_z_p4': 'Into the pulse of every brand I touch, I pour more than visuals—I weave flowing stories and emotional resonance. Commerce is not a constraint, but another form of creative terrain.',
        'bio_z_p5': 'The experience built through projects is what makes me not only understand people, but also dare to dream bolder. I believe design lives beyond the screen, and technology knows no bounds.',
        'bio_z_p6': 'Staying ahead is instinct; staying open is attitude.',
        'bio_z_p7': 'If you, too, believe that visuals can speak, motion can breathe, and technology can hold warmth—then I look forward to meeting you in the next project, where we’ll compose poetry out of pixels.',
        'guowei_title': 'Partner / VFX Artist / Modeler',
        'bio_g_p1': 'He is a combination of special effects artist and modeler. Capable of mastering various needs and challenges.',
        'bio_g_p2': 'With a deep understanding of structural complexity and visual impact, GuoWei brings technical precision to artistic vision.',
        'bio_g_p3': 'From hyper-realistic product details to abstract motion arts, he ensures that every explosion, liquid simulation, and mechanical movement follows the laws of nature while serving the narrative.',
        'clients_sel': 'Selected Clients',
        'contact_title': 'LET\'S CREATE<br>TOGETHER.',
        'contact_desc': 'Ready to start a project? Or just want to say hi? <br>We are always open to new ideas and collaborations.',
        'qr_text': 'Scan to add me on WeChat.',
        
        // 联系页 (Contact)
        'contact_page_eyebrow': 'CONTACT / CONNECT',
        'contact_page_title': 'LET\'S CREATE<br>OR JUST SAY HI.',
        'contact_page_intro': 'For commercial CGI, product visualization, TVC, automotive visuals, AIGC experiments, technical exchange, course questions, or simply connecting before the next project.',
        'contact_page_email_cta': 'EMAIL US',
        'contact_page_work_cta': 'VIEW WORK',
        'contact_page_email_label': 'EMAIL',
        'contact_page_email_note': 'Best for briefs, schedules, and production details.',
        'contact_page_discord_label': 'DISCORD',
        'contact_page_discord_note': 'For overseas clients, peers, and lighter technical conversations.',
        'contact_page_services_label': 'SERVICES',
        'contact_page_service_1': 'Automotive CGI / 360 Visualization',
        'contact_page_service_2': 'Product Visualization / 3C Product Visuals',
        'contact_page_service_3': 'TVC / Commercial CGI / 3D Motion Graphics',
        'contact_page_service_4': 'AIGC Visual Development / Creative Rendering',
        'contact_page_brief_label': 'PROJECT BRIEF',
        'contact_page_brief_1': 'Brand / company name and project type',
        'contact_page_brief_2': 'Timeline, deliverables, and target platform',
        'contact_page_brief_3': 'Reference style, existing brief, or NDA requirements',
        'contact_page_brief_4': 'Budget range, if convenient',
        'contact_page_wechat_note': 'Scan to connect on WeChat for quick project conversations.',
        'contact_page_footer_desc': 'Creative Design Studio.<br>Open to collaborations worldwide.',
        
        // 课程页 (Course)
        'course_title_1': 'LEARN', 'course_title_2': 'FROM STUDIO',
        'course_sub': 'Master the techniques of high-end product visualization, 3D motion graphics, and art direction with our curated courses.',
        'c1_title': 'Product Lighting', 'c1_desc': 'Master the art of studio lighting for 3C products using Cinema 4D and Redshift.', 'c1_link': 'Coming Soon',
        'c2_title': 'Automotive CGI', 'c2_desc': 'A complete workflow for automotive rendering, from data prep to final compositing.', 'c2_link': 'View Details',
        'c3_title': 'Motion Systems', 'c3_desc': 'Create complex motion systems and simulations for commercial projects.', 'c3_link': 'View Details',
        
        // Coming Soon
        'cs_status': 'Not available now',
        'cs_title': 'COMING<br>SOON',
        'cs_desc': 'We are currently crafting the visuals for this project.<br>Please check back later for the full case study.',
        'cs_back': 'Back to Work'
    },
    'zh': {
        // 导航与页脚
        'nav_home': '首页', 'nav_work': '作品', 'nav_about': '关于', 'nav_course': '课程', 'nav_contact': '联系',
        'footer_desc': '创意设计工作室。<br>立足上海，服务全球。',
        'footer_rights': '© 2024 Zachary Shee. 保留所有权利。',
        'footer_sitemap': '网站导航', 'footer_social': '社交媒体', 'footer_contact_title': '联系我们',
        
        // 首页 (Index)
        'studio_p1': '我们是一家以创意服务为驱动的设计工作室，致力于通过视觉专业知识为客户创造更大价值。我们为不同预算范围的客户提供高质量的解决方案。我们的团队由设计师、动画师、三维艺术家和特效师组成。',
        'studio_p2': '我们的服务涵盖多个创意领域，包括电视广告、3C数码产品、移动设备以及汽车视觉化。我们曾荣获多项国际大奖，包括 MUSE 设计奖、Vega 奖和 NYX 奖。',
        'studio_p3': '我们服务过众多知名品牌，如奥迪、小鹏汽车、宝马、比亚迪、仰望、腾势、贝亲、CEMOY澳诗茉、海信、泡泡玛特等。',
        'view_all': '查看更多作品',
        'clients_title': '客户与合作伙伴',

        'work_title': '精选作品',
        'work_subtitle': '三维动态设计 / 3D 艺术 / 可视化',
        
        // 关于页 (About)
        'about_hero_title': '凝聚创意的大脑',
        'about_hero_desc': '我们是一支活跃在行业一线的独立艺术家团队。提供数字影像的创意服务与技术支持，涵盖产品广告、动态图形、三维设计、视觉化呈现及创意渲染。',
        'about_team_title': '核心成员',
        'about_tagline': '在动静之间雕刻光影。',
        'bio_z_p1': '我的世界存在于维度之间——在那里，光影被雕塑，节奏在帧与帧的间隙中呼吸。我的工具不仅是键盘和像素，更是直觉与算法。',
        'bio_z_p2': '游走于虚拟与现实之间，我选择的不仅是软件，更是维度。每一个平台都不只是工具，而是触手可及的梦境。每当我跨越不同的软件，我就将想象的边界拉得更远。',
        'bio_z_p3': 'CG空间既是我的画布也是我的舞台——在这里，我编排光影、导演运动，赋予静态的想法以叙事的灵魂。',
        'bio_z_p4': '在我接触的每一个品牌的脉搏中，我注入的不仅仅是视觉——我编织着流动的故事和情感的共鸣。商业并非束缚，而是另一种形式的创作疆域。',
        'bio_z_p5': '通过项目积累的经验，使我不仅更懂人心，也敢于做更大胆的梦。我相信设计存在于屏幕之外，而技术没有边界。',
        'bio_z_p6': '保持领先是本能；保持开放是态度。',
        'bio_z_p7': '如果你也相信视觉可以说话，运动可以呼吸，技术可以拥有温度——那么，我期待在下一个项目中与你相遇，让我们用像素谱写诗篇。',
        'guowei_title': '合伙人 / 特效师 / 模型师',
        'bio_g_p1': '他是特效师与模型师的结合体，能够驾驭各种苛刻的需求与挑战。',
        'bio_g_p2': '凭借对结构复杂性和视觉冲击力的深刻理解，国伟将极致的技术精度注入到艺术愿景中。',
        'bio_g_p3': '从超写实的产品细节到抽象的动态艺术，他确保每一次爆炸、流体模拟和机械运动在服务于叙事的同时，完美遵循自然法则。',
        'clients_sel': '精选客户',
        'contact_title': '让我们<br>一起创造。',
        'contact_desc': '准备好开始一个项目了吗？或者只是想打个招呼？<br>我们随时欢迎新的想法和合作。',
        'qr_text': '扫码添加我的微信。',
        
        // 联系页 (Contact)
        'contact_page_eyebrow': '联系 / 建联',
        'contact_page_title': '一起创造，<br>或者先打个招呼。',
        'contact_page_intro': '无论是商业 CGI、产品可视化、TVC、汽车视觉、AIGC 探索、技术交流、课程相关问题，还是只是想先认识一下，都欢迎联系。',
        'contact_page_email_cta': '发送邮件',
        'contact_page_work_cta': '查看作品',
        'contact_page_email_label': '邮箱',
        'contact_page_email_note': '适合发送项目 brief、周期安排和制作细节。',
        'contact_page_discord_label': 'Discord',
        'contact_page_discord_note': '适合海外客户、同行交流和轻量技术沟通。',
        'contact_page_services_label': '服务方向',
        'contact_page_service_1': '汽车 CGI / 360 可视化',
        'contact_page_service_2': '产品可视化 / 3C 数码视觉',
        'contact_page_service_3': 'TVC / 商业 CGI / 三维动态设计',
        'contact_page_service_4': 'AIGC 视觉开发 / 创意渲染',
        'contact_page_brief_label': '项目 brief 建议',
        'contact_page_brief_1': '品牌 / 公司名称与项目类型',
        'contact_page_brief_2': '时间周期、交付内容与投放平台',
        'contact_page_brief_3': '参考风格、已有 brief 或 NDA 需求',
        'contact_page_brief_4': '预算范围，如方便提供',
        'contact_page_wechat_note': '扫码添加微信，适合快速沟通项目想法。',
        'contact_page_footer_desc': '创意设计工作室。<br>开放全球范围内的合作。',

        // 课程页 (Course)
        'course_title_1': '向工作室', 'course_title_2': '学习',
        'course_sub': '通过我们精心策划的课程，掌握高端产品视觉化、三维动态图形及艺术指导的核心技巧。',
        'c1_title': '产品布光艺术', 'c1_desc': '掌握使用 Cinema 4D 和 Redshift 为 3C 产品进行影棚布光的核心技巧。', 'c1_link': '敬请期待',
        'c2_title': '汽车 CGI 全流程', 'c2_desc': '从数据准备、材质灯光到最终合成的完整汽车渲染商业工作流。', 'c2_link': '查看详情',
        'c3_title': '动态与物理系统', 'c3_desc': '为商业项目创建复杂的动态镜头设计、粒子与物理模拟。', 'c3_link': '查看详情',
        
        // Coming Soon
        'cs_status': '当前暂不可用',
        'cs_title': '敬请<br>期待',
        'cs_desc': '我们正在为该项目精心打磨视觉效果。<br>请稍后回来查看完整的案例解析。',
        'cs_back': '返回作品页'
    }
};

// 核心切换逻辑
function applyLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    
    // 替换所有带有 data-i18n 属性的文本
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key]; // 使用 innerHTML 支持 <br> 换行
        }
    });

    // 切换按钮高亮状态
    const btnEn = document.getElementById('lang-en');
    const btnZh = document.getElementById('lang-zh');
    if(btnEn && btnZh) {
        btnEn.className = (lang === 'en' ? 'active' : '');
        btnZh.className = (lang === 'zh' ? 'active' : '');
    }
    
    // 给 html 标签加上 lang 属性，有助于 SEO
    document.documentElement.lang = (lang === 'zh' ? 'zh-CN' : 'en');
}

// 暴露给按钮的点击事件
window.toggleLanguage = function(lang) {
    applyLanguage(lang);
    // 如果当前页面有动态渲染函数 (如 work.html)，重新触发渲染
    if(typeof renderGallery === 'function' && typeof currentFilterType !== 'undefined') {
        renderGallery(currentFilterType); 
    }
};

// 页面加载自动执行
window.addEventListener('DOMContentLoaded', () => {
    let savedLang = localStorage.getItem('preferredLang');
    
    if (!savedLang) {
        // 自动识别系统语言
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.includes('zh') || browserLang.includes('cn') || browserLang.includes('tw') || browserLang.includes('hk')) {
            savedLang = 'zh';
        } else {
            savedLang = 'en';
        }
    }
    applyLanguage(savedLang);
});
