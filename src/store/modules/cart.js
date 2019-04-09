const state = {
  shopcartList:[]
};

const getters = {
  cartTotal:(state)=>{
    let total = 0;
    for(let i = 0;i < state.shopcartList.length;i++){
      total = total + ((state.shopcartList[i].price-0)*(state.shopcartList[i].quantification));
    }
    return total
  }
};

const actions = {
  addtoCart({commit,state},product){
    if(product.inventory>0){
      console.log(state.shopcartList);
      if(state.shopcartList.find(list => list.id === product.id)){
        commit('mergetoCart',product)
      }else{
        commit('pushtoCart',product)
      }
    }
  }
};

const mutations = {
  pushtoCart(state,product){
    state.shopcartList.push(product);
  },
  mergetoCart(state,product){
    const p = state.shopcartList.find(list => list.id === product.id);
    p.quantification++
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
