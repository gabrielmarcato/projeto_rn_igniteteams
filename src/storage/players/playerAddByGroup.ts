import AsyncStorage from "@react-native-async-storage/async-storage"
import { AppError } from "@utils/AppError"
import { PLAYER_COLLECTION } from "@storage/storageConfig"
import { PlayerStorageDTO } from "./PlayerStorageDTO"
import { playersGetByGroup } from "./playerGetByGroup"

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
    try {
        const storadPlayers = await playersGetByGroup(group)
        const playerAlreadyExists = storadPlayers.filter(player => player.name === newPlayer.name)

        if(playerAlreadyExists.length > 0) {
            throw new AppError("Esta pessoas já está adicionada em um time.")
        }

        const storage = JSON.stringify([...storadPlayers, newPlayer])
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
    } catch (error) {
        throw error
    }
}


