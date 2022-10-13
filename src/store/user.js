import axios from "axios";

export default {
  state: () => ({
    userId: null,
    isAuth: false,
  }),
  getters: {},
  mutations: {
    SET_AUTH(state, bool) {
      state.isAuth = bool;
    },
    SET_USER_ID(state, id) {
      state.userId = id;
    },
  },
  actions: {
    async login({ state, commit }, { email, password }) {
      const userData = {
        email,
        password,
      };
      const { data } = await axios.post(
        "http://localhost:4444/auth/login",
        userData
      );

      if ("token" in data) {
        window.localStorage.setItem("token", data);
        commit("SET_USER_ID", data._id);
        commit("SET_AUTH", true);

        return { id: state.userId, isAuth: state.isAuth };
      }

      return state.isAuth;
    },
  },
  namespaced: true,
};
