import { useEffect } from "react";
import { setDraggedItem } from "./../state/actions";
import { useAppState } from "./../state/AppStateContext";
import { DragItem } from "./../DragItem";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

export const useItemDrag = (it: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag({
    type: it.type,
    item: () => {
      dispatch(setDraggedItem(it));
      return it;
    },
    end: () => dispatch(setDraggedItem(null)),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);
  return { drag };
};
