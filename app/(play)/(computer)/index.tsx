import { View, Text, StyleSheet } from 'react-native';

export default function GameScreen() {
    return (
    <View style={styles.container}>
        <Text>COMPUTER GAME TIME!</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
