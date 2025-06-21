const categories = [
    { title: 'Vasıta', sub: ['Otomobil', 'SUV', 'Motosiklet'] },
    { title: 'Emlak', sub: ['Satılık', 'Kiralık'] },
    { title: 'Elektronik', sub: ['Telefon', 'Bilgisayar'] },
  ];
  
  export default function Sidebar() {
    return (
      <aside className="w-[240px] hidden lg:block sticky top-24">
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
  