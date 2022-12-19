import { ActionType } from "../action-types"
import {Activity} from "../../types/activity"
import { Dispatch } from "redux"
import {ActivityRequest} from "../../types/activity"

export const setActivities = (activities: Array<Activity>) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.SET_ACTIVITIES,
      payload: activities
    })
  }
}

export const clearSearch = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.DELETE_SEARCH,
      payload: null
    })
  }
}

export const updateSearch = (searchParams: ActivityRequest) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.UPDATE_SEARCH,
      payload: searchParams
    })
  }
}

export const SetSearch = (searchParams: ActivityRequest) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.SET_SEARCH,
      payload: searchParams
    })
  }
}