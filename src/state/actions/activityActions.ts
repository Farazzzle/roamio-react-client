import {Activity} from "../../types/activity"
import { ActionType } from "../action-types"

interface SetActivities {
  type: ActionType.SET_ACTIVITIES
  payload: Array<Activity>
}

export type ActionActivities = SetActivities