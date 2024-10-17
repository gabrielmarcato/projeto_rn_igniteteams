import { Container, Logo, BackButton } from './styles'
import LogoImg from '@assets/logo.png'
import Ionicons from '@expo/vector-icons/Ionicons'

type Props = {
    showBackButton?: boolean
}

export function Header({showBackButton = false}: Props) {
    return (
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <Ionicons name="arrow-back" color="#FFF" size={25} />
                </BackButton>
            }
            <Logo source={LogoImg} />
        </Container>
    )
}