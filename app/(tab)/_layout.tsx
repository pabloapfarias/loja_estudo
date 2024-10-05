import {Tabs} from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor:'#0000FF'}}>
            <Tabs.Screen
                name='home'
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({color}) => <FontAwesome
                        name='home'
                        size={28}
                        color={color}
                    />
                }}
            />
            <Tabs.Screen
                name='categorias'

                options={{
                    title: 'Categorias',
                    headerShown: false,
                    tabBarIcon: ({color}) => <FontAwesome
                        name='archive'
                        size={28}
                        color={color}
                    />
                }}
            />
            <Tabs.Screen
                name='sobre'
                options={{
                    title: 'Sobre Mim ',
                    tabBarIcon: ({color}) => <FontAwesome
                        name='user'
                        size={28}
                        color={color}
                    />
                }}
            />
        </Tabs>
    );
}