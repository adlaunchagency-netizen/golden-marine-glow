const ScienceSection = () => (
  <section dir="rtl" style={{ background: "#fff", padding: "32px 18px 36px" }}>
    <div style={{ textAlign: "center", marginBottom: 22 }}>
      <div style={{
        display: "inline-block", background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.2)",
        borderRadius: 20, padding: "4px 16px", fontSize: 11, fontWeight: 700, color: "#0D9488",
        letterSpacing: "0.04em", marginBottom: 10,
      }}>
        🔬 مقارنة علمية
      </div>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1E293B", lineHeight: 1.4 }}>
        لماذا الكولاجين البحري يختلف عن الباقي؟
      </h2>
    </div>

    {/* Comparison table */}
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, textAlign: "center" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px 8px", background: "#F1F5F9", borderRadius: "8px 0 0 0", fontWeight: 700, color: "#64748B", fontSize: 12 }}></th>
            <th style={{ padding: "10px 8px", background: "#F1F5F9", fontWeight: 700, color: "#64748B", fontSize: 12 }}>الكولاجين العادي</th>
            <th style={{ padding: "10px 8px", background: "rgba(13,148,136,0.08)", borderRadius: "0 8px 0 0", fontWeight: 700, color: "#0D9488", fontSize: 12 }}>كولاجين بارافيتا البحري</th>
          </tr>
        </thead>
        <tbody>
          {[
            { label: "الوزن الجزيئي", normal: "أكبر من 5000 Da", paravita: "أقل من 1000 Da" },
            { label: "نسبة الامتصاص", normal: "منخفضة", paravita: "95% امتصاص فوري" },
            { label: "مناسب للمرضعات", normal: "✗", paravita: "✓", isIcon: true },
            { label: "مصدر طبيعي", normal: "✗", paravita: "✓", isIcon: true },
          ].map((row, i) => (
            <tr key={i} style={{ borderTop: "1px solid #E2E8F0" }}>
              <td style={{ padding: "12px 8px", fontWeight: 600, color: "#1E293B", textAlign: "right", fontSize: 12 }}>{row.label}</td>
              <td style={{ padding: "12px 8px", color: row.isIcon ? "#E24B4A" : "#64748B", fontWeight: row.isIcon ? 800 : 400, fontSize: row.isIcon ? 18 : 13 }}>
                {row.normal}
              </td>
              <td style={{ padding: "12px 8px", color: row.isIcon ? "#0D9488" : "#0D9488", fontWeight: row.isIcon ? 800 : 700, fontSize: row.isIcon ? 18 : 13, background: "rgba(13,148,136,0.04)" }}>
                {row.paravita}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p style={{ fontSize: 11, color: "#94A3B8", textAlign: "center", marginTop: 14, lineHeight: 1.5 }}>
      * المعطيات مبنية على دراسات علمية حول الببتيدات البحرية الصغيرة
    </p>
  </section>
);

export default ScienceSection;
