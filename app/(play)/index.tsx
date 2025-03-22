import { View, Text, StyleSheet } from 'react-native';

export default function StartScreen() {
    return (
    <View style={styles.container}>
        <Text>Play</Text>
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
