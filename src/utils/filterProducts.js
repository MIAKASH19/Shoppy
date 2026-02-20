export function filterProducts(products, category, minPrice, maxPrice) {
  return products.filter((product) => {
    const matchCategory = category === "all" || product.category === category;
    const matchPrice = product.price >= minPrice && product.price <= maxPrice;
    return matchCategory && matchPrice;
  });
}