import { View, Text, Button } from "react-native";
import {auth} from "../config/firebase"
import {sair} from "../services/auth"

export default function Home({navigation}) {
    async function realizarLogOut() {
        await sair()
        navigation.navigate('Login')
    }
    return(
        <View>
            <Text>Olá, {auth.currentUser?.nome}!</Text>
            
            <Button 
                title='Sair'
                onPress={realizarLogOut}
                style={styles.botao}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 30,
        backgroundColor: "#fff",
    },
    botao: {
        marginTop: 5,
        marginBottom: 12,
        borderRadius: 30,
        overflow: "hidden",
    },
});