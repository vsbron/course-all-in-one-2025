import { useNavbar } from "./NavbarProvider";

function UserContainer() {
  // Getting the user and logout function from the Context API
  const { user, logOut } = useNavbar();

  // Returned JSX
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logOut}>
            Log out
          </button>
        </>
      ) : (
        <p>Please log in!</p>
      )}
    </div>
  );
}

export default UserContainer;
