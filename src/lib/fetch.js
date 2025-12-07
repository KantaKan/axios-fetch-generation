export const createUser = (data) => {
  return fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateUser = (data) => {
  let { id } = data;
  return fetch(`http://localhost:3000/api/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

updateUser({ id: 1, name: "fia", profilePicURL: "https://i.pinimg.com/736x/f8/6b/2d/f86b2d924dcb9619f62c6d838a72e2ad.jpg", description: "asdasdasd" });
