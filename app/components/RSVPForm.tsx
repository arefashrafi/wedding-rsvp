'use client';

import { useState, useEffect } from 'react';
import { fetchRelatedGuests, submitRSVP, type Guest } from '../actions/guests';

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    dietaryRestrictions: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [relatedGuests, setRelatedGuests] = useState<Guest[]>([]);
  const [isLoadingGuests, setIsLoadingGuests] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      // Check if name contains both first and last name (at least 2 words) with longer delay
      const nameParts = formData.name.trim().split(/\s+/);
      if (nameParts.length >= 2 && formData.name.length >= 5) {
        setIsLoadingGuests(true);
        try {
          const guests = await fetchRelatedGuests(formData.name);
          if (guests.filter(g => g.name.toLowerCase() == formData.name.toLowerCase()).length > 0){
            formData.name = guests.filter(g => g.name.toLowerCase() == formData.name.toLowerCase())[0].name
            setRelatedGuests(guests);
          } else {
            setRelatedGuests([]);
          }
        } catch (error) {
          console.error('Error fetching guests:', error);
          setRelatedGuests([]);
        } finally {
          setIsLoadingGuests(false);
        }
      } else {
        setRelatedGuests([]);
      }
    }, 500); // Increased delay to 1.5 seconds to wait for full name

    return () => clearTimeout(timer);
  }, [formData.name]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Find the primary guest based on the name entered
    const primaryGuest = relatedGuests.find(guest => 
      guest.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (!primaryGuest) {
      setError('Could not find your invitation. Please check your name.');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitRSVP({
        email: formData.email,
        dietaryRestrictions: formData.dietaryRestrictions,
        message: formData.message,
        guests: relatedGuests,
        primary: primaryGuest
      });

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(result.error || 'Failed to submit RSVP');
      }
    } catch (err) {
      console.error('Error submitting RSVP:', err);
      setError('Failed to submit RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleGuestAttendance = (guestId: string) => {
    setRelatedGuests(prev =>
      prev.map(guest =>
        guest.id === guestId ? { ...guest, attending: !guest.attending } : guest
      )
    );
  };

  return (
    <div id="rsvp" className="w-2xl flex items-center">
      <div className="relative inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 z-0"></div>
      <div className="relative z-10 max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 border border-gray-200">
        <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">RSVP</h2>
        <p className="text-center text-gray-600 mb-8">We'd love to have you join us!</p>

        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
            Thank you! Your RSVP has been submitted.
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>

          {isLoadingGuests && (
            <div className="text-center py-4">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              <p className="text-sm text-gray-600 mt-2">Loading your party...</p>
            </div>
          )}

          {relatedGuests.length > 0 && !isLoadingGuests && (
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Party</h3>
              <p className="text-sm text-gray-600 mb-4">Please check the attendance for each guest in your party:</p>
              <div className="space-y-3">
                {relatedGuests.map((guest) => (
                  <label
                    key={guest.id}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={guest.attending}
                      onChange={() => toggleGuestAttendance(guest.id)}
                      className="w-5 h-5 text-gray-900 border-gray-300 rounded focus:ring-gray-900 focus:ring-2"
                    />
                    <span className="text-gray-900 font-medium flex-1">{guest.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      guest.attending 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {guest.attending ? 'Attending' : 'Not attending'}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {relatedGuests.some(g => g.attending) && (
            <>
              <div>
                <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-2">
                  Dietary Restrictions
                </label>
                <input
                  type="text"
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                  placeholder="Vegetarian, Gluten-free, etc."
                />
              </div>
            </>
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Any special requests or messages for us?"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || relatedGuests.length === 0}
            className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
          </button>
        </form>
      </div>
    </div>
  );
}
