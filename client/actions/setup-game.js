import model from '../models/GameModel'

export const GAMES_FETCHED = 'GAMES_FETCHED'

export default () => {
  return dispatch => {
    model.dispatch = dispatch
    model.app.authenticate()
    .then((response) => {
    model.find()
    }).catch((error) => {
      console.log(error)
    })
  }
}

export function gameFetched(games) {
  return {
    type: GAMES_FETCHED,
  }
}
