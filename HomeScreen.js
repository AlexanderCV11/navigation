import React from 'react';
import {Button, View, Text} from 'react-native';
import styles from './styles';

const boxes = new Array(4).fill(null).map((v, i) => i + 1);

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text> 
            {boxes.map(i => (
                <Button 
                title= "tarea"
                onPress={() => navigation.navigate('Details')}
                key={i}
            />
            ))}
            
        </View>
    );
}

export default HomeScreen;