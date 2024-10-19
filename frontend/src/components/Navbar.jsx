import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const handleConnectWallet = () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          setWalletAddress(accounts[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert('Please install MetaMask!');
    }
  };

  const handleDisconnectWallet = () => {
    setWalletAddress(""); // Clears the walletAddress, effectively "disconnecting" the wallet
  };

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      window.ethereum.request({ method: 'eth_accounts' })
        .then((accounts) => {
          setWalletAddress(accounts[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <nav className="bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="grid">
              <a className="text-4xl p-2 font-semibold text-purple-400 no-underline" href="/">CoinClutch</a>
            </div>
            <div className="ml-6 grid-cols-2 p-3">
              <a href="/" className="text-white hover:bg-purple-500 hover:text-white no-underline px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
              <a href="/market" className="text-white hover:bg-purple-500 hover:text-white no-underline px-3 py-2 rounded-md text-sm font-medium">Market</a>
            </div>
          </div>
          <div className="flex items-center">
            <form className="flex space-x-2" role="search">
              {!walletAddress ? (
                <button
                  className="walletconnectbutton bg-purple-600 text-white hover:bg-purple-700 rounded-md px-4 py-2"
                  type='button'
                  onClick={handleConnectWallet}
                >
                  Connect Wallet
                </button>
              ) : (
                <div className="flex space-x-4 items-center">
                  <span className="text-white font-semibold">Connected: {walletAddress.slice(0, 8)}...</span>
                  <button
                    className="bg-red-500 text-white hover:bg-red-600 rounded-md px-4 py-2"
                    type='button'
                    onClick={handleDisconnectWallet}
                  >
                    Disconnect
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
