import React, { useState, useEffect } from 'react';
import { Recycle, Leaf, TrendingUp, ArrowRight, Package, Banknote } from 'lucide-react';

const LandingPage = ({ onNavigate }) => {
  // Simulated impact data
  const [impact, setImpact] = useState({
    wasteReduced: 1250, // kg
    pointsDistributed: 450000,
    activeMitras: 24,
  });

  // Make it feel "live"
  useEffect(() => {
    const interval = setInterval(() => {
      setImpact(prev => ({
        ...prev,
        wasteReduced: prev.wasteReduced + Math.floor(Math.random() * 5),
        pointsDistributed: prev.pointsDistributed + Math.floor(Math.random() * 100),
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <Recycle className="h-6 w-6 text-emerald-600" />
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">EcoIncentive</span>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onNavigate('dashboard')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-sm shadow-emerald-200"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-emerald-50 rounded-l-full opacity-50 -z-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
                <Leaf className="w-4 h-4" />
                Circular Economy Platform
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Ubah Limbah Jadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-400">Rupiah</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Tukarkan sampah rumah tangga Anda langsung ke pengepul tersertifikasi. Dapatkan poin dan tukarkan dengan berbagai keuntungan menarik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => onNavigate('dashboard')}
                  className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-200"
                >
                  Mulai Sekarang <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-white rounded-3xl transform rotate-3 scale-105 -z-10"></div>
               <div className="bg-white p-6 rounded-3xl shadow-xl w-full max-w-md border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <TrendingUp className="text-emerald-500" /> Live Impact Tracker
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl"><Package className="w-6 h-6" /></div>
                        <span className="font-medium text-gray-600">Waste Reduced</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-900">{impact.wasteReduced.toLocaleString()} <span className="text-sm font-normal text-gray-500">kg</span></span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><Banknote className="w-6 h-6" /></div>
                        <span className="font-medium text-gray-600">Points Given</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-900">{impact.pointsDistributed.toLocaleString()}</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Cara Kerja EcoIncentive</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">3 langkah mudah untuk mulai berkontribusi pada lingkungan dan mendapatkan keuntungan.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { step: '1', title: 'Pilih Jenis Limbah', desc: 'Pilih jenis sampah yang ingin disalurkan (Minyak Jelantah, Elektronik, Plastik).' },
                { step: '2', title: 'Request Pickup', desc: 'Isi form estimasi berat dan alamat. Mitra terdekat kami akan menjemput limbah Anda.' },
                { step: '3', title: 'Dapatkan Poin', desc: 'Mitra menimbang aktual limbah dan poin otomatis masuk ke saldo Anda.' }
              ].map((item, idx) => (
                <div key={idx} className="relative bg-gray-50 rounded-3xl p-6 md:p-8 hover:bg-emerald-50 transition-colors border border-gray-100">
                  <div className="w-14 h-14 bg-emerald-500 text-white rounded-2xl flexItems-center justify-center text-2xl font-bold mb-6 flex items-center shadow-lg shadow-emerald-200">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
