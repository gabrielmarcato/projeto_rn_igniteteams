import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Ionicons from '@expo/vector-icons/Ionicons'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

import { Container, Content, IconContent } from './styles'

import { AppError } from '@utils/AppError'
import { groupCreate } from '@storage/group/groupCreate'

export function NewGroup() {
    const [group, setGroup] = useState('')
    const navigation = useNavigation()

    async function handlePlayers() {
        try {
            if(group.trim().length === 0) {
                return Alert.alert('Nova Turma', 'Informa o nome da turma')
            }
            await groupCreate(group)
            navigation.navigate('players', { group })
        } catch (error) {
            if(error instanceof AppError) {
                Alert.alert('Nova Turma', error.message)
            } else {
                Alert.alert('Nova Turma', 'Não foi possivel criar uma nova turma')
            }
            console.log(error)
        }
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