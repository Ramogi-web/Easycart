export const getUser = () => {
  const user = localStorage.getItem("user");

  try {
    return user ? JSON.parse(user) : null;
  } catch (e) {
    return null;
  }
};

export const isLoggedIn = () => {
  return getUser() !== null;
};

export const logout = () => {
  localStorage.removeItem("user");
};