import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="1st Item" />
      <Card text="2nd Item" />
      <Card text="3rd Item" />
    </ColumnContainer>
  );
};
