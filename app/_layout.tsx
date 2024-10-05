import {Stack} from "expo-router";

export default function RoutLayout() {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="(tab)" options={{title:'Produtos'}}/>
            <Stack.Screen name="produtos/[id]" options={{headerShown: true}}/>

        </Stack>
    )
}