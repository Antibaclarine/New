import React from 'react';
import Image from 'next/image';
const MenuList = [
  {
    img: "/circle.png",
    name: 'Chicken Burger',
    order: 'Order Now',
  },
  {
    img: "/circle.png",
    name: 'Chicken Pizza',
    order: 'Order Now',
  },
  {
    img: "/circle.png",
    name: 'French Fries',
    order: 'Order Now',
  },
  {
    img: "/circle.png",
    name: 'French Fries',
    order: 'Order Now',
  },
  {
    img: "/circle.png",
    name: 'French Fries',
    order: 'Order Now',
  },
  {
    img: "/circle.png",
    name: 'French Fries',
    order: 'Order Now',
  },
];

const Manual = () => {
  return (
    <div className="product container mx-auto">
      <h1 className='text-2xl font-bold mb-2'>Our <span className="text-red-500 ">Regular</span> Menu</h1>
      <p>These Are Our Regular Menus. You Can<br />Order Anything You Like</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 ">
        {MenuList.map((item, index) => (
          <div key={index} className="bg-white  p-4 ">
            <div className="flex justify-center mb-4">
            <Image
            src={item.img}
            alt={item.name}
            width={300} 
            height={200} 
            className=" object-cover mb-4 "
          />
            </div>
            <div className="text-center bg-red-100 ">
              <p className="text-xl font-bold mb-2">{item.name}</p>
              <p className="text-gray-600 mb-2">{item.order}</p>
              <span className="text-gray-700 font-bold text-lg">$4.80</span>
              <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                Buy Now
              </button>
            </div>
            <div className=''>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manual;