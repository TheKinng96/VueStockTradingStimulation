import stocks from '../../data/stocks'

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks
    },
    'RND_STOCK'(state) {
        state.stocks.forEach(stock => {
            stock.price = Math.floor(stock.price * (1 + Math.random() - 0.48))
        })
    }
}

const actions = {
    buyStock({commit}, order) {
        commit('BUY_STOCK', order)
    },
    initStocks({commit}) {
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks({commit}) {
        commit('RND_STOCK')
    }
}

const getters ={
    stocks: state => {
        return state.stocks
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}