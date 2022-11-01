import React, { useEffect, useState } from "react";
import Card from "./Card";
type ProductType = {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: object
    title: string
}
  

function StoreProducts() {
  const [data, setData] = useState<ProductType[]>([]);
  useEffect(() => {
    const res = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => console.log(data));
  });
  return (
    <div>
      {data?.map((product) => {
        return (
          <div key={product.id}>
            <Card {...product} />
          </div>
        );
      })}
    </div>
  );
}

export default StoreProducts;
