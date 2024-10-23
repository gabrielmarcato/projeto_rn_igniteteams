import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import Ionicons from '@expo/vector-icons/Ionicons'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

import { Container, Content, IconContent } from './styles'

export function NewGroup() {
    const [group, setGroup] = useState('')
    const navigation = useNavigation()

    function handlePlayers() {
        navigation.navigate('players', { group })
    }

    return (
        <Container>
            <Header showBackButton />
            <Content>
                <IconContent>
                    <Ionicons name="people" color="#00875F" size={56} />
                </IconContent>
                <Highlight 
                    title='Nova turma' 
                    subtitle='Crie a turma para adicionar as pessoas' 
                />
                <Input 
                    placeholder='Nome da turma'
                    onChangeText={setGroup}
                />
                <Button 
                    title='Criar' 
                    style={{ marginTop: 20 }}
                    onPress={handlePlayers}
                />
            </Content>
        </Container>
    )
}