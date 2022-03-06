import { setDraggedItem } from "./../state/actions";
import { useAppState } from "./../state/AppStateContext";
import { DragItem } from "./../DragItem";
import { useDrag } from "react-dnd";

export const useItemDrag = (it: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    type: it.type,
    item: () => {
      dispatch(setDraggedItem(it));
      return it;
    },
    end: () => dispatch(setDraggedItem(null)),
  });

  return { drag };
};
