import { Link, Stack } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function NotFoundScreen() {
    return (
    <>
        <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
            <View style={styles.container}>
                <Text>Oops! This screen doesn't exist.</Text>
                <Link href="/">Go to home screen</Link>
            </View>
    </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});