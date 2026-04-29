import React, { useState } from 'react';
import { Mail, Lock, LogIn, Chrome } from 'lucide-react';

const AuthPage = ({ onNavigate }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo mode: Bypass validation and go straight to dashboard
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-screen flex w-full">
      {/* Left Side - Illustration/Value Proposition */}
      <div className="hidden lg:flex w-1/2 bg-emerald-600 text-white flex-col justify-center items-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-700 opacity-20 pointer-events-none mix-blend-multiply"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-emerald-400 rounded-full blur-3xl opacity-30"></div>
        
        <div className="z-10 max-w-lg text-center">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            Mulai Perjalanan Sirkularmu
          </h1>
          <p className="text-emerald-100 text-lg leading-relaxed mb-8">
            Ubah sampah menjadi berkah. Tukarkan botol plastik dan material daur ulang lainnya dengan poin yang bisa digunakan untuk kebutuhan sehari-harimu.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-xl">
               <span className="text-2xl font-bold">♻️</span>
            </div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-xl">
               <span className="text-2xl font-bold">🪙</span>
            </div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-xl">
               <span className="text-2xl font-bold">🌱</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-8 sm:p-12 relative">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Selamat Datang Kembali' : 'Buat Akun Baru'}
            </h2>
            <p className="text-gray-500">
              {isLogin ? 'Masuk untuk mengelola sampah dan poinmu.' : 'Daftar sekarang dan mulai kontribusimu.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="email" 
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="anda@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="password" 
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="••••••••"
                />
              </div>
              {isLogin && (
                <div className="flex justify-end mt-2">
                  <a href="#" className="text-sm font-medium text-emerald-600 hover:text-emerald-500">Lupa password?</a>
                </div>
              )}
            </div>

            <button 
              type="submit" 
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
            >
              <LogIn className="w-5 h-5 mr-2" />
              {isLogin ? 'Login (Demo)' : 'Daftar (Demo)'}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Atau lanjutkan dengan</span>
              </div>
            </div>

            <div className="mt-6">
              <button 
                type="button"
                onClick={() => onNavigate('dashboard')}
                className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
              >
                <Chrome className="w-5 h-5 mr-2 text-gray-600" />
                Google (Demo)
              </button>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            {isLogin ? "Belum punya akun? " : "Sudah punya akun? "}
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)} 
              className="font-medium text-emerald-600 hover:text-emerald-500"
            >
              {isLogin ? 'Daftar sekarang' : 'Login di sini'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
