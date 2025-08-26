import { Form, Link, redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";

// Create the action function
// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  // Get the form data
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    // Send a post request to register
    const _ = await customFetch.post("/auth/local/register", data);
    toast.success("Account created successfully");
    return redirect("/login");
  } catch (e) {
    // If not, generate error message and toast it
    const errorMessage =
      e?.response?.data?.error?.message ||
      "Please double-check your credentials";
    toast.error(errorMessage);
  }
  return null;
};

// The Register component
function Register() {
  // Returned JSX
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Register;
