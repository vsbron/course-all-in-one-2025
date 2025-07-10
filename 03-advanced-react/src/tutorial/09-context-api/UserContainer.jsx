function UserContainer({ user, logOut }) {
  // Returned JSX
  return (
    <div>
      <h4>UserContainer</h4>
      {user ? (
        <>
          <h5>{user.name}</h5>
          <button className="btn" onClick={logOut}>
            Log out
          </button>
        </>
      ) : (
        <h5>Please log in!</h5>
      )}
    </div>
  );
}

export default UserContainer;
