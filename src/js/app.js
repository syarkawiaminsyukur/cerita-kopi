document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "kopi pagi ceria", img: "produk-1.png", price: 30000 },
      { id: 2, name: "Kopi Purnama", img: "produk-2.png", price: 35000 },
      { id: 3, name: "Kopi Harmoni", img: "produk-3.png", price: 35000 },
      { id: 4, name: "Kopi Prestige", img: "produk-4.png", price: 40000 },
      { id: 5, name: "Kopi Seribu Pulau", img: "produk-5.png", price: 40000 },
      { id: 6, name: "Kopi Klasik", img: "produk-6.png", price: 25000 },
      { id: 7, name: "Kopi Legenda", img: "produk-7.png", price: 45000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek apakah ada barang yang sama

      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
        console.log(this.items);
      } else {
        // jika ada, cek apakah barang tersebut sama atau tidak
        this.items = this.items.map((item) => {
          // jika tidak ada yang sama
          if (item.id != newItem.id) {
            return item;
          } else {
            // jika barang ada, tambah quantity barangnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },

    remove(id) {
      // ambil item yang mau diremove
      const cartItem = this.items.find((item) => item.id === id);

      // jika quantity lebih dari 1, kurangi quantity
      if (cartItem.quantity > 1) {
        // telusuri satu-satu
        this.items = this.items.map((item) => {
          // jika item yang dihapus
          if (item.id === id) {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          } else {
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika barang sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// Konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
