import React from "react";
import Image from "next/image";

const Body = () => {
  return (
    <>
      <div className="all bg-red-50 py-16 grid grid-cols-2 gap-24 container mx-auto">
        <div className="container mx-auto px-4 ">
          <h1 className="text-6xl font-bold mb-5 text-red-500 ">All Fast Food is <br /> Available  at Foodle</h1>
          <p className="text-gray-600 mb-6">We Are Just A Click Away When You Crave For Delicious Fast Food</p>
          </div>
            <div className="w-72 h-98 ml-100">
              <Image src="/shadow.png" alt="image" layout="responsive" width={300} height={200} className="shadow w-1/2"/>
            </div>
          
        
      </div>
      <div className="fast bg-red-100 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <b className="text-xl">Fast Delivery</b>
            <p className="text-gray-600">
              The Food will Be Delivered To <br />Your Home Within 1-2 Hours Of <br />Your Ordering
            </p>
          </div>
          <div className="text-center">
            <b className="text-xl">Fast Delivery</b>
            <p className="text-gray-600">
              The Food will Be Delivered To <br />Your Home Within 1-2 Hours Of <br />Your Ordering
            </p>
          </div>
          <div className="text-center">
            <b className="text-xl">Fast Delivery</b>
            <p className="text-gray-600">
              The Food will Be Delivered To <br />Your Home Within 1-2 Hours Of <br />Your Ordering
            </p>
          </div>
        </div>
      </div>
      <div className="best bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">
            Best <span className="text-red-500">Delivered</span> Categories
          </h2>
          <p className="text-gray-600">
            Here Are Some Of Our Best Distributed <br />Categories. If You Want You Can Order <br />From Here
          </p>
        </div>
      </div>
    </>
  );
};

export default Body;