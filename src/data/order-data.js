export const SUPPLIERS_DETAILS = [
  { label: "Supplier", text: "East coast Fruits & Vegetables" },
  { label: "Shipping Date", text: "Thu, Feb 10" },
  { label: "Total", text: "" },
  { label: "Category", image: "./public/avo.png" },
  { label: "Department", text: "300-444-678" },
  { label: "Status", text: "Awaiting your approval" },
];

export const sampleProducts = [
  {
    id: 4231,
    quantity: 16,
    name: "Avocado",
    price: 10,
    category: "Avo",
    brand: "Green House",
    status: "",
    image: "/avo.png",
  },
  {
    id: 1232,
    quantity: 5,
    name: "Wine",
    price: 15,
    category: "Wine",
    brand: "JacobC",
    status: "",
    image: "/bottle.png",
  },
  {
    id: 4563,
    quantity: 1,
    name: "Broccoli",
    price: 30,
    category: "Broccoli",
    brand: "Black House",
    status: "",
    image: "/brocoli.png",
  },
  {
    id: 1024,
    quantity: 30,
    name: "Chilli",
    price: 4,
    category: "Chilli",
    brand: "Brand No",
    status: "",
    image: "/chilli.png",
  },
  {
    id: 1035,
    quantity: 10,
    name: "Grape",
    price: 30,
    category: "Grape",
    brand: "Green House",
    status: "",
    image: "/grape.png",
  },
  {
    id: 1025,
    quantity: 10,
    name: "Leaf",
    price: 5,
    category: "Leaf",
    brand: "Green Black House",
    status: "",
    image: "/leaf.png",
  },
  {
    id: 1026,
    quantity: 0,
    name: "wheat",
    price: 50,
    category: "wheat",
    brand: "Green Black House",
    status: "",
    image: "/wheat.png",
  },
  {
    id: 1027,
    quantity: 30,
    name: "Mushroom",
    price: 25,
    category: "Shroom",
    brand: "Black House",
    status: "",
    image: "/shroom.png",
  },
];

sampleProducts.forEach((product) => {
  product.total = product.quantity * product.price;
});

const total = sampleProducts.reduce((acc, product) => {
  return acc + product.price * product.quantity;
}, 0);

const totalLabel = SUPPLIERS_DETAILS.find((detail) => detail.label === "Total");
if (totalLabel) {
  totalLabel.text = `$${total.toFixed(2)}`;
}

export { total };
