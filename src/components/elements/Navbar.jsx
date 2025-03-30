import { useState } from 'react';
import WalletConnect from '../modals/WalletConnect';
import { useAppKitAccount, useAppKitNetwork, useAppKitState, useWalletInfo } from "@reown/appkit/react";
import { useAccount } from 'wagmi';

const Navbar = () => {

const { address, isConnected, caipAddress, status, embeddedWalletInfo } = useAppKitAccount()
const { selectedNetworkId } = useAppKitNetwork()
const { chain } = useAccount()

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log('address',address,'isConnected',isConnected,'caipAddress',caipAddress,'status',status,'selectedNetworkId',chain,'embeddedWalletInfo',embeddedWalletInfo)

  return (
    <nav className="border-b border-gray-200 bg-white p-2">
      <div className="lg:w-[80%] mx-auto w-full px-4 flex justify-between items-center">
        {/* Logo and Hamburger Menu (mobile) */}
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <button 
              className="md:hidden mr-2 text-gray-600"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <img src="/logo.png" alt="logo" className="w-10 h-10" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block border rounded-lg py-2 px-4 focus:outline-none"
          />
        </div>

        <div className="hidden md:flex items-center gap-4 ps-4">
          <button className="text-black font-bold px-2 py-1 rounded-md text-sm hover:bg-gray-200 bg-gray-200">Home</button>
          <button className="text-black font-bold px-2 py-1 rounded-md text-sm hover:bg-gray-200">Explore</button>
          <button className="text-black font-bold px-2 py-1 rounded-md text-sm hover:bg-gray-200">Notifications</button>
        </div>
        {isConnected &&address&&<button className="hidden md:inline-flex text-white bg-gray-950 border border-gray-950 hover:border-gray-800 px-4 py-1  items-center space-x-1.5 rounded-full font-bold outline-2 outline-offset-4 transition-colors mr-4">{address}</button>}
        {isConnected&&chain?.name&&<button className="hidden md:inline-flex text-white bg-gray-950 border border-gray-950 hover:border-gray-800 px-4 py-1  items-center space-x-1.5 rounded-full font-bold outline-2 outline-offset-4 transition-colors">Network:{chain.name}</button>}

        {/* hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
          <button className="text-gray-950 border border-gray-300 px-4 py-1 rounded-full font-bold outline-2 outline-offset-4 transition-colors">Signup</button>
          <button className="text-white bg-gray-950 border border-gray-950 hover:border-gray-800 px-4 py-1 inline-flex items-center space-x-1.5 rounded-full font-bold outline-2 outline-offset-4 transition-colors" onClick={toggleModal}>
            <img src="https://hey.xyz/lens.svg" alt="" width={16} className="me-2" />
            {isConnected &&address?"Connected":"Login"}
          </button>
        </div>

        {/* visible only on mobile */}
        <div className="md:hidden">
          <button className="text-white bg-gray-950 border border-gray-950 hover:border-gray-800 px-4 py-1 inline-flex items-center space-x-1.5 rounded-full font-bold outline-2 outline-offset-4 transition-colors"
            onClick={toggleModal}
          >
            <img src="https://hey.xyz/lens.svg" alt="" width={16} className="me-2" />
            {isConnected &&address?"Connected":"Login"}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4">
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg py-2 px-4 focus:outline-none w-full mb-2"
            />
            <button className="text-black font-bold px-2 py-2 rounded-md text-sm hover:bg-gray-200 bg-gray-200 text-left">Home</button>
            <button className="text-black font-bold px-2 py-2 rounded-md text-sm hover:bg-gray-200 text-left">Explore</button>
            <button className="text-black font-bold px-2 py-2 rounded-md text-sm hover:bg-gray-200 text-left">Notifications</button>
            <button className="text-gray-950 border border-gray-300 px-4 py-2 rounded-full font-bold outline-2 outline-offset-4 transition-colors text-left mt-2">Signup</button>
            {isConnected &&address&&<button className="inline-flex text-white bg-gray-950 border border-gray-950 hover:border-gray-800 px-4 py-1  items-center space-x-1.5 rounded-full font-bold outline-2 outline-offset-4 transition-colors mr-4">{address}</button>}
        {isConnected&&chain?.name&&<button className="inline-flex text-white bg-gray-950 border border-gray-950 hover:border-gray-800 px-4 py-1  items-center space-x-1.5 rounded-full font-bold outline-2 outline-offset-4 transition-colors">Network:{chain.name}</button>}
          </div>
        </div>
      )}
      {/* WalletConnect Modal */}
      {isModalOpen && <WalletConnect onClose={toggleModal} />}
    </nav>
  );
};

export default Navbar;