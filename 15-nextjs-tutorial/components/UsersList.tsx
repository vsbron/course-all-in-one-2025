import { fetchUsers } from "@/utils/action";
import DeleteButton from "./DeleteButton";

async function UsersList() {
  // Get the users
  const users = await fetchUsers();

  // Returned JSX
  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map(({ id, firstName, lastName }) => (
            <h4
              key={id}
              className="capitalize text-lg flex justify-between items-center mb-2"
            >
              {firstName} {lastName}
              <DeleteButton id={id} />
            </h4>
          ))}
        </div>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default UsersList;
