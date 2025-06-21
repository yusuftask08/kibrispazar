'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-16 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Kurumsal */}
        <div>
          <h4 className="font-semibold mb-3">Kurumsal</h4>
          <ul className="space-y-1">
            <li>Hakkımızda</li>
            <li>Sürdürülebilirlik</li>
            <li>İnsan Kaynakları</li>
            <li>Haberler</li>
            <li>Site Haritası</li>
            <li>İletişim</li>
          </ul>
        </div>

        {/* Hizmetler */}
        <div>
          <h4 className="font-semibold mb-3">Hizmetlerimiz</h4>
          <ul className="space-y-1">
            <li>Doping</li>
            <li>Güvende Ödeme</li>
            <li>e-Ticaret</li>
            <li>Toplu Giriş</li>
            <li>Reklam</li>
            <li>Mobil</li>
          </ul>
        </div>

        {/* Mağazalar */}
        <div>
          <h4 className="font-semibold mb-3">Mağazalar</h4>
          <ul className="space-y-1">
            <li>Neden Mağaza?</li>
            <li>Mağaza Açmak</li>
          </ul>
        </div>

        {/* Gizlilik */}
        <div>
          <h4 className="font-semibold mb-3">Gizlilik ve Kullanım</h4>
          <ul className="space-y-1">
            <li>Güvenli Alışveriş</li>
            <li>Sözleşmeler</li>
            <li>Kullanım Koşulları</li>
            <li>Veri Koruma</li>
            <li>Çerez Yönetimi</li>
          </ul>
        </div>

        {/* Sosyal */}
        <div>
          <h4 className="font-semibold mb-3">Bizi Takip Edin</h4>
          <ul className="space-y-1">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Youtube</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="border-t border-gray-300 mt-6 py-4 text-center text-xs text-gray-500 px-4">
        <p>
          kibrispazar.com'da yer alan ilanların ve kullanıcı içeriklerinin doğruluğu kullanıcıya aittir. Yayımlanan
          içeriklerden doğacak yasal sorumluluk ilan verene aittir. Şikayet ve talepleriniz için bizimle iletişime
          geçebilirsiniz.
        </p>
        <p className="mt-2">Copyright © {new Date().getFullYear()} kibrispazar.com – Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}