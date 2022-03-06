import { useDragLayer } from "react-dnd";
import { Card } from "./Card";
import { Column } from "./Column";
import { useAppState } from "./state/AppStateContext";
import { CustomDragLayerContainer, DragPreviewWrapper } from "./styles";

export const CustomerDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        {draggedItem.type === "CARD" ? (
          <Card
            id={draggedItem.id}
            columnId={draggedItem.columnId}
            isPreview
            text={draggedItem.text}
          ></Card>
        ) : (
          <Column id={draggedItem.id} text={draggedItem.text} isPreview />
        )}
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};
