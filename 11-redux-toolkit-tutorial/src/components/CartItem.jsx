import { useDispatch } from "react-redux";

import { ChevronDown, ChevronUp } from "../icons";
import { increase, removeItem } from "../features/cart/cartSlice";

function CartItem({ id, title, price, img, amount }) {
  // Get the dispatch function
  const dispatch = useDispatch();

  // Returned JSX
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
