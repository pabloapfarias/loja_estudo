import {Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {router, Stack, useLocalSearchParams} from "expo-router";
import {getProduct, getProductsByCategory} from "../../services/product";

export default function Screen() {
    const {id} = useLocalSearchParams();
    const idProduto = parseInt(id as string);

    const produto = getProduct(idProduto);

    if (!produto) return router.back();


    const clique = () => {
        alert('Voce clicou no item id ' + id)
    }
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{title: 'Produto'}}/>
            <ScrollView style={styles.area}>
                <Image
                    style={styles.img}
                    source={{uri: produto.image}}
                    resizeMode='cover'
                />
                <Text style={styles.title}>{produto.title}</Text>
                <Text style={styles.descricao}>{produto.description}</Text>
                <View style={styles.priceArea}>
                    <Text style={styles.price}>R$ {produto.price.toFixed(2)}</Text>
                </View>

            </ScrollView>
            <View style={styles.buttonArea}>
                <Button
                    title='Comprar Agora'
                    onPress={clique}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    area: {
        flex: 1,
        padding: 10,
    },
    buttonArea: {
        padding: 10
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 29,
        fontWeight: 'bold',
        marginBottom: 10
    },
    descricao: {
        fontSize: 15,
        color: '#555555',
        marginBottom: 20
    },
    priceArea: {
        padding:10,
        borderRadius:10,
        backgroundColor:'#cccccc'
    },
    price: {
        fontSize:22,
        textAlign:'center',
    }
})



