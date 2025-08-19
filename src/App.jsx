import "./App.css";
import Header from "./component/Header";
import { useState, useEffect } from "react";
import products from "./products.json";
import Product from "./component/Product";
import Basket from "./component/Basket";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const resetBasket = () => {
    setBasket([]);
  };
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <>
      <Header total={total} money={money} />
      {products.map((product) => (
        <Product
          key={product.id}
          basket={basket}
          setBasket={setBasket}
          product={product}
          total={total}
          money={money}
        />
      ))}
      {total > 0 && (
        <Basket
          resetBasket={resetBasket}
          products={products}
          basket={basket}
          total={total}
        />
      )}
    </>
  );
}

export default App;
