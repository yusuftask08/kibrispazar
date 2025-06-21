import CarShowcase from "./components/Car/CarShowCase";
import HeroBanner from "./components/Car/HeroBanner";
import CarListingCard from "./components/Card/CarListingCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/landingPage";
import Sidebar from "./components/Sidebar/Sidebar";
import cars from "./data/cars";

const SHOW_LANDING_PAGE = true;

export const metadata = {
  title: "KıbrısPazar – KKTC’nin En Kapsamlı İlan ve Alım-Satım Platformu",
  description:
    "KıbrısPazar, Lefkoşa, Girne, Gazimağusa, Güzelyurt, İskele gibi tüm KKTC bölgelerinde hizmet veren emlak, araç, ikinci el, telefon, iş ilanı ve daha fazlasını kapsayan ilan sitesidir.",
  openGraph: {
    title: "KıbrısPazar – Kıbrıs’ta Alım-Satımın Merkezi",
    description:
      "KıbrısPazar’da satılık ev, kiralık daire, ikinci el eşya, iş ilanı, araba, telefon ve tüm ihtiyaçlarınıza uygun ilanları bulun. Kıbrıs’ın her yerinde ilan verin.",
    url: "https://kibrispazar.com",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "KıbrısPazar – Kıbrıs’ın ilan platformu",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white text-gray-900">
        {SHOW_LANDING_PAGE ? (
          <LandingPage />
        ) : (
          <>
            <Header />
            <HeroBanner />

            <div className="flex gap-6 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto mt-8">
              {/* Sol Kategori Sidebar */}
              <Sidebar />

              {/* Sağ içerik */}
              <div className="flex-1">
                <CarShowcase />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 xl:gap-6 mt-6">
                  {cars.map((car) => (
                    <CarListingCard key={car.id} car={car} />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
