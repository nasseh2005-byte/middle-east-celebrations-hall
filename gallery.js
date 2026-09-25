(() => {
  const panel = document.getElementById("gallery-panel");
  if (!panel) return;
  const tabs = [...document.querySelectorAll(".gallery-tab")];
  const count = document.getElementById("gallery-count");
  const lightbox = document.getElementById("lightbox");
  const lightboxInner = document.getElementById("lightbox-inner");
  const closeButton = document.getElementById("lightbox-close");
  const prevButton = document.getElementById("lightbox-prev");
  const nextButton = document.getElementById("lightbox-next");
  let items = [];
  let activeTab = location.hash === "#videos" ? "videos" : "photos";
  let activeItems = [];
  let currentIndex = 0;
  let lastFocus = null;

  const sceneNames = {
    P01: ["الممر ومنصة الحفل", "Aisle and celebration stage"],
    P02: ["الكوشة والثريات", "Stage and chandeliers"],
    P03: ["مدخل القاعة", "Hall entrance"],
    P04: ["جلسات القاعة", "Hall seating"],
    P05: ["تفاصيل المنصة", "Stage details"]
  };

  function language() { return window.mehall?.getLanguage() || "ar"; }
  function labelFor(item, index) {
    if (item.id.startsWith("P")) return sceneNames[item.id]?.[language() === "ar" ? 0 : 1] || `${window.mehall.text("galleryPhoto")} ${index + 1}`;
    return `${window.mehall.text("galleryVideo")} ${String(index + 1).padStart(2, "0")}`;
  }
  function mediaSource(item) {
    return item.file;
  }
  function render() {
    activeItems = items.filter(item => item.id.startsWith(activeTab === "photos" ? "P" : "V"));
    tabs.forEach(tab => {
      const selected = tab.dataset.tab === activeTab;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected) panel.setAttribute("aria-labelledby", tab.id);
    });
    count.textContent = language() === "ar"
      ? `${activeItems.length.toLocaleString("ar-SA")} ${activeTab === "photos" ? "صورة" : "فيديو"}`
      : `${activeItems.length} ${activeTab}`;
    panel.replaceChildren();
    activeItems.forEach((item, index) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "gallery-card";
      card.setAttribute("aria-label", labelFor(item, index));
      const img = document.createElement("img");
      img.src = item.file;
      img.alt = labelFor(item, index);
      img.loading = index < 4 ? "eager" : "lazy";
      img.decoding = "async";
      card.append(img);
      if (activeTab === "videos") {
        const play = document.createElement("span");
        play.className = "video-play";
        play.setAttribute("aria-hidden", "true");
        play.textContent = "▶";
        card.append(play);
      }
      const info = document.createElement("span");
      info.className = "gallery-card-info";
      const title = document.createElement("span");
      title.textContent = labelFor(item, index);
      const number = document.createElement("span");
      number.textContent = String(index + 1).padStart(2, "0");
      info.append(title, number);
      card.append(info);
      card.addEventListener("click", () => openLightbox(index));
      panel.append(card);
    });
  }
  function selectTab(next, updateHash = true) {
    activeTab = next;
    if (updateHash) history.replaceState(null, "", next === "videos" ? "#videos" : "#photos");
    render();
  }
  function showLightboxItem() {
    const item = activeItems[currentIndex];
    lightboxInner.replaceChildren();
    const label = labelFor(item, currentIndex);
    if (activeTab === "photos") {
      const img = document.createElement("img");
      img.src = mediaSource(item);
      img.alt = label;
      lightboxInner.append(img);
    } else {
      const video = document.createElement("video");
      video.src = item.videoFile || item.video;
      video.poster = item.file;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", label);
      lightboxInner.append(video);
      video.play().catch(() => {});
    }
    const caption = document.createElement("p");
    caption.className = "lightbox-caption";
    caption.textContent = `${label} · ${currentIndex + 1} / ${activeItems.length}`;
    lightboxInner.append(caption);
  }
  function openLightbox(index) {
    lastFocus = document.activeElement;
    currentIndex = index;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    closeButton.setAttribute("aria-label", window.mehall.text("close"));
    prevButton.setAttribute("aria-label", window.mehall.text("previous"));
    nextButton.setAttribute("aria-label", window.mehall.text("next"));
    showLightboxItem();
    closeButton.focus();
  }
  function closeLightbox() {
    lightbox.hidden = true;
    lightboxInner.replaceChildren();
    document.body.style.overflow = "";
    lastFocus?.focus();
  }
  function move(step) {
    currentIndex = (currentIndex + step + activeItems.length) % activeItems.length;
    showLightboxItem();
  }

  tabs.forEach(tab => tab.addEventListener("click", () => selectTab(tab.dataset.tab)));
  closeButton.addEventListener("click", closeLightbox);
  prevButton.addEventListener("click", () => move(-1));
  nextButton.addEventListener("click", () => move(1));
  lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", event => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") move(language() === "ar" ? 1 : -1);
    if (event.key === "ArrowRight") move(language() === "ar" ? -1 : 1);
  });
  document.addEventListener("mehall:language", () => { if (items.length) render(); });
  window.addEventListener("hashchange", () => selectTab(location.hash === "#videos" ? "videos" : "photos", false));
  fetch("assets/media-sources.json")
    .then(response => { if (!response.ok) throw new Error("gallery unavailable"); return response.json(); })
    .then(data => { items = data.items.filter(item => item.id.startsWith("P") || (item.id.startsWith("V") && item.videoFile)); render(); })
    .catch(() => { panel.textContent = language() === "ar" ? "تعذر تحميل المعرض حالياً." : "The gallery could not be loaded right now."; });
})();
