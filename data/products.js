// Sample catalogue. The demo used to read from MongoDB Atlas; it is now bundled so it runs with no database.
const img = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;

const products = [
  { id: "1", name: "Fresh Apples", desc: "Crisp red apples, picked this week.", price: 20, image: img(2714463) },
  { id: "2", name: "Watermelon", desc: "Sweet and juicy, perfect for summer.", price: 18, image: img(3429784) },
  { id: "3", name: "Strawberries", desc: "Ripe strawberries, sold by the box.", price: 25, image: img(4562968) },
  { id: "4", name: "Bananas", desc: "Naturally sweet, a healthy snack.", price: 12, image: img(61127) },
  { id: "5", name: "Grapes", desc: "Seedless green grapes.", price: 22, image: img(708777) },
];

export default products;
