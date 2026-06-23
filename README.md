# DecodeLabs Project 1 - Secure Portal

A modern, responsive single-page website for centralized identity management and document verification. Built with semantic HTML5, responsive CSS Grid/Flexbox, and vanilla JavaScript.

🌐 **Live Demo**: [https://decodelab1.netlify.app/](https://decodelab1.netlify.app/)

## 🎯 Project Overview

SecureID Vault is a secure, responsive portal for digitizing and managing crucial identity documents seamlessly across any device. This project demonstrates professional web development practices following the **DecodeLabs Internship Framework (Pillar 3)**.

## ✨ Features

- **Single-Page Application**: Smooth scrolling navigation between multiple sections
- **Responsive Design**: Mobile-first approach with seamless transitions from 1-column to multi-column layouts
- **Sticky Navigation**: Always-accessible header with dynamic active link highlighting
- **Mobile Menu**: Hamburger menu for mobile devices with smooth interactions
- **Smooth Animations**: Grid layout transitions and card hover effects
- **Semantic HTML5**: Proper semantic structure for accessibility and SEO
- **Color-Coded Sections**: Alternating backgrounds for visual hierarchy

## 🏗️ Architecture (Pillar 3 Framework)

This project implements the **Pillar 3: Implementation Framework** with strict adherence to:

### CSS Grid (Macro Layouts)
- **2D Floor-Plan Structure**: Desktop layout uses strict grid template areas
  - Sidebar: 280px fixed width
  - Main content: Flexible remaining space
- Grid-based page layouts ensure consistent alignment across viewports

### Flexbox (Micro Components)
- **Header Container**: Logo, navigation, and hamburger menu
- **Navigation Links**: Flexible spacing and alignment
- **Card Components**: Flexible text layout within cards

### Mobile-First Strategy
1. **Mobile (< 768px)**: Single-column layout
   - 1 card per row
   - Full-width content
   - Hamburger menu navigation

2. **Tablet (768px - 1023px)**: Two-column layout
   - 2 cards per row
   - Improved readability
   - Desktop nav shows

3. **Desktop (≥ 1024px)**: Three-column layout with sidebar
   - 280px sidebar on the left
   - 3-column card grid on the right
   - Full system status visibility

### Fluid Typography
All text uses `clamp()` for responsive sizing:
```css
h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.25rem, 3vw, 1.75rem); }
p  { font-size: clamp(0.95rem, 1.5vw, 1.05rem); }
```

## 📱 Responsive Breakpoints

| Viewport | Layout | Grid Columns | Navigation |
|----------|--------|--------------|------------|
| Mobile < 768px | Single Column | 1 | Hamburger Menu |
| Tablet 768px - 1023px | Two Column | 2 | Desktop Nav |
| Desktop ≥ 1024px | Three Column + Sidebar | 3 | Desktop Nav |

**Smooth Transitions**: 0.5s ease-in-out animation when layout changes between breakpoints

## 🎨 Design System

### Color Palette
- **Mocha Mousse** (`#a5856f`): Stability & accents
- **Ethereal Blue** (`#a0d4e0`): Trust & primary elements
- **Moonlit Grey** (`#f2f0ea`): Background & base color
- **Dark Slate** (`#2b303a`): Text contrast
- **White** (`#ffffff`): Cards & header

### Typography
- **Headline Font**: Inter (700 weight)
- **Body Font**: Open Sans (400, 500 weights)
- **Line Height**: 1.6 for readability

## 📂 File Structure

```
decodelabs-project1/
├── index.html          # Single-page HTML structure
├── styles.css          # Responsive styles with Grid/Flexbox
├── script.js           # Navigation & interaction logic
└── README.md           # This file
```

## 🚀 Getting Started

### Installation
No installation required! Simply open the project:

```bash
# Open in your default browser
open index.html

# Or use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

### Usage
1. **Navigation**: Click nav links or scroll smoothly between sections
2. **Mobile Menu**: Tap the hamburger icon on mobile devices
3. **Explore Sections**:
   - Dashboard - System status and document features
   - Verification Services - Identity verification tools
   - Document Hub - Document management features
   - Support & Resources - Help and security information

## 📋 Sections

### Hero Section
Welcome area with call-to-action button linking to Dashboard

### Dashboard
- **Sidebar**: System status overview (NIN, Voter's Card, Architecture)
- **Grid**: Document Digitization, Real-Time Sync, Universal Access

### Verification Services
- Identity Verification using AI
- Background Checks with compliance
- Instant Validation against databases

### Document Hub
- National ID management
- Voter Registration documents
- Travel Documents & Passports

### Support & Resources
- Help Center
- Contact Support
- Security Information

## 💻 Technologies Used

- **HTML5**: Semantic structure with proper heading hierarchy
- **CSS3**: Grid, Flexbox, Responsive Design, Animations
- **JavaScript**: Vanilla JS for interactivity (no frameworks)
- **Google Fonts**: Inter & Open Sans typography

## 🎬 Interactive Features

### Navigation
- **Sticky Header**: Stays at top during scroll
- **Active Link Highlighting**: Updates based on current section
- **Smooth Scrolling**: 0.3s transitions between sections
- **Mobile Toggle**: Hamburger menu hides/shows navigation

### Visual Effects
- **Card Hover**: Cards lift with shadow enhancement
- **Layout Transitions**: Smooth reflow when resizing viewport
- **Section Separation**: Alternating background colors
- **Border Accents**: Color-coded section headers

## ✅ Responsive Features Checklist

- [x] Mobile-first approach
- [x] CSS Grid for macro layouts (2D floor-plan)
- [x] Flexbox for micro components
- [x] Fluid typography with clamp()
- [x] Smooth layout transitions
- [x] Mobile hamburger menu
- [x] Sticky header
- [x] Active link indicator
- [x] Three breakpoints (mobile, tablet, desktop)
- [x] Hover animations
- [x] Semantic HTML5

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

This project demonstrates professional web development practices:
- Clean, maintainable code with proper comments
- Accessibility considerations (semantic HTML, ARIA labels)
- Performance optimizations (smooth scrolling, efficient selectors)
- Mobile-first responsive design methodology
- Proper grid and flexbox usage for layout architecture

## 👨‍💼 Credits

**DecodeLabs Internship Program** - 2026  
*Responsive Interface Demonstration*

---

**Last Updated**: 2026-06-24
