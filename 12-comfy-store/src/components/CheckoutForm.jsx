import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { clearCart } from "../features/cart/cartSlice";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatPrice } from "../utils";

// Set up the action
// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store) =>
  async ({ request }) => {
    // Get the form data and pull the name and the address
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    // Get the user and cart constants
    const user = store.getState().user.user;
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;

    // Build the object for sending the order
    const info = {
      address,
      cartItems,
      chargeTotal: orderTotal,
      name,
      numItemsInCart,
      orderTotal: formatPrice(orderTotal),
    };

    try {
      const _ = await customFetch.post(
        "/orders",
        { data: info },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );

      // Clear the cart and display the success message
      store.dispatch(clearCart());
      toast.success("Order placed successfully");
      // Redirect user to orders
      return redirect("/orders");
    } catch (err) {
      // If not, generate error message and toast it
      const errorMessage =
        err?.response?.data?.error?.message ||
        "There was an error placing your order";
      toast.error(errorMessage);
      if (err.response.status === 401 || err.response.status === 403)
        return redirect("/login");
      return null;
    }
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
