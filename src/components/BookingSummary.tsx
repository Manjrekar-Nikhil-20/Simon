@@ .. @@
 const BookingSummary = ({ venue, formData, selectedCakes = [], selectedAddOns = [] }: BookingSummaryProps) => {
   const basePrice = venue.price;
 }
-  const decorationFee = formData?.decoration ? 400 : 0;
+  const decorationFee = 400; // Decoration is now mandatory for all venues
   
   const cakesTotal = selectedCakes.reduce((total, cake) => {
     return total + (cake.price * cake.quantity);
   }
   )