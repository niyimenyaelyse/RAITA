# RAITA - Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.0.0 | UI framework |
| react-dom | ^19.0.0 | DOM renderer |
| vite | ^6.0.0 | Build tool |
| @vitejs/plugin-react | ^4.4.0 | Vite React support |
| typescript | ^5.7.0 | Type safety |
| tailwindcss | ^4.0.0 | Utility CSS |
| @tailwindcss/vite | ^4.0.0 | Tailwind Vite plugin |
| three | ^0.172.0 | WebGPU rendering, TSL nodes |
| @react-three/fiber | ^9.0.0 | React renderer for Three.js |
| @react-three/drei | ^10.0.0 | R3F helpers (ScreenQuad) |
| lenis | ^1.2.0 | Smooth scroll |
| sass | ^1.83.0 | SCSS compilation for lithography effect |
| @fontsource/space-grotesk | ^5.0.0 | Display font |
| @fontsource/inter | ^5.0.0 | Body font |
| @fontsource/jetbrains-mono | ^5.0.0 | Mono font |

## Component Inventory

### shadcn/ui
- **Button** - CTAs (styled with pill shape override)
- **Accordion** - Programs section (custom styled, heavy mechanical feel)

### Custom Components

| Component | File | Description |
|-----------|------|-------------|
| Navigation | `components/Navigation.tsx` | Sticky nav with language toggle (EN/Kinyarwanda) |
| HeroSection | `sections/HeroSection.tsx` | Fullscreen hero with 3D lithography bg + content panel |
| LithographyText | `components/LithographyText.tsx` | CSS 3D folded text effect ("RAITA") |
| VisionGrid | `sections/VisionGrid.tsx` | 2x2 interactive cards with hover reveal |
| ImpactSection | `sections/ImpactSection.tsx` | Voxel engine bg + stats overlay |
| VoxelEngine | `components/VoxelEngine.tsx` | WebGPU raymarched voxel sphere (R3F) |
| ProgramsSection | `sections/ProgramsSection.tsx` | Accordion-styled program list |
| TestimonialsMarquee | `sections/TestimonialsMarquee.tsx` | Infinite horizontal scroll of testimonial cards |
| Footer | `sections/Footer.tsx` | Dark footer with massive CTA text |
| ArrowButton | `components/ArrowButton.tsx` | Pill button with arrow-reveal hover |
| SectionLabel | `components/SectionLabel.tsx` | Reusable mono uppercase label |

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Cognitive Voxel Engine (raymarched sphere) | three + three/tsl + @react-three/fiber | Custom TSL material with raymarching loop, sdSphere, sdBox, rotateX/Y helpers, BloomNode post-processing | High |
| 3D Lithography Text (isometric fold) | sass | SCSS mixins with skewed/scaled background-clip text layers, sliding background gradients | Medium |
| Vision Grid Card Hover | CSS + React state | Staggered clip-path reveal of description text on mouseenter/mouseleave | Low |
| Programs Accordion Expand | CSS transitions | Height animation with cubic-bezier(0.25, 1, 0.5, 1) easing | Low |
| Testimonials Infinite Marquee | CSS animation | translateX keyframes, duplicated content for seamless loop | Low |
| Arrow Button Hover | CSS transitions | Arrow slides in from left, background scales 1.02x, text shifts right 4px | Low |
| Hero Panel Entrance | CSS animations | Fade-in + translateX from left on page load, staggered children | Low |
| Smooth Scroll | lenis | Global instance wrapping the app | Low |
| Scroll-triggered reveals | IntersectionObserver + CSS | Add visible class when sections enter viewport | Low |

## State & Logic Plan

### Voxel Engine (WebGPU)
- Three.js WebGPU renderer with TSL node graph
- `ScreenQuad` from drei renders the raymarching material
- Mouse drag → spherical coordinate update → lerped camera position (factor 0.1)
- Camera direction = lookAt - cameraPosition
- Time uniform runs at 0.5x speed
- **Fallback**: Check `navigator.gpu` availability. If unsupported, render a CSS gradient animation as static fallback.

### 3D Lithography
- Pure CSS/Sass - no JS state required
- Hover triggers `translate3d(0, -100%, 0)` on `<p>` elements via CSS `:hover`
- Odd/even lines use different skew/scale combinations for isometric effect
- Background gradients slide via CSS keyframes

### Language Toggle
- Simple React state: `lang: 'en' | 'rw'`
- Content object with both language strings
- Toggle button in navigation switches state, all text components read from lang context

### Lenis Scroll
- Global instance initialized at app root
- `infinite: false` (standard scroll)
- Integrate with R3F via `useFrame` for render loop sync

## Other Key Decisions

- **WebGPU requirement**: The voxel engine needs `three/webgpu` renderer. This limits browser support to Chrome 113+. The fallback gradient ensures other browsers still see a polished visual.
- **SCSS for lithography**: The 3D text effect requires Sass mixins and loops that generate precise CSS. This is the only SCSS usage in the project; all other styles use Tailwind.
- **No GSAP**: Design spec specifies CSS transitions and cubic-bezier easings. No GSAP needed.
- **Font loading**: Use @fontsource packages for self-hosted fonts, avoiding external CDN dependencies and layout shift.
