import { AppContainer } from "./styles";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/AppStateContext";

export const App = () => {
  const { lists } = useAppState();

  return (
    <AppContainer>
      {lists.map((l) => (
        <Column text={l.text} id={l.id} key={l.id} />
      ))}

      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};
