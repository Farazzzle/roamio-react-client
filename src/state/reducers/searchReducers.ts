import {ActionSearch} from '../actions/searchActions'
import {ActivityRequest} from "../../types/activity"


const searchReducer = (state: ActivityRequest = initialState, action: ActionSearch) => {
  switch(action.type){
    case "SET_SEARCH":
      return action.payload
    case "UPDATE_SEARCH":
      return action.payload
    case "DELETE_SEARCH":
      return initialState
    default:
      return initialState
  }
}


export default searchReducer

const initialState = {
  destSelected: 1000,
  searchQuery: "", //search title + description + provider <- not sure if this is a concatenated string
  tagIds: ["10203","2034","2023"],// Not sure if its an object or array
  highestRating: 5,
  lowestRating: 0,
  highestPrice: 500,
  lowestPrice: 0,
  sortBy: "RATING",
  startIndex: 1,
  count: 20,
}
