// lang.js - 全局多语言控制脚本

const translations = {
    'en': {
        // 导航与页脚
        'nav_home': 'HOME', 'nav_work': 'WORK', 'nav_solutions': 'SOLUTIONS', 'nav_about': 'ABOUT', 'nav_course': 'COURSE', 'nav_contact': 'CONTACT',
        'footer_desc': 'Creative Design Studio.<br>Based in Shanghai, available Worldwide.',
        'footer_rights': '© 2026 Zachary Shee. All Rights Reserved.',
        'footer_sitemap': 'SITEMAP', 'footer_social': 'SOCIAL', 'footer_contact_title': 'CONTACT',
        
        // 首页 (Index)
        'studio_p1': 'We are a design studio driven by creative services, and we believe our visual expertise can create greater value for our clients. We are committed to providing high-quality solutions for clients with varying budget ranges. Our team consists of designers, animators, 3D artists, and VFX artists.',
        'studio_p2': 'Our services encompass various creative fields, including TV commercials, 3C digital products, mobile phones, and automotive visualization. We have also won numerous awards, including the MUSE Design Award, Vega Award, and NYX Award.',
        'studio_p3': 'We have served many well-known brands, such as Audi, XPeng Motors, BMW, BYD Auto, Yangwang Auto, Denza, Pigeon, Cemoy, Hisense, POP MART, and many others.',
        'view_all': 'VIEW ALL WORKS',
        'clients_title': 'CLIENTS & PARTNERS',

        'work_title': 'Selected Works',
        'work_subtitle': 'MOTION GRAPHICS / 3D ART / VISUALIZATION',

        // 解决方案页 (Solutions)
        'solutions_eyebrow': 'STUDIO SOLUTIONS',
        'solutions_title': 'INTERNAL<br>PRODUCTION TOOLS',
        'solutions_intro': 'A collection of internal software and workflow tools built around CGI production, render monitoring, automated compositing, and repeatable delivery.',
        'solutions_point_1': 'Mobile render monitoring',
        'solutions_point_2': 'Automated configurator compositing',
        'solutions_status_label': 'STATUS',
        'solutions_purpose_label': 'PURPOSE',
        'solutions_signals_label': 'SIGNALS',
        'solutions_field_label': 'FIELD',
        'solutions_why_label': 'WHY WE BUILD',
        'solutions_why_title': 'Tools make production more predictable.',
        'solutions_why_desc': 'These solutions are not separate from our visual work. They help us reduce repeated manual steps, keep render and delivery status visible, and make complex CGI projects easier to control.',
        'solutions_pipeline_title': 'Beyond execution.',
        'solutions_pipeline_desc': 'These tools are not separate from our visual work. They are part of how we think about production: cleaner handoffs, fewer blind spots, and more room for creative decisions.',
        'solutions_cta_title': 'Interested in our workflow or custom production tools?',
        'solutions_cta_link': 'CONTACT US',
        'solution_card_1_label': 'MOBILE APP',
        'solution_card_1_title': 'RenderSync',
        'solution_card_1_desc': 'A mobile app for checking render progress, device status, frame count, sync state, and production notifications anytime, anywhere.',
        'solution_card_2_label': 'AUTOMATION TOOL',
        'solution_card_2_title': 'AUTO<br>COMPOSITE<br>PIPELINE',
        'solution_card_2_desc': 'An internal compositing workflow for automotive configurator delivery: prepare rendered files and presets once, then generate output combinations automatically.',
        'solution_card_3_label': 'IN DEVELOPMENT',
        'solution_card_3_title': 'More Tools Coming Soon',
        'solution_card_3_desc': 'Review workflow helpers, asset/version management, AIGC production utilities, and other internal pipeline tools are being explored.',
        'solution_card_3_status': 'COMING SOON',
        'solution_card_link': 'VIEW TOOL',
        'solution_coming_1': 'Review Workflow',
        'solution_coming_2': 'Asset Versioning',
        'solution_coming_3': 'AIGC Utilities',
        'solution_back': 'BACK TO SOLUTIONS',
        'rs_eyebrow': 'MOBILE APP',
        'rs_title': 'RenderSync<br>MOBILE RENDER MONITORING',
        'rs_intro': 'A mobile app currently in testing, built to help us check render progress, device status, frame count, sync state, and production signals anytime, anywhere.',
        'rs_status': 'In Testing / Internal Use',
        'rs_purpose': 'Anytime mobile render tracking',
        'rs_signals': 'Progress / Devices / Frames / Sync',
        'rs_field': 'Mobile App / CGI Pipeline',
        'rs_watch_label': 'WHAT IT WATCHES',
        'rs_watch_title': 'Render progress, wherever you are.',
        'rs_watch_1': 'Check active render tasks from a phone',
        'rs_watch_2': 'View device online status and last sync signal',
        'rs_watch_3': 'Track completed frames, remaining frames, and frame time',
        'rs_watch_4': 'Receive render progress notifications and attention points',
        'rs_why_title': 'Render status should travel with the team.',
        'rs_why_desc': 'RenderSync grew out of a simple production need: when we are away from the workstation, we still need to know what is rendering, where it is running, how many frames are left, and whether the pipeline is still moving.',
        'rs_product_eyebrow': 'MOBILE RENDER MONITORING',
        'rs_product_title': 'Know every render from anywhere.',
        'rs_product_intro': 'RenderSync keeps render progress, device status, frame counts, and sync signals visible when the team is away from the workstation.',
        'rs_product_primary': 'Talk about workflow',
        'rs_product_live_status': 'Live render monitoring',
        'rs_product_connection': 'Real-time connected',
        'rs_product_progress_label': 'Rendering',
        'rs_product_current_task': 'Current task',
        'rs_product_job_name': 'Shot_03 / Camera',
        'rs_product_metric_1_label': 'Done',
        'rs_product_metric_2_label': 'Left',
        'rs_product_metric_3_label': 'Frame',
        'rs_product_frame_value': '6s',
        'rs_product_node_status': 'Device status',
        'rs_product_task_status': 'Render tasks',
        'rs_product_alert_title': 'Render still moving.',
        'rs_product_alert_copy': 'Last sync just now. No workstation check needed.',
        'rs_product_section_1_label': 'Built for production movement',
        'rs_product_section_1_title': 'Render status should follow the team, not the other way around.',
        'rs_product_section_1_copy': 'RenderSync is designed around the small moments where production slows down: leaving the desk, checking a device, waiting for a frame, or needing to know if a render still needs attention.',
        'rs_product_feature_1_title': 'Live task clarity',
        'rs_product_feature_1_copy': 'See what is rendering, which task is active, and whether the current job is still moving.',
        'rs_product_feature_2_title': 'Device awareness',
        'rs_product_feature_2_copy': 'Check device online status and sync signals so render issues are easier to notice early.',
        'rs_product_feature_3_title': 'Mobile confidence',
        'rs_product_feature_3_copy': 'Stay informed from a phone before stepping into review, travel, or another task.',
        'rs_product_section_2_label': 'What it changes',
        'rs_product_section_2_title': 'The essential signals, gathered in one mobile view.',
        'rs_product_signal_1': 'Current render task and task state',
        'rs_product_signal_2': 'Device online status and last sync time',
        'rs_product_signal_3': 'Completed frames, remaining frames, and frame time',
        'rs_product_signal_4': 'Progress notifications and attention points',
        'rs_product_value_title': 'Less checking. More confidence.',
        'rs_product_chip_live': 'Live',
        'rs_product_chip_frames': 'Frames',
        'rs_product_chip_alert': 'Alert',
        'rs_product_flow_label': 'Production loop',
        'rs_product_flow_title': 'One glance before leaving the desk.',
        'rs_product_step_1': 'Render devices keep sending progress, frame count, task state, and sync signals.',
        'rs_product_step_2': 'RenderSync turns production noise into a small set of readable mobile signals.',
        'rs_product_step_3': 'The team can leave the workstation and still know whether the render needs attention.',
        'rs_product_status_title': 'Built as a studio production layer.',
        'rs_product_cta_title': 'Render status, visible beyond the workstation.',
        'rs_product_cta_copy': 'RenderSync is currently an internal testing tool, built around the practical need to keep render status visible beyond the workstation.',
        'auto_eyebrow': 'AUTOMATION TOOL',
        'auto_title': 'AUTOCOMPOSITE<br>PIPELINE',
        'auto_intro': 'An internal compositing tool for automotive configurator projects. Once rendered files and presets are prepared, it can automatically generate configured image outputs in batches.',
        'auto_status': 'Internal Production Tool',
        'auto_purpose': 'Automated image compositing',
        'auto_inputs_label': 'INPUTS',
        'auto_inputs_value': 'Rendered files / Presets / Rules',
        'auto_field': 'Automotive Configurator CGI',
        'auto_visual_inputs': 'Preset Inputs',
        'auto_visual_output': 'Batch Output',
        'auto_visual_view_label': 'View',
        'auto_visual_view_value': 'Front / Rear / Detail',
        'auto_visual_variant_label': 'Variant',
        'auto_visual_variant_value': 'Color / Trim / State',
        'auto_visual_rule_label': 'Rule',
        'auto_visual_rule_value': 'Layer preset + output path',
        'auto_process_label': 'PROCESS',
        'auto_process_title': 'Prepare once. Composite many times.',
        'auto_process_1': 'Prepare rendered automotive layers, views, colors, trims, and output presets.',
        'auto_process_2': 'Load preset rules that define how each configuration should be assembled.',
        'auto_process_3': 'Automatically composite configured outputs instead of repeating manual layer operations.',
        'auto_process_4': 'Export image sets for website configurators, review, or production delivery.',
        'auto_why_title': 'Configurator delivery should not become repetitive hand work.',
        'auto_why_desc': 'Automotive configurator projects often require many similar outputs across colors, trims, camera views, and interior states. This tool is designed to turn prepared CGI assets into a controlled batch compositing workflow.',
        'auto_placeholder_eyebrow': 'AUTOCOMPOSITE PIPELINE',
        'auto_placeholder_title': 'TOOL PAGE<br>IN PREPARATION',
        'auto_placeholder_intro': 'We are currently preparing the public-facing page for this internal compositing pipeline. The tool is being developed around automotive configurator delivery, preset-based compositing, and repeatable batch output workflows.',
        'auto_placeholder_back': 'BACK TO SOLUTIONS',
        'auto_placeholder_contact': 'CONTACT US',
        'auto_placeholder_status_label': 'STATUS',
        'auto_placeholder_status_value': 'Preparing / In Development',
        'auto_placeholder_focus_label': 'FOCUS',
        'auto_placeholder_focus_value': 'Automated compositing for automotive configurator image sets',
        'auto_placeholder_next_label': 'NEXT',
        'auto_placeholder_next_value': 'Workflow visuals, clearer capability notes, and production examples are being prepared.',
        
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
        
        // NDA Work
        'gate_work_title': 'Confidential Works',
        'gate_work_subtitle': 'NDA PROTECTED / FOR REVIEW ONLY',
        'gate_work_desc': 'The following projects are protected by NDA and not publicly disclosed. Please do not share or distribute.<br>Accessing constitutes agreement to <span class="terms-link" onclick="openTermsModal(false)">these terms</span>.',
        'private_work_title': 'Confidential Works',
        'private_work_subtitle': 'Confidential case studies. Sharing or distribution is strictly prohibited.',
        'private_work_desc': '',
        'passcode_prompt': 'Enter Passcode to Access Confidential Works',
        'passcode_placeholder': 'Passcode...',
        'passcode_error': 'Incorrect passcode. Please try again.',
        'passcode_submit': 'SUBMIT',
        'terms_title': 'NDA & TERMS OF VIEWING',
        'terms_close': 'CLOSE',
        'terms_agree_enter': 'AGREE & ENTER',
        'terms_disagree': 'DISAGREE',
        'terms_content': `<div class="terms-legal">
    <p>These Terms of Viewing and Legal Liability Agreement ("Terms") are legally entered into by and between the viewer ("You") and <strong>Shanghai HaloPixel Digital Technology Co., Ltd.</strong> ("We", "Us", or "Our Company"). By entering the correct passcode, or accessing, viewing, or caching any content on this page on any device in any manner, you acknowledge that you have read, understood, and unconditionally agreed to be bound by all the covenants and legal liabilities set forth in these Terms. These Terms take effect immediately upon your entry into this page.</p>
    
    <h3>1. Scope of Confidential Information & Intellectual Property</h3>
    <p>1.1 All project cases, motion graphics, 3D art assets, CGI videos, commercials (TVC), internal pipeline tools, source code, and derivative creative concepts displayed on this page (collectively, "Confidential Information") are the exclusive intellectual property, copyrighted works, and trade secrets of Our Company or our respective brand clients.</p>
    <p>1.2 Your access to this page does not constitute any transfer, assignment, or licensing of any ownership, copyrights, distribution, reproduction, or adaptation rights. You are strictly prohibited from using any contents of this page for any commercial or non-commercial purposes.</p>
    
    <h3>2. Non-Disclosure & Use Restrictions</h3>
    <p>You hereby covenant and guarantee to strictly adhere to the following non-disclosure obligations:</p>
    <p>2.1 <strong>No Redistribution or Secondary Sharing</strong>: All Confidential Information and contents displayed herein are strictly and exclusively made available for your direct online browsing and viewing on this current page only, and shall not be used or extracted in any other manner; you shall not save, screenshot, screen record, download, photocopy, or clone any text, videos, images, or audio from this page. Secondary transmission via social media, cloud drives, messenger applications (such as WeChat, DingTalk, Discord), or any other media to any third party is strictly prohibited.</p>
    <p>2.2 <strong>No Public Exhibition</strong>: You are prohibited from showcasing, quoting, or referencing any Confidential Information from this page in your personal portfolio, corporate presentations, keynotes, public web pages, or any other platforms without our prior explicit written consent.</p>
    <p>2.3 <strong>Strict Access Limit</strong>: The contents are for your sole personal evaluation of our services. You shall keep the access passcode strictly confidential and shall not share, transfer, or disclose it to any third party.</p>
    
    <h3>3. Forensic Tracking & Forensic Authentication Notice</h3>
    <p>Please note that for the protection of our clients and our proprietary interests:</p>
    <p>3.1 We have embedded <strong>all feasible technical protection and tracing measures, including but not limited to</strong>, invisible digital watermarks (digital fingerprinting) and logging logs into all video streams, image assets, and server network routing. These carry identifiers <strong>including but not limited to</strong> your <strong>IP address, geographic location, access time, and terminal characteristics</strong>.</p>
    <p>3.2 Any screen-captures, recordings, or cloned files will permanently carry these tracers <strong>and other potential tracking tags</strong>. In the event of leakage, we will deploy digital forensic analysis <strong>and other technical tracing methods, including but not limited to forensic watermarking, source recovery, and log auditing</strong>, to trace the source of the leak, and such data logs <strong>and all relevant digital records</strong> will be submitted directly to judicial and public security authorities as conclusive electronic evidence.</p>
    
    <h3>4. Breach of Agreement & Legal Indemnification</h3>
    <p>In the event of any unauthorized disclosure, redistribution, secondary transmission, or breach of these Terms:</p>
    <p>4.1 <strong>Punitive Liquidated Damages</strong>: You shall pay Our Company a penalty of no less than <strong>RMB 1,000,000 (One Million Yuan)</strong> within 3 business days of receiving written notice from Us.</p>
    <p>4.2 <strong>Full Loss Recovery</strong>: If the liquidated damages fail to cover the full extent of financial losses, loss of business opportunities, or damages to reputation suffered by Us or our brand clients, you shall indemnify Us for the full extent of the difference, including all litigation fees, property preservation fees, notary and investigation costs, and reasonable attorney fees.</p>
    <p>4.3 <strong>Legal Remedies</strong>: We reserve the right, without prior notice, to apply for temporary injunctions, seize property, and initiate criminal proceedings under applicable laws (including but not limited to the theft of commercial trade secrets).</p>
</div>`,

        // Coming Soon
        'cs_status': 'Not available now',
        'cs_title': 'COMING<br>SOON',
        'cs_desc': 'We are currently crafting the visuals for this project.<br>Please check back later for the full case study.',
        'cs_back': 'Back to Work',

        // 404 Page
        '404_title': 'PAGE NOT FOUND',
        '404_desc': 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
        '404_back_home': 'BACK TO HOME',
        '404_view_works': 'EXPLORE WORKS'
    },
    'zh': {
        // 导航与页脚
        'nav_home': '首页', 'nav_work': '作品', 'nav_solutions': '解决方案', 'nav_about': '关于', 'nav_course': '课程', 'nav_contact': '联系',
        'footer_desc': '创意设计工作室。<br>立足上海，服务全球。',
        'footer_rights': '© 2026 Zachary Shee. 保留所有权利。',
        'footer_sitemap': '网站导航', 'footer_social': '社交媒体', 'footer_contact_title': '联系我们',
        
        // 首页 (Index)
        'studio_p1': '我们是一家以创意服务为驱动的设计工作室，致力于通过视觉专业知识为客户创造更大价值。我们为不同预算范围的客户提供高质量的解决方案。我们的团队由设计师、动画师、三维艺术家和特效师组成。',
        'studio_p2': '我们的服务涵盖多个创意领域，包括电视广告、3C数码产品、移动设备以及汽车视觉化。我们曾荣获多项国际大奖，包括 MUSE 设计奖、Vega 奖和 NYX 奖。',
        'studio_p3': '我们服务过众多知名品牌，如奥迪、小鹏汽车、宝马、比亚迪、仰望、腾势、贝亲、CEMOY澳诗茉、海信、泡泡玛特等。',
        'view_all': '查看更多作品',
        'clients_title': '客户与合作伙伴',

        'work_title': '精选作品',
        'work_subtitle': '三维动态设计 / 3D 艺术 / 可视化',

        // 解决方案页 (Solutions)
        'solutions_eyebrow': '工作室解决方案',
        'solutions_title': '内部<br>生产工具',
        'solutions_intro': '围绕 CGI 制作、渲染监测、自动化合成和可复用交付流程开发的内部软件与工作流工具。',
        'solutions_point_1': '移动端渲染监测',
        'solutions_point_2': '汽车配置器自动合成',
        'solutions_status_label': '状态',
        'solutions_purpose_label': '用途',
        'solutions_signals_label': '信号',
        'solutions_field_label': '领域',
        'solutions_why_label': '为什么开发工具',
        'solutions_why_title': '工具让制作流程更可控。',
        'solutions_why_desc': '这些解决方案并不独立于我们的视觉工作之外。它们帮助我们减少重复手工步骤，让渲染和交付状态更可见，也让复杂 CGI 项目更容易管理。',
        'solutions_pipeline_title': '不只是执行。',
        'solutions_pipeline_desc': '这些工具是我们理解制作流程的一部分：更清晰的交接、更少的盲区，以及更多留给创意判断的空间。',
        'solutions_cta_title': '对我们的制作流程或定制工具感兴趣？',
        'solutions_cta_link': '联系我们',
        'solution_card_1_label': '手机 App',
        'solution_card_1_title': 'RenderSync',
        'solution_card_1_desc': '一款用于随时随地查看渲染进度、设备状态、帧数、同步状态和制作通知的手机移动端 App。',
        'solution_card_2_label': '自动化工具',
        'solution_card_2_title': 'AUTO<br>COMPOSITE<br>PIPELINE',
        'solution_card_2_desc': '面向汽车配置器交付的内部合成流程：提前准备好渲染素材和预设后，自动生成不同配置组合的输出图。',
        'solution_card_3_label': '开发中',
        'solution_card_3_title': '更多工具敬请期待',
        'solution_card_3_desc': '审片流程辅助、资产与版本管理、AIGC 制作工具，以及更多内部流程工具正在探索中。',
        'solution_card_3_status': '敬请期待',
        'solution_card_link': '查看工具',
        'solution_coming_1': '审片流程',
        'solution_coming_2': '资产版本',
        'solution_coming_3': 'AIGC 工具',
        'solution_back': '返回解决方案',
        'rs_eyebrow': '手机 App',
        'rs_title': 'RenderSync<br>移动端渲染监测',
        'rs_intro': '一款正在测试中的手机移动端 App，用于随时随地查看渲染进度、设备状态、帧数、同步状态和制作信号。',
        'rs_status': '测试中 / 内部使用',
        'rs_purpose': '随时随地查看渲染进度',
        'rs_signals': '进度 / 设备 / 帧数 / 同步',
        'rs_field': '移动端 App / CGI 制作流程',
        'rs_watch_label': '监测内容',
        'rs_watch_title': '无论在哪里，都能看到渲染进度。',
        'rs_watch_1': '通过手机查看当前渲染任务',
        'rs_watch_2': '查看设备在线状态与最后同步信号',
        'rs_watch_3': '追踪已完成帧数、剩余帧数与单帧耗时',
        'rs_watch_4': '接收渲染进度和需关注事项的通知',
        'rs_why_title': '渲染状态应该跟着团队移动。',
        'rs_why_desc': 'RenderSync 来自一个很直接的制作需求：即使不在工作站旁边，也能知道什么任务正在渲染、在哪台设备运行、还剩多少帧，以及流程是否仍在推进。',
        'rs_product_eyebrow': '移动端渲染监测',
        'rs_product_title': '随时随地，知道每一次渲染进度。',
        'rs_product_intro': 'RenderSync 让团队在离开工作站后，依然可以掌握渲染进度、设备状态、帧数和同步信号。',
        'rs_product_primary': '聊聊工作流',
        'rs_product_live_status': '实时渲染监测',
        'rs_product_connection': '实时连接中',
        'rs_product_progress_label': '渲染中',
        'rs_product_current_task': '当前任务',
        'rs_product_job_name': 'Shot_03 / Camera',
        'rs_product_metric_1_label': '完成',
        'rs_product_metric_2_label': '剩余',
        'rs_product_metric_3_label': '单帧',
        'rs_product_frame_value': '6秒',
        'rs_product_node_status': '设备状态',
        'rs_product_task_status': '渲染任务',
        'rs_product_alert_title': '渲染仍在推进。',
        'rs_product_alert_copy': '刚刚同步，无需回到工作站确认。',
        'rs_product_section_1_label': '为移动中的制作而设计',
        'rs_product_section_1_title': '渲染状态应该跟着团队走，而不是反过来。',
        'rs_product_section_1_copy': 'RenderSync 关注的是制作中容易变慢的那些小瞬间：离开电脑、查看设备、等待帧数，或者只是想知道渲染是否还需要关注。',
        'rs_product_feature_1_title': '任务更清楚',
        'rs_product_feature_1_copy': '查看当前正在渲染的任务、任务状态，以及渲染是否仍在推进。',
        'rs_product_feature_2_title': '设备更可见',
        'rs_product_feature_2_copy': '查看设备在线状态和同步信号，让渲染问题更早被发现。',
        'rs_product_feature_3_title': '移动端安心感',
        'rs_product_feature_3_copy': '在进入审片、外出或切换到其他任务前，也能通过手机掌握状态。',
        'rs_product_section_2_label': '它改变什么',
        'rs_product_section_2_title': '关键制作信号，集中在一个移动端视图里。',
        'rs_product_signal_1': '当前渲染任务与任务状态',
        'rs_product_signal_2': '设备在线状态与最后同步时间',
        'rs_product_signal_3': '已完成帧数、剩余帧数与单帧耗时',
        'rs_product_signal_4': '渲染进度通知和需关注事项',
        'rs_product_value_title': '少一些反复确认，多一些确定感。',
        'rs_product_chip_live': '实时',
        'rs_product_chip_frames': '帧数',
        'rs_product_chip_alert': '提醒',
        'rs_product_flow_label': '制作循环',
        'rs_product_flow_title': '离开电脑前，看一眼就够。',
        'rs_product_step_1': '渲染设备持续发送进度、帧数、任务状态和同步信号。',
        'rs_product_step_2': 'RenderSync 将复杂制作信息整理成少量清晰的移动端信号。',
        'rs_product_step_3': '团队离开工作站后，依然能知道渲染是否需要关注。',
        'rs_product_status_title': '作为工作室制作流程的一层工具。',
        'rs_product_cta_title': '离开工作站，也能看见渲染状态。',
        'rs_product_cta_copy': 'RenderSync 目前是一款内部测试工具，围绕一个很实际的需求开发：让渲染状态不只停留在工作站旁边。',
        'auto_eyebrow': '自动化工具',
        'auto_title': '自动合成<br>流程系统',
        'auto_intro': '一款面向汽车配置器项目的内部合成工具。提前准备好已渲染素材和预设后，可以自动批量生成不同配置的输出图。',
        'auto_status': '内部生产工具',
        'auto_purpose': '自动化图像合成',
        'auto_inputs_label': '输入',
        'auto_inputs_value': '渲染文件 / 预设 / 规则',
        'auto_field': '汽车配置器 CGI',
        'auto_visual_inputs': '预设输入',
        'auto_visual_output': '批量输出',
        'auto_visual_view_label': '视角',
        'auto_visual_view_value': '前排 / 后排 / 细节',
        'auto_visual_variant_label': '变量',
        'auto_visual_variant_value': '颜色 / 内饰 / 状态',
        'auto_visual_rule_label': '规则',
        'auto_visual_rule_value': '图层预设 + 输出路径',
        'auto_process_label': '流程',
        'auto_process_title': '准备一次，批量合成。',
        'auto_process_1': '准备汽车渲染图层、视角、颜色、内饰和输出预设。',
        'auto_process_2': '载入预设规则，定义每一种配置应该如何组合。',
        'auto_process_3': '自动合成配置输出，减少重复的手动图层操作。',
        'auto_process_4': '导出可用于官网配置器、审片或交付的图片组。',
        'auto_why_title': '配置器交付不应该变成重复手工活。',
        'auto_why_desc': '汽车配置器项目通常需要大量相似输出，覆盖颜色、内饰、视角和状态组合。这个工具的目标是把准备好的 CGI 素材转化为可控的批量合成流程。',
        'auto_placeholder_eyebrow': 'AUTOCOMPOSITE PIPELINE',
        'auto_placeholder_title': '工具页面<br>正在准备',
        'auto_placeholder_intro': '我们正在准备这个内部合成流程的正式展示页面。这个工具围绕汽车配置器交付、基于预设的自动合成，以及可复用的批量输出流程开发。',
        'auto_placeholder_back': '返回解决方案',
        'auto_placeholder_contact': '联系我们',
        'auto_placeholder_status_label': '状态',
        'auto_placeholder_status_value': '准备中 / 开发中',
        'auto_placeholder_focus_label': '方向',
        'auto_placeholder_focus_value': '面向汽车配置器图片组的自动化合成',
        'auto_placeholder_next_label': '下一步',
        'auto_placeholder_next_value': '我们正在准备流程视觉、更清晰的能力说明，以及可用于展示的制作案例。',
        
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
        
        // NDA Work
        'gate_work_title': '未公开案例',
        'gate_work_subtitle': '受非披露协议保护 / 仅用于业务审阅',
        'gate_work_desc': '以下项目受保密协议（NDA）保护，非公开展示。请勿传播或分享。<br>进入代表您同意<span class="terms-link" onclick="openTermsModal(false)">此条款</span>。',
        'private_work_title': '未公开案例',
        'private_work_subtitle': '以下为非公开展示案例，请勿向第三方传播或分发。',
        'private_work_desc': '',
        'passcode_prompt': '请输入访问密码以查看未公开案例',
        'passcode_placeholder': '访问密码...',
        'passcode_error': '密码错误，请重新输入。',
        'passcode_submit': '确认提交',
        'terms_title': '非公开案例及机密信息阅览条款',
        'terms_close': '关闭',
        'terms_agree_enter': '同意并进入',
        'terms_disagree': '不同意',
        'terms_content': `<div class="terms-legal">
    <p>本阅览条款与法律责任约定（“本条款”）由阅览人（或“您”）与<strong>上海光晕像素数字科技有限公司</strong>（以下简称“我方”）共同缔结。您一旦通过输入正确密码进入本页面，或以任何方式、在任何设备上查阅、浏览、缓存本页面之任何内容，即视为您已完全阅读、理解、接受并同意遵守本条款之全部约束与法律责任。本条款自您输入密码并访问本页面之刻起即时生效。</p>
    
    <h3>一、 保密信息范围与所有权归属</h3>
    <p>1. 本页面所登载的全部项目案例、动态图形、3D 视觉美术资产、CGI 渲染视频、商业广告（TVC）物料、内部研发工具、代码或其衍生的创意概念（统称“保密信息”），其全部版权、专利权、商业秘密及其他形式的知识产权或合法权益，均无条件归属于我方或对应的品牌委托方所有。</p>
    <p>2. 您对保密信息的阅览行为不以任何方式构成这些资产所有权、复制权、改编权、发行权、信息网络传播权或任何形式商业使用权的转让或许可。您无权将本页面的内容用于任何商业或非商业目的。</p>
    
    <h3>二、 披露限制与保密义务</h3>
    <p>您在此无条件承诺并保证，将严格履行下述保密义务：</p>
    <p>1. <strong>禁止传播与二次分发</strong>：本页面所展示的保密信息及任何内容，有且仅限在当前网页内供您直接在线浏览查看，不得以任何其他方式使用或提取；严禁将本页面内的任何文字、视频、图像、音频等通过截屏、录屏、直接下载、拍照等手段进行保存，严禁通过社交媒体、网络云盘、即时通讯工具（如微信、钉钉、Discord 等）或者其他媒介向任何第三方发送、复制或二次传播。</p>
    <p>2. <strong>禁止公开展示</strong>：严禁在您的个人作品集、公司演示文稿（PPT）、行业演讲、公开网页或任何未经我方书面同意的场合展示、引用或提及本页面的保密信息。</p>
    <p>3. <strong>知悉范围限制</strong>：仅限您本人作为业务审阅或采购评估之用。您应对访问密码严格保密，禁止将密码告知、移交或共享给任何第三方。</p>
    
    <h3>三、 隐形追踪技术与取证声明</h3>
    <p>请知悉，为了保护品牌委托方及我方的核心权益：</p>
    <p>1. 我方已在本页面的所有视频流、图片资产及网页访问链路中，全时段植入了<strong>包括但不限于</strong>包含访问者 <strong>IP 地址、地理位置、访问时间、唯一终端识别码</strong>等数字指纹的隐形电子水印（Digital Watermarking）与行为日志审计技术等<strong>一切可行之技术防护与追踪手段</strong>。</p>
    <p>2. 任何截图、录屏或直接保存的文件均会永久携带上述电子水印及<strong>其他潜在之追踪标识</strong>。一经发现外泄，我方将通过<strong>包括但不限于数字取证、水印项目回溯、日志审计在内的一切技术追踪与取证手段</strong>精准回溯并定位泄露源头，并将相应的数字指纹、访问审计日志<strong>及一切相关电子数据证据</strong>作为直接且不可推翻的电子数据证据，提交给司法机关及公安部门。</p>
    
    <h3>四、 违约救济与严厉索赔条款</h3>
    <p>一旦发生保密信息泄露、未经授权传播、二次分发或其他任何违反本条款的行为：</p>
    <p>1. <strong>惩罚性赔偿</strong>：您必须在收到我方书面通知后 3 个工作日内，向我方支付<strong>不低于人民币 1,000,000 元（大写：壹佰万元整）</strong>的惩罚性损害违约金。</p>
    <p>2. <strong>损失足额赔偿责任</strong>：若上述违约金不足以弥补因泄露导致我方或对应的品牌委托方所遭受的直接经济损失、预期利益损失、因品牌方违约起诉引发的商业损失或商誉商誉减损，您应全额赔偿全部差额损失，且赔偿范围包括我方为此支出的所有诉讼费、保全费、合理的公证调查费、评估取证费及律师诉讼代理费等。</p>
    <p>3. <strong>法律追索手段</strong>：我方有权在未经进一步通知的情况下，立即向有管辖权的人民法院申请临时禁令、财产保全，并保留依法追究您刑事责任（如侵犯商业秘密罪等）的权利。</p>
</div>`,

        // Coming Soon
        'cs_status': '当前暂不可用',
        'cs_title': '敬请<br>期待',
        'cs_desc': '我们正在为该项目精心打磨视觉效果。<br>请稍后回来查看完整的案例解析。',
        'cs_back': '返回作品页',

        // 404 Page
        '404_title': '页面未找到',
        '404_desc': '您访问的页面可能已被移动、删除或暂时无法访问。',
        '404_back_home': '返回首页',
        '404_view_works': '浏览作品'
    }
};

// 核心切换逻辑
function applyLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    
    // 替换所有带有 data-i18n 属性的文本
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key]; // 使用 innerHTML 支持 <br> 换行
        }
    });

    // 切换按钮高亮状态 (桌面端与移动端抽屉)
    const btnEn = document.getElementById('lang-en');
    const btnZh = document.getElementById('lang-zh');
    if(btnEn && btnZh) {
        btnEn.className = (lang === 'en' ? 'active' : '');
        btnZh.className = (lang === 'zh' ? 'active' : '');
    }
    const btnEnMob = document.getElementById('lang-en-mob');
    const btnZhMob = document.getElementById('lang-zh-mob');
    if(btnEnMob && btnZhMob) {
        btnEnMob.className = (lang === 'en' ? 'active' : '');
        btnZhMob.className = (lang === 'zh' ? 'active' : '');
    }
    
    // 给 html 标签加上 lang 属性，有助于 SEO
    document.documentElement.lang = (lang === 'zh' ? 'zh-CN' : 'en');
}

// 暴露给按钮的点击事件
window.toggleLanguage = function(lang) {
    applyLanguage(lang);
    // 如果当前页面有动态渲染函数 (如 work.html)，重新触发渲染
    if(typeof renderFilters === 'function') {
        renderFilters();
    }
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
