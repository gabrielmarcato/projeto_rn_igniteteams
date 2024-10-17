import { TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'

type Props = TouchableOpacityProps & {
    title: string
}

export function GroupCard ({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Ionicons name="people" color="#00875F" size={32} />
            <Title>{ title }</Title>
        </Container>
    )
}