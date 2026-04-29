import React, { useState } from 'react';
import { Ticket, QrCode, X, CheckCircle, Clock } from 'lucide-react';

const DUMMY_VOUCHERS = {
  active: [
    {
      id: "V-1001",
      title: "Voucher Rp 50.000 Coffee Shop Lokal",
      type: "QR",
      code: "COFFEE-50K-XYZ",
      expiry: "30 Nov 2023",
      imageColor: "bg-amber-100 text-amber-700"
    },
    {
      id: "V-1002",
      title: "Token Listrik PLN Rp 20.000",
      type: "Token",
      code: "1234-5678-9012-3456",
      expiry: "Tidak ada masa berlaku",
      imageColor: "bg-yellow-100 text-yellow-600"
    }
  ],
  history: [
    {
      id: "V-0998",
      title: "Saldo E-Wallet Rp 50.000",
      usedDate: "15 Okt 2023",
      imageColor: "bg-blue-100 text-blue-500"
    },
    {
      id: "V-0995",
      title: "Voucher Belanja Rp 100.000",
      usedDate: "10 Sep 2023",
      imageColor: "bg-purple-100 text-purple-500"
    }
  ]
};

const MyVouchersPage = () => {
  const [selectedVoucher, setSelectedVoucher] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <Ticket className="mr-3 text-emerald-500 w-8 h-8" />
            Voucher Saya
          </h1>
          <p className="text-gray-500">Kelola dan gunakan voucher yang telah Anda tukarkan.</p>
        </div>

        {/* Active Vouchers Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <CheckCircle className="mr-2 text-emerald-500 w-5 h-5" /> Voucher Aktif
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DUMMY_VOUCHERS.active.map(voucher => (
              <div key={voucher.id} className="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className={`h-24 ${voucher.imageColor} flex items-center justify-center`}>
                  <Ticket className="w-12 h-12 opacity-80" />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="font-bold text-gray-900 mb-1">{voucher.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">Berlaku s/d: {voucher.expiry}</p>
                  
                  <button 
                    onClick={() => setSelectedVoucher(voucher)}
                    className="mt-auto w-full bg-emerald-50 text-emerald-700 font-semibold py-2.5 rounded-xl border border-emerald-200 hover:bg-emerald-100 transition-colors"
                  >
                    Gunakan Voucher
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* History Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Clock className="mr-2 text-gray-400 w-5 h-5" /> Riwayat Voucher
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DUMMY_VOUCHERS.history.map(voucher => (
              <div key={voucher.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden opacity-60 grayscale hover:grayscale-0 transition-all flex flex-col">
                <div className={`h-20 ${voucher.imageColor} flex items-center justify-center`}>
                  <Ticket className="w-8 h-8 opacity-50" />
                </div>
                <div className="p-5 flex-grow">
                  <h3 className="font-semibold text-gray-900 mb-1">{voucher.title}</h3>
                  <p className="text-sm text-gray-500">Digunakan pada: {voucher.usedDate}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Voucher Modal */}
        {selectedVoucher && (
          <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" aria-hidden="true" onClick={() => setSelectedVoucher(null)}></div>
              
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              
              <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
                  <button onClick={() => setSelectedVoucher(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-500">
                    <X className="w-6 h-6" />
                  </button>
                  
                  <div className="text-center mt-3">
                    <h3 className="text-lg leading-6 font-bold text-gray-900" id="modal-title">
                      {selectedVoucher.title}
                    </h3>
                    
                    <div className="mt-6 mb-4 flex justify-center">
                      {selectedVoucher.type === 'QR' ? (
                        <div className="p-4 bg-white border-2 border-gray-100 rounded-2xl shadow-inner inline-block">
                          <QrCode className="w-48 h-48 text-gray-800" />
                          <p className="text-xs text-gray-400 mt-2">Scan di Kasir</p>
                        </div>
                      ) : (
                        <div className="p-4 bg-gray-50 border-2 border-gray-200 border-dashed rounded-xl w-full">
                          <p className="text-sm text-gray-500 mb-1">Kode Token</p>
                          <p className="text-xl font-mono font-bold tracking-widest text-emerald-700">
                            {selectedVoucher.code}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-xl">
                      Tunjukkan layar ini kepada petugas atau salin kode token untuk digunakan.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-center border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setSelectedVoucher(null)}
                    className="w-full inline-flex justify-center rounded-xl border border-transparent shadow-sm px-4 py-3 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:text-sm transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default MyVouchersPage;
