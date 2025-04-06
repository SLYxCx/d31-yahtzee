import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

export default function StartScreen() {

  const router = useRouter();

  const playerGame = () => {
    router.push("/(game)");
  }

  const difficultySelect = () => {
    router.push("/difficulty");
  }

  const backHome = () => {
    router.dismissAll();
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>SELECT{"\n"}OPPONENT</Text>

      {/* BUTTONS */}
      <View style={styles.buttonArea}>

        {/* PLAYER Button */}
        <TouchableOpacity style={[styles.button, styles.green]} onPress={playerGame}>
          <View style={styles.buttonInner}>
            <Dice />
            <Text style={styles.buttonText}>PLAYER</Text>
            <Dice />
          </View>
        </TouchableOpacity>

        {/* COMPUTER Button */}
        <TouchableOpacity style={[styles.button, styles.yellow]} onPress={difficultySelect}>
          <View style={styles.buttonInner}>
            <Dice />
            <Text style={styles.buttonText}>COMPUTER</Text>
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
    color: 'white',
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'SawarabiMincho',
    lineHeight: 52,
  },
  buttonArea: {
    flex: 1,
    marginTop: '20%',
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