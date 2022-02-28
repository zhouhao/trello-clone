import { findItemIndexById } from "./../utils/arrayUtils";
import { nanoid } from "nanoid";
import { Action } from "./actions";

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_LIST": {
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break;
    }
    case "ADD_TASK": {
      const { text, listId } = action.payload;
      const index = findItemIndexById(draft.lists, listId);
      draft.lists[index].tasks.push({
        id: nanoid(),
        text,
      });
      break;
    }
  }
};