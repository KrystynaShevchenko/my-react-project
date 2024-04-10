// import { useEffect } from 'react';
import './App.css';
import { Product } from './Product';
import Modal from './Modal';

export default function App() {
  return (
    <div className="container">
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <button onClick={() => alert("I'm a button!")}>Order me now!</button>
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <button onClick={() => alert("I'm a button!")}>Order me now!</button>
      <Modal />
    </div>
  );
}
