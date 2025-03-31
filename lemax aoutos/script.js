document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mainNav = document.querySelector(".main-nav");

  mobileMenuBtn.addEventListener("click", function () {
    mainNav.classList.toggle("active");
    mobileMenuBtn.innerHTML = mainNav.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Hero Slider
  const heroSlider = document.querySelector(".hero-slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-slide");
  const nextBtn = document.querySelector(".next-slide");
  const dotsContainer = document.querySelector(".slider-dots");
  let currentSlide = 0;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function goToSlide(slideIndex) {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === slideIndex);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === slideIndex);
    });

    currentSlide = slideIndex;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(currentSlide);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Auto slide change
  let slideInterval = setInterval(nextSlide, 5000);

  // Pause on hover
  heroSlider.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  heroSlider.addEventListener("mouseleave", () => {
    slideInterval = setInterval(nextSlide, 5000);
  });

  // Testimonial Slider
  const testimonials = document.querySelectorAll(".testimonial");
  const prevTestimonial = document.querySelector(".prev-testimonial");
  const nextTestimonial = document.querySelector(".next-testimonial");
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle("active", i === index);
    });

    currentTestimonial = index;
  }

  function nextTestimonialSlide() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  function prevTestimonialSlide() {
    currentTestimonial =
      (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  }

  nextTestimonial.addEventListener("click", nextTestimonialSlide);
  prevTestimonial.addEventListener("click", prevTestimonialSlide);

  // Auto testimonial change
  setInterval(nextTestimonialSlide, 7000);

  // Back to Top Button
  const backToTopBtn = document.querySelector(".back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Header scroll effect
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Inventory Filter
  const filterButtons = document.querySelectorAll(".filter-btn");
  const inventoryGrid = document.querySelector(".inventory-grid");

  // Sample inventory data (in a real app, this would come from an API)
  const inventoryData = [
    {
      id: 1,
      make: "Lexus",
      model: "Model lx570",
      year: 2020,
      price: 30000000,
      mileage: 0,
      type: "Petro",
      status: "new",
      image:
        "https://th.bing.com/th/id/OIP.JhgWpmAR5CgdKUyU1JLAhwHaJQ?rs=1&pid=ImgDetMain",
      specs: {
        engine: "Tri Motor",
        transmission: "Automatic",
        drivetrain: "AWD",
        fuel: "",
      },
    },
    {
      id: 2,
      make: "Landcruiser prado",
      model: "ZX",
      year: 2024,
      price: 42000000,
      mileage: 0,
      type: "Prado",
      status: "new",
      image:
        "https://th.bing.com/th/id/OIP.1FrJ1SWZrVhfEVkdgc2DeAHaEM?w=295&h=180&c=7&r=0&o=5&pid=1.7",
      specs: {
        engine: "3.7L Twin-Turbo Flat-6",
        transmission: "PDK",
        drivetrain: "AWD",
        fuel: "Diesel",
      },
    },
    {
      id: 3,
      make: "Landrover",
      model: "Vogue V6",
      year: 2020,
      price: 38000000,
      mileage: 0,
      type: "fuel",
      status: "new",
      image:
        "data:image/jpeg;base64,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",
      specs: {
        engine: "V6",
        transmission: "Automatic",
        drivetrain: "AWD",
        fuel: "Diesel",
      },
    },
    {
      id: 4,
      make: "Mercedes-Benz",
      model: "EQS 580",
      year: 2024,
      price: 250000000,
      mileage: 0,
      mileage: 2500,
      type: "Fuel",
      status: "New",
      image:
        "https://th.bing.com/th/id/OIP.XE1p6x7ZfMaS6gYvpWjOwwHaJQ?rs=1&pid=ImgDetMain",
      specs: {
        engine: "Dual Motor",
        transmission: "Automatic",
        drivetrain: "AWD",
        fuel: "Petrol",
      },
    },
    {
      id: 5,
      make: "Laandrover",
      model: "Land rover Defender",
      year: 2023,
      price: 500000000,
      mileage: 0,
      type: "electric",
      status: "new",
      image:
        "https://th.bing.com/th/id/OIP.faPMAK7Vxo5l5oj4KrbJZQHaJQ?rs=1&pid=ImgDetMain",
      specs: {
        engine: "Dual Motor",
        transmission: "Automatic",
        drivetrain: "AWD",
        fuel: "Diesel",
      },
    },
    {
      id: 6,
      make: "Mercedes-Benz",
      model: "S-Class",
      year: 2026,
      price: 45000000,
      mileage: 0,
      type: "convertible",
      status: "New",
      image:
        "https://benzliving.co.ke/media/k2/items/cache/dd34e32172fe0202ef287e574244e1d2_10_L.jpg",
      specs: {
        engine: "GLE43",
        transmission: "Automatic",
        drivetrain: "RWD",
        fuel: "Diesel",
      },
    },
  ];

  // Render inventory items
  function renderInventory(items) {
    inventoryGrid.innerHTML = "";

    items.forEach((item) => {
      const vehicleCard = document.createElement("div");
      vehicleCard.className = "vehicle-card";
      vehicleCard.dataset.type = item.type;
      vehicleCard.dataset.status = item.status;

      vehicleCard.innerHTML = `
              <div class="vehicle-image">
                  <img src="${item.image}" alt="${item.make} ${item.model}">
                  <span class="vehicle-badge">${
                    item.status === "new" ? "New" : "Pre-Owned"
                  }</span>
              </div>
              <div class="vehicle-details">
                  <div class="vehicle-make">${item.make}</div>
                  <h3 class="vehicle-model">${item.model}</h3>
                  <div class="vehicle-specs">
                      <div class="vehicle-spec"><i class="fas fa-calendar-alt"></i> ${
                        item.year
                      }</div>
                      <div class="vehicle-spec"><i class="fas fa-tachometer-alt"></i> ${item.mileage.toLocaleString()} mi</div>
                      <div class="vehicle-spec"><i class="fas fa-gas-pump"></i> ${
                        item.specs.fuel
                      }</div>
                      <div class="vehicle-spec"><i class="fas fa-cog"></i> ${
                        item.specs.transmission
                      }</div>
                  </div>
                  <div class="vehicle-price">$${item.price.toLocaleString()} <span>+ taxes</span></div>
                  <div class="vehicle-actions">
                      <button class="btn btn-outline">Details</button>
                      <button class="btn">Inquire</button>
                  </div>
              </div>
          `;

      inventoryGrid.appendChild(vehicleCard);
    });
  }

  // Initial render
  renderInventory(inventoryData);

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filter = this.dataset.filter;

      if (filter === "all") {
        renderInventory(inventoryData);
      } else {
        const filteredItems = inventoryData.filter((item) => {
          if (filter === "new") return item.status === "new";
          if (filter === "used") return item.status === "used";
          if (filter === "electric") return item.type === "electric";
          if (filter === "luxury") return item.price > 80000;
          return true;
        });

        renderInventory(filteredItems);
      }
    });
  });

  // Make and model dropdown relationship
  const makeSelect = document.getElementById("make");
  const modelSelect = document.getElementById("model");

  const modelsByMake = {
    audi: [
      "A3",
      "A4",
      "A6",
      "A8",
      "Q3",
      "Q5",
      "Q7",
      "Q8",
      "e-tron",
      "RS e-tron GT",
    ],
    bmw: [
      "2 Series",
      "3 Series",
      "5 Series",
      "7 Series",
      "X3",
      "X5",
      "X7",
      "i4",
      "i7",
      "iX",
    ],
    mercedes: [
      "A-Class",
      "C-Class",
      "E-Class",
      "S-Class",
      "GLA",
      "GLC",
      "GLE",
      "GLS",
      "EQS",
      "EQE",
    ],
    tesla: [
      "Model 3",
      "Model S",
      "Model X",
      "Model Y",
      "Cybertruck",
      "Roadster",
    ],
    porsche: ["911", "Taycan", "Panamera", "Cayenne", "Macan"],
    lexus: ["ES", "LS", "RX", "NX", "UX", "LC", "GX", "LX"],
  };

  makeSelect.addEventListener("change", function () {
    const selectedMake = this.value;
    modelSelect.innerHTML = '<option value="">All Models</option>';

    if (selectedMake && modelsByMake[selectedMake]) {
      modelsByMake[selectedMake].forEach((model) => {
        const option = document.createElement("option");
        option.value = model.toLowerCase().replace(" ", "-");
        option.textContent = model;
        modelSelect.appendChild(option);
      });
    }
  });

  // Form submission
  document
    .getElementById("vehicle-search")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      // In a real app, this would filter the inventory based on search criteria
      alert(
        "Search functionality would filter inventory based on your criteria in a real implementation."
      );
    });

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message! We will contact you soon.");
      this.reset();
    });

  document
    .getElementById("newsletterForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for subscribing to our newsletter!");
      this.reset();
    });

  // Animate stats
  const statNumbers = document.querySelectorAll(".stat-number");

  function animateStats() {
    statNumbers.forEach((stat) => {
      const target = parseInt(stat.dataset.count);
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const counter = setInterval(() => {
        current += step;
        if (current >= target) {
          clearInterval(counter);
          stat.textContent = target;
        } else {
          stat.textContent = Math.floor(current);
        }
      }, 16);
    });
  }

  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("stats")) {
            animateStats();
          }
          entry.target.classList.add("animated");
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".stats, .service-card, .vehicle-card")
    .forEach((el) => {
      observer.observe(el);
    });
});
