interface User {
  name: string;
  id: number;
  email: string;
}

export default async function UsersPage() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((data) => data);
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 pl-3">Users page</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
