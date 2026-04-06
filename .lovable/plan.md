

# Add Real WhatsApp Testimonial Screenshots

## What
Replace the current text-only testimonial cards with the 4 real WhatsApp conversation screenshots the user uploaded. These are authentic customer conversations showing before-after results — far more trustworthy than fabricated text cards.

## Approach
Create a new section that displays the 4 WhatsApp screenshots as a vertical gallery with captions, replacing the current `TestimonialsSection`.

### Files to change

**1. Copy uploaded images to `src/assets/`**
- `user-uploads://WhatsApp_Image_2025-11-29_at_01.25.33_1-2.jpg` → `src/assets/whatsapp-1.jpg` (Chofi — skin before/after, Casablanca)
- `user-uploads://WhatsApp_Image_2025-11-29_at_01.25.33-2.jpg` → `src/assets/whatsapp-2.jpg` (hair scalp before/after, reorder customer)
- `user-uploads://WhatsApp_Image_2025-11-29_at_01.25.34_1-2.jpg` → `src/assets/whatsapp-3.jpg` (nail before/after, 15 days)
- `user-uploads://WhatsApp_Image_2025-11-29_at_01.25.34_2-2.jpg` → `src/assets/whatsapp-4.jpg` (hair gaps filled, 1 month)

**2. Rewrite `src/components/TestimonialsSection.tsx`**
- Replace the 3 text cards with 4 WhatsApp screenshot cards
- Each card: rounded screenshot image (with subtle phone-frame shadow), customer name + city label, and a "WhatsApp verified" badge
- Card data:
  - Card 1: Chofi — الدار البيضاء — "بغيت نقوليك شكراً بزاف على الكولاجين — Tooop والله"
  - Card 2: زبونة من فاس — "نتيجة زوينة — هاني صورت ليك قبل وبعد"
  - Card 3: زبونة من مراكش — "شوفي ضفاري كي ولاو — 15 يوم غير"
  - Card 4: زبونة من طنجة — "هادوك الفراغات مبقاوش وشعري ولا قوي بزاف"
- Keep the section header "— تجارب حقيقية من واتساب —"
- Each image gets `loading="lazy"`, rounded corners, slight box-shadow to look like a phone screenshot
- Badge per card: green WhatsApp icon + "محادثة واتساب حقيقية ✅"
- Keep the existing `id="testimonials"` for scroll targeting

**3. No changes to Index.tsx** — the lazy import already points to `TestimonialsSection`

## What stays untouched
- All Supabase RPC, Meta Pixel, offer wiring, order form, sticky CTA, city dropdown
- All other sections (Hero, Science, Benefits, Offers, FAQ, Footer)

