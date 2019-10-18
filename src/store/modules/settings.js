import cards from 'api/cards'
import checkItems from 'api/check-items'
import teams from 'api/teams'
import {GET_TEAMS, GET_CARDS_SETTINGS, GET_CHECK_ITEMS} from 'store/mutation-types'

// initial state
const state = {
  teams: [],
  cards: [],
  checkItems: []
}

// getters
const getters = {
  teams: state => state.teams,
  cards: state => state.cards,
  checkItems: state => state.checkItems
}

// actions
const actions = {
  getCards ({commit}) {
    cards.getCardsSettings().then(({data}) => {
      commit(GET_CARDS_SETTINGS, {cards: data.data})
    })
  },
  getTeams ({commit}) {
    teams.getTeams().then(({data}) => {
      commit(GET_TEAMS, {teams: data.data})
    })
  },
  getCheckItems ({commit}, team) {
    if (team) {
      checkItems.getCheckItems(team).then(({data}) => {
        commit(GET_CHECK_ITEMS, {checkItems: data.data})
      })
    }
  }
}

// mutations
const mutations = {
  [GET_CARDS_SETTINGS] (state, {cards}) {
    state.cards = cards
  },
  [GET_CHECK_ITEMS] (state, {checkItems}) {
    state.checkItems = checkItems
  },
  [GET_TEAMS] (state, {teams}) {
    state.teams = teams
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
