const BASE_URL = "http://localhost:5000/api/auth";

export const signup = async ({ username, email, password }) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  return res
};

export const login = async ({email, password})=>{
  const res = await fetch(`${BASE_URL}/login`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return res;
}
export const logout = async () => {
  const res = await fetch(`${BASE_URL}/logout`, {
    credentials: "include",
    method: "POST",
  });

  return res;
}
