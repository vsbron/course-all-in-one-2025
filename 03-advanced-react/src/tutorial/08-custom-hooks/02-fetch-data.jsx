import useFetchData from "./useFetchData";

// Url for user data fetching
const url = "https://api.github.com/users/QuincyLarson";

const FetchData = () => {
  // Getting the data from the custom hook
  const { isLoading, isError, user } = useFetchData(url);

  // Guard clauses
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  // Destructuring the data
  const { avatar_url, name, company, bio } = user;

  // Returned JSX
  return (
    <div>
      <img
        style={{ width: "100px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default FetchData;
