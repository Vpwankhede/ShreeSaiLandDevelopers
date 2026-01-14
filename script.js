// Data for services
const services = [
  {
    id: "agriculture",
    title: "Agriculture Land Registry",
    icon: "fas fa-tractor",
    description:
      "Complete registration process for agricultural land with all required documents.",
    needsIdentityDocs: true,
  },
  {
    id: "house",
    title: "House & Plot Registry",
    icon: "fas fa-home",
    description:
      "Registration for residential plots, houses, and commercial properties.",
    needsIdentityDocs: true,
  },
  {
    id: "valuation",
    title: "Valuation (Plot / House / Farm)",
    icon: "fas fa-chart-line",
    description:
      "Professional property valuation services for accurate market pricing.",
    needsIdentityDocs: false,
  },
  {
    id: "agreements",
    title: "Agreements / Paper Notice",
    icon: "fas fa-file-contract",
    description:
      "Drafting and registration of property agreements and legal notices.",
    needsIdentityDocs: true,
  },
  {
    id: "zone",
    title: "Zone Certificate",
    icon: "fas fa-map-marked-alt",
    description:
      "Obtain zone certificates for property development and construction.",
    needsIdentityDocs: true,
  },
  {
    id: "properties",
    title: "Available Properties",
    icon: "fas fa-search",
    description: "Browse properties with clear titles available for purchase.",
    needsIdentityDocs: false,
  },
];

// Data for document lists
const documentLists = [
  {
    id: "agriculture-docs",
    title: "Agriculture Land Registry Documents",
    documents: [
      { name: "Satbara", icon: "fas fa-file-alt" },
      { name: "8-A", icon: "fas fa-file-alt" },
      { name: "Patwari Map", icon: "fas fa-map" },
      { name: "K-Prat", icon: "fas fa-file-alt" },
      { name: "Zone Certificate", icon: "fas fa-certificate" },
      { name: "Seller Aadhar Card", icon: "fas fa-id-card" },
      { name: "Seller PAN Card", icon: "fas fa-credit-card" },
      { name: "Seller Photo", icon: "fas fa-camera" },
      { name: "Purchaser Aadhar Card", icon: "fas fa-id-card" },
      { name: "Purchaser PAN Card", icon: "fas fa-credit-card" },
      { name: "Purchaser Photo", icon: "fas fa-camera" },
      { name: "Witness 1 Aadhar + Photo", icon: "fas fa-user-friends" },
      { name: "Witness 2 Aadhar + Photo", icon: "fas fa-user-friends" },
    ],
  },
  {
    id: "first-sale-plot",
    title: "First Sale Plot Registry",
    documents: [
      { name: "NA/TP Order with Single Plot Satbara", icon: "fas fa-file-alt" },
      { name: "Layout Map", icon: "fas fa-map" },
      { name: "Aadhar Card (Seller & Purchaser)", icon: "fas fa-id-card" },
      { name: "PAN Card (Seller & Purchaser)", icon: "fas fa-credit-card" },
      { name: "Photos (Seller & Purchaser)", icon: "fas fa-camera" },
      { name: "Witness 1 Aadhar + Photo", icon: "fas fa-user-friends" },
      { name: "Witness 2 Aadhar + Photo", icon: "fas fa-user-friends" },
    ],
  },
  {
    id: "resale-plot",
    title: "Resale Plot Registry",
    documents: [
      { name: "New Tax Pauti and New Karakarni", icon: "fas fa-file-alt" },
      {
        name: "Old Plot Registry (Single Plot Satbara / RL for Plot / NMRDA Sanctioned Map - Any One)",
        icon: "fas fa-file-archive",
      },
      { name: "Aadhar Card (Seller & Purchaser)", icon: "fas fa-id-card" },
      { name: "PAN Card (Seller & Purchaser)", icon: "fas fa-credit-card" },
      { name: "Photos (Seller & Purchaser)", icon: "fas fa-camera" },
      { name: "Witness 1 Aadhar + Photo", icon: "fas fa-user-friends" },
      { name: "Witness 2 Aadhar + Photo", icon: "fas fa-user-friends" },
    ],
  },
  {
    id: "gaothan-plot",
    title: "Gaothan Plot Registry",
    documents: [
      { name: "New Tax Pauti and New Karakarni", icon: "fas fa-file-alt" },
      {
        name: "Gaothan Certificate / Working Place Certificate",
        icon: "fas fa-certificate",
      },
      { name: "Bhumi Lekh Office Certificate", icon: "fas fa-certificate" },
      { name: "Aadhar Card (Seller & Purchaser)", icon: "fas fa-id-card" },
      { name: "PAN Card (Seller & Purchaser)", icon: "fas fa-credit-card" },
      { name: "Witness 1 Aadhar Card", icon: "fas fa-user-friends" },
      { name: "Witness 2 Aadhar Card", icon: "fas fa-user-friends" },
    ],
  },
];

// Data for available properties
const properties = [
  {
    type: "agricultural",
    title: "Available Agricultural Land",
    description:
      "Fertile agricultural land with clear title, suitable for farming. 2-5 acres available in Kanhan area.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "plots",
    title: "Available Plots",
    description:
      "Residential and commercial plots with proper approvals and clear titles. Ready for construction.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "houses",
    title: "Available Houses",
    description:
      "Ready-to-move-in houses with complete documentation and clear titles. 2-4 BHK available.",
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

// Identity documents for all services
const identityDocuments = [
  { id: "sellerAadhar", label: "Seller Aadhar Card", required: true },
  { id: "sellerPan", label: "Seller PAN Card", required: true },
  { id: "sellerPhoto", label: "Seller Photo", required: true },
  { id: "purchaserAadhar", label: "Purchaser Aadhar Card", required: true },
  { id: "purchaserPan", label: "Purchaser PAN Card", required: true },
  { id: "purchaserPhoto", label: "Purchaser Photo", required: true },
  { id: "witness1Aadhar", label: "Witness 1 Aadhar", required: true },
  { id: "witness1Photo", label: "Witness 1 Photo", required: true },
  { id: "witness2Aadhar", label: "Witness 2 Aadhar", required: true },
  { id: "witness2Photo", label: "Witness 2 Photo", required: true },
];

// Service-specific additional documents
const serviceAdditionalDocs = {
  agriculture: [
    { id: "satbara", label: "Satbara", required: true },
    { id: "eightA", label: "8-A", required: true },
    { id: "patwariMap", label: "Patwari Map", required: true },
    { id: "kPrat", label: "K-Prat", required: true },
    { id: "zoneCert", label: "Zone Certificate", required: true },
  ],
  house: [
    { id: "propertyType", label: "Property Type Document", required: true },
  ],
  agreements: [
    { id: "agreementType", label: "Agreement Type Document", required: true },
  ],
  zone: [
    { id: "satbara", label: "Satbara", required: true },
    { id: "patwariMap", label: "Patwari Map", required: true },
    {
      id: "aadharSatbara",
      label: "Aadhar Card (Any Satbara Name)",
      required: true,
    },
  ],
};

// DOM Elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");
const servicesGrid = document.querySelector(".services-grid");
const accordionContainer = document.querySelector(".accordion-container");
const propertiesGrid = document.querySelector(".properties-grid");
const serviceModalOverlay = document.getElementById("serviceModalOverlay");
const serviceModal = document.getElementById("serviceModal");
const uploadModalOverlay = document.getElementById("uploadModalOverlay");
const uploadModal = document.getElementById("uploadModal");
const uploadDocumentsBtn = document.getElementById("uploadDocumentsBtn");
const submitPropertyBtn = document.getElementById("submitPropertyBtn");
const progressOverlay = document.getElementById("progressOverlay");
const successMessage = document.getElementById("successMessage");
const successText = document.getElementById("successText");

// File storage for uploads
let uploadedFiles = {
  agriculture: {},
  valuation: {},
  property: {},
  house: {},
  agreements: {},
  zone: {},
};

// ========== VALIDATION FUNCTIONS ==========
function validatePhoneNumber(phone) {
  // Accepts 10-digit Indian phone numbers
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\D/g, ""));
}

function validatePrice(price) {
  const cleanPrice = price.replace(/[₹$\s,]/g, "").trim();
  return /^\d+(\.\d+)?$/.test(cleanPrice);
}

function validateArea(area) {
  // Accepts formats like: 1000 sq. ft., 2 acres, 500 sqft, 1.5 acres
  const areaRegex =
    /^\d+(\.\d+)?\s*(sq\.?\s*ft\.?|acres?|sqft|sq\s*m|square\s*(feet|meters?))$/i;
  return areaRegex.test(area.trim());
}

function validateRequiredField(value) {
  return value && value.trim().length > 0;
}

function showValidationError(elementId, message) {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Remove existing error
  const existingError = element.parentElement.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  // Remove error styling
  element.classList.remove("error");

  if (message) {
    // Add error styling
    element.classList.add("error");

    // Create error message element
    const errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.textContent = message;
    errorElement.style.color = "#e74c3c";
    errorElement.style.fontSize = "0.85rem";
    errorElement.style.marginTop = "5px";

    // Insert after the input
    element.parentElement.appendChild(errorElement);
  }
}

// Add CSS for error styling
const errorCSS = `
    .error {
        border-color: #e74c3c !important;
        background-color: rgba(231, 76, 60, 0.05) !important;
    }
    
    .error:focus {
        box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2) !important;
    }
    
    .error-message {
        color: #e74c3c;
        font-size: 0.85rem;
        margin-top: 5px;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .error-message:before {
        content: "⚠";
        font-size: 0.9rem;
    }
    
    .form-group.required label:after {
        content: " *";
        color: #e74c3c;
    }
    
    input[type="tel"] {
        letter-spacing: 1px;
    }
`;

// Inject error CSS
const style = document.createElement("style");
style.textContent = errorCSS;
document.head.appendChild(style);
// ========== END VALIDATION FUNCTIONS ==========

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  // Generate service cards
  generateServiceCards();

  // Generate document accordions
  generateDocumentAccordions();

  // Generate property cards
  generatePropertyCards();

  // Setup event listeners
  setupEventListeners();

  // Setup form submissions
  setupFormSubmissions();

  // Setup input formatting and validation
  setupInputFormatting();
});

// Setup input formatting for phone numbers and prices
function setupInputFormatting() {
  setTimeout(() => {
    // Phone number formatting
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach((input) => {
      input.addEventListener("input", function (e) {
        // Format phone number as user types
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 10) {
          value = value.substring(0, 10);
        }

        // Format with spaces for better readability
        let formattedValue = "";
        for (let i = 0; i < value.length; i++) {
          if (i === 3 || i === 6) {
            formattedValue += " ";
          }
          formattedValue += value[i];
        }

        e.target.value = formattedValue;

        // Clear error when user starts typing
        if (value.length > 0) {
          showValidationError(e.target.id, "");
        }
      });

      // Add placeholder for guidance
      input.placeholder = "Enter 10-digit phone number";
    });

    // Price formatting
    const priceInput = document.getElementById("propertyPrice");
    if (priceInput) {
      priceInput.addEventListener("input", function (e) {
        if (e.target.value.trim().length > 0) {
          showValidationError("propertyPrice", "");
        }
      });

      priceInput.placeholder = "Enter price (e.g., ₹15,00,000)";
    }

    // Area input guidance
    const areaInput = document.getElementById("propertyArea");
    if (areaInput) {
      areaInput.addEventListener("input", function (e) {
        if (e.target.value.trim().length > 0) {
          showValidationError("propertyArea", "");
        }
      });

      areaInput.setAttribute(
        "title",
        "Examples: 1000 sq. ft., 2 acres, 500 sqft"
      );
    }
  }, 1000);
}

// Generate service cards
function generateServiceCards() {
  services.forEach((service) => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.dataset.serviceId = service.id;

    card.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <div class="service-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <div class="btn btn-outline">View Details</div>
            </div>
        `;

    servicesGrid.appendChild(card);

    // Add click event to service card
    card.addEventListener("click", () => openServiceModal(service.id));
  });
}

// Generate document accordions
function generateDocumentAccordions() {
  documentLists.forEach((list, index) => {
    const accordion = document.createElement("div");
    accordion.className = "accordion";
    accordion.dataset.index = index;

    accordion.innerHTML = `
            <div class="accordion-header">
                <span>${list.title}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="accordion-content">
                ${list.documents
                  .map(
                    (doc) => `
                    <div class="document-item">
                        <div class="document-icon">
                            <i class="${doc.icon}"></i>
                        </div>
                        <div class="document-details">
                            <h4>${doc.name}</h4>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;

    accordionContainer.appendChild(accordion);

    // Add click event to accordion header
    const header = accordion.querySelector(".accordion-header");
    header.addEventListener("click", () => {
      const content = accordion.querySelector(".accordion-content");
      const isActive = content.classList.contains("active");

      // Close all accordions
      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.classList.remove("active");
      });
      document.querySelectorAll(".accordion-header").forEach((item) => {
        item.classList.remove("active");
      });

      // Open clicked accordion if it wasn't active
      if (!isActive) {
        content.classList.add("active");
        header.classList.add("active");
      }
    });
  });
}

// Generate property cards
function generatePropertyCards() {
  properties.forEach((property) => {
    const card = document.createElement("div");
    card.className = "property-card";

    card.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="property-img">
            <div class="property-content">
                <h3>${property.title}</h3>
                <p>${property.description}</p>
                <button class="btn btn-outline view-property-btn" data-type="${property.type}">View Properties</button>
            </div>
        `;

    propertiesGrid.appendChild(card);
  });

  // Add event listeners to view property buttons
  document.querySelectorAll(".view-property-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const type = this.dataset.type;
      showPropertyGallery(type);
    });
  });
}

// Setup event listeners
function setupEventListeners() {
  // Mobile menu toggle
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Service links in footer
  document.querySelectorAll(".service-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const serviceId = this.dataset.service;
      openServiceModal(serviceId);
    });
  });

  // Upload documents button
  uploadDocumentsBtn.addEventListener("click", openUploadModal);

  // Submit property button
  submitPropertyBtn.addEventListener("click", openPropertySubmissionModal);

  // Close modals when clicking overlay
  serviceModalOverlay.addEventListener("click", function (e) {
    if (e.target === this) {
      closeServiceModal();
    }
  });

  uploadModalOverlay.addEventListener("click", function (e) {
    if (e.target === this) {
      closeUploadModal();
    }
  });

  // Close modal with escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeServiceModal();
      closeUploadModal();
    }
  });
}

// Setup form submissions
function setupFormSubmissions() {
  // Valuation form
  const valuationForm = document.getElementById("valuationForm");
  if (valuationForm) {
    valuationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      submitValuationForm();
    });

    // Setup file uploads for valuation
    setTimeout(() => {
      setupFileUploads("valuation");
    }, 100);
  }

  // Contact form
  const contactForm = document.getElementById("contactForm");

  if (contactForm !== null) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      submitContactForm();
    });
  }
}

// Open service modal
function openServiceModal(serviceId) {
  const service = services.find((s) => s.id === serviceId);
  if (!service) return;

  let modalContent = "";

  // Common identity documents section
  const identityDocsHTML = `
        <div class="form-section-title">🧑 Identity Documents (Upload Images)</div>
        <div class="identity-docs-grid">
            ${identityDocuments
              .map(
                (doc) => `
                <div class="identity-doc-item">
                    <label>${doc.label}</label>
                    <div class="upload-area" id="${serviceId}_${doc.id}Upload">
                        <i class="fas fa-file-upload upload-icon"></i>
                        <div class="upload-text">Click to upload ${doc.label}</div>
                        <div class="upload-subtext">JPG, PNG or PDF (Max 5MB)</div>
                        <input type="file" class="file-input" accept=".jpg,.jpeg,.png,.pdf" data-id="${doc.id}" data-service="${serviceId}">
                    </div>
                    <div class="file-preview" id="${serviceId}_${doc.id}Preview"></div>
                </div>
            `
              )
              .join("")}
        </div>
    `;

  if (serviceId === "agriculture") {
    // Agriculture specific additional documents
    const additionalDocsHTML = serviceAdditionalDocs[serviceId]
      .map(
        (doc) => `
            <div class="form-group">
                <label>${doc.label}</label>
                <div class="upload-area" id="${serviceId}_${doc.id}Upload">
                    <i class="fas fa-file-upload upload-icon"></i>
                    <div class="upload-text">Click to upload ${doc.label}</div>
                    <div class="upload-subtext">JPG, PNG or PDF (Max 5MB)</div>
                    <input type="file" class="file-input" accept=".jpg,.jpeg,.png,.pdf" data-id="${doc.id}" data-service="${serviceId}">
                </div>
                <div class="file-preview" id="${serviceId}_${doc.id}Preview"></div>
            </div>
        `
      )
      .join("");

    modalContent = `
            <div class="modal-header">
                <h3>${service.title}</h3>
                <button class="close-modal" id="closeServiceModal">&times;</button>
            </div>
            <div class="modal-body">
                <p>Upload the required documents for agriculture land registry.</p>
                
                <div class="form-section-title">📂 Land Documents (Upload Images)</div>
                ${additionalDocsHTML}
                
                ${identityDocsHTML}
                
                <div style="text-align: center; margin-top: 40px;">
                    <button type="button" class="btn btn-submit" id="submitServiceForm">Submit Documents</button>
                </div>
            </div>
        `;
  } else if (serviceId === "house") {
    modalContent = `
            <div class="modal-header">
                <h3>${service.title}</h3>
                <button class="close-modal" id="closeServiceModal">&times;</button>
            </div>
            <div class="modal-body">
                <p>Upload the required documents for house and plot registry.</p>
                
                <div class="form-group">
                    <label for="registryType">Registry Type</label>
                    <select id="registryType" class="form-control" required>
                        <option value="">Select Registry Type</option>
                        <option value="first-sale">First Sale Plot Registry</option>
                        <option value="resale">Resale Plot Registry</option>
                        <option value="gaothan">Gaothan Plot Registry</option>
                    </select>
                </div>
                
                <div class="form-section-title">📂 Required Documents</div>
                <div id="houseDocsContainer">
                    <!-- Documents will be loaded based on registry type -->
                </div>
                
                ${identityDocsHTML}
                
                <div style="text-align: center; margin-top: 40px;">
                    <button type="button" class="btn btn-submit" id="submitServiceForm">Submit Documents</button>
                </div>
            </div>
        `;
  } else if (serviceId === "agreements") {
    modalContent = `
            <div class="modal-header">
                <h3>${service.title}</h3>
                <button class="close-modal" id="closeServiceModal">&times;</button>
            </div>
            <div class="modal-body">
                <p>Upload the required documents for agreements and paper notice.</p>
                
                <div class="form-group">
                    <label for="agreementType">Agreement Type</label>
                    <select id="agreementType" class="form-control" required>
                        <option value="">Select Agreement Type</option>
                        <option value="plot">Plot Agreement / Paper Notice</option>
                        <option value="agriculture">Agriculture Land Agreement / Paper Notice</option>
                    </select>
                </div>
                
                <div class="form-section-title">📂 Required Documents</div>
                <div id="agreementDocsContainer">
                    <!-- Documents will be loaded based on agreement type -->
                </div>
                
                ${identityDocsHTML}
                
                <div style="text-align: center; margin-top: 40px;">
                    <button type="button" class="btn btn-submit" id="submitServiceForm">Submit Documents</button>
                </div>
            </div>
        `;
  } else if (serviceId === "zone") {
    const additionalDocsHTML = serviceAdditionalDocs[serviceId]
      .map(
        (doc) => `
            <div class="form-group">
                <label>${doc.label}</label>
                <div class="upload-area" id="${serviceId}_${doc.id}Upload">
                    <i class="fas fa-file-upload upload-icon"></i>
                    <div class="upload-text">Click to upload ${doc.label}</div>
                    <div class="upload-subtext">JPG, PNG or PDF (Max 5MB)</div>
                    <input type="file" class="file-input" accept=".jpg,.jpeg,.png,.pdf" data-id="${doc.id}" data-service="${serviceId}">
                </div>
                <div class="file-preview" id="${serviceId}_${doc.id}Preview"></div>
            </div>
        `
      )
      .join("");

    modalContent = `
            <div class="modal-header">
                <h3>${service.title}</h3>
                <button class="close-modal" id="closeServiceModal">&times;</button>
            </div>
            <div class="modal-body">
                <p>Upload the required documents for zone certificate.</p>
                
                <div class="form-section-title">📂 Required Documents</div>
                ${additionalDocsHTML}
                
                ${identityDocsHTML}
                
                <div style="text-align: center; margin-top: 40px;">
                    <button type="button" class="btn btn-submit" id="submitServiceForm">Submit Documents</button>
                </div>
            </div>
        `;
  } else if (serviceId === "valuation") {
    // Already has its own section
    closeServiceModal();
    document.querySelector("#valuation").scrollIntoView({ behavior: "smooth" });
    return;
  } else {
    modalContent = `
            <div class="modal-header">
                <h3>${service.title}</h3>
                <button class="close-modal" id="closeServiceModal">&times;</button>
            </div>
            <div class="modal-body">
                <p>${service.description}</p>
                <p>For more information about ${service.title}, please visit our office or contact us directly.</p>
                <div style="text-align: center; margin-top: 30px;">
                    <a href="#contact" class="btn" onclick="closeServiceModal()">Contact Us</a>
                    <a href="#office" class="btn btn-outline" onclick="closeServiceModal()">Visit Office</a>
                </div>
            </div>
        `;
  }

  serviceModal.innerHTML = modalContent;
  serviceModalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";

  // Add event listener to close button
  document
    .getElementById("closeServiceModal")
    .addEventListener("click", closeServiceModal);

  // Setup file uploads for the form
  if (service.needsIdentityDocs) {
    setupFileUploads(serviceId);

    // Add submit event listener
    const submitBtn = document.getElementById("submitServiceForm");
    if (submitBtn) {
      submitBtn.addEventListener("click", () => submitServiceForm(serviceId));
    }

    // Setup dynamic document loading for house registry
    if (serviceId === "house") {
      const registryTypeSelect = document.getElementById("registryType");
      const docsContainer = document.getElementById("houseDocsContainer");

      registryTypeSelect.addEventListener("change", function () {
        loadHouseRegistryDocs(this.value, docsContainer, serviceId);
      });

      // Load initial documents
      loadHouseRegistryDocs("first-sale", docsContainer, serviceId);
    }

    // Setup dynamic document loading for agreements
    if (serviceId === "agreements") {
      const agreementTypeSelect = document.getElementById("agreementType");
      const docsContainer = document.getElementById("agreementDocsContainer");

      agreementTypeSelect.addEventListener("change", function () {
        loadAgreementDocs(this.value, docsContainer, serviceId);
      });

      // Load initial documents
      loadAgreementDocs("plot", docsContainer, serviceId);
    }
  }
}

// Load house registry documents based on type
function loadHouseRegistryDocs(type, container, serviceId) {
  let docs = [];

  switch (type) {
    case "first-sale":
      docs = [
        {
          id: "naTpOrder",
          label: "NA/TP Order with Single Plot Satbara",
          required: true,
        },
        { id: "layoutMap", label: "Layout Map", required: true },
      ];
      break;
    case "resale":
      docs = [
        {
          id: "taxPauti",
          label: "New Tax Pauti and New Karakarni",
          required: true,
        },
        {
          id: "oldRegistry",
          label:
            "Old Plot Registry (Single Plot Satbara / RL for Plot / NMRDA Sanctioned Map)",
          required: true,
        },
      ];
      break;
    case "gaothan":
      docs = [
        {
          id: "taxPauti",
          label: "New Tax Pauti and New Karakarni",
          required: true,
        },
        {
          id: "gaothanCert",
          label: "Gaothan Certificate / Working Place Certificate",
          required: true,
        },
        {
          id: "bhumiLekh",
          label: "Bhumi Lekh Office Certificate",
          required: true,
        },
      ];
      break;
  }

  const docsHTML = docs
    .map(
      (doc) => `
        <div class="form-group">
            <label>${doc.label}</label>
            <div class="upload-area" id="${serviceId}_${doc.id}Upload">
                <i class="fas fa-file-upload upload-icon"></i>
                <div class="upload-text">Click to upload ${doc.label}</div>
                <div class="upload-subtext">JPG, PNG or PDF (Max 5MB)</div>
                <input type="file" class="file-input" accept=".jpg,.jpeg,.png,.pdf" data-id="${doc.id}" data-service="${serviceId}">
            </div>
            <div class="file-preview" id="${serviceId}_${doc.id}Preview"></div>
        </div>
    `
    )
    .join("");

  container.innerHTML = docsHTML;

  // Re-setup file uploads for new elements
  setTimeout(() => {
    setupFileUploads(serviceId);
  }, 100);
}

// Load agreement documents based on type
function loadAgreementDocs(type, container, serviceId) {
  let docs = [];

  switch (type) {
    case "plot":
      docs = [
        {
          id: "taxPauti",
          label: "Tax Pauti and Karakarni / Single Satbara",
          required: true,
        },
      ];
      break;
    case "agriculture":
      docs = [
        { id: "satbara", label: "Satbara and Patwari Map", required: true },
      ];
      break;
  }

  const docsHTML = docs
    .map(
      (doc) => `
        <div class="form-group">
            <label>${doc.label}</label>
            <div class="upload-area" id="${serviceId}_${doc.id}Upload">
                <i class="fas fa-file-upload upload-icon"></i>
                <div class="upload-text">Click to upload ${doc.label}</div>
                <div class="upload-subtext">JPG, PNG or PDF (Max 5MB)</div>
                <input type="file" class="file-input" accept=".jpg,.jpeg,.png,.pdf" data-id="${doc.id}" data-service="${serviceId}">
            </div>
            <div class="file-preview" id="${serviceId}_${doc.id}Preview"></div>
        </div>
    `
    )
    .join("");

  container.innerHTML = docsHTML;

  // Re-setup file uploads for new elements
  setTimeout(() => {
    setupFileUploads(serviceId);
  }, 100);
}

// Close service modal
function closeServiceModal() {
  serviceModalOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Open upload modal
function openUploadModal() {
  const modalContent = `
        <div class="modal-header">
            <h3>Upload Documents</h3>
            <button class="close-modal" id="closeUploadModal">&times;</button>
        </div>
        <div class="modal-body">
            <p>Select the type of documents you want to upload:</p>
            
            <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 30px;" id="uploadOptions">
                ${services
                  .filter((s) => s.id !== "properties" && s.id !== "valuation")
                  .map(
                    (service) => `
                    <div class="service-card" style="cursor: pointer; min-width: 200px;" data-service-id="${service.id}">
                        <div class="service-icon">
                            <i class="${service.icon}"></i>
                        </div>
                        <div class="service-content">
                            <h3>${service.title}</h3>
                            <p>${service.description}</p>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
            
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
                <p>For other document uploads, please visit our office or contact us directly.</p>
                <div style="text-align: center; margin-top: 20px;">
                    <a href="#contact" class="btn btn-outline" onclick="closeUploadModal()">Contact Us</a>
                </div>
            </div>
        </div>
    `;

  uploadModal.innerHTML = modalContent;
  uploadModalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";

  // Add event listener to close button
  document
    .getElementById("closeUploadModal")
    .addEventListener("click", closeUploadModal);

  // Add event listeners to service cards
  setTimeout(() => {
    document
      .querySelectorAll("#uploadOptions .service-card")
      .forEach((card) => {
        card.addEventListener("click", function () {
          const serviceId = this.dataset.serviceId;
          // Close upload modal first
          closeUploadModal();
          // Then open service modal after a small delay
          setTimeout(() => {
            openServiceModal(serviceId);
          }, 300);
        });
      });
  }, 100);
}

// Close upload modal
function closeUploadModal() {
  uploadModalOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Open property submission modal
function openPropertySubmissionModal() {
  closeUploadModal();

  const modalContent = `
        <div class="modal-header">
            <h3>Submit Property for Listing</h3>
            <button class="close-modal" id="closeServiceModal">&times;</button>
        </div>
        <div class="modal-body">
            <p>Submit your property details for listing in our available properties section. Our team will review and contact you.</p>
            
            <form id="propertyForm" class="styled-form">
                <div class="form-group">
                    <label for="propertyType">Property Type</label>
                    <select id="propertyType" class="form-control" required>
                        <option value="">Select Property Type</option>
                        <option value="agricultural">Agricultural Land</option>
                        <option value="plot">Plot</option>
                        <option value="house">House</option>
                        <option value="commercial">Commercial Property</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="propertyLocation">Property Location</label>
                    <input type="text" id="propertyLocation" class="form-control" placeholder="Enter property location" required>
                </div>
                
                <div class="form-group">
                    <label for="propertyArea">Area (in sq. ft. or acres)</label>
                    <input type="text" id="propertyArea" class="form-control" placeholder="e.g., 1000 sq. ft. or 2 acres" required>
                </div>
                
                <div class="form-group">
                    <label for="propertyPrice">Expected Price</label>
                    <input type="text" id="propertyPrice" class="form-control" placeholder="Enter expected price" required>
                </div>
                
                <div class="form-group">
                    <label for="propertyContact">Your Contact Number</label>
                    <input type="tel" id="propertyContact" class="form-control" placeholder="Enter your contact number" required>
                </div>
                
                <div class="form-group">
                    <label>Property Documents (Upload Images)</label>
                    <div class="upload-area" id="propertyDocsUpload">
                        <i class="fas fa-file-upload upload-icon"></i>
                        <div class="upload-text">Click to upload property documents</div>
                        <div class="upload-subtext">JPG, PNG or PDF (Max 5MB each)</div>
                        <input type="file" class="file-input" accept=".jpg,.jpeg,.png,.pdf" data-id="propertyDocs" data-service="property" multiple>
                    </div>
                    <div class="file-preview" id="propertyDocsPreview"></div>
                </div>
                
                <div class="form-group">
                    <label>Property Images / Video</label>
                    <div class="upload-area" id="propertyMediaUpload">
                        <i class="fas fa-file-upload upload-icon"></i>
                        <div class="upload-text">Click to upload property images or video</div>
                        <div class="upload-subtext">JPG, PNG, MP4, MOV (Max 10MB each)</div>
                        <input type="file" class="file-input" accept=".jpg,.jpeg,.png,.mp4,.mov" data-id="propertyMedia" data-service="property" multiple>
                    </div>
                    <div class="file-preview" id="propertyMediaPreview"></div>
                </div>
                
                <div style="text-align: center; margin-top: 40px;">
                    <button type="submit" class="btn btn-submit">Submit Property Details</button>
                </div>
            </form>
        </div>
    `;

  serviceModal.innerHTML = modalContent;
  serviceModalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";

  // Add event listener to close button
  document
    .getElementById("closeServiceModal")
    .addEventListener("click", closeServiceModal);

  // Setup file uploads for property form
  setupFileUploads("property");

  // Add form submit event
  const propertyForm = document.getElementById("propertyForm");
  if (propertyForm) {
    propertyForm.addEventListener("submit", function (e) {
      e.preventDefault();
      submitPropertyForm();
    });
  }
}

// Show property gallery
function showPropertyGallery(type) {
  const propertyType =
    type === "agricultural"
      ? "Agricultural Land"
      : type === "plots"
      ? "Plots"
      : "Houses";

  const modalContent = `
        <div class="modal-header">
            <h3>Available ${propertyType}</h3>
            <button class="close-modal" id="closeServiceModal">&times;</button>
        </div>
        <div class="modal-body">
            <p>These properties have clear titles and are available for purchase. Contact us for more details.</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; margin-top: 30px;">
                <div class="property-card">
                    <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Agricultural Land" class="property-img">
                    <div class="property-content">
                        <h4>Agricultural Land - 5 acres</h4>
                        <p>Kanhan area, fertile soil, water available</p>
                        <p><strong>Price: ₹15,00,000</strong></p>
                    </div>
                </div>
                
                <div class="property-card">
                    <img src="https://images.unsplash.com/photo-1575408264798-b50b252663e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Agricultural Land" class="property-img">
                    <div class="property-content">
                        <h4>Agricultural Land - 3 acres</h4>
                        <p>Near Tarsha Road, clear title</p>
                        <p><strong>Price: ₹9,00,000</strong></p>
                    </div>
                </div>
                
                <div class="property-card">
                    <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Plot" class="property-img">
                    <div class="property-content">
                        <h4>Residential Plot - 2000 sq.ft.</h4>
                        <p>Approved layout, Kanhan area</p>
                        <p><strong>Price: ₹8,50,000</strong></p>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 40px;">
                <p>Interested in any of these properties? Contact us for more details or site visit.</p>
                <a href="#contact" class="btn" onclick="closeServiceModal()">Contact Us</a>
            </div>
        </div>
    `;

  serviceModal.innerHTML = modalContent;
  serviceModalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";

  // Add event listener to close button
  document
    .getElementById("closeServiceModal")
    .addEventListener("click", closeServiceModal);
}

// Setup file uploads
function setupFileUploads(serviceType) {
  // Wait a moment for DOM to be ready
  setTimeout(() => {
    document
      .querySelectorAll(`.file-input[data-service="${serviceType}"]`)
      .forEach((input) => {
        const fieldId = input.dataset.id;
        const uploadArea = input.closest(".upload-area");
        const previewId = uploadArea.nextElementSibling.id;

        uploadArea.addEventListener("click", () => input.click());

        input.addEventListener("change", function (e) {
          handleFileUpload(e, serviceType, fieldId, previewId);
        });
      });
  }, 100);
}

// Handle file upload
function handleFileUpload(event, serviceType, fieldId, previewId) {
  const files = event.target.files;
  const previewContainer = document.getElementById(previewId);

  if (!uploadedFiles[serviceType]) {
    uploadedFiles[serviceType] = {};
  }

  uploadedFiles[serviceType][fieldId] = Array.from(files);

  // Clear previous preview
  previewContainer.innerHTML = "";

  // Add new previews
  Array.from(files).forEach((file, index) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const previewItem = document.createElement("div");
      previewItem.className = "preview-item";

      if (file.type.startsWith("image/")) {
        previewItem.innerHTML = `
                    <img src="${e.target.result}" alt="${file.name}">
                    <p>${
                      file.name.length > 15
                        ? file.name.substring(0, 15) + "..."
                        : file.name
                    }</p>
                    <button class="remove-file" data-service="${serviceType}" data-field="${fieldId}" data-index="${index}">&times;</button>
                `;
      } else if (file.type === "application/pdf") {
        previewItem.innerHTML = `
                    <i class="fas fa-file-pdf" style="font-size: 3rem; color: #e74c3c; margin: 10px 0;"></i>
                    <p>${
                      file.name.length > 15
                        ? file.name.substring(0, 15) + "..."
                        : file.name
                    }</p>
                    <button class="remove-file" data-service="${serviceType}" data-field="${fieldId}" data-index="${index}">&times;</button>
                `;
      } else if (file.type.startsWith("video/")) {
        previewItem.innerHTML = `
                    <i class="fas fa-file-video" style="font-size: 3rem; color: #3498db; margin: 10px 0;"></i>
                    <p>${
                      file.name.length > 15
                        ? file.name.substring(0, 15) + "..."
                        : file.name
                    }</p>
                    <button class="remove-file" data-service="${serviceType}" data-field="${fieldId}" data-index="${index}">&times;</button>
                `;
      } else {
        previewItem.innerHTML = `
                    <i class="fas fa-file" style="font-size: 3rem; color: #7f8c8d; margin: 10px 0;"></i>
                    <p>${
                      file.name.length > 15
                        ? file.name.substring(0, 15) + "..."
                        : file.name
                    }</p>
                    <button class="remove-file" data-service="${serviceType}" data-field="${fieldId}" data-index="${index}">&times;</button>
                `;
      }

      previewContainer.appendChild(previewItem);

      // Add event listener to remove button
      previewItem
        .querySelector(".remove-file")
        .addEventListener("click", function () {
          const service = this.dataset.service;
          const field = this.dataset.field;
          const index = parseInt(this.dataset.index);

          removeUploadedFile(service, field, index);
          this.closest(".preview-item").remove();
        });
    };

    reader.readAsDataURL(file);
  });
}

// Remove uploaded file
function removeUploadedFile(serviceType, fieldId, index) {
  if (uploadedFiles[serviceType] && uploadedFiles[serviceType][fieldId]) {
    uploadedFiles[serviceType][fieldId].splice(index, 1);

    // If no files left, remove the field
    if (uploadedFiles[serviceType][fieldId].length === 0) {
      delete uploadedFiles[serviceType][fieldId];
    }
  }
}

// Submit service form
function submitServiceForm(serviceId) {
  // Check if any files are uploaded
  const files = uploadedFiles[serviceId];
  const fileCount = Object.keys(files).reduce(
    (count, key) => count + (files[key] ? files[key].length : 0),
    0
  );

  if (fileCount === 0) {
    showSuccessMessage(
      "Please upload at least one document before submitting.",
      false
    );
    return;
  }

  // Show progress indicator
  progressOverlay.classList.add("active");

  // Simulate form submission
  setTimeout(() => {
    progressOverlay.classList.remove("active");
    showSuccessMessage(
      `Your ${
        services.find((s) => s.id === serviceId).title
      } documents have been submitted successfully! We will contact you soon.`
    );
    closeServiceModal();

    // Reset form
    uploadedFiles[serviceId] = {};
    document.querySelectorAll(`.file-preview`).forEach((preview) => {
      preview.innerHTML = "";
    });
  }, 2000);
}

// ========== UPDATED FORM SUBMISSION FUNCTIONS WITH VALIDATION ==========

// Submit valuation form with validation
function submitValuationForm() {
  // Clear all previous errors
  document
    .querySelectorAll(".error")
    .forEach((el) => el.classList.remove("error"));
  document.querySelectorAll(".error-message").forEach((el) => el.remove());

  const valuationType = document.getElementById("valuationType").value;

  let isValid = true;

  // Validate Valuation Type
  if (!validateRequiredField(valuationType)) {
    showValidationError("valuationType", "Please select valuation type");
    isValid = false;
  }

  // Check if any files are uploaded
  const files = uploadedFiles["valuation"];
  const fileCount = Object.keys(files).reduce(
    (count, key) => count + (files[key] ? files[key].length : 0),
    0
  );

  if (fileCount === 0) {
    showSuccessMessage(
      "Please upload at least one document for valuation.",
      false
    );
    isValid = false;
  }

  if (!isValid) {
    // Scroll to first error
    const firstError = document.querySelector(".error");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      firstError.focus();
    }
    return;
  }

  // Show progress indicator
  progressOverlay.classList.add("active");

  // Simulate form submission
  setTimeout(() => {
    progressOverlay.classList.remove("active");
    showSuccessMessage(
      "Your valuation request has been submitted successfully! We will contact you with the estimated value within 2-3 working days."
    );

    // Reset form
    uploadedFiles["valuation"] = {};
    document.querySelectorAll(".file-preview").forEach((preview) => {
      preview.innerHTML = "";
    });

    // Reset file inputs and selects
    document.querySelectorAll(".file-input").forEach((input) => {
      input.value = "";
    });
    document.getElementById("valuationType").value = "";
  }, 2000);
}

// Submit property form with validation
function submitPropertyForm() {
  // Clear all previous errors
  document
    .querySelectorAll(".error")
    .forEach((el) => el.classList.remove("error"));
  document.querySelectorAll(".error-message").forEach((el) => el.remove());

  const propertyType = document.getElementById("propertyType").value;
  const location = document.getElementById("propertyLocation").value;
  const area = document.getElementById("propertyArea").value;
  const price = document.getElementById("propertyPrice").value;
  const contact = document.getElementById("propertyContact").value;

  let isValid = true;

  // Validate Property Type
  if (!validateRequiredField(propertyType)) {
    showValidationError("propertyType", "Please select a property type");
    isValid = false;
  }

  // Validate Location
  if (!validateRequiredField(location)) {
    showValidationError("propertyLocation", "Please enter property location");
    isValid = false;
  } else if (location.trim().length < 5) {
    showValidationError(
      "propertyLocation",
      "Location should be at least 5 characters"
    );
    isValid = false;
  }

  // Validate Area
  if (!validateRequiredField(area)) {
    showValidationError("propertyArea", "Please enter property area");
    isValid = false;
  } else if (!validateArea(area)) {
    showValidationError(
      "propertyArea",
      "Please enter area in valid format (e.g., 1000 sq. ft. or 2 acres)"
    );
    isValid = false;
  }

  // Validate Price
  if (!validateRequiredField(price)) {
    showValidationError("propertyPrice", "Please enter expected price");
    isValid = false;
  } else if (!validatePrice(price)) {
    showValidationError(
      "propertyPrice",
      "Please enter a valid price (e.g., 15,00,000 or ₹15,00,000)"
    );
    isValid = false;
  }

  // Validate Contact Number
  if (!validateRequiredField(contact)) {
    showValidationError("propertyContact", "Please enter contact number");
    isValid = false;
  } else if (!validatePhoneNumber(contact)) {
    showValidationError(
      "propertyContact",
      "Please enter a valid 10-digit Indian phone number (starting with 6-9)"
    );
    isValid = false;
  }

  // Check if any files are uploaded
  const files = uploadedFiles["property"];
  const fileCount = Object.keys(files).reduce(
    (count, key) => count + (files[key] ? files[key].length : 0),
    0
  );

  if (fileCount === 0) {
    showSuccessMessage(
      "Please upload at least one property document or image.",
      false
    );
    isValid = false;
  }

  if (!isValid) {
    // Scroll to first error
    const firstError = document.querySelector(".error");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      firstError.focus();
    }
    return;
  }

  // Show progress indicator
  progressOverlay.classList.add("active");

  // Simulate form submission
  setTimeout(() => {
    progressOverlay.classList.remove("active");
    showSuccessMessage(
      "Your property details have been submitted successfully! Our team will review and contact you soon."
    );
    closeServiceModal();

    // Reset form
    uploadedFiles["property"] = {};
    document.getElementById("propertyForm").reset();
  }, 2000);
}

// Submit contact form with validation
function submitContactForm() {
  // Clear errors
  document
    .querySelectorAll(".error")
    .forEach((el) => el.classList.remove("error"));
  document.querySelectorAll(".error-message").forEach((el) => el.remove());

  const name = document.getElementById("contactName").value;
  const phone = document.getElementById("contactPhone").value;
  const message = document.getElementById("contactMessage").value;

  let isValid = true;

  if (!validateRequiredField(name)) {
    showValidationError("contactName", "Please enter your name");
    isValid = false;
  }

  if (!validatePhoneNumber(phone)) {
    showValidationError("contactPhone", "Enter valid 10-digit phone number");
    isValid = false;
  }

  if (!validateRequiredField(message)) {
    showValidationError("contactMessage", "Please enter message");
    isValid = false;
  }

  if (!isValid) return;

  progressOverlay.classList.add("active");

  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      name,
      phone,
      message,
    })
    .then(() => {
      progressOverlay.classList.remove("active");
      showSuccessMessage("Your message has been sent successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch(() => {
      progressOverlay.classList.remove("active");
      showSuccessMessage("Failed to send message. Please try again.", false);
    });
}

// Show success message
function showSuccessMessage(message, isSuccess = true) {
  successText.textContent = message;

  if (!isSuccess) {
    successMessage.style.backgroundColor = "#e74c3c";
  } else {
    successMessage.style.backgroundColor = "#2ecc71";
  }

  successMessage.classList.add("active");

  // Hide message after 5 seconds
  setTimeout(() => {
    successMessage.classList.remove("active");
  }, 5000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    }
  });
});

// Make "Upload Documents" button in hero work
if (uploadDocumentsBtn) {
  uploadDocumentsBtn.addEventListener("click", function (e) {
    e.preventDefault();
    openUploadModal();
  });
}

// ================= LANGUAGE TOGGLE (SAFE VERSION) =================
document.addEventListener("DOMContentLoaded", function () {
  const langEnBtn = document.getElementById("lang-en");
  const langHiBtn = document.getElementById("lang-hi");

  if (!langEnBtn || !langHiBtn) {
    console.warn("Language buttons not found");
    return;
  }

  function setLanguage(lang) {
    document.querySelectorAll("[data-en]").forEach(el => {
      if (el.dataset[lang]) {
        el.textContent = el.dataset[lang];
      }
    });

    langEnBtn.classList.toggle("active", lang === "en");
    langHiBtn.classList.toggle("active", lang === "hi");

    localStorage.setItem("siteLang", lang);
  }

  // Button clicks
  langEnBtn.addEventListener("click", () => setLanguage("en"));
  langHiBtn.addEventListener("click", () => setLanguage("hi"));

  // Load saved language
  const savedLang = localStorage.getItem("siteLang") || "en";
  setLanguage(savedLang);
});
