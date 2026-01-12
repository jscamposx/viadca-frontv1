import apiClient from "../core/client";
import { setAccessToken, clearAccessToken } from "../core/tokenManager";
import { buildPaginatedParams } from "../core/utils";

export const authService = {

  register: async (userData) => {
    const { data } = await apiClient.post("/usuarios/register", userData);
    return data;
  },

  login: async (credentials) => {
    const { data } = await apiClient.post("/usuarios/login", credentials);
    if (data?.access_token) {
      setAccessToken(data.access_token);
    }
    return data;
  },

  logout: async () => {
    try {
      const { data } = await apiClient.post("/usuarios/logout");
      return data;
    } finally {
      clearAccessToken();
    }
  },

  verifyEmail: async (token) => {
    const { data } = await apiClient.post("/usuarios/verify-email", { token });
    return data;
  },

  forgotPassword: async (email) => {
    const { data } = await apiClient.post("/usuarios/forgot-password", { correo: email });
    return data;
  },

  resetPassword: async (token, newPassword) => {
    const { data } = await apiClient.post("/usuarios/reset-password", {
      token,
      nuevaContrasena: newPassword,
    });
    return data;
  },

 
  getProfile: async () => {
    const { data } = await apiClient.get("/usuarios/profile");
    return data;
  },

  updateProfile: async (userData) => {
    const { data } = await apiClient.patch("/usuarios/profile", userData);
    return data;
  },


  getAllUsers: async (params = {}) => {
    const { data } = await apiClient.get("/admin/usuarios", {
      params: buildPaginatedParams(params),
    });
    return data;
  },

  getUserById: async (id) => {
    const { data } = await apiClient.get(`/admin/usuarios/${id}`);
    return data;
  },

  getUserStats: async () => {
    const { data } = await apiClient.get("/admin/usuarios/stats/overview");
    return data;
  },

  updateUserRole: async (id, role) => {
    const { data } = await apiClient.patch(`/admin/usuarios/${id}/role`, { rol: role });
    return data;
  },


  getDeletedUsers: async () => {
    const { data } = await apiClient.get("/admin/usuarios/deleted/list");
    return data;
  },

  softDeleteUser: async (id) => {
    const { data } = await apiClient.patch(`/admin/usuarios/${id}/soft-delete`);
    return data;
  },

  restoreUser: async (id) => {
    const { data } = await apiClient.patch(`/admin/usuarios/${id}/restore`);
    return data;
  },

  hardDeleteUser: async (id) => {
    const { data } = await apiClient.post(`/admin/usuarios/${id}/hard-delete`);
    return data;
  },
};