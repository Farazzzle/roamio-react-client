import {ActivityRequest} from "../../types/activity"
import { ActionType } from "../action-types"

interface SetSearchAction {
  type: ActionType.SET_SEARCH
  payload: ActivityRequest
}
interface UpdateSearchAction {
  type: ActionType.UPDATE_SEARCH
  payload: ActivityRequest
}
interface DeleteSearchAction {
  type: ActionType.DELETE_SEARCH
}

export type ActionSearch = SetSearchAction | UpdateSearchAction | DeleteSearchAction