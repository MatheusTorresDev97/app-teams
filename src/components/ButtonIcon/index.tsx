import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Icon, ButtonIconTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {

  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps
}

export const ButtonIcon = ({ icon, type = 'PRIMARY', ...props }: Props) => (
  <Container {...props}>
    <Icon
      name={icon}
      type={type} />
  </Container>
)