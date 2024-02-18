function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function () {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    pricefortitle: function (title) {
      return this.inventory.find((book) => book.title === title).price;
    },
  };
}

const inventory = [
  { title: "harry potter", price: 10 },
  { title: "eloquent javascript", price: 15 },
];
const bookshop = createBookShop(inventory);
console.log(bookshop.inventoryValue());
