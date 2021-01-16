const state = {
    words: []
 };
 const getters = {
       words: (state) => state.words
 };
 const actions = {

        addWordDefination({commit}, param){
                    commit('addWord',param);
        }
 };
 const mutations = {
      addWord(state, payload){
            console.log('payload',payload)
           state.words.push(payload);
      }
 };
 export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
 }