import { createStore } from 'vuex';
import accountStore from './accountStore';
import siteStore from './siteStore';

export default createStore({
    modules: {
        account: accountStore,
        site: siteStore
    }
});