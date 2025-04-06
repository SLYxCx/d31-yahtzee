import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useState } from "react";

export default function Page() {

  const router = useRouter();

  const playAgain = () => {
    router.push("./index");
  }

  const backHome = () => {
    router.dismissAll();
  }

  const [winState,setWinState] = useState(0);
  const [testScore,setTestScore] = useState(303);

  const winPhrases: string[] = [
    "PLAYER 1 WINS!",
    "PLAYER 2 WINS!",
    "YOU WIN!",
    "YOU LOST"
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.title}>{winPhrases[winState]}</Text>
      <Text style={styles.scoreText}>SCORE:</Text>
      <Text style={styles.scoreText}>{testScore}</Text>

      {/* BUTTONS */}
      <View style={styles.buttonArea}>

        {/* PLAYER Button */}
        <TouchableOpacity style={[styles.button, styles.green]} onPress={playAgain}>
          <View style={styles.buttonInner}>
            <Dice />
            <Text style={styles.buttonText}>PLAY AGAIN</Text>
            <Dice />
          </View>
        </TouchableOpacity>

      {/* BACK Button */}
      <TouchableOpacity style={[styles.button, styles.red]} onPress={backHome}>
        <View style={styles.buttonInner}>
          <Dice />
          <Text style={styles.buttonText}>BACK</Text>
          <Dice />
        </View>
      </TouchableOpacity>

      </View>

    </View>
  );
}

const Dice = () => (
  <Image
    source={require('../../assets/dice-icon.png')}
    style={styles.dice}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#922018",
  },
  title: {
    paddingTop: '20%',
    margin: 10,
    color: 'white',
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'SawarabiMincho',
    lineHeight: 52,
  },
  scoreText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'SawarabiMincho',
    lineHeight: 35,
  },
  buttonArea: {
    flex: 1,
    marginBottom: '20%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#FDC500",
    paddingVertical: 12,
    width: 300,
    height: 100,
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontFamily: 'SawarabiMincho',
    fontSize: 30,
    color: "#000",
    textAlign: "center",
  },
  dice: {
    width: 24,
    height: 24,
    marginHorizontal: 4,
  },
  green: {
    backgroundColor: "#387C44",
  },
  yellow: {
    backgroundColor: "#EFB834",
  },
  red: {
    backgroundColor: "#D32F2F",
  }
});