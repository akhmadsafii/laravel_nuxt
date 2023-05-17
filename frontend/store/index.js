// store/index.js
export const state = () => ({
    currentPage: 1,
  });
  
  export const mutations = {
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
  };
  