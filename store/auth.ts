import { defineStore } from "pinia";

interface AuthStateProps {
  username: string;
  password: string;
}

export const useAuthStore = defineStore("AuthStore", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ username, password }: AuthStateProps) {
      // useFetch from nuxt 3
      const { data, pending }: any = await useFetch(
        "https://dummyjson.com/auth/login",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            username: username,
            password,
          },
        }
      );
      this.loading = pending;

      if (data.value) {
        const token = useCookie("token");
        token.value = data?.value?.accessToken;
        this.authenticated = true;
      }
    },
    logUserOut() {
      const token = useCookie("token");
      this.authenticated = false;
      token.value = null;
    },
  },
});
