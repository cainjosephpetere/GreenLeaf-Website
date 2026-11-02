# Green Leaf Website

## WEDE5020 Part 3 — Functionality, SEO and Deployment

### Student details
- **Name:** Cain Joseph Petere
- **Student number:** ST10541995

## Project overview
Green Leaf is a fictional South African organisation focused on plant-inspired products, sustainable living and community education. The website provides information about the organisation, products, services, sustainability, a gallery, FAQs, and separate enquiry and contact forms.

The project is a static front-end academic prototype. It does not process payments, create real orders, confirm live inventory, or store form submissions on a server. The contact form validates the information and opens the visitor's default email application with a prepared message. The enquiry form provides an indicative response using the sample product prices shown on the Products page.

## Website pages
1. Home — `index.html`
2. About Us — `pages/about.html`
3. Products — `pages/products.html`
4. Services — `pages/services.html`
5. Gallery — `pages/gallery.html`
6. Sustainability — `pages/sustainability.html`
7. Enquiry — `pages/enquiry.html`
8. Contact — `pages/contact.html`
9. FAQ — `pages/faq.html`

## Project structure
```text
GreenLeaf-Website/
├── index.html
├── pages/
│   ├── about.html
│   ├── contact.html
│   ├── enquiry.html
│   ├── faq.html
│   ├── gallery.html
│   ├── products.html
│   ├── services.html
│   └── sustainability.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── media/
│   ├── images/
│   └── video/
├── robots.txt
├── sitemap.xml
└── README.md
```

## Part 2 work retained
The Part 2 implementation is retained in this release:
- Shared external stylesheet at `css/style.css`.
- CSS custom properties for the Green Leaf colour palette, typography, spacing, borders and shadows.
- CSS Grid and Flexbox for page layouts, navigation, cards, forms and banners.
- Responsive breakpoints at 900px and 620px.
- Relative sizing units and responsive image variants using `srcset` and `sizes`.
- Keyboard focus states, skip navigation, descriptive image alternative text and a mobile navigation menu.
- Structural comments and consistent Green Leaf branding across all nine pages.

## Part 3 functionality

### 1. Interactive elements and DOM manipulation
- **FAQ accordion:** FAQ questions expand and collapse using JavaScript. The `aria-expanded` state is updated for assistive technology, and only one answer is open at a time.
- **Gallery lightbox:** Selecting a gallery image opens a larger preview. It can be closed with the close button, by selecting the backdrop, or by pressing Escape. Gallery images can also be opened with Enter or Space.
- **Responsive navigation:** The mobile menu updates its `aria-expanded` value when opened or closed.
- **Animations and transitions:** Product cards, feedback messages and accordion content use small CSS transitions/animations. The stylesheet respects `prefers-reduced-motion`.
- **Dynamic content:** The copyright year is generated with JavaScript rather than hard-coded.

### 2. Search, filter and sorting
The Products page includes:
- A text search that matches product names and categories.
- Sorting by featured order, name, price ascending and price descending.
- A live result count.
- A helpful empty-results message when no products match.

JavaScript reads the product data attributes and updates the visible DOM elements without reloading the page.

### 3. Interactive map
The Contact page uses the Leaflet JavaScript mapping library and OpenStreetMap map tiles. It displays approximate city-centre markers for Cape Town and Johannesburg. The markers are illustrative because Green Leaf is a fictional organisation; they do not represent verified office coordinates or the example street addresses.

The map requires an internet connection to load the Leaflet library and map tiles. Map attribution is displayed on the map.

### 4. Form functionality and validation

#### Enquiry form — `pages/enquiry.html`
The enquiry form collects:
- Full name and email address.
- South African phone number.
- Enquiry type.
- Product or service of interest.
- Quantity or group size.
- A message describing the request.

HTML validation attributes and JavaScript validation check required fields, email format, South African phone format, minimum message length and sensible quantity limits. After validation, JavaScript provides an indicative product total for the sample products or explains that a workshop, service or partnership requires a custom quotation. No real stock check or order is created.

#### Contact form — `pages/contact.html`
The general contact form collects basic contact details, message type and a full message. JavaScript validates the fields, compiles the submitted values into an email subject and body, and opens the visitor's default email application addressed to `hello@greenleaf.example`.

**Submission limitation:** `hello@greenleaf.example` is a reserved fictional example address used for this academic scenario. Replace it with an organisation-controlled email address before presenting the website as a real service. A static website cannot securely send or store messages by itself. A real deployment should connect the form to a trusted form-processing service or server-side endpoint. The current forms therefore demonstrate client-side validation and the email hand-off, not server-side/AJAX processing.

## Search Engine Optimisation (SEO)

### On-page SEO
- Each HTML page has a unique, descriptive title tag and meta description.
- Relevant page-specific keywords are included in the metadata and natural page content.
- Pages use a logical heading structure, with one primary H1 heading and supporting H2/H3 headings.
- Images use descriptive alternative text; product and gallery PNG assets use responsive image sources.
- Navigation and contextual links connect the pages internally.
- Clean, readable filenames are used for page URLs.
- Responsive layouts and viewport metadata support mobile usability.
- Images include dimensions or responsive sizing where appropriate; lazy loading is used for below-the-fold images.

### Off-page and local SEO plan
Green Leaf is fictional, so no real backlinks, customer reviews, business listings or social profiles are claimed. For a real organisation, off-page SEO work would include:
- Publishing useful sustainability articles that relevant organisations may reference.
- Sharing useful pages through official social media accounts.
- Creating and verifying a Google Business Profile only if the organisation has an eligible real-world presence.
- Keeping real business name, address, phone number and opening hours consistent across legitimate directories.

### Technical SEO
- `robots.txt` provides crawler instructions.
- `sitemap.xml` lists the nine website pages.
- The sitemap and robots file currently contain a **placeholder deployment URL**. Replace `https://your-github-username.github.io/greenleaf-website/` in both files with the exact public website base URL before submitting the deployed website.
- Page speed is supported by responsive image variants, lazy loading and lightweight vanilla JavaScript. The Leaflet map is loaded only on the Contact page.
- The website should be deployed over HTTPS. Do not place passwords, API secrets or private information in HTML or JavaScript.
- Static hosting providers supply HTTPS, but server-side security headers and form spam protection depend on the hosting platform or an added backend/form service.

## Testing checklist
Test the following before submission:
1. Open `index.html` and navigate through all nine pages.
2. Test the mobile menu at a narrow viewport and confirm its expanded state changes.
3. Open each gallery image using a mouse and keyboard; close the lightbox with Escape and the close button.
4. Expand and collapse each FAQ answer using the keyboard and mouse.
5. Search for a product by name and category; test each sorting option and the no-results state.
6. Submit the enquiry form with missing/invalid values, an invalid phone number, and valid values. Confirm validation messages and indicative estimates.
7. Submit the contact form with invalid and valid values. Confirm the email draft contains the submitted details.
8. Open the Contact page with an internet connection and check both map markers and map attribution.
9. Test responsive layouts at desktop, tablet and mobile widths.
10. Check browser developer tools for missing files, JavaScript errors and broken image paths.
11. Replace the placeholder sitemap URL, deploy the site and confirm the sitemap and robots file are accessible at the deployed root.

## Deployment
The project can be deployed as a static website using GitHub Pages or Netlify.

### GitHub Pages
1. Push the project folders and files to the root of a GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Under Build and deployment, select **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then save.
5. Wait for GitHub Pages to publish the website.
6. Copy the public Pages URL, update the base URL in `sitemap.xml` and `robots.txt`, commit and push the changes.
7. Open the deployed home page and test every page and feature.

### Netlify
1. Sign in to Netlify and choose **Add new site → Import an existing project**.
2. Connect the GitHub repository.
3. Use the repository root as the publish directory. No build command is required for this static HTML/CSS/JavaScript project.
4. Deploy the site and copy the generated public URL.
5. Replace the placeholder base URL in `sitemap.xml` and `robots.txt` with the Netlify URL, then push the updated files to GitHub and redeploy.

## Git workflow
Use descriptive commit messages and push the updated files to the remote repository. Example:
```bash
git add .
git commit -m "Complete Part 3 functionality and SEO enhancements"
git push origin main
```

## Changelog

### Part 3 — Functionality, SEO and deployment preparation
- Audited the Part 2 website and retained its nine-page structure, responsive CSS system, navigation, image assets and existing accessibility improvements.
- Replaced the generic demonstration form handler with separate enquiry and contact form workflows to reflect the different purposes required by the assignment.
- Expanded the enquiry form with enquiry type, product/service selection, quantity, South African phone validation, required fields and message-length constraints.
- Added JavaScript validation before processing the enquiry form. Invalid fields display browser validation feedback and receive keyboard focus.
- Added an indicative price calculation for the three sample products: Botanical Body Wash (R149), Herbal Cleaning Kit (R229) and Leaf & Herb Tea Box (R119). Workshop and non-product enquiries return a custom-quotation/availability response rather than inventing a fixed price.
- Added a separate general contact form with name, email, optional phone, message type and full message fields.
- Added JavaScript that compiles valid contact-form details into an email subject and body and opens the visitor's email application using a `mailto:` link. Documented that the recipient is fictional and that a production site requires a real recipient and a secure form endpoint.
- Converted the FAQ cards into an accessible JavaScript accordion with keyboard-operable buttons and updated `aria-expanded` states.
- Added a gallery lightbox with keyboard activation, Escape-to-close behaviour, a close button, backdrop dismissal and descriptive alternative text.
- Added live product search, category matching, sorting by name and price, a dynamic result count and an empty-results state using DOM manipulation.
- Added a Leaflet map to the Contact page with approximate Cape Town and Johannesburg city-centre markers, OpenStreetMap tiles and visible attribution. The map is identified as illustrative because the organisation is fictional.
- Added small CSS transitions and feedback animations and a reduced-motion media query for visitors who request less animation.
- Added unique page titles, descriptions, keyword metadata, author metadata and crawler directives to all nine HTML pages.
- Added `robots.txt` and `sitemap.xml`; the sitemap base URL is clearly marked as a placeholder and must be replaced with the final deployment URL.
- Added this Part 3 README section with implementation details, testing steps, deployment instructions, limitations and updated references.

### Part 2 — CSS and responsive design (retained)
- Confirmed all nine HTML pages use the shared external `css/style.css` file with correct relative paths.
- Added a CSS reset and custom properties for the Green Leaf visual system.
- Used CSS Grid and Flexbox for page layouts, navigation, cards, forms and banners.
- Added responsive breakpoints at 900px and 620px for tablet and mobile layouts.
- Used relative units and responsive typography for flexible sizing.
- Added visible keyboard focus states and skip navigation.
- Added responsive image variants with `srcset` and `sizes`.
- Added structural HTML comments and updated the README for Part 2.

### Part 1 feedback corrections recorded in the Part 2 release
- Standardised the organisation concept as Green Leaf, a sustainable-living organisation.
- Kept the repository organised into individual HTML, CSS, JavaScript and media folders rather than relying on a ZIP archive.
- Added structural comments and documented the site structure and implementation.

## References
- Google Search Central. (n.d.). *SEO Starter Guide*. https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central. (n.d.). *Build and submit a sitemap*. https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- MDN Web Docs. (n.d.). *Constraint validation*. https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
- MDN Web Docs. (n.d.). *HTML forms*. https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms
- MDN Web Docs. (n.d.). *Using the Fetch API*. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- Leaflet. (n.d.). *Leaflet documentation*. https://leafletjs.com/reference.html
- OpenStreetMap. (n.d.). *Copyright and license*. https://www.openstreetmap.org/copyright
- GitHub Docs. (n.d.). *What is GitHub Pages?* https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- Netlify Docs. (n.d.). *Deploy a site*. https://docs.netlify.com/site-deploys/create-deploys/
- Babich, N. (2017). *Building Better UI Designs With Layout Grids*. Smashing Magazine. https://www.smashingmagazine.com/2017/12/building-better-ui-designs-layout-grids/
