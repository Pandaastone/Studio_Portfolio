(function () {
    const previewPassword = "szx123456";
    const authKey = "itPreviewUnlocked";
    const passwordForm = document.getElementById("password-form");
    const passwordInput = document.getElementById("password-input");
    const passwordError = document.getElementById("password-error");

    function unlockPreview() {
        document.body.classList.remove("locked");
        document.body.classList.add("unlocked");
        document.body.style.overflow = "";
    }

    if (sessionStorage.getItem(authKey) === "true") {
        unlockPreview();
    } else if (passwordInput) {
        passwordInput.focus();
    }

    if (passwordForm) {
        passwordForm.addEventListener("submit", event => {
            event.preventDefault();

            if (passwordInput.value === previewPassword) {
                sessionStorage.setItem(authKey, "true");
                passwordError.textContent = "";
                unlockPreview();
                return;
            }

            passwordError.textContent = "Password incorrect.";
            passwordInput.value = "";
            passwordInput.focus();
        });
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("active");
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".layout-module, .compare-pair, .detail-card, .asset-card").forEach(element => {
        observer.observe(element);
    });

    document.querySelectorAll(".drag-compare").forEach(compare => {
        const range = compare.querySelector(".drag-range");
        if (!range) return;

        const setSplit = value => {
            const numericValue = Math.max(0, Math.min(100, Number(value)));
            compare.style.setProperty("--split", `${numericValue}%`);
            range.value = numericValue;
        };

        const updateFromPosition = clientX => {
            const rect = compare.getBoundingClientRect();
            const percent = ((clientX - rect.left) / rect.width) * 100;
            setSplit(percent.toFixed(1));
        };

        setSplit(range.value || 50);
        range.addEventListener("input", event => setSplit(event.target.value));

        let isDragging = false;

        compare.addEventListener("pointerdown", event => {
            isDragging = true;
            compare.setPointerCapture?.(event.pointerId);
            updateFromPosition(event.clientX);
        });

        compare.addEventListener("pointermove", event => {
            if (!isDragging) return;
            updateFromPosition(event.clientX);
        });

        const stopDragging = () => {
            isDragging = false;
        };

        compare.addEventListener("pointerup", stopDragging);
        compare.addEventListener("pointercancel", stopDragging);
        compare.addEventListener("lostpointercapture", stopDragging);
    });
})();
