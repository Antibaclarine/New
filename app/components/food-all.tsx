import React from 'react';
import Image from 'next/image';

export const MenuList = [
  {
    image: "/first.png",
    name: 'Chicken Burger',
    order: 'Order Now',
  },
  {
    image: "/second.png",
    name: 'Chicken Pizza',
    order: 'Order Now',
  },
  {
    image: "/third.png",
    name: 'French Fries',
    order: 'Order Now',
  },
];

const Allmenu = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
      {MenuList.map((item, index) => (
        <div key={index} className="bg-red-100 rounded-lg p-4">
          <Image
            src={item.image}
            alt={item.name}
            width={300} 
            height={200} 
            className=" object-cover mb-4 "
          />
          <p className="text-xl font-bold mb-2">{item.name}</p>
          <p className="text-gray-600">{item.order}</p>
        </div>
      ))}
    </div>
  );
};

export default Allmenu;