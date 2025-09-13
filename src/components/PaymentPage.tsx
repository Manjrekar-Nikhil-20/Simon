const [formData, setFormData] = useState({
    bookingName: '',
    persons: '1',
    whatsapp: '',
    email: '',
    decoration: true, // Decoration is now mandatory for all venues
    slotId: '',
  });

      // Calculate total amount
      const basePrice = venue.price;
      const decorationFee = 400; // Decoration is now mandatory for all venues
      const cakesTotal = selectedCakes.reduce((total, cake) => {
        return total + (cake.price * cake.quantity);
      }, 0);