import React, { useContext } from "react";
import { MdHome } from "react-icons/md";
import { FaRegHeart, FaTrash } from "react-icons/fa6";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cart";

const Cart = () => {
    const cart = useContext(CartContext);
    const total = cart.items.reduce((a, b) => a + Number(b.price), 0);
    const Delivery = 7;
    return (
    <div className="bg-gray-50 min-h-screen">

      <header className="h-20 w-full flex justify-between items-center px-10 bg-white shadow-md">
        <div className="text-3xl font-bold text-gray-900">E-Shop</div>
        <div className="flex gap-4 text-gray-700 text-2xl">
          <Link to='/'>
            <MdHome className="cursor-pointer hover:text-blue-600 transition" />
          </Link>
          <Link to='/wishlist'>
            <FaRegHeart className="cursor-pointer hover:text-red-500 transition" />
          </Link>
        </div>
      </header>

      {/* Cart Section */}
      <div className="h-[calc(100vh-80px)] p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Cart</h2>

        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left: Cart Items */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-6 lg:w-2/3">
            {/* Cart Item */}
            {
                cart && cart.items.map((item)=>{
                    return(
                        <div key={item.id} className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 bg-gray-100 p-4 rounded-lg">
                            <div className="flex items-center gap-4">
                                <img
                                src={item.image}
                                alt={item.name}
                                className="w-25 h-25 rounded-lg object-cover"
                                />
                                <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {item.name}
                                </h3>
                                <p className="text-gray-600">Price: ${item.price}</p>
                                <p className="text-gray-600">Quantity:{cart.count}</p>
                                </div>
                            </div>
              
                            {/* Counter + Delete Button */}
                            <div className="flex items-center gap-4">
                                <Counter increment={cart.increment} decrement={cart.decrement} count={cart.count} setCount={cart.setCount}/>
                                <button onClick={()=>cart.removeFromCart(item.id)}
                                  className="text-red-500 hover:text-red-700 transition">
                                <FaTrash size={20} />
                                </button>
                            </div>
                        </div>
                    )
                })
            }
          </div>

          {/* Right: Pricing Details */}
          <div className=" max-h-[300px] bg-white shadow-lg rounded-lg p-6 lg:w-1/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Pricing Details
            </h2>

            <div className="flex justify-between text-gray-700 text-lg">
              <span>Price</span>
              <span>${(total)+".00"}</span>
            </div>
            <div className="flex justify-between text-gray-700 text-lg mt-2">
              <span>Delivery</span>
              <span>${Delivery+".00"}</span>
            </div>

            <hr className="my-4 border-gray-300" />

            <div className="flex justify-between text-xl font-semibold text-gray-900">
              <span>Total</span>
              <span>${
                total > 0 ? (total+Delivery+".00") : 0
              }</span>
            </div>

            <button className="w-full mt-6 bg-blue-600 text-white text-lg py-3 rounded-lg hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
