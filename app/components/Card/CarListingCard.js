import Image from "next/image";

const CarListingCard = ({ car }) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <div className="relative aspect-[4/3] bg-gray-100">
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">
          {car.year} {car.brand} {car.model}
        </h3>
        <p className="text-blue-600 font-bold text-sm mb-1">
          £{car.price}
        </p>
        <p className="text-sm text-gray-600">
          {car.city} - {car.district}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {car.km} km • {car.gear}
        </p>
      </div>
    </div>
  );
};

export default CarListingCard;
