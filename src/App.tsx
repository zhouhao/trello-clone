import {AppContainer, ColumnContainer, ColumnTitle, CardContainer} from "./styles";

export const App = () => {
  return (
      <AppContainer>
        <ColumnContainer>
          <ColumnTitle>
            Todo:
          </ColumnTitle>
          <CardContainer>1st Item</CardContainer>
          <CardContainer>2nd Item</CardContainer>
          <CardContainer>3rd Item</CardContainer>
        </ColumnContainer>
      </AppContainer>
  );
}
