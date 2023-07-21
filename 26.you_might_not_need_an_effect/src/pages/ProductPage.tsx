import { useEffect } from "react";

export default function ProductPage({ product, addToCart }: ProductPageProps) {
  // 🔴 Avoid: Event-specific logic inside an Effect
//   useEffect(() => {
//     if (product.isInCart) {
//         showNotification(`Added ${product.name} to the shopping cart!`)
//     }
//   }, [product])


  // ✅ Good: Event-specific logic is called from event handlers
  function buyProduct() {
    addToCart(product);
    showNotification(`Added ${product.name} to the shopping cart!`)
  }

  function handleBuyClick() {
    // addToCart(product);
    buyProduct();
  }
  
  function handleCheckoutClick() {
    // addToCart(product);
    buyProduct();
    navigatorTo('/checkout');
  }

  return (
    <>
      <b>Product: </b> {product.name} {}
      <b>Price: </b> {product.price}
    </>
  )
}


const showNotification = (message: string) => {
  alert(message);
}
const navigatorTo = console.log;