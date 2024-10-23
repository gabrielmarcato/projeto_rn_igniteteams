import { TouchableOpacityProps } from "react-native"
import { Container, Icon, ButtonIconTypeStyleProps } from "./styles"
import Ionicons from '@expo/vector-icons/Ionicons'

type Props = TouchableOpacityProps & {
    icon: keyof typeof Ionicons.glyphMap;
    type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({icon, type = "PRIMARY", ...rest}: Props) {
    return (
        <Container {...rest}>
            <Icon 
                name={icon}
                type={type} 
            />
        </Container>
    )
}