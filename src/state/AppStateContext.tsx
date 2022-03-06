import { createContext, Dispatch, useContext, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import { save } from "../api";
import { DragItem } from "../DragItem";
import { withInitialState } from "../withInitialState";
import { Action } from "./actions";
import { appStateReducer, AppState, List, Task } from "./AppStateReducer";

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
  draggedItem: DragItem | null;
};

type AppStateProviderProps = {
  children: React.ReactNode;
  initialState: AppState;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider = withInitialState<AppStateProviderProps>(
  ({ children, initialState }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, initialState);

    const { lists, draggedItem } = state;
    const getTasksByListId = (id: string) => {
      return lists.find((l) => l.id === id)?.tasks || [];
    };

    useEffect(() => {
      save(state);
    }, [state]);

    return (
      <AppStateContext.Provider
        value={{ lists, getTasksByListId, dispatch, draggedItem }}
      >
        {children}
      </AppStateContext.Provider>
    );
  }
);

export const useAppState = () => {
  return useContext(AppStateContext);
};
