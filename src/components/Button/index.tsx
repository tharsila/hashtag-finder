import React from "react";
import * as C from "./styles";

type Props = {
  icon?: string;
  text: string;
  color: string;
  backgroundColor: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ icon, text, color, backgroundColor, handleClick }: Props) => {
  return (
    <C.ButtonContainer
      color={color}
      backgroundColor={backgroundColor}
      onClick = { handleClick }
    >
      <C.Icon src={require(`../../images/${icon}`)} />
      <span>{text}</span>
    </C.ButtonContainer>
  );
};