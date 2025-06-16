// FlixParamsModal.jsx
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { 
  setDistributor,
  setLanguage,
  setProduct_mpn,
  setProduct_ean,
  setProduct_brand,
} from "../../Slice/FlixSlice";

const FlixParamsModal = ({ isOpen, onClose, onSubmit, productName }) => {
  const [formData, setFormData] = useState({
    distributorID: '',
    mpn: '',
    ean: '',
    language: 'en',
    live: '1'  // Changed to string type
  });
  
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value  // No longer converting to number
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.distributorID.trim()) {
      newErrors.distributorID = 'Distributor ID is required';
    }
    if (!formData.language.trim()) {
      newErrors.language = 'Language is required';
    }
    if (!formData.mpn.trim() && !formData.ean.trim()) {
      newErrors.general = 'Either MPN or EAN is required';
    }
    
    // Updated validation for Live as text
    if (!formData.live.trim()) {
      newErrors.live = 'Live is required';
    } else {
      const liveValue = Number(formData.live);
      if (isNaN(liveValue)) {
        newErrors.live = 'Live must be a number';
      } else if (liveValue < 0) {
        newErrors.live = 'Live must be a non-negative number';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Update Redux store
      dispatch(setDistributor(formData.distributorID));
      dispatch(setLanguage(formData.language));
      dispatch(setProduct_mpn(formData.mpn));
      dispatch(setProduct_ean(formData.ean));
      dispatch(setProduct_brand(""));
      
      // Pass data to parent component
      onSubmit({
        ...formData,
        live: Number(formData.live)  // Convert to number before submitting
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div onClick={(e)=>e.stopPropagation()}  className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div onClick={(e)=>e.stopPropagation()} className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Product Information</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              For: <span className="font-medium">{productName}</span>
            </p>
          </div>

          {/* Distributor ID */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Distributor ID *
            </label>
            <input
              type="text"
              name="distributorID"
              value={formData.distributorID}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded text-xl ${
                errors.distributorID ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter distributor ID"
            />
            {errors.distributorID && (
              <p className="text-red-500 text-sm mt-1">{errors.distributorID}</p>
            )}
          </div>

          {/* MPN */}
          <div>
            <label className="block text-sm font-medium mb-1">
              MPN (Manufacturer Part Number)
            </label>
            <input
              type="text"
              name="mpn"
              value={formData.mpn}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-xl rounded"
              placeholder="Enter MPN"
            />
          </div>

          {/* EAN */}
          <div>
            <label className="block text-sm font-medium mb-1">
              EAN (European Article Number)
            </label>
            <input
              type="text"
              name="ean"
              value={formData.ean}
              onChange={handleInputChange}
              className="w-full p-2 border text-xl border-gray-300 rounded"
              placeholder="Enter EAN"
            />
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Language Code *
            </label>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded text-xl ${
                errors.language ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter language code (e.g. en, fr, de)"
            />
            {errors.language && (
              <p className="text-red-500 text-sm mt-1">{errors.language}</p>
            )}
          </div>

          {/* Live Input - Now as text */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Live *
            </label>
            <input
              type="text"
              name="live"
              value={formData.live}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded text-xl ${
                errors.live ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter live value"
            />
            {errors.live && (
              <p className="text-red-500 text-sm mt-1">{errors.live}</p>
            )}
          </div>

          {/* General error */}
          {errors.general && (
            <p className="text-red-500 text-sm">{errors.general}</p>
          )}

          <div className="text-xs text-gray-500 mt-4">
            * Required fields. Either MPN or EAN must be provided.
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlixParamsModal;