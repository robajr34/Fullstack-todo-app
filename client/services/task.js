const BASE_URL = "http://localhost:5000/api/task";

export const getTasks = async (additionals) => {
  const res = await fetch(`${BASE_URL}/${additionals || ""}`, {
    credentials: "include",
    method: "GET",
  });
  return res;
};

export const createNewTask = async ({ title, description, dueDate, user }) => {
  const res = await fetch(`${BASE_URL}/new`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      dueDate,
      user,
    }),
  });
  return res;
};
export const updateTask = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    credentials: "include",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res;
};
export const deleteTask = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    credentials: "include",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
