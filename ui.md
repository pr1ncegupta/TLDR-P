# Apple‑Style TL;DR Generator UI Prompt

## Project Brief
Create a clean, elegant web page for an AI‑powered TL;DR generator. It must feel premium, intuitive, and calm—think iCloud.com meets the Notes app.

---

## 1. Brand & Tone
- Quiet confidence: no flashy colors or heavy graphics  
- Premium minimalism: each element has breathing room  
- Warmth through simplicity: soft shapes and subtle motion  

---

## 2. Color & Material
- **Backgrounds**  
  - Primary: pure white (`#FFFFFF`)  
  - Secondary panels: ultra‑light grey (`#F7F7F7`)  
- **Accents**  
  - Focus ring / active state: very light blue glow  
  - Button highlights: gentle gradient from `#E8F0FE` to `#D2E3FC`  
- **Shadows**  
  - Cards: soft, low‑opacity drop shadow (y‑offset 4px, blur 12px, `rgba(0,0,0,0.06)`)

---

## 3. Typography
- **Font**: San Francisco Pro (or SF Pro Display)  
- **Hierarchy**  
  - **H1**: 48px, weight 600, tight letter spacing  
  - **H2**: 32px, weight 500  
  - **Body**: 17px, weight 400, line height 1.5  
  - **Caption / Label**: 13px, weight 400, line height 1.4  
- **Spacing**  
  - Generous line height  
  - Consistent vertical rhythm (24px increments)

---

## 4. Layout & Structure

1. **Header** (sticky, minimal)  
   - Left: small logo icon  
   - Center: page title (“TL;DR”)  
   - Right: light/dark toggle  

2. **Hero Section**  
   - Centered title (“Your agentic TL;DR generator”)  
   - Subtext: one-sentence summary in grey (`#606060`)  

3. **Input Card**  
   - Elevated white card with rounded corners (12px radius)  
   - Large multiline text area (placeholder: “Paste your article here…”)  
   - Inner shadow on focus  
   - Primary CTA: “Generate TL;DR” button  
     - Full width on mobile, fixed width on desktop (240px)  
     - On hover: slight lift (translateY -2px) and deeper shadow  

4. **Results Panel**  
   - Fade + slide up animation  
   - Displays summary in crisp, left‑aligned text  
   - Copy and export icons on the right  

5. **“Build Your Own Agentic App” Section**  
   - Light grey container, same corner radius  
   - Four feature cards in a 2×2 grid  
     - Icon (line art), title, one‑line description  
     - On hover: background tint `#EFEFFF`  

6. **Footer**  
   - Centered small text: “Made by Prince with ❤️”  
   - Links underline on hover  

---

## 5. Iconography & Imagery
- Icons: simple line art, 24×24 or 32×32  
- Illustrations: minimal 2‑color outlines if needed  
- No stock photography—keep it graphic and abstract  

---

## 6. Motion & Interaction
- Micro‑interactions  
  - Button hover lift and shadow  
  - Input focus glow and slight scale  
  - Cards fade in on scroll  
- Page load sequence: fade in header, then hero, then input (150 ms delays)  
- Responsiveness  
  - Collapse grid to single column on small screens  
  - Buttons and text scale fluidly  

---

## 7. Accessibility
- All text meets AA contrast ratios  
- Buttons have 44×44 px touch targets  
- Keyboard focus rings visible with gentle glow  
- ARIA labels on inputs and buttons  

---

> Feel like you are using the latest macOS system tool—light, smooth, and reassuring. Each click, hover, and scroll should feel natural.
