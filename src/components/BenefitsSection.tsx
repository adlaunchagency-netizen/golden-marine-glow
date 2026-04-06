import productBottle from "@/assets/product-bottle.webp";

const BenefitsSection = () => (
  <section id="benefits" dir="rtl" style={{ background: '#F8FAFB', padding: '32px 18px 28px', position: 'relative', overflow: 'hidden' }}>
    {/* Background product image */}
    <img
      src={productBottle}
      loading="lazy"
      alt=""
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        height: '110%',
        opacity: 0.18,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />

    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#0D9488', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
          — لماذا Neo Collagen PARAVITA؟ —
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 900, color: '#1E293B', lineHeight: 1.3, margin: 0 }}>
          مكونات طبيعية — نتائج حقيقية
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
        {[
          { icon: '💇‍♀️', title: 'وقف التساقط', desc: 'يقوي بصيلات الشعر الضعيفة بعد الولادة' },
          { icon: '💧', title: 'ترطيب عميق', desc: 'بيبتيدات بحرية عالية الامتصاص' },
          { icon: '💪', title: 'كثافة الشعر', desc: 'يعزز نمو الشعر الجديد من الجذور' },
          { icon: '🤱', title: 'آمن للمرضعات', desc: 'تركيبة طبيعية 100% بدون مواد ضارة' },
        ].map((b, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', border: '1px solid rgba(13,148,136,0.15)', borderRadius: 14, padding: '14px 12px', textAlign: 'center' }}>
            <div style={{ fontSize: 24, marginBottom: 6 }}>{b.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#1E293B', marginBottom: 4 }}>{b.title}</div>
            <div style={{ fontSize: 11, color: '#64748B', lineHeight: 1.4 }}>{b.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'rgba(13,148,136,0.05)', border: '1px solid rgba(13,148,136,0.15)', borderRadius: 12, padding: '10px 14px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
          {[
            { icon: '🌿', text: 'حلال مُعتمد' },
            { icon: '🧪', text: 'Gluten Free' },
            { icon: '🐟', text: 'كولاجين بحري نقي' },
            { icon: '🇲🇦', text: 'معتمد ONSSA' },
          ].map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11.5, fontWeight: 600, color: '#0D9488' }}>
              <span>{c.icon}</span>
              <span>{c.text}</span>
            </div>
          ))}
        </div>
      </div>

      <p style={{ fontSize: 10, color: '#94A3B8', textAlign: 'center', marginTop: 12, lineHeight: 1.5 }}>
        * هذه المعلومات لأغراض تثقيفية فقط. النتائج تتفاوت من شخص لآخر.
      </p>
    </div>
  </section>
);

export default BenefitsSection;
