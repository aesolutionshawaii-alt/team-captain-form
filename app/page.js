'use client';
import { useState } from 'react';

export default function CaptainForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoBase64, setPhotoBase64] = useState('');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Photo must be less than 5MB');
        e.target.value = '';
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setPhotoPreview(base64String);
        setPhotoBase64(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formElement = e.target;
    const formData = new FormData();
    
    // Add all form fields
    formData.append('access_key', 'c55bd8dd-2e25-4f53-91e5-b75ad5fd133e');
    formData.append('subject', 'New Pro Team Captain Submission');
    formData.append('from_name', 'Tsutomu Captain Form');
    formData.append('captain_name', formElement.captain_name.value);
    formData.append('charter_name', formElement.charter_name.value);
    formData.append('location', formElement.location.value);
    formData.append('testimonial', formElement.testimonial.value);
    formData.append('website_url', formElement.website_url.value);
    
    // Add photo as base64 attachment
    if (photoBase64) {
      formData.append('attachment', photoBase64);
    }
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        formElement.reset();
        setPhotoPreview(null);
        setPhotoBase64('');
      } else {
        alert('Something went wrong: ' + (data.message || 'Please try again'));
        console.error('Form error:', data);
      }
    } catch (error) {
      alert('Error submitting form. Please try again.');
      console.error('Submit error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
          <p className="text-gray-300 mb-6">
            We've received your information and will feature you on our Pro Team page shortly!
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Another Captain
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-2xl p-8">
          <div className="text-center mb-8">
            <img 
              src="/ahitrooper white1.png" 
              alt="Tsutomu Lures" 
              className="h-24 mx-auto mb-6"
            />
            <h1 className="text-3xl font-bold text-white mb-2">Captain Profile Submission</h1>
            <p className="text-gray-300">
              Help us feature you on the Tsutomu Pro Team page
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Captain Name *
              </label>
              <input
                type="text"
                name="captain_name"
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Charter Name *
              </label>
              <input
                type="text"
                name="charter_name"
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Location *
              </label>
              <input
                type="text"
                name="location"
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Your Testimonial About Tsutomu Lures *
              </label>
              <textarea
                name="testimonial"
                required
                rows={5}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <p className="text-sm text-gray-400 mt-1">
                Share your honest experience - why you trust Tsutomu lures
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Charter Website URL *
              </label>
              <input
                type="url"
                name="website_url"
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Photo * (Max 5MB)
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                required
                onChange={handlePhotoChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:cursor-pointer hover:file:bg-blue-700"
              />
              {photoPreview && (
                <div className="mt-4">
                  <img 
                    src={photoPreview} 
                    alt="Preview" 
                    className="w-48 h-48 object-cover rounded-lg border-2 border-white/30"
                  />
                </div>
              )}
              <p className="text-sm text-gray-400 mt-1">
                Photo of you, your boat, or a great catch
              </p>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : 'Submit Profile'}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Questions? Email info@tsutomulures.com
        </p>
      </div>
    </div>
  );
}
