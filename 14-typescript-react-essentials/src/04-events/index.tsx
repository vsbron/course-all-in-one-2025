import { useState } from "react";

// Create Person type
type Person = {
  name: string;
};

function Component() {
  // Create state values for controlled inputs
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  // Email change handler
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  // Form submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // This also works without controlled input elements
    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);

    // Assigning form data to property
    const text = formData.get("text") as string;
    const person: Person = { name: text };
    // const person: Person = { name: data.text as string };
    console.log(person);
  };

  // Returned JSX
  return (
    <div>
      <h2>Events example</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="form-input mb-1"
          value={text}
          name="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Text"
        />
        <input
          type="email"
          className="form-input mb-1"
          value={email}
          name="email"
          onChange={handleEmailChange}
          placeholder="Email"
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Component;
