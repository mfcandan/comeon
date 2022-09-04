import create from "zustand";

export const useStore = create((set, get) => ({
  // initial values
  user: "",
  searchQuery: "",
  categories: [],
  games: [],
  searchQuery: "",
  selectedCategory: 0,

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
  fetchGames: async () => {
    try {
      const res = await fetch("http://localhost:3001/games", { method: "get" });
      const data = await res.json();
      if (res.status === 200) {
        set(() => ({
          games: data,
        }));
      }
    } catch (error) {
      console.log("error", error);
    }
  },
  fetchCategories: async () => {
    try {
      const res = await fetch("http://localhost:3001/categories", {
        method: "get",
      });
      const data = await res.json();
      if (res.status === 200) {
        set(() => ({
          categories: data,
        }));
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
  setSearchQuery: (value) => {
    set(() => ({
      searchQuery: value,
    }));
  },
  setSelectedCategory: (selectedCategory) => {
    set(() => ({
      selectedCategory,
    }));
  },
}));
