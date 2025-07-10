import UserContainer from "./UserContainer";

function NavLinks({ user, logOut }) {
  // Returned JSX
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserContainer user={user} logOut={logOut} />
    </div>
  );
}

export default NavLinks;
