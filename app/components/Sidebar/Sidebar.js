/* eslint-disable-next-line react/no-unescaped-entities */

const categories = [
  {
    title: "⭐ Emlak",
    sub: [
      "Konut",
      "İş Yeri",
      "Arsa",
      "Konut Projeleri",
      "Bina",
      "Devre Mülk",
      "Turistik Tesis",
    ],
  },
  {
    title: "⭐ Vasıta",
    sub: [
      "Otomobil",
      "Arazi, SUV & Pickup",
      "Elektrikli Araçlar",
      "Motosiklet",
      "Minivan & Panelvan",
      "Ticari Araçlar",
      "Kiralık Araçlar",
      "Deniz Araçları",
      "Hasarlı Araçlar",
    ],
  },
  {
    title: "⭐ Yedek Parça, Aksesuar, Donanım & Tuning",
    sub: [
      "Otomotiv Ekipmanları",
      "Motosiklet Ekipmanları",
      "Deniz Aracı Ekipmanları",
    ],
  },
  {
    title: "⭐ İkinci El ve Sıfır Alışveriş",
    sub: [
      "Bilgisayar",
      "Cep Telefonu & Aksesuar",
      "Fotoğraf & Kamera",
      "Ev Dekorasyon",
      "Ev Elektroniği",
      "Elektrikli Ev Aletleri",
      "Diğer Her Şey",
    ],
  },
  {
    title: "⭐ Yepyeni",
    sub: ["Yenilenmiş Teknolojik Cihazlar"],
  },
  {
    title: "⭐ İş Makineleri & Sanayi",
    sub: ["İş Makineleri", "Tarım Makineleri", "Sanayi", "Elektrik & Enerji"],
  },
  {
    title: "⭐ Ustalar ve Hizmetler",
    sub: ["Ev Tadilat & Dekorasyon", "Nakliye", "Araç Servis & Bakım"],
  },
  {
    title: "⭐ Özel Ders Verenler",
    sub: ["Lise & Üniversite", "İlkokul & Ortaokul", "Yabancı Dil"],
  },
  {
    title: "⭐ İş İlanları",
    sub: [
      "Avukatlık & Hukuki Danışmanlık",
      "Eğitim",
      "Eğlence & Aktivite",
      "Güzellik & Bakım",
      "IT & Yazılım Geliştirme",
      "İnsan Kaynakları",
    ],
  },
  {
    title: "⭐ Hayvanlar Alemi",
    sub: [
      "Evcil Hayvanlar",
      "Akvaryum Balıkları",
      "Aksesuarlar",
      "Bakım Ürünleri",
      "Yem & Mama",
      "Kümes Hayvanları",
      "Büyükbaş Hayvanlar",
      "Küçükbaş Hayvanlar",
    ],
  },
  {
    title: "⭐ Yardımcı Arayanlar",
    sub: [
      "Bebek & Çocuk Bakıcısı",
      "Yaşlı & Hasta Bakıcısı",
      "Temizlikçi & Ev İşlerine Yardımcı",
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="w-[240px] hidden lg:block sticky top-24 overflow-y-auto max-h-[calc(100vh-100px)]">
      {categories.map((cat) => (
        <div key={cat.title} className="mb-6">
          <h4 className="font-semibold text-gray-800">{cat.title}</h4>
          <ul className="pl-2 mt-2 space-y-1 text-sm text-gray-600">
            {cat.sub.map((s) => (
              <li key={s} className="cursor-pointer hover:text-black">{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
