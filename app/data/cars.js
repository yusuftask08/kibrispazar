// cars.js içinde geçici olarak
const cars = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    image: "/car.jpg",
    brand: ["BMW", "Mercedes", "Honda", "Toyota", "Audi", "Ford"][i % 6],
    model: ["320i", "A180", "Civic", "Corolla", "A4", "Focus"][i % 6],
    price: (12000 + i * 200).toLocaleString("en-UK"),
    city: ["Lefkoşa", "Girne", "Gazimağusa", "Güzelyurt"][i % 4],
    district: ["Merkez", "Küçükkaymaklı", "Karakol", "Yenişehir"][i % 4],
    year: 2015 + (i % 10),
    km: 50000 + i * 1500,
    gear: i % 2 === 0 ? "Otomatik" : "Manuel",
    date: `${i + 1} gün önce`,
    title:"araba",
  }));
  
  export default cars;
  