import { ButtonContainer, Icon } from "./styles";

type Props = {
    icon: string;
    text: string;
    color: string;
    backgroundColor: string;
}

export const Button = ({ icon, text, color, backgroundColor }: Props) => {
    return (
        <ButtonContainer color={color} backgroundColor={backgroundColor}>
            <Icon src={require(`../../images/${icon}`)} />
            <span>{text}</span>
        </ButtonContainer>
    );
};