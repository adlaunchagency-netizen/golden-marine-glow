const items = [
  "فاطمة، الدار البيضاء ⭐⭐⭐⭐⭐ — بشرتي ولات أكثر إشراقاً",
  "خديجة، مراكش ⭐⭐⭐⭐⭐ — كنصحح لكل بنت",
  "نادية، الرباط ⭐⭐⭐⭐⭐ — شفت الفرق بسرعة",
  "سلمى، فاس ⭐⭐⭐⭐⭐ — منتج رائع، أنا مقتنعة",
];

const separator = <span className="text-gold-light mx-4">·</span>;

const TickerContent = () => (
  <>
    {items.map((item, i) => (
      <span key={i} className="whitespace-nowrap font-body text-sm text-foreground">
        {item}
        {separator}
      </span>
    ))}
  </>
);

const TestimonialTicker = () => (
  <div className="bg-champagne border-y border-gold/20 overflow-hidden">
    <div className="py-3">
      <div className="flex animate-ticker">
        <div className="flex shrink-0">
          <TickerContent />
        </div>
        <div className="flex shrink-0">
          <TickerContent />
        </div>
      </div>
    </div>
    <p className="font-body text-xs text-muted-foreground text-center py-1">
      * تجارب شخصية، النتائج تتفاوت
    </p>
  </div>
);

export default TestimonialTicker;
