import * as React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function HomeScreen () {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Home!</Text>
        </View>
    );
}