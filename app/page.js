import Image from "next/image";

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
    <main className="min-h-screen bg-white text-gray-900 px-4 py-10 sm:py-20">
      {/* Hero */}
      <section className="max-w-6xl mx-auto text-center">
        <Image
          src="/logo.png"
          alt="KıbrısPazar Logo"
          width={240}
          height={80}
          priority
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 leading-tight">
          KıbrısPazar’a Hoş Geldiniz
        </h1>
        <p className="text-base sm:text-lg mt-4 max-w-3xl mx-auto text-gray-700">
          Lefkoşa, Girne, Gazimağusa, İskele, Güzelyurt ve tüm Kuzey Kıbrıs’ta{" "}
          <strong>satılık emlak</strong>, <strong>kiralık daire</strong>,{" "}
          <strong>ikinci el eşya</strong>, <strong>araba</strong>,{" "}
          <strong>telefon</strong>, <strong>iş ilanı</strong>,{" "}
          <strong>özel ders</strong> ve <strong>hizmet</strong> kategorilerinde
          ilan vermek artık çok kolay!
        </p>
        <a
          className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-sm sm:text-base hover:bg-blue-700 transition"
        >
          Kıbrıs Pazar çok yakında sizlerle!
        </a>
      </section>

      {/* Kategori grid */}
      <section className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Popüler Kategoriler</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 text-center text-sm sm:text-base">
          {[
            "🏠 Satılık / Kiralık Emlak",
            "🏢 Günlük Kiralık Ev & Daire",
            "🏡 Arsa, Tarla, Bahçe İlanları",
            "🚗 Araba & Motosiklet",
            "🚌 Ticari Araç & Kiralık Araçlar",
            "🔧 Yedek Parça & Aksesuar",
            "📱 Telefon & Elektronik",
            "💻 Bilgisayar & Tablet",
            "📺 Televizyon & Ses Sistemleri",
            "🛋️ Mobilya & Ev Eşyaları",
            "🧺 Beyaz Eşya & Küçük Ev Aletleri",
            "📦 İkinci El Ürünler",
            "👕 Giyim & Aksesuar",
            "🎮 Oyun & Konsol Ürünleri",
            "💼 İş İlanları",
            "👷 İş Arayanlar / CV Bankası",
            "👫 Ev Arkadaşı & Oda",
            "🧑‍🎓 Öğrenciye Uygun Kiralıklar",
            "🎓 Özel Ders & Eğitim",
            "🎨 Kurs & Atölye Duyuruları",
            "🛠️ Hizmet Verenler (Tadilat, Usta)",
            "🧹 Temizlik & Bakım Hizmetleri",
            "🧑‍⚕️ Sağlık & Danışmanlık",
            "🐶 Evcil Hayvan Sahiplendirme",
            "🐾 Kedi / Köpek Malzemeleri",
            "🎉 Etkinlik & Organizasyon",
            "📢 Duyurular & Kaybolan Eşyalar"
          ].map((item) => (
            <div
              key={item}
              className="h-28 flex items-center justify-center text-center border text-lg border-gray-200 rounded-lg px-3 py-4 hover:shadow-md transition font-medium text-gray-800 bg-white"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SEO Rich Text */}
      <section className="mt-20 max-w-5xl mx-auto text-gray-800 text-sm sm:text-base leading-relaxed px-4 sm:px-0">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">KKTC Genelinde İlan Vermenin En Kolay Yolu</h3>

        <p>
          <strong>KıbrısPazar.com</strong>, Kuzey Kıbrıs Türk Cumhuriyeti'nde (KKTC) yaşayan bireyler için hazırlanmış yeni nesil ilan platformudur.
          Lefkoşa, Girne, Gazimağusa, İskele ve Güzelyurt başta olmak üzere tüm bölgelerde{" "}
          <strong>satılık ev</strong>, <strong>kiralık daire</strong>, <strong>ikinci el araba</strong>,{" "}
          <strong>telefon</strong>, <strong>beyaz eşya</strong>, <strong>mobilya</strong>, <strong>iş ilanı</strong> ve{" "}
          <strong>özel ders</strong> gibi yüzlerce farklı kategoride alım-satımı tek bir çatı altında toplar.
        </p>

        <p className="mt-4">
          Geliştirilmekte olan bu platform, Kıbrıs'taki bireysel ihtiyaçlara dijital çözümler getirmeyi amaçlar.
          <strong> KKTC ikinci el pazarı</strong>, <strong>kktc arabam</strong>, <strong>girne sahibinden</strong>,{" "}
          <strong>gazimağusa ev ilanı</strong>, <strong>kıbrıs emlak</strong> gibi aramalarda görünür olmak üzere tasarlanmıştır.
        </p>

        <p className="mt-4">
          Mobil cihazlarla tamamen uyumlu altyapısı, sade tasarımı ve bölgeye özel filtreleme desteği ile çok yakında yayında!
          Kullanıcılar, yaşadığı mahalleye özel ilanlara göz atabilecek; satıcılar ürünlerini bölgesel bazda sergileyebilecek.
        </p>

        <p className="mt-4 text-blue-600 font-medium">
        Henüz açılış zilini çalmadık ama vitrini hazırlıyoruz! KıbrısPazar çok yakında sizlerle. 👷‍♂️🔧
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} KıbrısPazar.com – Tüm hakları saklıdır.
      </footer>
    </main>
  );
}
