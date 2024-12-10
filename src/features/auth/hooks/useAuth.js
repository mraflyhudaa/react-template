import { useState, useCallback } from "react";
import { useApi } from "@hooks/useApi";
import endpoints from "@api/endpoints";

export const useAuth = () => {
  const { request } = useApi();
  const [user, setUser] = useState(null);

  const login = useCallback(
    async (credentials) => {
      const response = await request({
        url: endpoints.auth.login,
        method: "POST",
        data: credentials,
      });

      localStorage.setItem("token", response.token);
      setUser(response.user);
      return response;
    },
    [request]
  );

  const logout = useCallback(async () => {
    await request({
      url: endpoints.auth.logout,
      method: "POST",
    });

    localStorage.removeItem("token");
    setUser(null);
  }, [request]);

  return { user, login, logout };
};
