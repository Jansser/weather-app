import { FC, ReactNode } from "react";
import { CardContainer } from "./Card.styles";

interface CardProps {
  children?: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => (
  <CardContainer>{children}</CardContainer>
);
