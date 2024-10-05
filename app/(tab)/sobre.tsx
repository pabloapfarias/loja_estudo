import {Animated, SafeAreaView, StyleSheet, Text} from "react-native";
import Image = Animated.Image;



export default function Screen() {



    return (
        <SafeAreaView style={style.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={style.logo}
                resizeMode='cover'
            />
            <Text style={style.h1}>Pablo Farias</Text>
            <Text style={style.h2}>Desenvolvedor Full Stack and Mobile.</Text>
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