import React, { useState } from 'react';
import { Wallet, PlusCircle, ArrowLeft, History, MapPin, Scale, Tag, CheckCircle2, Clock } from 'lucide-react';

const DUMMY_HISTORY = [
  { id: 'TRX-1029', date: '2023-10-24', type: 'Plastik', weight: '2.5 kg', points: '+250', status: 'completed' },
  { id: 'TRX-1028', date: '2023-10-20', type: 'Minyak Jelantah', weight: '5 L', points: '+500', status: 'completed' },
  { id: 'TRX-1027', date: '2023-10-15', type: 'Elektronik', weight: '1.2 kg', points: 'Pending', status: 'pending' },
];

const UserDashboard = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    waste_type: '',
    estimated_weight: '',
    address: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setShowSuccess(true);
      setFormData({ waste_type: '', estimated_weight: '', address: '' });
      setTimeout(() => setShowSuccess(false), 3000);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-12">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-10 flex items-center gap-4">
        <button onClick={() => onNavigate('landing')} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-bold text-gray-800">My Dashboard</h1>
      </header>

      <main className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column: Points & History */}
        <div className="md:col-span-5 space-y-6">
          {/* Points Balance Card */}
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-5 sm:p-6 text-white shadow-lg shadow-emerald-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20"><Wallet className="w-24 h-24" /></div>
            <p className="text-emerald-100 font-medium mb-1">Current Points Balance</p>
            <h2 className="text-4xl font-extrabold mb-4">12,450 <span className="text-xl font-medium opacity-80">pts</span></h2>
            <div className="inline-flex px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              = Rp 124.500
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-white rounded-3xl border border-gray-100 p-5 sm:p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <History className="w-5 h-5 text-gray-400" /> Transaction History
            </h3>
            <div className="space-y-4">
              {DUMMY_HISTORY.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${item.status === 'completed' ? 'bg-emerald-100 text-emerald-600' : 'bg-orange-100 text-orange-600'}`}>
                       {item.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{item.type}</p>
                      <p className="text-xs text-gray-500">{item.date} • {item.weight}</p>
                    </div>
                  </div>
                  <div className={`font-bold ${item.status === 'completed' ? 'text-emerald-600' : 'text-gray-400'}`}>
                    {item.points}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-emerald-600 text-sm font-medium hover:text-emerald-700 py-2">
              View All History
            </button>
          </div>
        </div>

        {/* Right Column: Request Form */}
        <div className="md:col-span-7">
          <div className="bg-white rounded-3xl border border-gray-100 p-5 sm:p-8 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <PlusCircle className="w-6 h-6 text-emerald-500" /> Request Pickup
              </h2>
              <p className="text-gray-500 mt-2">Fill details below and a certified Mitra will pick up your waste.</p>
            </div>

            {showSuccess && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-2xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5" />
                <p className="font-medium">Pickup request submitted successfully!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gray-400"/> Waste Type
                </label>
                <select 
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  value={formData.waste_type}
                  onChange={e => setFormData({...formData, waste_type: e.target.value})}
                >
                  <option value="" disabled>Select waste type</option>
                  <option value="oil">Minyak Jelantah</option>
                  <option value="electronic">Elektronik</option>
                  <option value="plastic">Plastik PET</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-gray-400"/> Estimated Weight / Volume
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. 5 kg or 2 Liters"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  value={formData.estimated_weight}
                  onChange={e => setFormData({...formData, estimated_weight: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400"/> Pickup Address
                </label>
                <textarea 
                  required
                  rows="3"
                  placeholder="Enter full address details..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-md shadow-emerald-200 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>

      </main>
    </div>
  );
};

export default UserDashboard;
