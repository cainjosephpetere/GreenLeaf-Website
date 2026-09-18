# Green Leaf Website

## WEDE5020 Part 2 — CSS Styling and Responsive Design

### Student
- Name: Cain Joseph Petere
- Student Number: ST10541995

## Project Overview

Green Leaf is a fictional South African organisation focused on plant-based products, sustainable living and community education. The final website direction is **Green Leaf**, a sustainable-living brand. The website presents the organisation, products, services, sustainability information, gallery content, FAQs and enquiry/contact options.

The Part 2 implementation builds on the Part 1 website and applies an external CSS stylesheet, responsive layouts, relative units, responsive images, visual states and mobile navigation. Responsive design allows a website layout to adapt to different screen sizes and devices (MDN Web Docs, 2026). CSS Grid is also used to create structured, consistent layouts, supporting clear alignment and hierarchy (Babich, 2017).

## Pages

1. Home
2. About Us
3. Products
4. Services
5. Gallery
6. Sustainability
7. Enquiry
8. Contact
9. FAQ

## Part 2 Implementation

### External stylesheet
All nine HTML pages use the shared external stylesheet:

`css/style.css`

The stylesheet contains the common colour palette, typography, spacing, navigation, cards, forms, buttons, grid layouts, footer and responsive rules.

### Base styling
A CSS reset is included to reduce inconsistent browser default margins and spacing. Global styles define the website font, background colour, text colour and line height.

### Typography
The design uses a serif heading typeface with a sans-serif body typeface. Typography uses relative units such as `rem`, `em` and `clamp()` where appropriate to support flexible sizing.

### Layout
CSS Grid and Flexbox are used for the desktop layout. Examples include:
- `grid-template-columns` for card and content layouts.
- Flexbox for navigation, buttons and banner alignment.
- A maximum content width keeps the desktop layout readable.

Layout grids help create consistent alignment, hierarchy and structure in interface design (Babich, 2017).

### Responsive design
The website includes responsive breakpoints for:
- Desktop: above 900px.


Media queries change multi-column layouts into fewer columns or a single-column layout on smaller screens. This follows responsive-design principles where layouts adapt to viewport size and device characteristics (MDN Web Docs, 2026).

### Responsive images
PNG gallery and product images include `srcset` and `sizes` attributes with 480px, 800px and 1200px versions. This allows the browser to select a suitable image resource for the available display size.

## Accessibility and usability

The website includes:
- Descriptive `alt` text for images.
- A skip-to-content link.
- Keyboard focus states.
- A responsive navigation menu.
- Clear headings and content structure.
- Labels for form controls.
- Readable colour contrast and consistent visual hierarchy.

## Part 1 Feedback Corrections

The following corrections address the feedback received after Part 1:

1. **Organisation consistency:** The final concept is consistently described as **Green Leaf**, a sustainable-living organisation. The earlier “GreenLeaf Garden Centre” concept should not be used in the final documentation.
2. **GitHub structure:** The project should be pushed as individual files and folders rather than only as a ZIP archive. The repository should expose `index.html`, `pages/`, `css/`, `js/`, `media/` and `README.md`.
3. **README documentation:** This README now includes Part 2 implementation information, a changelog and references.
4. **HTML comments:** Structural comments have been added to the HTML files alongside the existing JavaScript comments.

## Changelog

### Part 2 — CSS and Responsive Design
- Reviewed the Part 1 website and maintained the final Green Leaf sustainable-living concept across the website.
- Confirmed that all nine HTML pages link to the shared external `css/style.css` file using the correct relative path.
- Added a CSS reset to reduce browser-default inconsistencies.
- Expanded the base styling system using CSS custom properties for the Green Leaf colour palette, spacing, borders, shadows and maximum content width.
- Used CSS Grid and Flexbox for desktop content layouts, navigation, cards, forms and banners.
- Added responsive breakpoints at 900px and 620px so multi-column content adapts to tablet and mobile screens.
- Used relative units including `rem`, `em`, percentages and `clamp()` for flexible typography, spacing and sizing.
- Added keyboard-visible focus states to improve accessibility and usability.
- Added `srcset` and `sizes` to PNG/JPG product and gallery images and created 480px, 800px and 1200px image variants for responsive loading.
- Added structural HTML comments for the site header, main content and footer as requested in the Part 1 feedback.
- Updated the README with Part 2 implementation details and references.


## References

Babich, N. (2017). *Building Better UI Designs With Layout Grids*. Smashing Magazine. Available at: https://www.smashingmagazine.com/2017/12/building-better-ui-designs-layout-grids/

CareerFoundry (2024). *What Is A Wireframe? A Comprehensive Guide*. Available at: https://careerfoundry.com/en/blog/ux-design/what-is-a-wireframe-guide/

MDN Web Docs (2026). *Responsive web design*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design

MDN Web Docs (2026). *CSS media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries

