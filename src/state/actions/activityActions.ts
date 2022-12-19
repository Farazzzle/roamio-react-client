import {Activity} from "../../types/activity"
import { ActionType } from "../action-types"

interface setActivities {
  type: ActionType.SET_ACTIVITIES
  payload: Array<Activity>
}

export type Action = setActivities