import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  // Creating the state for the fetched data
  const [users, setUsers] = useState([]);

  // Creating the useEffect function
  useEffect(() => {
    // Creating abort controller for fetch function
    const controller = new AbortController();
    const signal = controller.signal;

    // The fetch function
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });
        const data = await response.json();
        setUsers(data);
      } catch {
        console.log("There was an error while fetching data");
      }
    };

    // Calling the fetch function
    fetchData();

    // Clear the fetch function
    return () => controller.abort();
  }, []);

  // Returned JSX
  return (
    <>
      <h2>fetch data example</h2>
      <ul className="users">
        {users.map((data) => (
          <li
            key={data.id}
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <img
              src={data.avatar_url}
              width="50"
              height="50"
              alt={data.login}
              style={{ borderRadius: "50%" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {data.login}
              <span style={{ display: "inline-block", marginTop: "-5px" }}>
                [
                <a href={data.html_url} target="_blank" rel="noreferrer">
                  GitHub link
                </a>
                ]
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default FetchData;
