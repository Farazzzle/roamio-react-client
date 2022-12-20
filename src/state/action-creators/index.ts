import { ActionType } from "../action-types"
import {Activity} from "../../types/activity"
import { Dispatch } from "redux"
import {ActivityRequest} from "../../types/activity"
import { ActionActivities } from "../actions/activityActions"
import { ActionSearch } from "../actions/searchActions"

export const setActivities = (activities: Array<Activity>) => {
  return (dispatch: Dispatch<ActionActivities>) => {
    dispatch({
      type: ActionType.SET_ACTIVITIES,
      payload: activities
    })
  }
}

export const clearSearch = () => {
  return (dispatch: Dispatch<ActionSearch>) => {
    dispatch({
      type: ActionType.DELETE_SEARCH
    })
  }
}

export const updateSearch = (searchParams: ActivityRequest) => {
  return (dispatch: Dispatch<ActionSearch>) => {
    dispatch({
      type: ActionType.UPDATE_SEARCH,
      payload: searchParams
    })
  }
}

export const SetSearch = (searchParams: ActivityRequest) => {
  return (dispatch: Dispatch<ActionSearch>) => {
    dispatch({
      type: ActionType.SET_SEARCH,
      payload: searchParams
    })
  }
}