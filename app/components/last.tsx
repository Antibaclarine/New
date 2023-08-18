import React from 'react';
import Image from 'next/image';

export const MenuList = [
  {
    image: "/star.png",
    
  },
  {
    image: "/brown.png",
    
  },
  {
    image: "/yellow.png",
    
  },
];

const All = () => {
  return (
    <div className="productes grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
      {MenuList.map((item, index) => (
        <div key={index} className="productkeys">
          <Image
            src={item.image}
            alt="name"
            width={300} 
            height={200} 
            className=" object-cover mb-4 "
          />

  
        </div>
      ))}
    </div>
  );
};

export default All;