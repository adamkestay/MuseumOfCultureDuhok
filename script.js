document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hamburger Menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }

    // Nav scroll behavior
    const nav = document.querySelector('nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Hide nav on scroll down, show on scroll up
        if (window.scrollY > lastScrollY && window.scrollY > 100 && (!navMenu || !navMenu.classList.contains('active'))) {
            nav.classList.add('nav-hidden');
        } else {
            nav.classList.remove('nav-hidden');
        }
        lastScrollY = window.scrollY;
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Light Theme';
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.textContent = 'Light Theme';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeToggle.textContent = 'Dark Theme';
            }
        });
    }

    // Language toggle
    const languageToggle = document.getElementById('language-toggle');
    let currentLanguage = localStorage.getItem('language') || 'en';
    
    const translations = {
        en: {
            "about": "About",
            "exhibits": "Exhibits",
            "gallery": "Gallery",
            "events": "Events",
            "location": "Location",
            "contact": "Contact",
            "langButton": "کوردی",
            "header-title": "Museum of Culture",
            "header-subtitle": "Preserving Heritage, Inspiring Future",
            "hero-title": "Welcome to the Museum of Culture",
            "hero-subtitle": "Discover the history, traditions, and identity of our people.",
            "btn-explore": "Explore Now",
            "about-title": "About the Museum",
            "about-text": "The Museum of Culture is dedicated to preserving cultural heritage, showcasing traditional artifacts, and educating future generations about history and identity.",
            "about-mission-title": "Our Mission",
            "about-mission-text": "To preserve, celebrate, and share the rich cultural heritage of our people with the world, ensuring that traditions and stories are never forgotten.",
            "about-vision-title": "Our Vision",
            "about-vision-text": "To be a beacon of cultural preservation and education, fostering understanding and appreciation for diverse traditions and histories.",
            "about-values-title": "Our Values",
            "about-values-text": "Authenticity, respect, education, and community engagement guide everything we do in preserving our cultural legacy.",
            "exhibits-title": "Exhibits",
            "exhibit1-title": "Traditional Clothing",
            "exhibit1-desc": "Explore authentic Kurdish garments and textiles.",
            "exhibit2-title": "Ancient Tools & Artifacts",
            "exhibit2-desc": "Discover tools from our ancestors' daily lives.",
            "exhibit3-title": "Music and Instruments",
            "exhibit3-desc": "Hear the melodies of traditional Kurdish music.",
            "exhibit4-title": "Historical Documents",
            "exhibit4-desc": "Read stories from our rich history.",
            "gallery-title": "Gallery",
            "events-title": "Upcoming Events",
            "event1-title": "Workshop on Traditional Crafts",
            "event1-desc": "Join us for hands-on crafting sessions.",
            "event2-title": "Lecture on Kurdish History",
            "event2-desc": "Learn from renowned historians.",
            "event3-title": "Cultural Festival",
            "event3-desc": "Celebrate with music, dance, and food.",
            "visitor-title": "Visitor Information",
            "hours-title": "Opening Hours",
            "hours-weekday": "Monday to Friday: 9 AM - 5 PM",
            "hours-saturday": "Saturday: 10 AM - 4 PM",
            "hours-sunday": "Sunday: Closed",
            "admission-title": "Admission",
            "admission-text": "Free for all visitors",
            "facilities-title": "Facilities",
            "facilities-text": "Wheelchair accessible, Free Wi-Fi, Cafeteria",
            "location-title": "Location",
            "location-text": "Visit us at our museum located in Duhok, Etite, Kurdistan. We're easily accessible and welcome visitors from around the world.",
            "location-address-title": "Address",
            "location-address-text": "123 Culture Avenue, Duhok, 42001, Kurdistan",
            "location-transit-title": "Public Transit",
            "location-transit-text": "Accessible via bus lines 5 and 12. The nearest bus stop is 'Museum Central', just a 5-minute walk away.",
            "location-parking-title": "Parking",
            "location-parking-text": "Free parking is available for all visitors in the lot adjacent to the museum.",
            "location-directions-button": "Get Directions",
            "contact-title": "Contact Us",
            "contact-email-label": "Email:",
            "contact-phone-label": "Phone:",
            "contact-location-label": "Location:",
            "contact-follow-label": "Follow us:",
            "connect-title": "Plan Your Visit & Connect",
            "visit-notification-title": "Notify Your Visit",
            "visit-notification-desc": "Let us know when you plan to visit and we'll prepare for your arrival!",
            "visit-name-label": "Name *",
            "visit-email-label": "Email *",
            "visit-phone-label": "Phone Number *",
            "visit-date-label": "Visit Date *",
            "visit-message-label": "Additional Message",
            "visit-message-placeholder": "Any special requests or questions?",
            "visit-submit": "Submit Notification",
            "faq-title": "Frequently Asked Questions",
            "faq-q1": "What are the museum's opening hours?",
            "faq-a1": "We are open Monday to Friday from 9 AM to 5 PM, and Saturday from 10 AM to 4 PM. We are closed on Sundays.",
            "faq-q2": "Is there an admission fee?",
            "faq-a2": "No, admission to the Museum of Culture is completely free for all visitors.",
            "faq-q3": "Is the museum wheelchair accessible?",
            "faq-a3": "Yes, our facility is fully wheelchair accessible with ramps and elevators to all floors.",
            "faq-q4": "Can I take photos inside?",
            "faq-a4": "Photography is allowed for personal use, but please refrain from using flash to preserve the artifacts."
        },
        ku: {
            "about": "دەربارە",
            "exhibits": "نمایشگاهەکان",
            "gallery": "گالەری",
            "events": "بڕیاریگە",
            "location": "شوێن",
            "contact": "پەیوەندی",
            "langButton": "English",
            "header-title": "موزەخانەی جێگیر",
            "header-subtitle": "پاراستنی میراتی قۆڵتوور، هۆکاری داهاتو",
            "hero-title": "بە خێرھاتن بۆ موزەخانەی جێگیر",
            "hero-subtitle": "مێژووی، نێردان و ناسنامەی خەڵکی ئێمە دەست پێ بکە.",
            "btn-explore": "ئیستابەردی کردن",
            "about-title": "دەربارەی موزەخانەکە",
            "about-text": "موزەخانەی جێگیر بۆ پاراستنی میراتی جێگیر، پیشاندانی پوختە بایخیان و فێرکردنی نەوە یاسم دەربارە مێژو و ناسنامە تێپەڕ دەکات.",
            "about-mission-title": "ماموڕەمان",
            "about-mission-text": "پاراستن و ڕازانینی میراتی قۆڵتووری بەهێزی خەڵکی ئێمە لەگەڵ جیھان، بۆ ئەوەی نێردان و چیرۆکەکان تێکۆ نابن.",
            "about-vision-title": "بینینمان",
            "about-vision-text": "بوون بە رووناکی پاراستنی قۆڵتوور و فێرکاری، بوێری تێگەیشتن و فێرخوازی بۆ نێردانی جیاواز و مێژووەکان.",
            "about-values-title": "نرخەکانمان",
            "about-values-text": "راستگوتی، ڕیزلای، فێرکاری، و ئاشتی کۆمار ھیچی تر نیە بۆ پاراستنی میراتی قۆڵتووری ئێمە.",
            "exhibits-title": "نمایشگاهەکان",
            "exhibit1-title": "جلوبەرگی نێردایی",
            "exhibit1-desc": "جلوبەرگ و قومیقە کوردی دەست پێ بکە.",
            "exhibit2-title": "ئامرازی پێشتر و میوحتریپ",
            "exhibit2-desc": "ئامرازی ژیانی رۆژانەی باپیراندی ئێمە دریا کەن.",
            "exhibit3-title": "مۆسیقا و ئامرازی مۆسیقا",
            "exhibit3-desc": "بانگی موسیقاکانی نێردایی کوردی بیست بکە.",
            "exhibit4-title": "دۆکومێنتی مێژوویی",
            "exhibit4-desc": "چیرۆکی مێژووی دەروون پڕ ئێمە بخوێن.",
            "gallery-title": "گالەری",
            "events-title": "بڕیاریگەکانی پاشان",
            "event1-title": "وانگتری سنورمەندی نێردایی",
            "event1-desc": "تێپەڕ بکە بۆ دروستکردنی دەستی.",
            "event2-title": "چاپی مێژووی کوردی",
            "event2-desc": "فێر بپێ لە مێژوونووسی نافخۆشی.",
            "event3-title": "فێستیڤاڵی جێگیر",
            "event3-desc": "جێگیری بکە بە موسیقا، چۆپاو خواردنی",
            "visitor-title": "زانیاری یاریاندە کار",
            "hours-title": "کاتی کردنەوە",
            "hours-weekday": "دووشەم هەتا هێنی: 9 بەیانی - 5 تێپەڕی",
            "hours-saturday": "شەممە: 10 بەیانی - 4 تێپەڕی",
            "hours-sunday": "یەکشەممە: داخراوە",
            "admission-title": "بچووی تێچوون",
            "admission-text": "بێ بڕی بۆ ھەمووی یاریاندێت",
            "facilities-title": "مێکانیزمەکان",
            "facilities-text": "ڕیکبەجێکاوتر، WiFi بێ بڕی، قاھوەخانە",
            "location-title": "شوێن",
            "location-text": "سەردانی موزەخانەکە لە دهوک، ئێتیتە، کوردستاندا بکە. ئێمە بە سادەی دەتوانرێت تێپەڕ بکەن و گشتیاری لە سەرانسەریش قبووڵ دەکەن.",
            "location-address-title": "ناونیشان",
            "location-address-text": "١٢٣ جادەی کەلتور، دهۆک، ٤٢٠٠١، کوردستان",
            "location-transit-title": "گواستنەوەی گشتی",
            "location-transit-text": "بەردەستە لە ڕێگەی هێڵەکانی پاسی ٥ و ١٢. نزیکترین وێستگەی پاس 'مۆزەخانەی ناوەندی'یە، تەنها ٥ خولەک بە پێ.",
            "location-parking-title": "پارکینگ",
            "location-parking-text": "پارکینگی بێبەرامبەر بۆ هەموو سەردانکەران لە پارکینگی تەنیشت مۆزەخانە بەردەستە.",
            "location-directions-button": "وەرگرتنی ڕێنمایی",
            "contact-title": "پەیوەندی کەم ئێمە",
            "contact-email-label": "ئیمەیل:",
            "contact-phone-label": "تەلەفۆن:",
            "contact-location-label": "شوێن:",
            "contact-follow-label": "پەیڕۆ بکە ئێمە:",
            "connect-title": "پلانی سەردان و پەیوەندی",
            "visit-notification-title": "ئاگادارکردنی سەردان",
            "visit-notification-desc": "با بزانین کەی پلانی سەردانی دەکەیت و ئێمە بۆ هاتنت ئامادە دەبین!",
            "visit-name-label": "ناو *",
            "visit-email-label": "ئیمەیڵ *",
            "visit-phone-label": "ژمارەی تەلەفۆن *",
            "visit-date-label": "ڕێکەوتی سەردان *",
            "visit-message-label": "پەیامی زیادە",
            "visit-message-placeholder": "هەر داواکارییەکی تایبەت یان پرسیارێکت هەیە؟",
            "visit-submit": "ناردنی ئاگاداری",
            "faq-title": "پرسیارە باوەکان",
            "faq-q1": "کاتەکانی کردنەوەی مۆزەخانە چۆنە؟",
            "faq-a1": "ئێمە لە دووشەممە تا هەینی لە کاتژمێر ٩ی بەیانی تا ٥ی ئێوارە کراوەین، و شەممە لە ١٠ی بەیانی تا ٤ی ئێوارە. یەکشەممە داخراوە.",
            "faq-q2": "ئایا بلیتی هاتنەژوورەوە هەیە؟",
            "faq-a2": "نەخێر، هاتنەژوورەوە بۆ مۆزەخانەی کەلتوور بۆ هەموو سەردانکەران بەخۆڕاییە.",
            "faq-q3": "ئایا مۆزەخانەکە بۆ خاوەن پێداویستی تایبەت گونجاوە؟",
            "faq-a3": "بەڵێ، دامەزراوەکەمان بە تەواوی بۆ کورسی جووڵاو گونجاوە و ڕێڕەو و ئەسانسۆر بۆ هەموو نهۆمەکان هەیە.",
            "faq-q4": "ئایا دەتوانم وێنە بگرم؟",
            "faq-a4": "وێنەگرتن بۆ بەکارهێنانی کەسی ڕێگەپێدراوە، بەڵام تکایە خۆت بەدوور بگرە لە بەکارهێنانی فلاش بۆ پاراستنی پارچە شوێنەوارییەکان."
        }
    };

    function setLanguageUI(lang) {
        const langTranslations = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (langTranslations[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = langTranslations[key];
                } else {
                    element.textContent = langTranslations[key];
                }
            }
        });

        languageToggle.textContent = langTranslations['langButton'];
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
    }

    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'en' ? 'ku' : 'en';
            setLanguageUI(currentLanguage);
        });
    }

    // Initialize language
    setLanguageUI(currentLanguage);

    // Initialize Leaflet satellite map
    if (document.getElementById('map')) {
        const map = L.map('map').setView([36.84408408884799, 43.073027706009796], 16); // Updated zoom
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles © Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }).addTo(map);
        L.marker([36.84408408884799, 43.073027706009796]).addTo(map)
            .bindPopup('Museum of Culture, Duhok')
            .openPopup();

        // Scroll reveal for map
        window.addEventListener('scroll', function() {
            const mapContainer = document.getElementById('map-container');
            const rect = mapContainer.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                map.invalidateSize();
            }
        });
    }

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    const imagesSrc = [];

    // Collect all image sources
    galleryImages.forEach((image, index) => {
        imagesSrc.push(image.src);
        image.addEventListener('click', () => {
            currentIndex = index;
            updateLightboxImage();
            lightbox.style.display = 'block';
        });
    });

    function updateLightboxImage() {
        lightboxImg.src = imagesSrc[currentIndex];
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + imagesSrc.length) % imagesSrc.length;
            updateLightboxImage();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % imagesSrc.length;
            updateLightboxImage();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + imagesSrc.length) % imagesSrc.length;
                updateLightboxImage();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % imagesSrc.length;
                updateLightboxImage();
            } else if (e.key === 'Escape') {
                lightbox.style.display = 'none';
            }
        }
    });

    if(closeLightbox) {
        closeLightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target == lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Form Protocol Check
    const notificationForm = document.querySelector('.notification-form');
    if (notificationForm) {
        notificationForm.addEventListener('submit', function(e) {
            if (window.location.protocol === 'file:') {
                e.preventDefault();
                alert("⚠️ Cannot submit form from local file!\n\nFor security reasons, email services like FormSubmit do not work when opening the HTML file directly.\n\nPlease use a local web server (like the 'Live Server' extension in VS Code) to test this feature.");
            }
        });

        // Dynamic Redirect URL for FormSubmit
        const nextInput = document.querySelector('input[name="_next"]');
        if (nextInput) {
            const baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
            nextInput.value = `${baseUrl}/thank-you.html`;
        }
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = question.nextElementSibling;
            
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});