(function () {
    "use strict";

    const storageKey = "zsCasePublisherDraft";
    const categories = {
        automotive: { en: "Automotive / CGI", zh: "汽车 / CGI" },
        tvc: { en: "TVC / Product CGI", zh: "广告 / 产品 CGI" },
        "3c": { en: "3C / Product Visualization", zh: "3C数码 / 产品可视化" }
    };

    const els = {
        preview: document.getElementById("project-preview"),
        previewFrame: document.getElementById("preview-frame"),
        canvasTitle: document.getElementById("canvas-title"),
        blockCount: document.getElementById("block-count"),
        assetCount: document.getElementById("asset-count"),
        assetInput: document.getElementById("asset-input"),
        coverFile: document.getElementById("cover-file"),
        assetTray: document.getElementById("asset-tray"),
        structureList: document.getElementById("structure-list"),
        inspector: document.getElementById("block-inspector"),
        caseOutput: document.getElementById("case-html-output"),
        workOutput: document.getElementById("work-item-output"),
        exportFilename: document.getElementById("export-filename"),
        statusLine: document.getElementById("status-line")
    };

    const state = {
        project: createDefaultProject(),
        selectedBlockId: null,
        assets: [],
        dragBlockId: null,
        formReady: false
    };

    function uid() {
        return `b_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
    }

    function slugify(value) {
        return String(value || "")
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "") || "new-case";
    }

    function escapeHtml(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function escapeJsString(value) {
        return String(value ?? "")
            .replace(/\\/g, "\\\\")
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/"/g, '\\"');
    }

    function slugBase() {
        return slugify(String(state.project.slug || state.project.title).replace(/\.html$/i, ""));
    }

    function attr(value) {
        return escapeHtml(value);
    }

    function indent(value, spaces) {
        const pad = " ".repeat(spaces);
        return String(value).split("\n").map(line => line ? pad + line : line).join("\n");
    }

    function numberOr(value, fallback) {
        const number = Number(value);
        return Number.isFinite(number) ? number : fallback;
    }

    function joinPath(folder, filename) {
        const cleanFolder = String(folder || "").replace(/\/+$/g, "");
        const cleanFile = String(filename || "").replace(/^\/+/g, "");
        return cleanFolder ? `${cleanFolder}/${cleanFile}` : cleanFile;
    }

    function createMedia(kind, src, alt) {
        return {
            kind: kind || "image",
            src: src || "",
            previewSrc: "",
            alt: alt || "",
            ratio: "auto",
            controls: kind === "video",
            autoplay: kind === "video" ? false : false
        };
    }

    function createDefaultProject() {
        return {
            title: "New Studio Case",
            subtitle: "TVC CGI / Product Visualization",
            slug: "project-new-studio-case",
            assetFolder: "images/new-studio-case",
            client: "Client Name",
            role: "Creative Direction / CGI / 3D",
            software: "Cinema 4D / Redshift / After Effects",
            year: "2026",
            description: "A concise case description for the project. Use this area to explain the visual goal, production approach, and final deliverables.",
            tags: "CGI, 3D, Motion, Product",
            type: "tvc",
            categoryEn: "TVC / Product CGI",
            categoryZh: "广告 / 产品 CGI",
            visibility: "private",
            contentWidth: 1800,
            moduleGap: 20,
            heroHeight: 85,
            cover: createMedia("image", "images/CEMOY_logo.jpg", "New Studio Case cover"),
            blocks: [
                {
                    id: uid(),
                    type: "media",
                    label: "Hero Film",
                    items: [createMedia("video", "videos/CEMOY.mp4", "Project film")]
                },
                {
                    id: uid(),
                    type: "grid",
                    label: "Key Frames",
                    columns: "feature",
                    items: [
                        createMedia("image", "images/cemoy/CEMOY4.webp", "Key frame 01"),
                        createMedia("image", "images/cemoy/CEMOY10.webp", "Key frame 02"),
                        createMedia("image", "images/cemoy/CEMOY12.webp", "Key frame 03")
                    ]
                },
                {
                    id: uid(),
                    type: "text",
                    label: "Breakdown",
                    heading: "BREAKDOWN",
                    body: "A short narrative block for process notes, creative decisions, lighting tests, animation breakdowns, or final delivery context.",
                    align: "center"
                },
                {
                    id: uid(),
                    type: "textMedia",
                    label: "Detail Analysis",
                    heading: "Detail Analysis",
                    body: "Use this module for a focused visual and a compact explanation beside it.",
                    reverse: false,
                    media: createMedia("image", "images/byd-sealev.png", "Detail analysis")
                }
            ]
        };
    }

    function cleanProjectForStorage(project) {
        return JSON.parse(JSON.stringify(project, (key, value) => {
            if (key === "previewSrc") return "";
            return value;
        }));
    }

    function migrateProject(project) {
        const next = Object.assign(createDefaultProject(), project || {});
        next.cover = Object.assign(createMedia("image"), next.cover || {});
        next.blocks = Array.isArray(next.blocks) ? next.blocks.map(block => {
            const migrated = Object.assign({ id: uid(), label: "", type: "media" }, block);
            if (!migrated.id) migrated.id = uid();
            if (Array.isArray(migrated.items)) {
                migrated.items = migrated.items.map(item => Object.assign(createMedia(item.kind), item));
            }
            if (migrated.media) migrated.media = Object.assign(createMedia(migrated.media.kind), migrated.media);
            return migrated;
        }) : [];
        return next;
    }

    function selectedBlock() {
        return state.project.blocks.find(block => block.id === state.selectedBlockId) || null;
    }

    function getProjectField(field) {
        if (field === "coverKind") return state.project.cover.kind;
        if (field === "coverSrc") return state.project.cover.src;
        return state.project[field] ?? "";
    }

    function setProjectField(field, value) {
        if (field === "coverKind") {
            state.project.cover.kind = value;
            state.project.cover.controls = false;
            state.project.cover.autoplay = value === "video";
            return;
        }

        if (field === "coverSrc") {
            state.project.cover.src = value;
            state.project.cover.previewSrc = "";
            return;
        }

        if (field === "type" && categories[value]) {
            state.project.type = value;
            state.project.categoryEn = categories[value].en;
            state.project.categoryZh = categories[value].zh;
            fillProjectForm();
            return;
        }

        if (["contentWidth", "moduleGap", "heroHeight"].includes(field)) {
            state.project[field] = numberOr(value, state.project[field]);
            return;
        }

        state.project[field] = value;
    }

    function fillProjectForm() {
        document.querySelectorAll("[data-project-field]").forEach(input => {
            const value = getProjectField(input.dataset.projectField);
            input.value = value;
        });
    }

    function coverMarkup(forExport) {
        return renderMedia(state.project.cover, { forExport, hero: true });
    }

    function ratioValue(media) {
        const preset = String(media.ratio || "auto");
        if (preset === "16:9") return 16 / 9;
        if (preset === "9:16") return 9 / 16;
        if (preset === "4:3") return 4 / 3;
        if (preset === "4:5") return 4 / 5;
        if (preset === "1:1") return 1;

        const numeric = Number(preset);
        return Number.isFinite(numeric) && numeric > 0 ? numeric : 1;
    }

    function mosaicItem(media, index, config) {
        const hint = media.ratio || "auto";
        const ratio = ratioValue(media);
        return `
            <figure class="mosaic-item mosaic-item-${index + 1}" data-ratio="${attr(hint)}" style="--media-ratio:${ratio.toFixed(4)}">
                ${renderMedia(media, config)}
            </figure>
        `.trim();
    }

    function renderMedia(media, options) {
        const config = Object.assign({ forExport: false, hero: false }, options || {});
        const source = config.forExport ? media.src : (media.previewSrc || media.src);
        const altText = media.alt || state.project.title || "Project media";

        if (!source) {
            return config.forExport ? "" : `<div class="media-placeholder">Missing media path</div>`;
        }

        if (media.kind === "video") {
            const videoAttrs = [];
            if (media.controls && !config.hero) videoAttrs.push("controls");
            if (media.autoplay || !media.controls || config.hero) videoAttrs.push("autoplay", "muted", "loop", "playsinline");
            if (!videoAttrs.includes("muted")) videoAttrs.push("muted");
            if (!videoAttrs.includes("loop")) videoAttrs.push("loop");
            return `<video src="${attr(source)}" ${videoAttrs.join(" ")}></video>`;
        }

        return `<img src="${attr(source)}" alt="${attr(altText)}">`;
    }

    function moduleToolbar(block) {
        return `
            <div class="module-toolbar" aria-label="Module actions">
                <button class="module-action" type="button" data-module-action="up" data-id="${attr(block.id)}">Up</button>
                <button class="module-action" type="button" data-module-action="down" data-id="${attr(block.id)}">Down</button>
                <button class="module-action" type="button" data-module-action="duplicate" data-id="${attr(block.id)}">Copy</button>
                <button class="module-action danger" type="button" data-module-action="delete" data-id="${attr(block.id)}">Delete</button>
            </div>
        `;
    }

    function renderBlock(block, options) {
        const config = Object.assign({ forExport: false }, options || {});
        const toolbar = config.forExport ? "" : moduleToolbar(block);
        const selected = !config.forExport && block.id === state.selectedBlockId ? " selected" : "";
        const draggable = config.forExport ? "" : ` draggable="true" data-block-id="${attr(block.id)}"`;

        if (block.type === "media" || block.type === "video") {
            const media = block.items?.[0] || createMedia(block.type === "video" ? "video" : "image");
            return `<div class="layout-module${selected}"${draggable}>${toolbar}${renderMedia(media, config)}</div>`;
        }

        if (block.type === "grid") {
            const gridClass = block.columns === "2"
                ? "grid-2"
                : block.columns === "1-2"
                    ? "grid-1-2"
                    : block.columns === "feature"
                        ? "grid-feature"
                        : block.columns === "justified"
                            ? "grid-justified"
                            : "grid-3";
            const useMosaicItems = block.columns === "feature" || block.columns === "justified";
            const mediaItems = (block.items || [])
                .map((item, index) => useMosaicItems ? mosaicItem(item, index, config) : renderMedia(item, config))
                .join("\n");
            return `<div class="layout-module ${gridClass}${selected}"${draggable}>${toolbar}${mediaItems}</div>`;
        }

        if (block.type === "text") {
            const alignClass = block.align === "left" ? " align-left" : "";
            return `
                <div class="layout-module text-module${alignClass}${selected}"${draggable}>
                    ${toolbar}
                    <h3>${escapeHtml(block.heading || "Section Title")}</h3>
                    <p>${escapeHtml(block.body || "")}</p>
                </div>
            `.trim();
        }

        if (block.type === "textMedia") {
            const reverseClass = block.reverse ? " reverse" : "";
            return `
                <div class="layout-module text-media-grid${reverseClass}${selected}"${draggable}>
                    ${toolbar}
                    <div class="tm-media">${renderMedia(block.media || createMedia("image"), config)}</div>
                    <div class="tm-text">
                        <h4>${escapeHtml(block.heading || "Detail Analysis")}</h4>
                        <p>${escapeHtml(block.body || "")}</p>
                    </div>
                </div>
            `.trim();
        }

        if (block.type === "embed") {
            const src = block.src || "";
            const height = numberOr(block.height, 420);
            const embed = src
                ? `<iframe src="${attr(src)}" title="${attr(block.label || "Embedded media")}" loading="lazy" allowfullscreen></iframe>`
                : `<div class="media-placeholder">Missing embed URL</div>`;
            return `<div class="layout-module embed-module${selected}" style="min-height:${height}px"${draggable}>${toolbar}${embed}</div>`;
        }

        if (block.type === "spacer") {
            const height = numberOr(block.height, 80);
            return `<div class="layout-module spacer-module${selected}" style="--spacer-height:${height}px"${draggable}>${toolbar}</div>`;
        }

        return "";
    }

    function renderPreview() {
        els.canvasTitle.textContent = state.project.title;
        els.preview.style.setProperty("--hero-height", `${numberOr(state.project.heroHeight, 85)}vh`);
        els.preview.style.setProperty("--module-gap", `${numberOr(state.project.moduleGap, 20)}px`);
        els.preview.style.setProperty("--content-width", `${numberOr(state.project.contentWidth, 1800)}px`);

        const blocks = state.project.blocks.length
            ? state.project.blocks.map(block => renderBlock(block)).join("\n")
            : `<div class="empty-canvas">Start building your project</div>`;

        els.preview.innerHTML = `
            <div class="preview-nav">
                <div class="preview-logo">ZACHARY SHEE</div>
                <div class="preview-links"><span>Work</span><span>Solutions</span><span>About</span><span>Contact</span></div>
            </div>
            <header class="project-hero">
                ${coverMarkup(false)}
                <div class="hero-text">
                    <div class="ph-title">${escapeHtml(state.project.title)}</div>
                    <div class="ph-cat">${escapeHtml(state.project.subtitle)}</div>
                </div>
            </header>
            <section class="project-meta">
                <div class="meta-list">
                    <div><span class="meta-label">Client</span>${escapeHtml(state.project.client)}</div>
                    <div><span class="meta-label">Role</span>${escapeHtml(state.project.role)}</div>
                    <div><span class="meta-label">Software</span>${escapeHtml(state.project.software)}</div>
                    <div><span class="meta-label">Year</span>${escapeHtml(state.project.year)}</div>
                </div>
                <div class="meta-desc"><p>${escapeHtml(state.project.description)}</p></div>
            </section>
            <section class="content-container">${blocks}</section>
            <footer class="preview-footer">
                <h3>ZACHARY SHEE</h3>
                <p>Creative Design Studio.<br>&copy; 2026 Zachary Shee.</p>
            </footer>
        `;
        renderExport();
        wirePreviewVideos();
        hydrateMosaicRatios(els.preview);
    }

    function wirePreviewVideos() {
        els.preview.querySelectorAll("video").forEach(video => {
            if (video.autoplay) {
                video.play().catch(() => {});
            }
        });
    }

    function hydrateMosaicRatios(root) {
        const scope = root || document;
        scope.querySelectorAll(".mosaic-item").forEach(item => {
            if (item.dataset.ratio && item.dataset.ratio !== "auto") return;

            const media = item.querySelector("img, video");
            if (!media) return;

            const applyRatio = () => {
                const width = media.naturalWidth || media.videoWidth;
                const height = media.naturalHeight || media.videoHeight;
                if (!width || !height) return;
                item.style.setProperty("--media-ratio", (width / height).toFixed(4));
            };

            applyRatio();
            media.addEventListener(media.tagName === "VIDEO" ? "loadedmetadata" : "load", applyRatio, { once: true });
        });
    }

    function blockTypeLabel(block) {
        const labels = {
            media: "Image",
            video: "Video",
            grid: "Photo Grid",
            text: "Text",
            textMedia: "Feature",
            embed: "Embed",
            spacer: "Spacer"
        };
        return labels[block.type] || "Module";
    }

    function blockTitle(block) {
        if (block.label) return block.label;
        if (block.type === "text") return block.heading || "Text";
        if (block.type === "textMedia") return block.heading || "Feature";
        if (block.type === "grid") return `${block.items?.length || 0} Media Grid`;
        if (block.items?.[0]?.src) return block.items[0].src.split("/").pop();
        return blockTypeLabel(block);
    }

    function renderStructure() {
        els.blockCount.textContent = `${state.project.blocks.length} Blocks`;
        els.structureList.innerHTML = state.project.blocks.map((block, index) => `
            <div class="structure-item${block.id === state.selectedBlockId ? " active" : ""}" draggable="true" data-structure-id="${attr(block.id)}">
                <div class="structure-handle">${index + 1}</div>
                <div>
                    <div class="structure-title">${escapeHtml(blockTitle(block))}</div>
                    <div class="structure-meta">${escapeHtml(blockTypeLabel(block))}</div>
                </div>
                <button class="small-action" type="button" data-select-block="${attr(block.id)}">Edit</button>
            </div>
        `).join("");
    }

    function mediaFields(media, index, ownerLabel) {
        return `
            <div class="media-card" data-media-index="${index}">
                <div class="media-card-top">
                    <div class="media-card-title">${escapeHtml(ownerLabel)} ${index + 1}</div>
                    ${ownerLabel === "Grid Item" ? `<button class="small-action danger" type="button" data-inspector-action="remove-media" data-index="${index}">Remove</button>` : ""}
                </div>
                <div class="field-grid">
                    <label class="field">
                        <span>Type</span>
                        <select data-media-field="kind" data-index="${index}">
                            <option value="image"${media.kind === "image" ? " selected" : ""}>Image</option>
                            <option value="video"${media.kind === "video" ? " selected" : ""}>Video</option>
                        </select>
                    </label>
                    <label class="field">
                        <span>Ratio Hint</span>
                        <select data-media-field="ratio" data-index="${index}">
                            <option value="auto"${(media.ratio || "auto") === "auto" ? " selected" : ""}>Auto</option>
                            <option value="1:1"${media.ratio === "1:1" ? " selected" : ""}>1:1 Square</option>
                            <option value="16:9"${media.ratio === "16:9" ? " selected" : ""}>16:9 Landscape</option>
                            <option value="9:16"${media.ratio === "9:16" ? " selected" : ""}>9:16 Portrait</option>
                            <option value="4:5"${media.ratio === "4:5" ? " selected" : ""}>4:5 Portrait</option>
                            <option value="4:3"${media.ratio === "4:3" ? " selected" : ""}>4:3 Classic</option>
                        </select>
                    </label>
                    <label class="field">
                        <span>Alt</span>
                        <input type="text" value="${attr(media.alt || "")}" data-media-field="alt" data-index="${index}">
                    </label>
                    <label class="field full">
                        <span>Path</span>
                        <input type="text" value="${attr(media.src || "")}" data-media-field="src" data-index="${index}">
                    </label>
                    <label class="inline-file full">
                        <input type="file" accept="image/*,video/*" data-media-file="${index}">
                        <span>Choose file</span>
                    </label>
                </div>
                <div class="boolean-row">
                    <label><input type="checkbox" data-media-field="controls" data-index="${index}" ${media.controls ? "checked" : ""}> Controls</label>
                    <label><input type="checkbox" data-media-field="autoplay" data-index="${index}" ${media.autoplay ? "checked" : ""}> Autoplay</label>
                </div>
            </div>
        `;
    }

    function renderInspector() {
        const block = selectedBlock();
        if (!block) {
            els.inspector.innerHTML = `
                <div class="panel-heading">
                    <span>Edit Module</span>
                    <span>None</span>
                </div>
                <div class="empty-inspector">Select a canvas module to edit its layout and media.</div>
            `;
            return;
        }

        let body = `
            <div class="panel-heading">
                <span>Edit Module</span>
                <span>${escapeHtml(blockTypeLabel(block))}</span>
            </div>
            <div class="field-grid">
                <label class="field full">
                    <span>Module Label</span>
                    <input type="text" value="${attr(block.label || "")}" data-block-field="label">
                </label>
            </div>
        `;

        if (block.type === "media" || block.type === "video") {
            if (!block.items) block.items = [createMedia(block.type === "video" ? "video" : "image")];
            body += `<div class="media-list">${mediaFields(block.items[0], 0, "Media")}</div>`;
        }

        if (block.type === "grid") {
            body += `
                <div class="field-grid">
                    <label class="field full">
                        <span>Grid Layout</span>
                        <select data-block-field="columns">
                            <option value="feature"${block.columns === "feature" ? " selected" : ""}>Feature Stack</option>
                            <option value="justified"${block.columns === "justified" ? " selected" : ""}>Justified Auto</option>
                            <option value="2"${block.columns === "2" ? " selected" : ""}>2 Columns</option>
                            <option value="3"${block.columns === "3" ? " selected" : ""}>3 Columns</option>
                            <option value="1-2"${block.columns === "1-2" ? " selected" : ""}>1 + 2 Columns</option>
                        </select>
                    </label>
                </div>
                <div class="media-list">${(block.items || []).map((item, index) => mediaFields(item, index, "Grid Item")).join("")}</div>
                <div class="button-row">
                    <button class="chip-button" type="button" data-inspector-action="add-media">Add Media</button>
                </div>
            `;
        }

        if (block.type === "text") {
            body += `
                <div class="field-grid">
                    <label class="field full">
                        <span>Heading</span>
                        <input type="text" value="${attr(block.heading || "")}" data-block-field="heading">
                    </label>
                    <label class="field full">
                        <span>Body</span>
                        <textarea rows="5" data-block-field="body">${escapeHtml(block.body || "")}</textarea>
                    </label>
                    <label class="field full">
                        <span>Alignment</span>
                        <select data-block-field="align">
                            <option value="center"${block.align !== "left" ? " selected" : ""}>Center</option>
                            <option value="left"${block.align === "left" ? " selected" : ""}>Left</option>
                        </select>
                    </label>
                </div>
            `;
        }

        if (block.type === "textMedia") {
            body += `
                <div class="field-grid">
                    <label class="field full">
                        <span>Heading</span>
                        <input type="text" value="${attr(block.heading || "")}" data-block-field="heading">
                    </label>
                    <label class="field full">
                        <span>Body</span>
                        <textarea rows="5" data-block-field="body">${escapeHtml(block.body || "")}</textarea>
                    </label>
                </div>
                <div class="boolean-row">
                    <label><input type="checkbox" data-block-field="reverse" ${block.reverse ? "checked" : ""}> Text first</label>
                </div>
                <div class="media-list">${mediaFields(block.media || createMedia("image"), 0, "Feature Media")}</div>
            `;
        }

        if (block.type === "embed") {
            body += `
                <div class="field-grid">
                    <label class="field full">
                        <span>Embed URL</span>
                        <input type="text" value="${attr(block.src || "")}" data-block-field="src">
                    </label>
                    <label class="field full">
                        <span>Height</span>
                        <input type="number" min="180" max="1200" value="${attr(block.height || 420)}" data-block-field="height">
                    </label>
                </div>
            `;
        }

        if (block.type === "spacer") {
            body += `
                <div class="field-grid">
                    <label class="field full">
                        <span>Height</span>
                        <input type="number" min="20" max="260" value="${attr(block.height || 80)}" data-block-field="height">
                    </label>
                </div>
            `;
        }

        body += `
            <div class="button-row">
                <button class="chip-button" type="button" data-inspector-action="move-up">Move Up</button>
                <button class="chip-button" type="button" data-inspector-action="move-down">Move Down</button>
                <button class="chip-button" type="button" data-inspector-action="duplicate">Duplicate</button>
                <button class="chip-button danger" type="button" data-inspector-action="delete">Delete</button>
            </div>
        `;

        els.inspector.innerHTML = body;
    }

    function renderAssetTray() {
        els.assetCount.textContent = `${state.assets.length} Files`;
        els.assetTray.innerHTML = state.assets.map((asset, index) => {
            const thumb = asset.kind === "video"
                ? `<video class="asset-thumb" src="${attr(asset.previewSrc)}" muted playsinline></video>`
                : `<img class="asset-thumb" src="${attr(asset.previewSrc)}" alt="${attr(asset.name)}">`;
            return `
                <div class="asset-item">
                    ${thumb}
                    <div>
                        <div class="asset-name">${escapeHtml(asset.name)}</div>
                        <div class="asset-meta">${escapeHtml(asset.src)}</div>
                    </div>
                    <button class="small-action" type="button" data-add-asset="${index}">Add</button>
                </div>
            `;
        }).join("");
    }

    function renderAll() {
        renderPreview();
        renderStructure();
        renderInspector();
        renderAssetTray();
    }

    function selectBlock(id) {
        state.selectedBlockId = id;
        renderAll();
    }

    function addBlock(type, media) {
        let block;

        if (type === "media") {
            block = { id: uid(), type: "media", label: "Image", items: [media || createMedia("image", "", "Project image")] };
        } else if (type === "video") {
            block = { id: uid(), type: "video", label: "Video", items: [media || createMedia("video", "", "Project video")] };
        } else if (type === "grid") {
            block = {
                id: uid(),
                type: "grid",
                label: "Photo Grid",
                columns: "justified",
                items: [
                    media || createMedia("image", "", "Grid image 01"),
                    createMedia("image", "", "Grid image 02"),
                    createMedia("image", "", "Grid image 03")
                ]
            };
        } else if (type === "text") {
            block = { id: uid(), type: "text", label: "Text", heading: "SECTION TITLE", body: "Write the section copy here.", align: "center" };
        } else if (type === "textMedia") {
            block = { id: uid(), type: "textMedia", label: "Feature", heading: "Detail Analysis", body: "Write a focused note beside the media.", reverse: false, media: media || createMedia("image", "", "Feature media") };
        } else if (type === "embed") {
            block = { id: uid(), type: "embed", label: "Embed", src: "", height: 420 };
        } else {
            block = { id: uid(), type: "spacer", label: "Spacer", height: 80 };
        }

        state.project.blocks.push(block);
        state.selectedBlockId = block.id;
        activatePanel("content");
        renderAll();
    }

    function getMediaForBlock(block, index) {
        if (block.type === "textMedia") {
            if (!block.media) block.media = createMedia("image");
            return block.media;
        }

        if (!block.items) block.items = [createMedia("image")];
        if (!block.items[index]) block.items[index] = createMedia("image");
        return block.items[index];
    }

    function applyFileToMedia(file, media) {
        if (!file || !media) return;
        const kind = file.type.startsWith("video") ? "video" : "image";
        media.kind = kind;
        media.src = joinPath(state.project.assetFolder, file.name);
        media.previewSrc = URL.createObjectURL(file);
        media.alt = media.alt || file.name.replace(/\.[^.]+$/, "");
        media.controls = kind === "video";
        media.autoplay = false;
    }

    function applyFileToCover(file) {
        if (!file) return;
        applyFileToMedia(file, state.project.cover);
        fillProjectForm();
        renderAll();
    }

    function addAssets(files) {
        Array.from(files || []).forEach(file => {
            const kind = file.type.startsWith("video") ? "video" : "image";
            state.assets.push({
                name: file.name,
                kind,
                src: joinPath(state.project.assetFolder, file.name),
                previewSrc: URL.createObjectURL(file),
                alt: file.name.replace(/\.[^.]+$/, "")
            });
        });
        renderAssetTray();
    }

    function assetToMedia(asset) {
        return {
            kind: asset.kind,
            src: asset.src,
            previewSrc: asset.previewSrc,
            alt: asset.alt,
            controls: asset.kind === "video",
            autoplay: false
        };
    }

    function blockIndex(id) {
        return state.project.blocks.findIndex(block => block.id === id);
    }

    function moveBlock(id, direction) {
        const index = blockIndex(id);
        const nextIndex = index + direction;
        if (index < 0 || nextIndex < 0 || nextIndex >= state.project.blocks.length) return;
        const blocks = state.project.blocks;
        [blocks[index], blocks[nextIndex]] = [blocks[nextIndex], blocks[index]];
        renderAll();
    }

    function duplicateBlock(id) {
        const index = blockIndex(id);
        if (index < 0) return;
        const clone = JSON.parse(JSON.stringify(state.project.blocks[index]));
        clone.id = uid();
        clone.label = `${clone.label || blockTypeLabel(clone)} Copy`;
        state.project.blocks.splice(index + 1, 0, clone);
        state.selectedBlockId = clone.id;
        renderAll();
    }

    function deleteBlock(id) {
        const index = blockIndex(id);
        if (index < 0) return;
        state.project.blocks.splice(index, 1);
        state.selectedBlockId = state.project.blocks[Math.min(index, state.project.blocks.length - 1)]?.id || null;
        renderAll();
    }

    function reorderBlock(dragId, targetId) {
        if (!dragId || !targetId || dragId === targetId) return;
        const fromIndex = blockIndex(dragId);
        if (fromIndex < 0) return;
        const [moved] = state.project.blocks.splice(fromIndex, 1);
        const targetIndex = blockIndex(targetId);
        state.project.blocks.splice(targetIndex < 0 ? state.project.blocks.length : targetIndex, 0, moved);
        state.selectedBlockId = moved.id;
        renderAll();
    }

    function setBlockField(block, field, input) {
        if (!block) return;
        const value = input.type === "checkbox" ? input.checked : input.value;
        if (["height"].includes(field)) {
            block[field] = numberOr(value, block[field] || 0);
        } else {
            block[field] = value;
        }
    }

    function setMediaField(block, index, field, input) {
        const media = getMediaForBlock(block, index);
        const value = input.type === "checkbox" ? input.checked : input.value;
        media[field] = value;
        if (field === "kind") {
            media.controls = value === "video";
            media.autoplay = false;
        }
        if (field === "src") {
            media.previewSrc = "";
        }
    }

    function activatePanel(panel) {
        document.querySelectorAll(".step-tab").forEach(tab => {
            tab.classList.toggle("active", tab.dataset.panel === panel);
        });
        document.querySelectorAll(".side-panel").forEach(sidePanel => {
            sidePanel.classList.toggle("active", sidePanel.dataset.panelView === panel);
        });
    }

    function metaRobots() {
        if (state.project.visibility === "public") return "";
        return `    <meta name="robots" content="noindex,nofollow,noarchive,noimageindex">\n`;
    }

    function generatedBlockHtml() {
        return state.project.blocks.map(block => indent(renderBlock(block, { forExport: true }), 8)).join("\n\n");
    }

    function generateCaseHtml() {
        const pageTitle = `${state.project.title} | Zachary Shee Studio`;
        const description = state.project.description || `${state.project.title} case study by Zachary Shee Studio.`;
        return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
${metaRobots()}    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(pageTitle)}</title>
    <meta name="description" content="${attr(description)}">
    <link rel="icon" type="image/png" href="images/favicon.jpg">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #000000;
            --text-color: #ffffff;
            --accent-color: #888888;
            --module-gap: ${numberOr(state.project.moduleGap, 20)}px;
            --content-width: ${numberOr(state.project.contentWidth, 1800)}px;
            --hero-height: ${numberOr(state.project.heroHeight, 85)}vh;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background-color: var(--bg-color); color: var(--text-color); font-family: 'Inter', sans-serif; overflow-x: hidden; }

        nav { position: fixed; top: 0; width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 40px 60px; z-index: 1000; background: rgba(0,0,0,0.8); backdrop-filter: blur(10px); }
        .logo a { color: white; text-decoration: none; font-weight: 600; letter-spacing: 2px; }
        .nav-links a { color: white; text-decoration: none; margin-left: 28px; font-size: 0.75rem; letter-spacing: 1.5px; opacity: 0.6; transition: 0.3s; }
        .nav-links a:hover { opacity: 1; }

        .project-hero { width: 100%; height: var(--hero-height); min-height: 520px; position: relative; overflow: hidden; margin-bottom: 100px; }
        .project-hero::after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 50%; background: linear-gradient(to bottom, transparent 0%, var(--bg-color) 100%); z-index: 2; pointer-events: none; }
        .project-hero img, .project-hero video { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.7); opacity: 0; animation: heroFadeIn 2.4s ease-out forwards; display: block; }
        .hero-text { position: absolute; bottom: 60px; left: 60px; z-index: 10; }
        .ph-title { font-size: clamp(2rem, 5vw, 4rem); font-weight: 800; text-transform: uppercase; margin-bottom: 10px; opacity: 0; animation: fadeInUp 1s forwards 0.3s; transform: translateY(30px); }
        .ph-cat { color: var(--accent-color); font-size: 1rem; letter-spacing: 2px; opacity: 0; animation: fadeInUp 1s forwards 0.5s; transform: translateY(30px); text-transform: uppercase; }

        .project-meta { max-width: 1200px; margin: 0 auto 120px; padding: 0 60px; display: grid; grid-template-columns: 300px 1fr; gap: 60px; }
        .meta-list div { margin-bottom: 25px; color: #ddd; line-height: 1.45; }
        .meta-label { color: var(--accent-color); font-size: 0.75rem; letter-spacing: 1px; margin-bottom: 5px; text-transform: uppercase; border-top: 1px solid #333; padding-top: 15px; display: inline-block; width: 100%; }
        .meta-desc { font-size: 1.2rem; line-height: 1.6; color: #ddd; font-weight: 200; }

        .content-container { max-width: var(--content-width); margin: 0 auto 100px; padding: 0 60px; display: flex; flex-direction: column; gap: var(--module-gap); }
        .layout-module { width: 100%; position: relative; opacity: 0; transform: translateY(40px); transition: 0.8s ease; }
        .layout-module.active { opacity: 1; transform: translateY(0); }
        .layout-module img, .layout-module video { width: 100%; height: auto; display: block; object-fit: cover; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--module-gap); }
        .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: var(--module-gap); }
        .grid-1-2 { display: grid; grid-template-columns: 1fr 2fr; gap: var(--module-gap); }
        .grid-feature { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); grid-template-rows: repeat(2, minmax(0, 1fr)); gap: var(--module-gap); aspect-ratio: 3 / 2; }
        .grid-feature .mosaic-item { min-width: 0; min-height: 0; overflow: hidden; background: #090909; }
        .grid-feature .mosaic-item:nth-child(3) { grid-column: 2; grid-row: 1 / span 2; }
        .grid-feature .mosaic-item img, .grid-feature .mosaic-item video { width: 100%; height: 100%; object-fit: contain; }
        .grid-justified { --row-height: clamp(180px, 22vw, 360px); display: flex; flex-wrap: wrap; align-items: stretch; gap: var(--module-gap); }
        .grid-justified .mosaic-item { flex: calc(var(--media-ratio, 1) * var(--row-height)) 1 calc(var(--media-ratio, 1) * var(--row-height)); height: var(--row-height); min-width: 160px; overflow: hidden; background: #090909; }
        .grid-justified .mosaic-item img, .grid-justified .mosaic-item video { width: 100%; height: 100%; object-fit: contain; }
        .text-module { padding: 80px 0; text-align: center; max-width: 800px; margin: 0 auto; }
        .text-module.align-left { margin-left: 0; text-align: left; }
        .text-module h3 { font-size: 1.5rem; margin-bottom: 20px; }
        .text-module p { font-size: 1rem; color: #aaa; line-height: 1.8; white-space: pre-line; }
        .text-media-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .text-media-grid.reverse .tm-media { order: 2; }
        .tm-text { padding: 20px; }
        .tm-text h4 { font-size: 1.2rem; margin-bottom: 15px; color: white; }
        .tm-text p { color: #888; line-height: 1.6; white-space: pre-line; }
        .embed-module { min-height: 420px; background: #111; }
        .embed-module iframe { width: 100%; height: 100%; min-height: inherit; border: 0; display: block; }
        .spacer-module { height: var(--spacer-height, 80px); }

        footer { border-top: 1px solid #222; padding: 80px 60px; background: #050505; }
        .footer-content { max-width: 1800px; margin: 0 auto; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 40px; }
        .footer-left h3 { font-size: 1.2rem; font-weight: 800; letter-spacing: 2px; margin-bottom: 15px; }
        .footer-left p { color: #666; font-size: 0.8rem; line-height: 1.6; }

        @keyframes heroFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 768px) {
            nav { padding: 30px 24px; }
            .nav-links a { margin-left: 16px; font-size: 0.68rem; }
            .project-hero { min-height: 420px; }
            .hero-text { left: 24px; right: 24px; bottom: 42px; }
            .project-meta { grid-template-columns: 1fr; gap: 40px; padding: 0 24px; }
            .content-container { padding: 0 20px; }
            .grid-2, .grid-3, .grid-1-2, .grid-feature, .text-media-grid { grid-template-columns: 1fr; gap: 20px; }
            .grid-feature { grid-template-rows: none; aspect-ratio: auto; }
            .grid-feature .mosaic-item:nth-child(3) { grid-column: auto; grid-row: auto; }
            .grid-feature .mosaic-item { aspect-ratio: var(--media-ratio, 1); }
            .grid-justified { --row-height: auto; display: grid; grid-template-columns: 1fr; }
            .grid-justified .mosaic-item { height: auto; min-width: 0; aspect-ratio: var(--media-ratio, 1); }
            .text-media-grid.reverse .tm-media { order: 0; }
            .text-module { padding: 40px 0; }
            footer { padding: 60px 24px; }
        }
    </style>
    <link rel="stylesheet" href="lightbox.css">
</head>
<body>
    <nav>
        <div class="logo"><a href="index.html">ZACHARY SHEE</a></div>
        <div class="nav-links">
            <a href="work.html">WORK</a>
            <a href="solutions.html">SOLUTIONS</a>
            <a href="about.html">ABOUT</a>
            <a href="course.html">COURSE</a>
            <a href="contact.html">CONTACT</a>
        </div>
    </nav>

    <header class="project-hero">
        ${coverMarkup(true)}
        <div class="hero-text">
            <div class="ph-title">${escapeHtml(state.project.title)}</div>
            <div class="ph-cat">${escapeHtml(state.project.subtitle)}</div>
        </div>
    </header>

    <section class="project-meta">
        <div class="meta-list">
            <div><span class="meta-label">CLIENT</span>${escapeHtml(state.project.client)}</div>
            <div><span class="meta-label">ROLE</span>${escapeHtml(state.project.role)}</div>
            <div><span class="meta-label">SOFTWARE</span>${escapeHtml(state.project.software)}</div>
            <div><span class="meta-label">YEAR</span>${escapeHtml(state.project.year)}</div>
        </div>
        <div class="meta-desc">
            <p>${escapeHtml(state.project.description)}</p>
        </div>
    </section>

    <section class="content-container">
${generatedBlockHtml()}
    </section>

    <footer>
        <div class="footer-content">
            <div class="footer-left">
                <h3>ZACHARY SHEE</h3>
                <p>Creative Design Studio.<br>&copy; 2026 Zachary Shee.</p>
            </div>
        </div>
    </footer>

    <script>
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.layout-module').forEach(element => observer.observe(element));

        function hydrateMosaicRatios() {
            document.querySelectorAll('.mosaic-item').forEach(item => {
                if (item.dataset.ratio && item.dataset.ratio !== 'auto') return;

                const media = item.querySelector('img, video');
                if (!media) return;

                const applyRatio = () => {
                    const width = media.naturalWidth || media.videoWidth;
                    const height = media.naturalHeight || media.videoHeight;
                    if (!width || !height) return;
                    item.style.setProperty('--media-ratio', (width / height).toFixed(4));
                };

                applyRatio();
                media.addEventListener(media.tagName === 'VIDEO' ? 'loadedmetadata' : 'load', applyRatio, { once: true });
            });
        }

        hydrateMosaicRatios();
    </script>
    <script src="lightbox.js"></script>
</body>
</html>`;
    }

    function generateWorkItem() {
        const cover = state.project.cover.src || "";
        const firstVideo = state.project.blocks
            .flatMap(block => block.items || (block.media ? [block.media] : []))
            .find(item => item.kind === "video");
        const video = firstVideo?.src || "";
        return `{
    title: { en: "${escapeJsString(state.project.title)}", zh: "${escapeJsString(state.project.title)}" },
    category: { en: "${escapeJsString(state.project.categoryEn)}", zh: "${escapeJsString(state.project.categoryZh)}" },
    type: "${escapeJsString(state.project.type)}",
    image: "${escapeJsString(cover)}",
    video: "${escapeJsString(video)}",
    link: "${escapeJsString(slugBase())}.html"
}`;
    }

    function renderExport() {
        const filename = `${slugBase()}.html`;
        els.exportFilename.textContent = filename;
        els.caseOutput.value = generateCaseHtml();
        els.workOutput.value = generateWorkItem();
    }

    function setStatus(message) {
        els.statusLine.textContent = message;
        window.clearTimeout(setStatus.timer);
        setStatus.timer = window.setTimeout(() => {
            els.statusLine.textContent = "";
        }, 3200);
    }

    async function copyText(text, successMessage, fallbackElement) {
        try {
            await navigator.clipboard.writeText(text);
            setStatus(successMessage);
        } catch (error) {
            fallbackElement.focus();
            fallbackElement.select();
            document.execCommand("copy");
            setStatus(successMessage);
        }
    }

    function downloadText(filename, text) {
        const blob = new Blob([text], { type: "text/html;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
        setStatus("HTML file downloaded.");
    }

    function saveDraft() {
        localStorage.setItem(storageKey, JSON.stringify(cleanProjectForStorage(state.project)));
        setStatus("Draft saved in this browser.");
    }

    function loadDraft() {
        const raw = localStorage.getItem(storageKey);
        if (!raw) {
            setStatus("No saved draft found.");
            return;
        }

        try {
            state.project = migrateProject(JSON.parse(raw));
            state.selectedBlockId = state.project.blocks[0]?.id || null;
            fillProjectForm();
            renderAll();
            setStatus("Draft loaded.");
        } catch (error) {
            setStatus("Draft could not be loaded.");
        }
    }

    function resetDraft() {
        localStorage.removeItem(storageKey);
        state.project = createDefaultProject();
        state.selectedBlockId = state.project.blocks[0]?.id || null;
        state.assets = [];
        fillProjectForm();
        renderAll();
        setStatus("New draft started.");
    }

    function bindEvents() {
        document.querySelectorAll(".step-tab").forEach(tab => {
            tab.addEventListener("click", () => activatePanel(tab.dataset.panel));
        });

        document.getElementById("go-export").addEventListener("click", () => {
            activatePanel("export");
            renderExport();
        });

        document.getElementById("save-draft").addEventListener("click", saveDraft);
        document.getElementById("load-draft").addEventListener("click", loadDraft);
        document.getElementById("reset-draft").addEventListener("click", resetDraft);
        document.getElementById("copy-html").addEventListener("click", () => copyText(els.caseOutput.value, "Case HTML copied.", els.caseOutput));
        document.getElementById("copy-work-item").addEventListener("click", () => copyText(els.workOutput.value, "Work item copied.", els.workOutput));
        document.getElementById("download-html").addEventListener("click", () => downloadText(els.exportFilename.textContent, els.caseOutput.value));

        document.querySelectorAll("[data-add-block]").forEach(button => {
            button.addEventListener("click", () => addBlock(button.dataset.addBlock));
        });

        document.querySelectorAll("[data-viewport]").forEach(button => {
            button.addEventListener("click", () => {
                document.querySelectorAll("[data-viewport]").forEach(control => control.classList.remove("active"));
                button.classList.add("active");
                els.previewFrame.classList.toggle("mobile", button.dataset.viewport === "mobile");
                els.previewFrame.classList.toggle("desktop", button.dataset.viewport !== "mobile");
            });
        });

        document.querySelectorAll("[data-project-field]").forEach(input => {
            input.addEventListener("input", event => {
                setProjectField(event.target.dataset.projectField, event.target.value);
                renderPreview();
                renderStructure();
            });
            input.addEventListener("change", event => {
                setProjectField(event.target.dataset.projectField, event.target.value);
                renderPreview();
                renderStructure();
            });
        });

        els.coverFile.addEventListener("change", event => {
            applyFileToCover(event.target.files?.[0]);
            event.target.value = "";
        });

        els.assetInput.addEventListener("change", event => {
            addAssets(event.target.files);
            event.target.value = "";
        });

        els.assetTray.addEventListener("click", event => {
            const button = event.target.closest("[data-add-asset]");
            if (!button) return;
            const asset = state.assets[Number(button.dataset.addAsset)];
            if (!asset) return;
            addBlock(asset.kind === "video" ? "video" : "media", assetToMedia(asset));
        });

        els.structureList.addEventListener("click", event => {
            const select = event.target.closest("[data-select-block]");
            const item = event.target.closest("[data-structure-id]");
            if (select) selectBlock(select.dataset.selectBlock);
            else if (item) selectBlock(item.dataset.structureId);
        });

        els.structureList.addEventListener("dragstart", event => {
            const item = event.target.closest("[data-structure-id]");
            if (!item) return;
            state.dragBlockId = item.dataset.structureId;
            event.dataTransfer.effectAllowed = "move";
        });

        els.structureList.addEventListener("dragover", event => {
            if (event.target.closest("[data-structure-id]")) event.preventDefault();
        });

        els.structureList.addEventListener("drop", event => {
            const item = event.target.closest("[data-structure-id]");
            if (!item) return;
            event.preventDefault();
            reorderBlock(state.dragBlockId, item.dataset.structureId);
            state.dragBlockId = null;
        });

        els.preview.addEventListener("click", event => {
            const action = event.target.closest("[data-module-action]");
            if (action) {
                const id = action.dataset.id;
                const name = action.dataset.moduleAction;
                if (name === "up") moveBlock(id, -1);
                if (name === "down") moveBlock(id, 1);
                if (name === "duplicate") duplicateBlock(id);
                if (name === "delete") deleteBlock(id);
                return;
            }

            const module = event.target.closest("[data-block-id]");
            if (module) selectBlock(module.dataset.blockId);
        });

        els.preview.addEventListener("dragstart", event => {
            const module = event.target.closest("[data-block-id]");
            if (!module) return;
            state.dragBlockId = module.dataset.blockId;
            event.dataTransfer.effectAllowed = "move";
        });

        els.preview.addEventListener("dragover", event => {
            const module = event.target.closest("[data-block-id]");
            if (!module) return;
            event.preventDefault();
            module.classList.add("drag-over");
        });

        els.preview.addEventListener("dragleave", event => {
            const module = event.target.closest("[data-block-id]");
            if (module) module.classList.remove("drag-over");
        });

        els.preview.addEventListener("drop", event => {
            const module = event.target.closest("[data-block-id]");
            if (!module) return;
            event.preventDefault();
            reorderBlock(state.dragBlockId, module.dataset.blockId);
            state.dragBlockId = null;
        });

        els.inspector.addEventListener("input", event => {
            const block = selectedBlock();
            if (!block) return;

            if (event.target.matches("[data-block-field]")) {
                setBlockField(block, event.target.dataset.blockField, event.target);
                renderPreview();
                renderStructure();
            }

            if (event.target.matches("[data-media-field]")) {
                setMediaField(block, Number(event.target.dataset.index || 0), event.target.dataset.mediaField, event.target);
                renderPreview();
                renderStructure();
            }
        });

        els.inspector.addEventListener("change", event => {
            const block = selectedBlock();
            if (!block) return;

            if (event.target.matches("[data-media-file]")) {
                const index = Number(event.target.dataset.mediaFile || 0);
                applyFileToMedia(event.target.files?.[0], getMediaForBlock(block, index));
                event.target.value = "";
                renderAll();
            }
        });

        els.inspector.addEventListener("click", event => {
            const block = selectedBlock();
            if (!block) return;
            const action = event.target.closest("[data-inspector-action]");
            if (!action) return;

            const name = action.dataset.inspectorAction;
            if (name === "move-up") moveBlock(block.id, -1);
            if (name === "move-down") moveBlock(block.id, 1);
            if (name === "duplicate") duplicateBlock(block.id);
            if (name === "delete") deleteBlock(block.id);
            if (name === "add-media") {
                block.items = block.items || [];
                block.items.push(createMedia("image", "", `Grid image ${block.items.length + 1}`));
                renderAll();
            }
            if (name === "remove-media") {
                const index = Number(action.dataset.index);
                block.items.splice(index, 1);
                if (!block.items.length) block.items.push(createMedia("image"));
                renderAll();
            }
        });
    }

    function init() {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            try {
                state.project = migrateProject(JSON.parse(saved));
            } catch (error) {
                state.project = createDefaultProject();
            }
        }
        state.selectedBlockId = state.project.blocks[0]?.id || null;
        fillProjectForm();
        bindEvents();
        renderAll();
    }

    init();
})();
