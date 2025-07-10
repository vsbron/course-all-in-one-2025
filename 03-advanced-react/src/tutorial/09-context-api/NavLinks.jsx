import UserContainer from "./UserContainer";

function NavLinks({ user, logOut }) {
  // Returned JSX
  return (
    <div>
      <h3>NavLinks</h3>
      <UserContainer user={user} logOut={logOut} />
    </div>
  );
}

export default NavLinks;
