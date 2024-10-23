import { useNavigation } from '@react-navigation/native'
import { Container, Logo, BackButton } from './styles'
import LogoImg from '@assets/logo.png'
import Ionicons from '@expo/vector-icons/Ionicons'

type Props = {
    showBackButton?: boolean
}

export function Header({showBackButton = false}: Props) {
    const navigation = useNavigation()

    function handleGoBack() {
        navigation.navigate('groups')
    }

    return (
        <Container>
            {
                showBackButton &&
                <BackButton onPress={handleGoBack}>
                    <Ionicons name="arrow-back" color="#FFF" size={25} />
                </BackButton>
            }
            <Logo source={LogoImg} />
        </Container>
    )
}