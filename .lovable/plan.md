

## Expand Hero Image to Show Full Bottle

The hero image is currently cropped tight (480×362), cutting off the bottle. The fix is to increase the visible area by adjusting the image container and removing the tight height constraint.

### Changes

**`src/components/HeroSection.tsx`**
- Remove the fixed `height={362}` attribute and replace with a larger value or `auto` to let the full image show
- Add `objectFit: "contain"` and a slight `minHeight` to ensure the bottle is fully visible without cropping
- Alternatively, scale the image up slightly using `transform: scale(1.05)` with `overflow: visible` on the container — but the cleanest approach is simply removing the height cap

**`index.html`** (HTML shell skeleton)
- Update the matching `<img>` in the static shell to use the same new dimensions so there's no CLS shift

### What stays the same
- Image files unchanged (no re-compression)
- Text column, CTA, badges — all untouched
- LCP/FCP optimizations preserved (preload, fetchpriority, shell)

