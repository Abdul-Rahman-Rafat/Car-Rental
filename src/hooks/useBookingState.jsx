import { createContext, useContext, useMemo, useState } from 'react';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState({ pickupDate: '', returnDate: '', location: '' });
  const value = useMemo(() => ({ booking, setBooking }), [booking]);
  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBookingState() {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBookingState must be used within BookingProvider');
  return context;
}
