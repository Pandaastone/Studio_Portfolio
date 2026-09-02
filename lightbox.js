(function () {
    const mediaSelector = '.content-container .layout-module img, .content-container .layout-module video:not([controls]), .content-container .compare-pair img, .content-container .detail-card img, .content-container .asset-card img, .drawer-media-section .media-module img, .drawer-media-section .media-module video:not([controls]), .drawer-hero img';
    const state = {
        items: [],
        index: 0,
        previousOverflow: ''
    };

    function getVideoSource(video) {
        const source = video.currentSrc || video.getAttribute('src');
        if (source) return source;

        const childSource = video.querySelector('source');
        return childSource ? childSource.getAttribute('src') : '';
    }

    function canOpenMedia(element) {
        if (!element) return false;
        if (element.closest('.pano-wrapper')) return false;
        if (element.closest('.zs-lightbox')) return false;

        if (element.tagName === 'IMG') {
            return Boolean(element.currentSrc || element.getAttribute('src'));
        }

        if (element.tagName === 'VIDEO') {
            return Boolean(getVideoSource(element));
        }

        return false;
    }

    function collectItems() {
        state.items = Array.from(document.querySelectorAll(mediaSelector)).filter(canOpenMedia);
        return state.items;
    }

    function createButton(className, label, path) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `zs-lightbox-button ${className}`;
        button.setAttribute('aria-label', label);
        button.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${path}</svg>`;
        return button;
    }

    function ensureLightbox() {
        let lightbox = document.getElementById('zs-lightbox');
        if (lightbox) return lightbox;

        lightbox = document.createElement('div');
        lightbox.id = 'zs-lightbox';
        lightbox.className = 'zs-lightbox';
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-modal', 'true');
        lightbox.setAttribute('aria-label', 'Expanded project media');

        const stage = document.createElement('div');
        stage.className = 'zs-lightbox-stage';

        const image = document.createElement('img');
        image.className = 'zs-lightbox-media zs-lightbox-image';
        image.alt = 'Expanded project image';
        image.draggable = false;

        const video = document.createElement('video');
        video.className = 'zs-lightbox-media zs-lightbox-video';
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.controls = true;

        stage.append(image, video);

        const closeButton = createButton('zs-lightbox-close', 'Close', '<path d="M6 6l12 12"></path><path d="M18 6L6 18"></path>');
        const prevButton = createButton('zs-lightbox-prev', 'Previous media', '<path d="M15 18l-6-6 6-6"></path>');
        const nextButton = createButton('zs-lightbox-next', 'Next media', '<path d="M9 18l6-6-6-6"></path>');
        const counter = document.createElement('div');
        counter.className = 'zs-lightbox-counter';

        lightbox.append(stage, closeButton, prevButton, nextButton, counter);
        document.body.append(lightbox);

        lightbox.addEventListener('click', event => {
            if (event.target === lightbox || event.target === stage) {
                closeLightbox();
            }
        });
        closeButton.addEventListener('click', closeLightbox);
        prevButton.addEventListener('click', event => {
            event.stopPropagation();
            showRelative(-1);
        });
        nextButton.addEventListener('click', event => {
            event.stopPropagation();
            showRelative(1);
        });

        return lightbox;
    }

    function getParts() {
        const lightbox = ensureLightbox();
        return {
            lightbox,
            image: lightbox.querySelector('.zs-lightbox-image'),
            video: lightbox.querySelector('.zs-lightbox-video'),
            counter: lightbox.querySelector('.zs-lightbox-counter')
        };
    }

    function clearMedia(image, video) {
        image.classList.remove('show');
        image.removeAttribute('src');
        video.classList.remove('show');
        video.pause();
        video.removeAttribute('src');
        video.load();
    }

    function showItem(index) {
        if (!state.items.length) return;

        state.index = (index + state.items.length) % state.items.length;

        const item = state.items[state.index];
        const { lightbox, image, video, counter } = getParts();
        clearMedia(image, video);

        if (item.tagName === 'IMG') {
            image.src = item.currentSrc || item.getAttribute('src');
            image.alt = item.getAttribute('alt') || 'Expanded project image';
            image.classList.add('show');
        } else if (item.tagName === 'VIDEO') {
            video.src = getVideoSource(item);
            video.classList.add('show');
            video.play().catch(() => {});
        }

        counter.textContent = `${state.index + 1} / ${state.items.length}`;
        lightbox.classList.toggle('single', state.items.length <= 1);
    }

    function openLightbox(index) {
        const { lightbox } = getParts();

        state.previousOverflow = document.body.style.overflow;
        document.body.classList.add('zs-lightbox-open');
        lightbox.classList.add('active');
        showItem(index);
    }

    function closeLightbox() {
        const { lightbox, image, video } = getParts();
        lightbox.classList.remove('active');
        document.body.classList.remove('zs-lightbox-open');
        document.body.style.overflow = state.previousOverflow;
        clearMedia(image, video);
    }

    function showRelative(offset) {
        if (!document.getElementById('zs-lightbox')?.classList.contains('active')) return;
        showItem(state.index + offset);
    }

    document.addEventListener('click', event => {
        let media = event.target.closest('img, video');
        if (!media && event.target.classList.contains('media-shield')) {
            const container = event.target.closest('.media-module, .drawer-hero, .layout-module');
            if (container) {
                // 如果是带控制条的自定义视频，交给播放控制，不打开 lightbox
                if (container.classList.contains('custom-player-wrapper') || container.getAttribute('data-controls-mode') === 'true') {
                    return;
                }
                media = container.querySelector('img, video:not([controls])');
            }
        }
        if (!media) return;

        const items = collectItems();
        const index = items.indexOf(media);
        if (index === -1) return;

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        openLightbox(index);
    }, true);

    document.addEventListener('keydown', event => {
        const lightbox = document.getElementById('zs-lightbox');
        if (!lightbox || !lightbox.classList.contains('active')) return;

        if (event.key === 'Escape') closeLightbox();
        if (event.key === 'ArrowLeft') showRelative(-1);
        if (event.key === 'ArrowRight') showRelative(1);
    });
})();
