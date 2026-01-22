import { useState, ReactNode } from 'react';
import { BookingContext } from './BookingContext';

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => {
    setIsBookingOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <BookingContext.Provider value={{ isBookingOpen, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
