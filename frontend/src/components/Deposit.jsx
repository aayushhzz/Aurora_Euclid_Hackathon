import React, { useState } from "react";

const Deposit = () => {
  const assets = [
    { name: "Ethereum (ETH)", rate: "2.02%" },
    { name: "Wrapped ETH (WETH)", rate: "2.02%" },
    { name: "Frax (FRAX)", rate: "3.05%" },
    { name: "Ethereum (ETH)", rate: "2.02%" },
    { name: "Wrapped ETH (WETH)", rate: "2.02%" },
    { name: "Frax (FRAX)", rate: "3.05%" },
  ];

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-1/3 mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-purple-500">
        Assets to Deposit
      </h2>
      <div className="space-y-4">
        {assets.map((asset, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg flex justify-between items-center"
          >
            <span className="text-lg font-medium">{asset.name}</span>
            <div className="flex space-x-2">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full">
                {asset.rate}
              </span>
              <button className="bg-purple-500 text-white px-3 py-1 rounded-full">
                Deposit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deposit;
