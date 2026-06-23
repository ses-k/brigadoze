import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrderPageContent } from "@/components/order/OrderPageContent";
import { LanguageProvider } from "@/lib/LanguageContext";

export default function EncomendarPage() {
  return (
    <LanguageProvider>
      <Header />
      <main className="flex-1 bg-cream px-4 py-10 sm:px-6 sm:py-16 md:py-24">
        <OrderPageContent />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
