import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'

export const key: InjectionKey<Store<state>> = Symbol('key')

export type state = {
    count: number,
    objectTest: Object,
}

export default createStore({
    state: {
        count: 0,
        objectTest: {
            a: 1,
            b: 2,
        }
    },
    getters: {
        getSuffixCount(state) {
            return 'xxxx' + state.count;
        },
    },
    mutations: {
        add(state, payload) {
            if (payload) {
                state.count += payload
            } else {
                state.count += 1
            }
        }
    },
    actions: {
        add(context, payload) {
            context.commit('add', payload);
        }
    }
})
