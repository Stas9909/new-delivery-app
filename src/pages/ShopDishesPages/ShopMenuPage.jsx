import React from "react";
import { useLocation, useParams } from "react-router-dom";
import './ShopMenuPage.css';
import FoodList from "../../components/FoodList/FoodList";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ShopMenuPage = () => {
  const params = useParams();
  const location = useLocation();
  const [data, setData] = useState([]);

  const cartData = useSelector(data => data.cart)

  const getCurrentShop = () => {
    return cartData.length > 0 ? cartData[0].restaurant : null
  }

  useEffect(() => {
    fetch(`https://my-database-62848-default-rtdb.firebaseio.com/shop-goods/${params.id}.json`)
      .then(res => res.json())
      .then(data => {
        const arr = Object.keys(data).map(key => {
          return {
            ...data[key], id: key,
            // id: key,
            // name: data[key].name
          };
        });
        // const arr = Object.values(data).map(value => {
        //   return {
        //     id: value.id,
        //     name: value.name
        //   };
        // });
        setData(arr);
      })
      .catch(error => console.log(error));

  }, [params]);

  return (
    <div className="shopMenuPage">
      <ul className="shopMenuUl">
        <FoodList
          currentShop={getCurrentShop()}
          data={data}
        />
        {/* {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default ShopMenuPage;