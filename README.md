# Julieté Fashion Atelier — Landing Page

> *"Timeless Styles. Modern You."*  
> Bespoke women's fashion & custom tailoring in Lagos, Nigeria.

A luxury, high-fashion landing page built for **Julieté Fashion Atelier**, bridging authentic Nigerian heritage with contemporary Gen-Z style. Optimized for mobile responsiveness, accessibility, and high conversion to direct WhatsApp conversations.

---

## 🌟 Key Features

1. **Editorial Visual Aesthetics**:
   - Curated luxury color palette: Deep Forest Green (`#102A24`), Warm Champagne (`#E8CC91`), Soft Ivory (`#F8F4EC`), Rich Charcoal (`#201F1D`), and White (`#FFFFFF`).
   - Editorial serif headings paired with modern sans-serif body typography.
   - High-fashion editorial photography showcasing Nigerian bespoke attire.

2. **Dual WhatsApp Integration & Choice Modal**:
   - Both official contact lines supported:
     - **Line 1:** `08066327093` (`https://wa.me/2348066327093`)
     - **Line 2:** `09040228364` (`https://wa.me/2349040228364`)
   - Interactive modal enables visitors to choose either line.
   - Pre-filled and URL-encoded WhatsApp messages for bespoke inquiries and specific collection requests.
   - Direct call (`tel:`) support on phone numbers.

3. **Complete Section Hierarchy**:
   - **Navigation**: Sticky frosted-glass header, logo wordmark, smooth scroll links, WhatsApp CTA, and animated mobile drawer.
   - **Hero**: Striking editorial imagery with headline *"Timeless Styles. Modern You."*, eyebrow badge, and dual CTAs (*"Request a Custom Fit"* & *"Explore Our Collections"*).
   - **Our Story**: Thoughtful narrative on personalized fit and Nigerian heritage with authentic atelier imagery.
   - **Collections (4 Cards)**: Traditional Nigerian Wear, Evening & Occasion Wear, Corporate & Classy, and Casual & Everyday.
   - **Services (4 Cards)**: Bespoke Tailoring, Traditional Attire, Occasion Wear, and Custom Designs.
   - **How It Works (4 Steps)**: Clear guide from initial WhatsApp conversation to final fitting.
   - **Contact / CTA**: Direct contact cards for both lines, clear phone numbers, and Lagos location indicator.
   - **Footer**: Brand wordmark, tagline, navigation, dynamic copyright year, and accurate atelier details.
   - **Floating WhatsApp Quick Button**: One-tap access to WhatsApp from anywhere on the page.

---

## 📁 File Structure

```
c:/Users/HP/Desktop/Mummy/
├── index.html               # Main semantic HTML5 document
├── css/
│   └── styles.css           # Vanilla CSS with design tokens & responsive queries
├── js/
│   └── main.js              # Client-side JavaScript (modal, drawer, dynamic year, WhatsApp links)
├── assets/
│   └── images/              # High-resolution editorial fashion imagery
│       ├── hero.jpg         # Hero section Nigerian bespoke gown
│       ├── story.jpg        # Atelier tailoring craftsmanship
│       ├── traditional.jpg  # Traditional Nigerian wear collection
│       ├── evening.jpg      # Evening & occasion wear collection
│       ├── corporate.jpg    # Corporate & classy collection
│       └── casual.jpg       # Casual & everyday modern Ankara collection
└── README.md                # Project documentation & deployment guide
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Launch
Simply double-click `index.html` in Windows Explorer to open it in Chrome, Edge, Firefox, or Safari.

### Option 2: Using Python (Already running on port 8080)
```powershell
python -m http.server 8080
```
Then visit: **`http://localhost:8080`**

### Option 3: Using Node.js
```powershell
npx serve .
```

---

## 🌐 Deployment Instructions

- **Vercel / Netlify**: Drag and drop the `Mummy` folder into the Netlify or Vercel dashboard for instant SSL hosting.
- **GitHub Pages**: Push this directory to a GitHub repository, enable GitHub Pages under repository settings (`main` branch, root folder).
