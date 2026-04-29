import React, { useState } from 'react';
import { Truck, MapPin, Package, Check, X, Scale, User, Clock } from 'lucide-react';

const INITIAL_REQUESTS = [
  {
    id: "REQ-001",
    userName: "Budi Santoso",
    address: "Jl. Merdeka No. 123, Blok B",
    wasteType: "Plastik & Kertas",
    estimatedWeight: "3-5 kg",
    status: "Pending",
    date: "24 Okt 2023, 09:00"
  },
  {
    id: "REQ-002",
    userName: "Siti Rahma",
    address: "Komp. Permai Indah Raya No. 45",
    wasteType: "Kardus Bekas",
    estimatedWeight: "10-15 kg",
    status: "Pending",
    date: "24 Okt 2023, 11:30"
  },
  {
    id: "REQ-003",
    userName: "Andi Wijaya",
    address: "Jl. Sudirman 89, Gg. Mangga",
    wasteType: "Campuran (Plastik, Kaca)",
    estimatedWeight: "2-4 kg",
    status: "Pending",
    date: "24 Okt 2023, 14:15"
  }
];

const MitraDashboard = () => {
  const [requests, setRequests] = useState(INITIAL_REQUESTS);
  const [showModal, setShowModal] = useState(false);
  const [selectedReq, setSelectedReq] = useState(null);
  const [actualWeight, setActualWeight] = useState('');
  const [calculatedPoints, setCalculatedPoints] = useState(0);

  // Dummy point calculation: 1kg = 150 points
  const handleWeightChange = (e) => {
    const weight = parseFloat(e.target.value);
    setActualWeight(e.target.value);
    if (!isNaN(weight) && weight > 0) {
      setCalculatedPoints(Math.floor(weight * 150));
    } else {
      setCalculatedPoints(0);
    }
  };

  const handleApproveClick = (req) => {
    setSelectedReq(req);
    setActualWeight('');
    setCalculatedPoints(0);
    setShowModal(true);
  };

  const handleConfirmApproval = () => {
    if (actualWeight && !isNaN(parseFloat(actualWeight))) {
      // Update status to 'Completed' or 'Approved'
      setRequests(requests.map(r => 
        r.id === selectedReq.id ? { ...r, status: 'Completed', actualWeight: `${actualWeight} kg`, pointsAwarded: calculatedPoints } : r
      ));
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              <Truck className="mr-3 text-emerald-500 w-8 h-8" />
              Mitra Dashboard
            </h1>
            <p className="text-gray-500">Kelola permintaan penjemputan sampah dan berikan poin.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center">
              <div className="bg-blue-100 p-2 rounded-xl mr-3 flex-shrink-0">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Pending</p>
                <p className="text-xl font-bold text-gray-900">{requests.filter(r => r.status === 'Pending').length}</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center">
              <div className="bg-emerald-100 p-2 rounded-xl mr-3 flex-shrink-0">
                <Check className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Selesai</p>
                <p className="text-xl font-bold text-gray-900">{requests.filter(r => r.status === 'Completed').length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table/List View */}
        <div className="bg-white shadow-sm border border-gray-100 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Pelanggan
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Alamat
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Detail Sampah
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {requests.map((req) => (
                  <tr key={req.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{req.userName}</div>
                          <div className="text-sm text-gray-500">{req.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-gray-900 max-w-xs truncate" title={req.address}>{req.address}</div>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Package className="h-4 w-4 text-gray-400 mr-1" />
                        {req.wasteType}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">Est: {req.estimatedWeight}</div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        req.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                      {req.status === 'Pending' ? (
                        <button
                          onClick={() => handleApproveClick(req)}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        >
                          <Scale className="h-4 w-4 mr-1" />
                          Approve & Weigh
                        </button>
                      ) : (
                        <div className="text-emerald-600 text-sm font-medium">
                          {req.actualWeight} • +{req.pointsAwarded} pts
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {requests.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              Tidak ada permintaan penjemputan saat ini.
            </div>
          )}
        </div>

        {/* Modal Timbang & Approve */}
        {showModal && selectedReq && (
          <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" aria-hidden="true" onClick={() => setShowModal(false)}></div>
              
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              
              <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
                  <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-500">
                    <X className="w-6 h-6" />
                  </button>
                  
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 sm:mx-0 sm:h-10 sm:w-10">
                      <Scale className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <h3 className="text-xl leading-6 font-bold text-gray-900" id="modal-title">
                        Input Berat Aktual
                      </h3>
                      <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4">
                        <p className="text-sm font-medium text-gray-900">{selectedReq.userName}</p>
                        <p className="text-xs text-gray-500 mb-2">{selectedReq.address}</p>
                        <div className="flex justify-between text-sm mt-2 pt-2 border-t border-gray-200">
                          <span className="text-gray-500">Jenis: {selectedReq.wasteType}</span>
                          <span className="text-gray-500">Est: {selectedReq.estimatedWeight}</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                          Berat Timbangan Aktual (kg)
                        </label>
                        <div className="relative rounded-md shadow-sm">
                          <input
                            type="number"
                            name="weight"
                            id="weight"
                            className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-xl py-3 border"
                            placeholder="0.00"
                            step="0.1"
                            min="0"
                            value={actualWeight}
                            onChange={handleWeightChange}
                          />
                          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">kg</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 bg-emerald-50 rounded-xl p-4 border border-emerald-100 flex justify-between items-center">
                        <div>
                          <p className="text-xs font-medium text-emerald-800">Poin yang Diberikan</p>
                          <p className="text-xs text-emerald-600 mt-0.5">Otomatis dihitung (1kg = 150 pts)</p>
                        </div>
                        <div className="text-2xl font-bold text-emerald-600">
                          +{calculatedPoints}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-100">
                  <button
                    type="button"
                    onClick={handleConfirmApproval}
                    disabled={!actualWeight || parseFloat(actualWeight) <= 0}
                    className={`w-full inline-flex justify-center rounded-xl border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm transition-colors ${
                      actualWeight && parseFloat(actualWeight) > 0
                        ? 'bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
                        : 'bg-emerald-300 cursor-not-allowed'
                    }`}
                  >
                    Konfirmasi Selesai
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
    </div>
  );
};

export default MitraDashboard;
