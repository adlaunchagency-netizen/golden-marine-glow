const HeroTestimonialCarousel = () => (
  <section dir="rtl" style={{ background: '#1a1208', padding: '24px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
    <div style={{ fontSize: 11, fontWeight: 700, color: '#C9A84C', textAlign: 'center', letterSpacing: '0.08em', marginBottom: 4 }}>
      — تجارب حقيقية من المغرب —
    </div>
    {[
      { city: 'مراكش', tag: 'نتيجة على الشعر', quote: '"شعري اللي كان ضعيف صار قوي وحريري. الحمد لله على النتائج 🙏⭐⭐⭐⭐⭐"' },
      { city: 'الدار البيضاء', tag: 'بشرة أكثر إشراقاً', quote: '"فاطمة — بشرتي ولات أكثر إشراقاً ⭐⭐⭐⭐⭐"' },
    ].map((q, i) => (
      <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 14, padding: '14px 16px' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          <span style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', borderRadius: 20, padding: '2px 10px', fontSize: 11, fontWeight: 700 }}>{q.city}</span>
          <span style={{ background: 'rgba(201,168,76,0.08)', color: '#C9A84C', borderRadius: 20, padding: '2px 10px', fontSize: 11, fontWeight: 600 }}>{q.tag}</span>
        </div>
        <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', lineHeight: 1.55, margin: 0 }}>{q.quote}</p>
      </div>
    ))}
    <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textAlign: 'center', margin: '4px 0 0' }}>* تجارب شخصية، النتائج تتفاوت</p>
  </section>
);

export default HeroTestimonialCarousel;
