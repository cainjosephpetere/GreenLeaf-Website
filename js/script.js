document.addEventListener("DOMContentLoaded", () => {
  // Responsive navigation and current-page indicator.
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href").split("/").pop() === current) link.classList.add("active");
  });

  // Dynamic copyright year.
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  // Accessible FAQ accordion: one answer is expanded at a time.
  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.closest(".faq-item").querySelector(".faq-answer");
      const willOpen = button.getAttribute("aria-expanded") !== "true";
      document.querySelectorAll(".faq-question").forEach(other => {
        other.setAttribute("aria-expanded", "false");
        other.closest(".faq-item").querySelector(".faq-answer").hidden = true;
      });
      button.setAttribute("aria-expanded", String(willOpen));
      answer.hidden = !willOpen;
    });
  });

  // Product search, filtering and sorting using DOM manipulation.
  const productList = document.querySelector("#product-list");
  if (productList) {
    const search = document.querySelector("#product-search");
    const sort = document.querySelector("#product-sort");
    const count = document.querySelector("#product-count");
    const cards = [...productList.querySelectorAll("[data-product]")];
    const updateProducts = () => {
      const term = search.value.trim().toLowerCase();
      const visible = cards.filter(card =>
        `${card.dataset.name} ${card.dataset.category}`.toLowerCase().includes(term)
      );
      const sorted = [...visible];
      if (sort.value === "name") sorted.sort((a,b) => a.dataset.name.localeCompare(b.dataset.name));
      if (sort.value === "price-low") sorted.sort((a,b) => Number(a.dataset.price)-Number(b.dataset.price));
      if (sort.value === "price-high") sorted.sort((a,b) => Number(b.dataset.price)-Number(a.dataset.price));
      cards.forEach(card => { card.hidden = true; });
      sorted.forEach(card => { card.hidden = false; productList.appendChild(card); });
      count.textContent = `Showing ${sorted.length} of ${cards.length} products`;
      let empty = productList.querySelector(".empty-results");
      if (!sorted.length && !empty) {
        empty = document.createElement("p");
        empty.className = "empty-results";
        empty.textContent = "No products match your search. Try another product name or category.";
        productList.appendChild(empty);
      } else if (sorted.length && empty) empty.remove();
    };
    search.addEventListener("input", updateProducts);
    sort.addEventListener("change", updateProducts);
  }

  // Gallery lightbox. Images can be opened by mouse, Enter or Space.
  const galleryImages = [...document.querySelectorAll(".lightbox-image")];
  if (galleryImages.length) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Image preview");
    lightbox.hidden = true;
    lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close image preview">×</button><img alt=""><p class="lightbox-caption"></p>';
    document.body.appendChild(lightbox);
    const preview = lightbox.querySelector("img");
    const close = () => { lightbox.hidden = true; document.body.classList.remove("lightbox-open"); };
    const open = image => {
      preview.src = image.currentSrc || image.src;
      preview.alt = image.alt;
      lightbox.querySelector(".lightbox-caption").textContent = image.closest("figure")?.querySelector("figcaption")?.textContent || image.alt;
      lightbox.hidden = false;
      document.body.classList.add("lightbox-open");
      lightbox.querySelector(".lightbox-close").focus();
    };
    galleryImages.forEach(image => {
      image.addEventListener("click", () => open(image));
      image.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(image); }
      });
    });
    lightbox.querySelector(".lightbox-close").addEventListener("click", close);
    lightbox.addEventListener("click", event => { if (event.target === lightbox) close(); });
    document.addEventListener("keydown", event => { if (event.key === "Escape" && !lightbox.hidden) close(); });
  }

  // Reusable client-side validation with clear, accessible feedback.
  const validateForm = form => {
    const fields = [...form.querySelectorAll("input, select, textarea")];
    let firstInvalid = null;
    fields.forEach(field => {
      field.setCustomValidity("");
      if (field.value.trim() && field.type === "tel" && !/^(\+27|0)[0-9 ]{9,12}$/.test(field.value.trim())) {
        field.setCustomValidity("Enter a South African number beginning with 0 or +27.");
      }
      if (!field.checkValidity() && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) {
      firstInvalid.reportValidity();
      firstInvalid.focus();
      return false;
    }
    return true;
  };

  // Enquiry form: calculate an indicative product estimate or explain quote availability.
  const enquiryForm = document.querySelector("#enquiry-form");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", event => {
      event.preventDefault();
      if (!validateForm(enquiryForm)) return;
      const data = new FormData(enquiryForm);
      const item = data.get("item");
      const quantity = Math.max(1, Number(data.get("quantity") || 1));
      const prices = {
        "Botanical Body Wash": 149,
        "Herbal Cleaning Kit": 229,
        "Leaf & Herb Tea Box": 119
      };
      const notice = document.querySelector("#enquiry-notice");
      let response;
      if (prices[item]) {
        const total = prices[item] * quantity;
        response = `Thank you, ${data.get("name")}. The indicative estimate for ${quantity} × ${item} is R${total.toLocaleString("en-ZA")}. This is a sample project price, not a live stock check or confirmed order.`;
      } else if (data.get("type") === "Workshop" || item === "Community Workshop") {
        response = `Thank you, ${data.get("name")}. Workshop availability and pricing depend on the group size, location and preferred date. The Green Leaf team would provide a custom quotation.`;
      } else {
        response = `Thank you, ${data.get("name")}. Your ${data.get("type").toLowerCase()} has been checked. A team member would confirm availability, bulk pricing or partnership details.`;
      }
      notice.textContent = response;
      notice.classList.add("show");
    });
  }

  // General contact form compiles the validated details into an email draft.
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();
      if (!validateForm(contactForm)) return;
      const data = new FormData(contactForm);
      const subject = encodeURIComponent(`Green Leaf website: ${data.get("type")}`);
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\\nEmail: ${data.get("email")}\\nPhone: ${data.get("phone") || "Not supplied"}\\nMessage type: ${data.get("type")}\\n\\nMessage:\\n${data.get("message")}`
      );
      document.querySelector("#contact-notice").textContent =
        "Your details have been validated. Your default email application will open with the message addressed to hello@greenleaf.example. This is a fictional academic recipient.";
      document.querySelector("#contact-notice").classList.add("show");
      window.location.href = `mailto:hello@greenleaf.example?subject=${subject}&body=${body}`;
    });
  }
});
