import { createStore } from 'redux'
import initialState from './initialState'
function rootReducer(state, action) {
  switch (action.type) {
    default:
      return state
  }
}

const localstorage_object = 'kana_game'
const loadState = function() {
  try {
    const serializedState = localStorage.getItem(localstorage_object);
    if (serializedState === null) {
      return initialState
    }
    return { ...initialState, ...JSON.parse(serializedState) }
  } catch (err) {
    return initialState
  }
}

const store = createStore(rootReducer, loadState())

store.subscribe(() => {
  const currentState = store.getState()
  const serializedState = JSON.stringify(currentState)
  localStorage.setItem(localstorage_object, serializedState)
})

export default store
