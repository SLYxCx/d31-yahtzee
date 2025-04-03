import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';

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

    // Dice image component
const DiceCorner = () => (
    <Image
      source={require('../../assets/dice-icon.png')}
      style={styles.dice}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select{'\n'}Difficulty</Text>
  
      <View style={styles.buttonArea}>
        {/* EASY Button */}
        <TouchableOpacity style={[styles.button, styles.green]} onPress={easyGame}>
          <View style={styles.buttonInner}>
            <DiceCorner />
            <Text style={styles.buttonText}>EASY</Text>
            <DiceCorner />
          </View>
        </TouchableOpacity>
  
        {/* MEDIUM Button */}
        <TouchableOpacity style={[styles.button, styles.yellow]} onPress={mediumGame}>
          <View style={styles.buttonInner}>
            <DiceCorner />
            <Text style={styles.buttonText}>MEDIUM</Text>
            <DiceCorner />
          </View>
        </TouchableOpacity>
      </View>
  
      {/* HARD Button */}
      <TouchableOpacity style={[styles.button, styles.red]} onPress={hardGame}>
        <View style={styles.buttonInner}>
          <DiceCorner />
          <Text style={styles.buttonText}>HARD</Text>
          <DiceCorner />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 20,
      backgroundColor: "#922018",
    },
    title: {
      paddingTop: '20%',
      color: 'white',
      fontSize: 46,
      textAlign: 'center',
      fontFamily: 'SawarabiMincho',
      lineHeight: 52,
    },
    buttonArea: {
      marginTop: '20%',
      alignItems: 'center',
      gap: 20,
    },
    button: {
      borderRadius: 10,
      borderWidth: 4,
      paddingVertical: 10,
      paddingHorizontal: 5,
      width: 260,
      marginVertical: 10,
      height: 100,
      justifyContent: 'center',
    },
    buttonInner: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    buttonText: {
      fontFamily: 'SawarabiMincho',
      fontSize: 36,
      textAlign: 'center',
      color: "#000",
    },
    dice: {
      width: 24,
      height: 24,
    },
    green: {
      backgroundColor: '#387C44',
      borderColor: '#FDC500',
    },
    yellow: {
      backgroundColor: '#EFB834',
      borderColor: 'white',
    },
    red: {
      backgroundColor: '#D32F2F',
      borderColor: '#FDC500',
    },
  });