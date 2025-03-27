import { StyleSheet, Text, View, TextInput } from 'react-native';
import  LogIn  from '../components/LogIn'

export default function Modal() {
    return (
        <View style={styles.container}>
            <LogIn />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
