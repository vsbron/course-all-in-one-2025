import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { clearCart } from "../features/cart/cartSlice";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatPrice } from "../utils";

// Set up the action
// eslint-disable-next-line react-refresh/only-export-components
export const action = (store) => async () => {
  console.log(store);
  return null;
};

// The CheckoutForm component
function CheckoutForm() {
  // Returned JSX
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">Shipping information</h4>
      <FormInput label="First name" name="name" type="text" size="w-full" />
      <FormInput label="Address" name="address" type="text" size="w-full" />
      <div className="mt-4">
        <SubmitBtn text="Place your order" />
      </div>
    </Form>
  );
}

export default CheckoutForm;
