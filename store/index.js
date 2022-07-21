export const state = () => ({
  LOADING: false,
  SEARCH_TEXT: '',
  FILTER: '',
  BOOKS: [],
  FAVORITES: [],
})

export const getters = {
  GET_LOADING: (state) => state.LOADING,
  GET_SEARCH_TEXT: (state) => state.SEARCH_TEXT,
  GET_FILTER: (state) => state.FILTER,
  GET_BOOKS: (state) => state.BOOKS,
  GET_FAVORITES: (state) => state.FAVORITES,
}

export const mutations = {
  SET_LOADING(state, payload) {
    state.LOADING = payload
  },
  SET_SEARCH_TEXT(state, payload) {
    state.SEARCH_TEXT = payload
  },
  SET_FILTER(state, payload) {
    state.FILTER = payload
  },
  SET_BOOKS(state, payload) {
    state.BOOKS = payload
  },
  ADD_TO_FAVORITES(state, payload) {
    const book = state.BOOKS.find(b => b.key === payload)
    console.log(payload)
    console.log(book)
    if (!state.FAVORITES.includes(book))
      state.FAVORITES.push(book)
  },
  REMOVE_FROM_FAVORITES(state, payload) {
    state.FAVORITES = state.FAVORITES.filter(b => b.key !== payload)
  }
}

export const actions = {
  async FETCH_BOOKS(context) {
    context.commit('SET_LOADING', true)
    context.commit('SET_BOOKS', [])

    let searchQuery = 'search.json'
    const formattedSearchText = context.state.SEARCH_TEXT.replaceAll(' ', '+')
    if (context.state.FILTER && formattedSearchText) {
      searchQuery += `?${context.state.FILTER}=${formattedSearchText}`
    } else if (formattedSearchText) {
      searchQuery += '?q=' + formattedSearchText
    }

    try {
      const response = await this.$axios.get(searchQuery)
      context.commit('SET_BOOKS', response.data.docs)
    } catch(e) {
      console.error(error)
    } finally {
      context.commit('SET_LOADING', false)
    }
  }
}