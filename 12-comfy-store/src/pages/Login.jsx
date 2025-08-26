import { Form, Link, redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";

import { loginUser } from "../features/user/userSlice";

// Create the action function
// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store) =>
  async ({ request }) => {
    // Get the form data
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    // Send a post request to log in
    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("Logged in successfully");
      return redirect("/");
    } catch (err) {
      const errorMessage =
        err?.response?.data?.error?.message ||
        "Please double-check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

// The Login component
function Login() {
  // Returned JSX
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          Guest User
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
