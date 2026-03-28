import { MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/212709132421?text=Salam,%20bghit%20nsewwel%203la%20Collagen%20Marin";

const WhatsAppButton = () => (
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#25D366] text-white font-body text-sm font-bold px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow animate-pulse-whatsapp min-h-[56px]"
    aria-label="تواصلي معنا على واتساب"
  >
    <MessageCircle className="w-6 h-6 fill-white" />
    <span className="hidden sm:inline">تواصلي معنا 💬</span>
  </a>
);

export default WhatsAppButton;
