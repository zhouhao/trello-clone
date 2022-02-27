import {CardContainer, ColumnContainer, ColumnTitle} from "./styles";


type ColumnProps = {
  text: string
}

export const Column = ({text}: ColumnProps) => {
  return (
      <ColumnContainer>
        <ColumnTitle>
          {text}
        </ColumnTitle>
        <CardContainer>1st Item</CardContainer>
        <CardContainer>2nd Item</CardContainer>
        <CardContainer>3rd Item</CardContainer>
      </ColumnContainer>
  );
}
