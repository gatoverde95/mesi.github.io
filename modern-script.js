// Initialize Lucide icons and translations
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  } else {
    console.error("Lucide is not defined. Ensure Lucide library is properly included.")
  }

  // Initialize navigation
  initNavigation()

  // Initialize smooth scrolling
  initSmoothScrolling()

  // Initialize animations
  initAnimations()

  // Initialize mobile menu
  initMobileMenu()

  // Apply translations after DOM is loaded
  setTimeout(() => {
    if (typeof SJTSW_TranslatePage === "function") {
      SJTSW_TranslatePage()
    }
  }, 100)
})

// Navigation functionality
function initNavigation() {
  const navbar = document.querySelector(".navbar")
  let lastScrollY = window.scrollY

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > 100) {
      navbar.style.background = "rgba(26, 26, 26, 0.95)"
      navbar.style.backdropFilter = "blur(20px)"
    } else {
      navbar.style.background = "rgba(26, 26, 26, 0.95)"
      navbar.style.backdropFilter = "blur(10px)"
    }

    // Hide/show navbar on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      navbar.style.transform = "translateY(-100%)"
    } else {
      navbar.style.transform = "translateY(0)"
    }

    lastScrollY = currentScrollY
  })

  // Dropdown functionality
  const dropdown = document.querySelector(".nav-dropdown")
  const dropdownContent = document.querySelector(".dropdown-content")

  if (dropdown && dropdownContent) {
    dropdown.addEventListener("mouseenter", () => {
      dropdownContent.style.opacity = "1"
      dropdownContent.style.visibility = "visible"
      dropdownContent.style.transform = "translateY(0)"
    })

    dropdown.addEventListener("mouseleave", () => {
      dropdownContent.style.opacity = "0"
      dropdownContent.style.visibility = "hidden"
      dropdownContent.style.transform = "translateY(-10px)"
    })
  }
}

// Mobile menu functionality
function initMobileMenu() {
  const navToggle = document.getElementById("navToggle")
  const navMenu = document.getElementById("navMenu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")

      // Toggle hamburger icon
      const icon = navToggle.querySelector("i")
      if (navMenu.classList.contains("active")) {
        icon.setAttribute("data-lucide", "x")
      } else {
        icon.setAttribute("data-lucide", "menu")
      }
      if (typeof lucide !== "undefined") {
        lucide.createIcons()
      }
    })

    // Close menu when clicking on links
    const navLinks = navMenu.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        const icon = navToggle.querySelector("i")
        icon.setAttribute("data-lucide", "menu")
        if (typeof lucide !== "undefined") {
          lucide.createIcons()
        }
      })
    })

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove("active")
        const icon = navToggle.querySelector("i")
        icon.setAttribute("data-lucide", "menu")
        if (typeof lucide !== "undefined") {
          lucide.createIcons()
        }
      }
    })
  }
}

// Smooth scrolling functionality
function initSmoothScrolling() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const offsetTop = target.offsetTop - 80 // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// Scroll to section function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const offsetTop = section.offsetTop - 80 // Account for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

// Animation functionality
function initAnimations() {
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".feature-card, .download-card, .spin-item, .technical-content, .technical-image",
  )
  animateElements.forEach((el) => {
    observer.observe(el)
  })

  // Parallax effect for hero image
  const heroImage = document.querySelector(".hero-img")
  if (heroImage) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.2
      heroImage.style.transform = `translateY(${rate}px)`
    })
  }
}

// Button click effects
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn") || e.target.closest(".btn")) {
    // Add ripple effect
    const button = e.target.classList.contains("btn") ? e.target : e.target.closest(".btn")
    const ripple = document.createElement("span")
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = size + "px"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.classList.add("ripple")

    button.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  }
})

// Add ripple CSS
const style = document.createElement("style")
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Loading states for download buttons
document.querySelectorAll(".download-primary, .spin-primary").forEach((button) => {
  button.addEventListener("click", function (e) {
    const originalText = this.innerHTML

    // Get the current language for the loading text
    const userLanguage = navigator.language || navigator.userLanguage
    let loadingText = "Downloading..."

    if (userLanguage.startsWith("es")) {
      loadingText = "Descargando..."
    } else if (userLanguage.startsWith("pt")) {
      loadingText = "Baixando..."
    }

    this.innerHTML = `<i data-lucide="loader-2"></i> <span>${loadingText}</span>`
    this.classList.add("loading")

    // Re-initialize icons for the loader
    if (typeof lucide !== "undefined") {
      lucide.createIcons()
    }

    // Reset after 3 seconds (simulated download start)
    setTimeout(() => {
      this.innerHTML = originalText
      this.classList.remove("loading")
      if (typeof lucide !== "undefined") {
        lucide.createIcons()
      }
    }, 3000)
  })
})

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  // ESC key closes mobile menu
  if (e.key === "Escape") {
    const navMenu = document.getElementById("navMenu")
    const navToggle = document.getElementById("navToggle")

    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active")
      const icon = navToggle.querySelector("i")
      icon.setAttribute("data-lucide", "menu")
      if (typeof lucide !== "undefined") {
        lucide.createIcons()
      }
    }
  }
})

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
  // Any additional scroll handling can go here
}, 10)

window.addEventListener("scroll", debouncedScroll)

// Preload critical images
function preloadImages() {
  const criticalImages = [
    "images/cuerdos_main.webp",
    "images/cuerdos-standard.webp",
    "images/cuerdos-legacy.webp",
    "images/spins.webp",
  ]

  criticalImages.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

// Initialize preloading
preloadImages()

// Error handling for images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", function () {
    console.warn("Failed to load image:", this.src)
    // Don't hide the image, just log the error
  })
})

// Language detection and redirection (similar to original)
function detectLanguageAndRedirect() {
  const userLanguage = navigator.language || navigator.userLanguage

  // Only redirect if on spins page and language is Spanish
  if (window.location.pathname.includes("spins.html") && userLanguage.startsWith("es")) {
    // Could redirect to Spanish version if it exists
    // window.location.href = 'spins_es.html';
  }
}

// Initialize language detection
detectLanguageAndRedirect()

// Smooth transitions for all elements
const transitionStyle = document.createElement("style")
transitionStyle.textContent = `
    * {
        transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, 
                   transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease;
    }
`
document.head.appendChild(transitionStyle)

// Force Roboto font loading
const fontStyle = document.createElement("style")
fontStyle.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
    
    * {
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
    }
`
document.head.appendChild(fontStyle)

// Language detection for changelog redirection
function detectLanguageForChangelog() {
  const userLanguage = navigator.language || navigator.userLanguage

  // Check if we're on the changelog page
  if (window.location.pathname.includes("changelog.html") && !window.location.pathname.includes("changelog_es.html")) {
    // If user language is Spanish, redirect to Spanish changelog
    if (userLanguage.startsWith("es")) {
      window.location.href = "changelog_es.html"
    }
  }
}

// Initialize changelog language detection
detectLanguageForChangelog()

// Update navigation links based on language
function updateNavigationLinks() {
  const userLanguage = navigator.language || navigator.userLanguage
  const changelogLinks = document.querySelectorAll('a[href="changelog.html"]')

  if (userLanguage.startsWith("es")) {
    changelogLinks.forEach((link) => {
      link.href = "changelog_es.html"
    })
  }
}

// Initialize navigation updates
updateNavigationLinks()
