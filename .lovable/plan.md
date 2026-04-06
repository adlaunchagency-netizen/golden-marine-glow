

# Performance Optimization Plan — Meta & TikTok Ad Ready

## Current State (from your Lighthouse screenshot)
- **Performance: 86** | FCP: 1.8s | LCP: 2.5s (orange) | TBT: 410ms (orange) | CLS: 0.006
- Target: LCP < 2.0s, TBT < 200ms, FCP < 1.5s

## Root Causes

1. **TBT 410ms** — `framer-motion` (60KB+ parsed) is imported by `OrderForm`, `PricingSection`, and `AnimatedSection`. Even though lazy-loaded, when these chunks execute on scroll they block the main thread.
2. **LCP 2.5s** — Hero image uses `decoding="async"` which defers decode. Also, the full Tailwind CSS file loads before paint.
3. **lucide-react** imports in `OrderForm` (ChevronDown, Search, Loader2), `FaqSection` (ChevronDown), and `PricingSection` (Check, Star) add ~30KB parsed JS per chunk.
4. **Stale components** — `HeroTestimonialCarousel` and `TestimonialTicker` still use old gold-theme styling from pre-pivot; they load unnecessarily.

## Changes

### 1. Remove framer-motion entirely (biggest TBT win)
- **AnimatedSection.tsx** — Replace `motion.div` with a pure CSS `IntersectionObserver`-based fade-in using a 6-line custom hook + CSS class. No JS animation library.
- **OrderForm.tsx** — Remove `motion` import; replace `motion.div` wrapper with a plain `div`. The form doesn't need entrance animation.
- **PricingSection.tsx** — Remove `motion` import; replace `motion.div` cards with plain `div` + CSS fade-in class.
- **vite.config.ts** — Remove the `"framer": ["framer-motion"]` manual chunk since framer-motion is no longer used.

### 2. Replace lucide-react with inline SVGs in active components
- **OrderForm.tsx** — Replace `ChevronDown`, `Search`, `Loader2` with 3 inline SVG components (same as Header pattern).
- **FaqSection.tsx** — Replace `ChevronDown` with inline SVG.
- **PricingSection.tsx** — Replace `Check`, `Star` with inline SVGs.

### 3. Hero LCP optimization
- **HeroSection.tsx** — Change `decoding="async"` to `decoding="auto"` so the browser can prioritize decode for the LCP element.
- **index.html** — Add `imagesrcset` and `imagesizes` to the preload link for responsive hero loading.

### 4. Remove stale components
- **Index.tsx** — Remove `HeroTestimonialCarousel` and `TestimonialTicker` lazy imports and their `<Suspense>` wrappers. These use old gold-theme colors and add unnecessary JS/DOM.

### 5. Defer router for single-page LP
- **App.tsx** — Since this is a single-page landing page, lazy-load `react-router-dom` or inline the Index route to avoid loading the router eagerly (~15KB parsed).

### 6. CSS fade-in animation (replaces framer-motion)
- **index.css** — Add a small CSS block:
```css
.fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.5s, transform 0.5s; }
.fade-in.visible { opacity: 1; transform: translateY(0); }
```

## What stays untouched
- All Supabase RPC, Meta Pixel, UTM, phone dedup, city dropdown, offer wiring, sticky CTA bar
- All copy, colors, layout, prices, form fields

## Expected Impact
- **TBT**: 410ms → ~100ms (removing framer-motion eliminates the largest main-thread blocker)
- **LCP**: 2.5s → ~2.0s (sync decode + cleaner critical path)
- **FCP**: 1.8s → ~1.5s (smaller initial JS bundle without router overhead)

