import { motion } from "framer-motion";
import { Check, CheckCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface ChatMessage {
  text: string;
  time: string;
  isOwn: boolean;
}

interface WhatsAppTestimonial {
  name: string;
  city: string;
  benefit: string;
  messages: ChatMessage[];
}

const testimonials: WhatsAppTestimonial[] = [
  {
    name: "زبونة من الدار البيضاء",
    city: "Casablanca",
    benefit: "🌟 نتيجة على البشرة",
    messages: [
      { text: "Bghit n9olik chokarn bzaaaf", isOwn: false, time: "20:16" },
      { text: "3la colajin", isOwn: false, time: "20:17" },
      { text: "Toooooop walah 🔥", isOwn: false, time: "20:17" },
      { text: "Marhba habibti ❤️", isOwn: true, time: "20:17" },
      { text: "3tak natija ba3da", isOwn: true, time: "20:17" },
      { text: "Oui ❤️", isOwn: false, time: "20:18" },
      { text: "Hadi natija 😍", isOwn: false, time: "20:23" },
    ],
  },
  {
    name: "زبونة من الرباط",
    city: "Rabat",
    benefit: "💇‍♀️ نتيجة على الشعر",
    messages: [
      { text: "3rafti", isOwn: false, time: "20:58" },
      { text: "3tani natija zwiiina 🥰", isOwn: false, time: "20:58" },
      { text: "Lch3ri sdamni walah hhh", isOwn: false, time: "20:59" },
      { text: "Marhba zin", isOwn: true, time: "20:58" },
      { text: "Hani swrt lik kabl o ba3d ❤️", isOwn: false, time: "21:00" },
      { text: "Natija zwina 🤩", isOwn: true, time: "21:00" },
      { text: "Machae alah", isOwn: true, time: "21:01" },
    ],
  },
  {
    name: "زبونة من مراكش",
    city: "Marrakech",
    benefit: "💅 نتيجة على الأظافر",
    messages: [
      { text: "شوفي ضفاري كي ولاو 😍😍😍", isOwn: false, time: "21:33" },
      { text: "كانو حالتهم 😅", isOwn: false, time: "21:33" },
      { text: "دابا عاد ولاو كيبانو ضفاري واعرين 💪", isOwn: false, time: "21:34" },
      { text: "هادشي لي بغينا هو تلقاو نتيجة لي بغيتو ❤️", isOwn: true, time: "21:31" },
      { text: "كتفرحونا بزاف 🥰", isOwn: true, time: "21:32" },
    ],
  },
  {
    name: "زبونة من فاس",
    city: "Fès",
    benefit: "🌿 ضد تساقط الشعر",
    messages: [
      { text: "بغيت غير نعطيك رأي فالمنتج", isOwn: false, time: "21:07" },
      { text: "صراحة زوين بزاف 🔥", isOwn: false, time: "21:07" },
      { text: "حبس ليا تساقط ديال الشعر وشعري ولا قوي 💪", isOwn: false, time: "21:08" },
      { text: "Tbark lah 🤩", isOwn: true, time: "21:08" },
      { text: "هادوك الفراغات مبقاوش وشعري ولا قوي بزاف", isOwn: false, time: "21:15" },
      { text: "Bsaha zin dyali ❤️", isOwn: true, time: "21:15" },
    ],
  },
];

const ChatBubble = ({ message }: { message: ChatMessage }) => (
  <div className={`flex ${message.isOwn ? "justify-start" : "justify-end"}`}>
    <div
      className={`max-w-[80%] px-3 py-2 rounded-lg text-sm font-body relative ${
        message.isOwn
          ? "bg-[#005C4B] text-white rounded-tl-none"
          : "bg-[#1F2C34] text-white/90 rounded-tr-none"
      }`}
    >
      <span className="leading-relaxed">{message.text}</span>
      <span className="inline-flex items-center gap-0.5 mr-2 float-left text-[10px] text-white/40 mt-1">
        {message.time}
        {message.isOwn && <CheckCheck className="w-3 h-3 text-[#53BDEB]" />}
      </span>
    </div>
  </div>
);

const WhatsAppCard = ({ testimonial, index }: { testimonial: WhatsAppTestimonial; index: number }) => (
  <AnimatedSection delay={index * 0.12}>
    <div className="bg-[#0B141A] rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/25 transition-colors">
      {/* WhatsApp-style header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#1F2C34] border-b border-white/5">
        <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm font-bold shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-medium truncate">{testimonial.name}</p>
          <p className="text-white/40 text-xs">{testimonial.city}</p>
        </div>
        <span className="text-xs bg-gold/15 text-gold-light px-2 py-0.5 rounded-full whitespace-nowrap">
          {testimonial.benefit}
        </span>
      </div>

      {/* Chat messages */}
      <div
        className="px-3 py-3 space-y-1.5 min-h-[180px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        {testimonial.messages.map((msg, i) => (
          <ChatBubble key={i} message={msg} />
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 md:py-28 bg-champagne">
    <div className="container">
      <AnimatedSection className="text-center mb-14">
        <p className="font-body text-sm tracking-wider text-gold-dark font-medium mb-3">آراء حقيقية من الزبونات</p>
        <h2 className="font-body text-3xl md:text-4xl font-bold text-foreground mb-4">
          شوفي شنو <span className="text-gold-gradient">كيقولو</span> الزبونات ديالنا
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
          محادثات واتساب حقيقية مع زبوناتنا — نتائج ملموسة بلا فيلتر 💬
        </p>
        <div className="divider-gold mt-6" />
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <WhatsAppCard key={i} testimonial={t} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
