import React from "react";
import './ShopPage.css'
// import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ShopPage = () => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    // axios.get('/api/mongoConnection')
    fetch('https://my-database-62848-default-rtdb.firebaseio.com/shop-goods.json')
      .then(res => res.json())
      .then(data => {
        // const key = [];
        // for (let key in data) {
        //   arr.push({
        //     key, id: key
        //   })
        // }
        const key = Object.keys(data).map(key => {
          return {
            key,
            id: key
          }
        })
        setLists(key)
      })
      .catch(error => console.log(error))
  }, [])

  // useEffect(() => {
  //   axios.get('../../../data.json')
  //     .then(res => setLists(res.data))
  //     .catch(error => console.log(error))
  // }, [])

  return (
    <div className="shopPage">
      <ul className="shopPageUl">
        <h4>Shops:</h4>
        {lists.map(list => <li className="ShopsList" key={list.id}>
          <NavLink className="link" to={`/shop/${list.id}`}>
            <p className="shopTextName">{list.key}</p>
          </NavLink></li>)}
      </ul>
      <Outlet />
    </div>
  )
}

export default ShopPage
