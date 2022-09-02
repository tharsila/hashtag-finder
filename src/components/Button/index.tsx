import * as C from "./styles";

type Props = {
  icon: string;
  text: string;
  color: string;
  backgroundColor: string;
};

export const Button = ({ icon, text, color, backgroundColor }: Props) => {
  return (
    <C.ButtonContainer
      color={color}
      backgroundColor={backgroundColor}
    >
      <C.Icon src={require(`../../images/${icon}`)} />
      <span>{text}</span>
    </C.ButtonContainer>
  );
};