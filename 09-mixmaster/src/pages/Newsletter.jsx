import { Form } from "react-router-dom";

export const action = async ({ request }) => {
  // Get the form data and convert it to object
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Return null
  return null;
};

function Newsletter() {
  // Returned JSX
  return (
    <Form className="form" method="post">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our newsletter
      </h4>
      {/* Name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
          defaultValue="John"
        />
      </div>
      {/* Last name */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
          defaultValue="Smith"
        />
      </div>
      {/* Email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="email"
          required
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
      >
        Submit
      </button>
    </Form>
  );
}

export default Newsletter;
