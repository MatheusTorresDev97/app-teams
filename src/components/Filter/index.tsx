import { TouchableOpacityProps } from "react-native";

import { Container, Title, FilterStyleProps } from "./styles";

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export const Filter = ({ title, isActive = false, ...props }: Props) => {
  return (
    <Container isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  );
};
