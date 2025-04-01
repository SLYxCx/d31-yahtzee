import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DifficultyScreen() {

    const router = useRouter();

    // EASY BUTTON
    const easyGame = () => {
        //console.log("easy-Computer");
        router.push("/(computer)");
    }

    const mediumGame = () => {
        //console.log("medium-computer");
        router.push("/(computer)");
    }

    const hardGame = () => {
        //console.log("hard-computer");
        router.push("/(computer)");
    }

    return (
    <View style={styles.container}>

        <Text style={styles.title}>SELECT Difficulty</Text>
        
        {/* BUTTONS */}
        <View style={styles.buttonArea}>

        {/* EASY Button */}
        <TouchableOpacity 
        style={styles.button}
        onPress={easyGame}>
            <View>
                <Text>Easy</Text> 
            </View>
        </TouchableOpacity>

        {/* MEDIUM Button */}
        <TouchableOpacity 
        style={styles.button}
        onPress={mediumGame}>
            <View>
                <Text>Medium</Text>
            </View>
        </TouchableOpacity>
        </View>

        {/* HARD Button */}
        <TouchableOpacity 
        style={styles.button}
        onPress={hardGame}>
            <View>
                <Text>Hard</Text>
            </View>
        </TouchableOpacity>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //paddingTop: '40%',
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: "#922018"
    },
    title: {
        paddingTop: '40%',
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
    },
    buttonArea: {
        marginTop: '30%',
    },
    button: {
        backgroundColor: "grey",
        marginVertical: "10%",
        marginHorizontal: "auto",
        minWidth: "70%",
        minHeight: '10%',
        borderRadius: 5
    }
});
