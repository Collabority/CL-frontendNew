# About Page Specification

## Page Structure & Layout

### 1. Hero Section
- **Background**: Gradient from `#00c9c9` to `#008b8b`
- **Height**: 500px
- **Content**:
  - Title: "About Us"
  - Subtitle: "25 Years Of Experience In IT Industry"
  - Description: "We are a team of passionate IT professionals dedicated to delivering innovative solutions that drive business growth."
- **Animation**: 
  - Fade-in animation for text elements
  - Subtle gradient pulse effect
  - Parallax scrolling effect

### 2. Stats Section
- **Layout**: 4-column grid
- **Cards**:
  - Each card has an icon, number, and label
  - Hover effect: Scale up slightly (1.05) with shadow
  - Icons: Font Awesome icons with gradient color
- **Stats**:
  - "2500+" - Happy Clients
  - "1500+" - Projects Completed
  - "1200+" - Team Members
  - "15+" - Years Experience

### 3. Company Overview
- **Layout**: Two columns
- **Left**: Image with rounded corners and shadow
- **Right**: Content
  - Title: "We're on a Mission to Change View of IT Services"
  - Description: Detailed company description
  - Features list with checkmark icons
  - CTA Button: "Learn More"

### 4. Team Section
- **Title**: "Our Expert Team"
- **Subtitle**: "Meet our talented professionals"
- **Layout**: 4-column grid
- **Cards**:
  - Image with hover overlay
  - Social media icons appear on hover
  - Name and position below
  - Smooth transition effects

### 5. Testimonials
- **Background**: Light gray (`#f8f9fa`)
- **Layout**: 3-column grid
- **Cards**:
  - Quote icon
  - Client image (circular)
  - Testimonial text
  - Client name and position
  - Hover effect: Shadow and slight lift

### 6. FAQ Section
- **Title**: "Frequently Asked Questions"
- **Layout**: Accordion style
- **Items**:
  - Smooth expand/collapse animation
  - Chevron rotation on toggle
  - Hover effect on questions
  - Content fade-in animation

### 7. CTA Section
- **Background**: Gradient
- **Content**:
  - Title: "Ready to Get Started?"
  - Description: Call to action text
  - Button: "Contact Us"
  - Hover effects on button

## Design Elements

### Colors
- Primary: `#00c9c9`
- Secondary: `#008b8b`
- Text: `#333333`
- Background: `#ffffff`
- Accent: `#f8f9fa`

### Typography
- Headings: Inter, 700 weight
- Body: Inter, 400 weight
- Font sizes:
  - H1: 48px
  - H2: 36px
  - H3: 24px
  - Body: 16px

### Spacing
- Section padding: 80px top/bottom
- Card padding: 24px
- Grid gap: 30px
- Content max-width: 1200px

### Animations
1. **Scroll Animations**:
   - Fade-in elements as they enter viewport
   - Slide-in from left/right
   - Scale up on scroll

2. **Hover Effects**:
   - Cards: Scale + shadow
   - Buttons: Color shift + slight lift
   - Images: Overlay fade-in
   - Links: Color transition

3. **Micro-interactions**:
   - Smooth transitions (0.3s ease)
   - Loading states
   - Click feedback

### Responsive Design
- **Desktop**: 1200px+ (4 columns)
- **Tablet**: 768px-1199px (2 columns)
- **Mobile**: <768px (1 column)
- **Breakpoints**:
  - Mobile: 576px
  - Tablet: 768px
  - Desktop: 992px
  - Large: 1200px

## Functionality

### Interactive Elements
1. **Scroll to Top**:
   - Appears after scrolling 300px
   - Smooth scroll animation
   - Fade in/out effect

2. **FAQ Accordion**:
   - Smooth expand/collapse
   - Only one item open at a time
   - Keyboard accessible

3. **Team Cards**:
   - Social media links
   - Image zoom on hover
   - Smooth transitions

4. **Testimonials**:
   - Optional carousel functionality
   - Touch/swipe support
   - Auto-play option

### Performance
- Lazy loading for images
- Optimized animations
- Smooth scrolling
- Responsive images

### Accessibility
- ARIA labels
- Keyboard navigation
- Focus states
- Color contrast compliance
- Screen reader support 