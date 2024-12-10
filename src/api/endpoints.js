const endpoints = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refreshToken: "/auth/refresh-token",
  },
  users: {
    getProfile: "/users/profile",
    updateProfile: "/users/profile",
    getUsers: "/users",
  },
  products: {
    getAll: "/products",
    getById: (id) => `/products/${id}`,
    create: "/products",
    update: (id) => `/products/${id}`,
    delete: (id) => `/products/${id}`,
  },
};

export default endpoints;
