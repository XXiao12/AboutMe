const initialState = {
    visibilityFilter: 's',
    todos: []
  }

const todoApp = (state = initialState, action) => {
    switch ('a') {
      case 'a':
        return Object.assign({}, state, {
          visibilityFilter: action.filter
        })
      default:
        return state
    }
  }

export default todoApp;