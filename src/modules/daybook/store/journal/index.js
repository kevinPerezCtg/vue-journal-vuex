import state from "./state";
import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

const journalModule = {
  namespaced: true,
  actions: actions,
  getters: getters,
  mutation: mutations,
  state: state,
};

export default journalModule;
