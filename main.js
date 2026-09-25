(() => {
  const copy = {
    ar: {
      skip: "تخطَّ إلى المحتوى", skipIntro: "تخطي المقدمة", brand: "قاعة الشرق الأوسط", brandSub: "للإحتفالات",
      navAbout: "عن القاعة", navOccasions: "المناسبات", navGallery: "المعرض", navReviews: "التقييمات", navLocation: "الموقع", navBooking: "الحجز", bookNow: "احجز مناسبتك",
      heroTitle: "مساحة لفرحتكم|بكل فخامة", heroDescription: "في قاعة الشرق الأوسط، تتلاقى أناقة المكان مع دفء الاحتفال لتصنعوا ذكريات تبقى. مساحات رحبة وتفاصيل مُعدّة بعناية ليومكم الأجمل.", exploreHall: "اكتشف القاعة", browseGallery: "شاهد المعرض", scrollHint: "مرّر لاكتشاف المزيد",
      statHalls: "قاعتان منفصلتان", statGuests: "سعة تقارب ٤٠٠ ضيف", statEvents: "أنواع من المناسبات",
      aboutEyebrow: "لمسة من الفخامة", aboutTitle: "المكان الذي يليق|بأجمل أيامكم", aboutText: "في قلب حي الرحاب بجدة، تستقبلكم قاعة الشرق الأوسط بمساحات واسعة وتفاصيل أنيقة تمنح كل مناسبة طابعها الخاص. من لحظة الدخول حتى آخر لحظة في الحفل، يجد ضيوفكم أجواءً مُهيّأة للاحتفاء بكم.", aboutText2: "تضم القاعة قسمين مستقلين للرجال والنساء، مع ممر للزفة، منصة للاحتفال، مساحات للضيافة وتجهيزات صوتية وضوئية.", discoverServices: "تعرّف على مرافق القاعة",
      occasionsEyebrow: "لكل فرحة مكان", occasionsTitle: "احتفالات تُشبهكم", occasionsIntro: "نفتح أبوابنا للحظات التي تجمع الأحبة وتستحق احتفالاً استثنائياً.", weddings: "زواج", weddingsText: "ليلة تليق ببداية حكايتكما.", marriageContract: "عقد قران", marriageContractText: "بداية مباركة في أجواء حميمية.", graduations: "تخرج", graduationsText: "فرحة الإنجاز والخطوة القادمة.", babyWelcome: "سبوع المولود", babyWelcomeText: "استقبال صغيركم بفرحة كبيرة.", concerts: "حفلات غنائية", concertsText: "أجواء موسيقية تنبض بالحياة.", festivals: "فعاليات ومهرجانات", festivalsText: "مساحة لاستضافة اللقاءات الكبيرة.", birthdays: "أعياد ميلاد", birthdaysText: "ذكريات جميلة حول من نحب.",
      servicesEyebrow: "ما يميز المكان", servicesTitle: "كل تفصيل|له حضوره", servicesIntro: "من المساحة إلى الضيافة، تتكامل عناصر القاعة لتمنحكم تجربة احتفال مريحة وأنيقة.", askPrice: "استفسر عن الباقات والأسعار", service1: "قاعتان مستقلتان للرجال والنساء", service2: "ممر ودرج للزفة ومنصة للاحتفال", service3: "جناح خاص للعروس ومساحات للضيافة", service4: "بوفيه فاخر حسب طلب المناسبة", service5: "نظام صوتيات وإضاءة للمناسبات", service6: "شاشة إلكترونية للكوشة", service7: "تنسيق المساحات حسب نوع الحفل",
      buffetEyebrow: "ضيافة تليق بكم", buffetTitle: "مذاق يكمّل|روعة المناسبة", buffetText: "بوفيه أنيق بخيارات من الأطباق الفاخرة والمقبلات والحلويات. تُنسّق قائمة الضيافة حسب رغبتكم وطبيعة المناسبة، لتكون كل تفاصيل المائدة على ذوقكم.", buffetPoint1: "أطباق رئيسية", buffetPoint2: "مقبلات وحلويات", buffetPoint3: "خيارات حسب الطلب", buffetCaption: "تفاصيل الضيافة تصنع الفرق", planBuffet: "استفسر عن خيارات البوفيه",
      bookingEyebrow: "تواصل وحجز", bookingTitle: "لنخطط يومكم|كما تتمنّون", bookingIntro: "أرسلوا تفاصيل مناسبتكم وسنستقبل طلبكم مباشرة عبر واتساب. الأسعار والمواعيد متاحة بالتواصل.", whatsappLabel: "واتساب الحجز", callLabel: "تواصل معنا", formTitle: "طلب مناسبة", formName: "الاسم", formPhone: "رقم الجوال", formOccasion: "نوع المناسبة", formChoose: "اختر المناسبة", formDate: "التاريخ المتوقع", formGuests: "عدد الضيوف المتوقع", formNotes: "تفاصيل إضافية", formSubmit: "إرسال الطلب عبر واتساب", formHint: "سيفتح واتساب مع رسالة جاهزة بتفاصيل طلبك.",
      galleryEyebrow: "لحظات من داخل القاعة", galleryTitle: "اكتشفوا المكان", allGallery: "المعرض الكامل للصور والفيديوهات", previewHall: "القاعة", previewDetails: "التفاصيل", previewVideos: "الفيديوهات",
      reviewsEyebrow: "آراء الضيوف", reviewsTitle: "تجارب تُحكى|بصدق", reviewsText: "اقرأوا تقييمات الزوار وتجاربهم المنشورة على خرائط Google، وتعرّفوا على القاعة من خلال من احتفلوا فيها.", readGoogle: "اقرأ التقييمات على Google",
      locationEyebrow: "زورونا", locationTitle: "في قلب جدة", locationText: "حي الرحاب، طريق الحرمين السريع، بين كوبري التحلية وكوبري فلسطين، جدة.", directions: "افتح الموقع في خرائط Google",
      closingEyebrow: "ننتظر لحظتكم", closingTitle: "دعونا نحتفل بكم", closingText: "للاستفسار عن المواعيد والباقات والأسعار، تواصلوا معنا مباشرة.", contactWhatsapp: "تواصل عبر واتساب",
      footerLine: "للمناسبات التي تبقى في الذاكرة.", footerExplore: "استكشف", footerContact: "تواصل معنا", copyright: "قاعة الشرق الأوسط للإحتفالات", backTop: "العودة للأعلى ↑", devCredit: "تم تطوير الموقع من قبل", devContact: "للتواصل",
      galleryPageTitle: "معرض القاعة", galleryPageIntro: "جولة بصرية في أجواء قاعة الشرق الأوسط وتفاصيلها؛ تصفحوا الصور ومقاطع الفيديو.", photos: "الصور", videos: "الفيديوهات",
      galleryPhoto: "صورة من القاعة", galleryVideo: "فيديو من القاعة", itemsCount: "عنصر", close: "إغلاق", previous: "السابق", next: "التالي"
    },
    en: {
      skip: "Skip to content", skipIntro: "Skip intro", brand: "Middle East Hall", brandSub: "CELEBRATIONS", 
      navAbout: "The hall", navOccasions: "Occasions", navGallery: "Gallery", navReviews: "Reviews", navLocation: "Location", navBooking: "Booking", bookNow: "Plan your event",
      heroTitle: "A place for your joy|in every detail", heroDescription: "At Middle East Celebrations Hall, elegant spaces and thoughtful details create a setting for memories that last. Celebrate your most meaningful day with those who matter most.", exploreHall: "Explore the hall", browseGallery: "View gallery", scrollHint: "Scroll to discover",
      statHalls: "separate halls", statGuests: "approximate guest capacity", statEvents: "types of occasions",
      aboutEyebrow: "A touch of elegance", aboutTitle: "A place made for|your finest moments", aboutText: "In Jeddah's Al-Rehab district, Middle East Celebrations Hall welcomes you with generous spaces and refined details. From the first arrival to the final moment, the venue sets the scene for a celebration of your own.", aboutText2: "The venue has separate men's and women's sections, a ceremonial staircase and aisle, a celebration stage, hospitality spaces, and sound and lighting facilities.", discoverServices: "Discover the facilities",
      occasionsEyebrow: "A place for every joy", occasionsTitle: "Celebrations that feel like you", occasionsIntro: "We welcome the moments that bring loved ones together and deserve a special setting.", weddings: "Weddings", weddingsText: "A beautiful setting for the start of your story.", marriageContract: "Marriage contracts", marriageContractText: "A blessed beginning in an intimate setting.", graduations: "Graduations", graduationsText: "Celebrate every achievement and new beginning.", babyWelcome: "Baby welcomes", babyWelcomeText: "Welcome your little one with a big celebration.", concerts: "Concerts", concertsText: "Musical moments full of life.", festivals: "Events & festivals", festivalsText: "A space for larger gatherings.", birthdays: "Birthdays", birthdaysText: "Make memories with the people you love.",
      servicesEyebrow: "What makes it special", servicesTitle: "Every detail|has its place", servicesIntro: "From space to hospitality, the hall's features come together for a comfortable, elegant celebration.", askPrice: "Ask about packages and prices", service1: "Separate halls for men and women", service2: "Ceremonial aisle, staircase and stage", service3: "Private bridal suite and hospitality spaces", service4: "Luxury buffet tailored to your event", service5: "Sound and lighting for celebrations", service6: "Electronic stage backdrop screen", service7: "Flexible event layout",
      buffetEyebrow: "REFINED HOSPITALITY", buffetTitle: "A taste to complete|the celebration", buffetText: "An elegant buffet with a selection of refined main dishes, starters and desserts. Hospitality options are arranged to suit your preferences and the nature of your event.", buffetPoint1: "Main dishes", buffetPoint2: "Starters & desserts", buffetPoint3: "Tailored options", buffetCaption: "Hospitality is in the details", planBuffet: "Ask about buffet options",
      bookingEyebrow: "CONTACT & BOOKING", bookingTitle: "Let's plan your day|your way", bookingIntro: "Share your event details and send your request directly through WhatsApp. Contact us for availability and pricing.", whatsappLabel: "Booking WhatsApp", callLabel: "Call us", formTitle: "Event inquiry", formName: "Name", formPhone: "Mobile number", formOccasion: "Occasion", formChoose: "Choose an occasion", formDate: "Preferred date", formGuests: "Estimated guests", formNotes: "More details", formSubmit: "Send via WhatsApp", formHint: "WhatsApp will open with your completed inquiry.",
      galleryEyebrow: "A look inside", galleryTitle: "Discover the venue", allGallery: "Full photo and video gallery", previewHall: "The hall", previewDetails: "Details", previewVideos: "Videos",
      reviewsEyebrow: "Guest experiences", reviewsTitle: "Stories shared|by our guests", reviewsText: "Read visitors' reviews and experiences on Google Maps, and discover the venue through the people who celebrated here.", readGoogle: "Read reviews on Google",
      locationEyebrow: "Visit us", locationTitle: "In the heart of Jeddah", locationText: "Al-Rehab district, Al-Haramain Expressway, between Tahlia Bridge and Palestine Bridge, Jeddah.", directions: "Open in Google Maps",
      closingEyebrow: "Your moment awaits", closingTitle: "Let's celebrate together", closingText: "For availability, packages and prices, get in touch with us directly.", contactWhatsapp: "Contact us on WhatsApp",
      footerLine: "For celebrations that stay with you.", footerExplore: "Explore", footerContact: "Contact", copyright: "Middle East Celebrations Hall", backTop: "Back to top ↑", devCredit: "Website developed by", devContact: "Contact",
      galleryPageTitle: "The gallery", galleryPageIntro: "Explore the atmosphere and details of Middle East Celebrations Hall through photos and videos.", photos: "Photos", videos: "Videos",
      galleryPhoto: "Photo of the hall", galleryVideo: "Video of the hall", itemsCount: "items", close: "Close", previous: "Previous", next: "Next"
    }
  };

  const html = document.documentElement;
  const savedLang = sessionStorage.getItem("mehall-language");
  const savedTheme = sessionStorage.getItem("mehall-theme");
  let lang = savedLang === "en" ? "en" : "ar";
  let theme = savedTheme === "dark" ? "dark" : "light";

  function applyLanguage() {
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const value = copy[lang][el.dataset.i18n];
      if (value) el.innerHTML = value.split("|").join("<br>");
    });
    const button = document.getElementById("lang-toggle");
    if (button) {
      button.textContent = lang === "ar" ? "EN" : "عربي";
      button.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التحويل إلى العربية");
    }
    const isGallery = document.body.dataset.page === "gallery";
    document.title = lang === "ar" ? (isGallery ? "المعرض | قاعة الشرق الأوسط للإحتفالات" : "قاعة الشرق الأوسط للإحتفالات | جدة") : (isGallery ? "Gallery | Middle East Celebrations Hall" : "Middle East Celebrations Hall | Jeddah");
    document.querySelectorAll(".brand").forEach(el => el.setAttribute("aria-label", copy[lang].copyright));
    const nav = document.getElementById("site-nav");
    if (nav) nav.setAttribute("aria-label", lang === "ar" ? "التنقل الرئيسي" : "Main navigation");
    const menu = document.getElementById("menu-toggle");
    if (menu) menu.setAttribute("aria-label", lang === "ar" ? "فتح القائمة" : "Open menu");
    const map = document.querySelector(".map-frame iframe");
    if (map) map.title = lang === "ar" ? "موقع قاعة الشرق الأوسط على الخريطة" : "Middle East Celebrations Hall on the map";
    document.querySelectorAll('a[href^="https://wa.me/966566766562?text="]').forEach(el => {
      const message = lang === "ar" ? "مرحباً، أرغب بالاستفسار عن حجز قاعة الشرق الأوسط والباقات والأسعار." : "Hello, I would like to ask about booking Middle East Celebrations Hall, availability, packages and prices.";
      el.href = `https://wa.me/966566766562?text=${encodeURIComponent(message)}`;
    });
    document.dispatchEvent(new CustomEvent("mehall:language", { detail: { lang } }));
  }

  function applyTheme() {
    html.dataset.theme = theme;
    const button = document.getElementById("theme-toggle");
    if (button) {
      button.querySelector("span").textContent = theme === "dark" ? "☼" : "☾";
      const label = theme === "dark" ? (lang === "ar" ? "تفعيل الوضع الفاتح" : "Switch to light mode") : (lang === "ar" ? "تفعيل الوضع الداكن" : "Switch to dark mode");
      button.setAttribute("aria-label", label);
      button.title = label;
    }
  }

  document.getElementById("lang-toggle")?.addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    sessionStorage.setItem("mehall-language", lang);
    applyLanguage();
    applyTheme();
  });
  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    sessionStorage.setItem("mehall-theme", theme);
    applyTheme();
  });

  const menu = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");
  menu?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? (lang === "ar" ? "إغلاق القائمة" : "Close menu") : (lang === "ar" ? "فتح القائمة" : "Open menu"));
  });
  nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu?.setAttribute("aria-expanded", "false");
  }));
  document.getElementById("year").textContent = new Date().getFullYear();

  applyLanguage();
  applyTheme();

  document.querySelectorAll(".preview-tile img[data-fallback]").forEach(img => {
    const recover = () => {
      if (img.dataset.fallbackTried === "true") {
        img.style.visibility = "hidden";
        return;
      }
      img.dataset.fallbackTried = "true";
      img.src = img.dataset.fallback;
    };
    img.addEventListener("error", recover);
    if (img.complete && img.naturalWidth === 0) recover();
  });

  document.getElementById("booking-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const labels = lang === "ar"
      ? ["الاسم", "الجوال", "المناسبة", "التاريخ", "عدد الضيوف", "التفاصيل"]
      : ["Name", "Mobile", "Occasion", "Date", "Guests", "Details"];
    const values = ["name", "phone", "occasion", "date", "guests", "notes"].map(key => String(data.get(key) || "").trim());
    const lines = values.map((value, index) => value ? `${labels[index]}: ${value}` : "").filter(Boolean);
    const heading = lang === "ar" ? "مرحباً، أرغب بالاستفسار عن حجز قاعة الشرق الأوسط للإحتفالات." : "Hello, I would like to inquire about booking Middle East Celebrations Hall.";
    window.location.href = `https://wa.me/966566766562?text=${encodeURIComponent([heading, ...lines].join("\n"))}`;
  });

  window.mehall = { getLanguage: () => lang, text: key => copy[lang][key] };
})();
