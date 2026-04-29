import React, { useState, useEffect } from 'react';
import { Gift, Coins, CheckCircle, X, Coffee, Zap, Wallet, ShoppingBag } from 'lucide-react';

// Dummy data for vouchers
const DUMMY_VOUCHERS = [
  // E-Wallet
  {
    id: 1,
    title: "Saldo E-Wallet (GoPay/OVO/Dana) Rp 10.000",
    description: "Saldo akan dikirim langsung ke nomor HP yang terdaftar.",
    pointsRequired: 100,
    icon: <Wallet className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-100",
    category: "E-Wallet"
  },
  {
    id: 2,
    title: "Saldo E-Wallet (GoPay/OVO/Dana) Rp 25.000",
    description: "Saldo akan dikirim langsung ke nomor HP yang terdaftar.",
    pointsRequired: 250,
    icon: <Wallet className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-100",
    category: "E-Wallet"
  },
  {
    id: 3,
    title: "Saldo E-Wallet (GoPay/OVO/Dana) Rp 50.000",
    description: "Saldo akan dikirim langsung ke nomor HP yang terdaftar.",
    pointsRequired: 500,
    icon: <Wallet className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-100",
    category: "E-Wallet"
  },
  
  // E-Commerce
  {
    id: 4,
    title: "E-Commerce Voucher (Tokopedia/Shopee) Rp 25.000",
    description: "Kode voucher digital untuk potongan harga belanja online.",
    pointsRequired: 250,
    icon: <ShoppingBag className="w-8 h-8 text-purple-500" />,
    color: "bg-purple-100",
    category: "E-Commerce"
  },
  {
    id: 5,
    title: "E-Commerce Voucher (Tokopedia/Shopee) Rp 50.000",
    description: "Kode voucher digital untuk potongan harga belanja online.",
    pointsRequired: 500,
    icon: <ShoppingBag className="w-8 h-8 text-purple-500" />,
    color: "bg-purple-100",
    category: "E-Commerce"
  },
  {
    id: 6,
    title: "E-Commerce Voucher (Tokopedia/Shopee) Rp 100.000",
    description: "Kode voucher digital untuk potongan harga belanja online.",
    pointsRequired: 1000,
    icon: <ShoppingBag className="w-8 h-8 text-purple-500" />,
    color: "bg-purple-100",
    category: "E-Commerce"
  },

  // F&B & Minimarket
  {
    id: 7,
    title: "F&B / Minimarket (Indomaret/GrabFood) Rp 25.000",
    description: "Dapat digunakan untuk belanja di minimarket atau pesan antar.",
    pointsRequired: 250,
    icon: <Coffee className="w-8 h-8 text-amber-700" />,
    color: "bg-amber-100",
    category: "F&B & Retail"
  },
  {
    id: 8,
    title: "F&B / Minimarket (Indomaret/GrabFood) Rp 50.000",
    description: "Dapat digunakan untuk belanja di minimarket atau pesan antar.",
    pointsRequired: 500,
    icon: <Coffee className="w-8 h-8 text-amber-700" />,
    color: "bg-amber-100",
    category: "F&B & Retail"
  },

  // Utilitas
  {
    id: 9,
    title: "Token Listrik PLN Rp 20.000",
    description: "Kode token listrik akan muncul pada riwayat penukaran Anda.",
    pointsRequired: 200,
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    color: "bg-yellow-100",
    category: "Utilitas"
  },
  {
    id: 10,
    title: "Token Listrik PLN Rp 50.000",
    description: "Kode token listrik akan muncul pada riwayat penukaran Anda.",
    pointsRequired: 500,
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    color: "bg-yellow-100",
    category: "Utilitas"
  }
];

const RedeemPage = () => {
  const [points, setPoints] = useState(1250); // Dummy initial points
  const [showModal, setShowModal] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Handle Toast timeout
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleRedeemClick = (voucher) => {
    setSelectedVoucher(voucher);
    setShowModal(true);
  };

  const confirmRedeem = () => {
    if (points >= selectedVoucher.pointsRequired) {
      setPoints(prev => prev - selectedVoucher.pointsRequired);
      setShowModal(false);
      setToastMessage(`Berhasil menukar ${selectedVoucher.title}!`);
    } else {
      setShowModal(false);
      setToastMessage('Poin Anda tidak mencukupi untuk penukaran ini.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header section with Balance */}
        <div className="bg-white rounded-3xl p-5 md:p-8 shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              <Gift className="mr-3 text-emerald-500 w-8 h-8" />
              Katalog Hadiah
            </h1>
            <p className="text-gray-500">Tukarkan poin sirkularmu dengan berbagai voucher menarik.</p>
          </div>
          
          <div className="bg-emerald-50 rounded-2xl p-5 md:p-6 border border-emerald-100 flex items-center shadow-inner w-full md:w-auto min-w-0 md:min-w-[250px]">
            <div className="bg-emerald-500 rounded-full p-3 mr-4 shadow-md">
              <Coins className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-emerald-800 mb-1">Poin Tersedia</p>
              <p className="text-3xl font-extrabold text-emerald-600 tracking-tight">
                {points.toLocaleString('id-ID')}
              </p>
            </div>
          </div>
        </div>

        {/* Vouchers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DUMMY_VOUCHERS.map((voucher) => (
            <div key={voucher.id} className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col group">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${voucher.color}`}>
                  {voucher.icon}
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {voucher.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                {voucher.title}
              </h3>
              
              <p className="text-sm text-gray-500 mb-6 flex-grow line-clamp-3">
                {voucher.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center text-emerald-600 font-bold">
                  <Coins className="w-4 h-4 mr-1.5" />
                  {voucher.pointsRequired}
                </div>
                
                <button 
                  onClick={() => handleRedeemClick(voucher)}
                  disabled={points < voucher.pointsRequired}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                    points >= voucher.pointsRequired 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm hover:shadow' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Tukar Poin
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-4 right-4 z-50 animate-fade-in-up">
            <div className={`rounded-xl shadow-lg p-4 flex items-center space-x-3 ${toastMessage.includes('Berhasil') ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'}`}>
              {toastMessage.includes('Berhasil') ? (
                <CheckCircle className="w-6 h-6 text-emerald-500" />
              ) : (
                <X className="w-6 h-6 text-red-500" />
              )}
              <p className={`font-medium ${toastMessage.includes('Berhasil') ? 'text-emerald-800' : 'text-red-800'}`}>
                {toastMessage}
              </p>
            </div>
          </div>
        )}

        {/* Confirmation Modal */}
        {showModal && selectedVoucher && (
          <div className="fixed inset-0 z-40 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" aria-hidden="true" onClick={() => setShowModal(false)}></div>
              
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              
              <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
                  <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-500">
                    <X className="w-6 h-6" />
                  </button>
                  <div className="sm:flex sm:items-start">
                    <div className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${selectedVoucher.color} sm:mx-0 sm:h-10 sm:w-10`}>
                      {React.cloneElement(selectedVoucher.icon, { className: 'w-6 h-6' })}
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-bold text-gray-900" id="modal-title">
                        Konfirmasi Penukaran
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Anda akan menukarkan <strong className="text-emerald-600">{selectedVoucher.pointsRequired} Poin</strong> untuk mendapatkan:
                        </p>
                        <p className="font-semibold text-gray-800 mt-2 p-3 bg-gray-50 rounded-xl border border-gray-100">
                          {selectedVoucher.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-100">
                  <button
                    type="button"
                    onClick={confirmRedeem}
                    className="w-full inline-flex justify-center rounded-xl border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
                  >
                    Tukar Sekarang
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-xl border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
                  >
                    Batal
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
      
      {/* Add basic keyframes for toast animation if not in global css */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(1rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default RedeemPage;
