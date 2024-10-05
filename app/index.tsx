import {Animated, SafeAreaView, StyleSheet, Text} from "react-native";
import Image = Animated.Image;
import {Button} from "../components/button";
import {router} from "expo-router";

export default function Screen() {

    const handleStart = () => {
        router.replace('/home');
    }


    return (
        <SafeAreaView style={style.container}>
            <Image
                source={require('../assets/logo.png')}
                style={style.logo}
                resizeMode='cover'
            />
            <Text style={style.h1}>Loja do Fulano</Text>
            <Text style={style.h2}>Aqui você encontra o que quiser.</Text>
            <Button
                title='Começar as Compras'
                onPress={handleStart}

            />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    h2: {
        fontSize: 16,
        marginBottom: 10

    }
});