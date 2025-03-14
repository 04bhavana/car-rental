import React, { useState } from 'react';
import { Star, Send, ThumbsUp } from 'lucide-react';

const Feedback = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Feedback Matters</h1>
          <p className="text-gray-600">Help us improve your car rental experience</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rating Section */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">How would you rate your experience?</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="focus:outline-none"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hover || rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Which vehicle did you rent?
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a vehicle</option>
              <option value="suv">SUV</option>
              <option value="sedan">Sedan</option>
              <option value="luxury">Luxury</option>
              <option value="sports">Sports Car</option>
              <option value="van">Van</option>
            </select>
          </div>

          {/* Service Ratings */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Rate our services</h3>
            {['Booking Process', 'Vehicle Condition', 'Customer Service', 'Value for Money'].map((service) => (
              <div key={service} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{service}</span>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      className={`w-8 h-8 rounded-full ${
                        num <= 3 ? 'bg-gray-200' : 'bg-blue-100'
                      } flex items-center justify-center hover:bg-blue-200 transition-colors`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Feedback */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tell us more about your experience
            </label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Share your thoughts, suggestions, or concerns..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>

          {/* Recommendation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Would you recommend us to others?
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-blue-50"
              >
                <ThumbsUp className="w-5 h-5" />
                Yes
              </button>
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-blue-50"
              >
                <ThumbsUp className="w-5 h-5 rotate-180" />
                No
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Send className="w-5 h-5" />
            Submit Feedback
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
              Thank you for your feedback!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Feedback;