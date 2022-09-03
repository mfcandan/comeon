import create from "zustand";

export const useStore = create((set, get) => ({
  // initial values
  user: "",
  searchQuery: "",
  categories: [],
  games: [],

  // actions
  login: async (user, pass) => {
    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user,
          password: pass,
        }),
      });
      const data = await res.json();
      if (res.status === 200 && data.player !== null) {
        set(() => ({
          user: { ...data.player, username: user },
        }));
        localStorage.setItem(
          "user",
          JSON.stringify({ ...data.player, username: user })
        );
      }
    } catch (error) {
      console.log("error", error);
    }
  },
  logout: async (username) => {
    try {
      const res = await fetch("http://localhost:3001/logout", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
        }),
      });
      if (res.status === 200) {
        set(() => ({
          user: "",
        }));
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.log("error", error);
    }
  },
  setUser: (user) => {
    set(() => ({
      user,
    }));
  },
}));
