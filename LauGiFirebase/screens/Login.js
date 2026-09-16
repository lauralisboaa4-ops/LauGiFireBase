import { View, Text, TextInput, Button, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { entrar } from "../services/auth";

export default function Login({navigation}) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function realizarLogin(){
        if (!email || !senha) {
            alert("Preencha todos os campos.")
            return
        }

        try {
            await entrar(email, senha)
            navigation.navigate('Home')
        } catch(error) {
            alert("Email ou senha inválidos.")
            console.log(error)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
            <Text style={styles.subtitulo}>Entre na sua conta para continuar</Text>

            <TextInput
                style={styles.input}
                placeholder='E-mail'
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
            />

            <TextInput
                style={styles.input}
                placeholder='Senha'
                placeholderTextColor="#888"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <View style={styles.botao}>
                <Button
                    title='Login'
                    onPress={realizarLogin}
                />
            </View>

            <View style={styles.login}>
                <Text>Não possui uma conta? </Text>
                    <Pressable onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={{ color: '#3498db' }}>
                        Cadastre-se.
                    </Text>
                    </Pressable>
            </View>
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

    titulo: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 8,
        color: "#222",
    },

    subtitulo: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 35,
        color: "#666",
    },

    input: {
        height: 52,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 30,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: "#fff",
    },

    botao: {
        marginTop: 5,
        marginBottom: 12,
        borderRadius: 30,
        overflow: "hidden",
    },

    login : {
        flexDirection: "row",
        marginTop: 5
    },
});