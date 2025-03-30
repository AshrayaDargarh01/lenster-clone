import { useAppKit } from "@reown/appkit/react";

function WalletConnect({ onClose }) {
    const { open, close } = useAppKit()

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="sm:max-w-lg inline-block w-full scale-100 rounded-xl bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:align-middle ">
                <h2 className="divider flex items-center justify-between px-5 py-3.5">
                    <b>Login</b>
                    <button
                        className="rounded-full p-1 text-gray-800 hover:bg-gray-200 "
                        type="button"
                        onClick={onClose}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </h2>
                <hr className="w-full bg-gray-200" />
                <div className="m-5">
                    <div className="space-y-5">
                        <div className="space-y-2">
                            <h4 className="text-xl font-bold">Connect your wallet.</h4>
                            <div className="text-gray-500 text-sm">Connect with one of our available wallet providers or create a new one.</div>
                        </div>
                        <div className="inline-block w-full space-y-3 overflow-hidden text-left align-middle">
                            <button className="hover:bg-gray-100  flex w-full items-center justify-between space-x-2.5 overflow-hidden rounded-xl border px-4 py-3 outline-none"
                            onClick={()=>open()}
                            >
                                <span>WalletConnect</span>
                                <img alt="walletConnect" className="size-6" draggable="false" src="https://hey-assets.b-cdn.net/images/wallets/walletconnect.svg" width="24" height="24" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WalletConnect;