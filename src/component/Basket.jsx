import BasketItem from "./basketItem";
import "../css/Basket.css"

function Basket({ basket, products, total ,resetBasket}) {
  return (
    <div className="basket-container container ">
        <h3>Alışveriş Detayları</h3>
      <ul>
        {basket.map((item) => (
        <BasketItem
            key={item.id}
          item={item}
          product={products.find((p) => p.id === item.id)}
        />
      ))}
      </ul>

      <div className="total">Toplam:${total}</div>

      <button className="basket-reset-btn" onClick={resetBasket}>Sepeti sıfırla</button>
    </div>
  );
}

export default Basket;
