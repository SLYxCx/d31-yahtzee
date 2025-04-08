import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Audio } from 'expo-av';
import { useGlobalContext } from '../../constants/GlobalContext';

export default function StartScreen() {

  const { sfxVolume } = useGlobalContext();

  async function playAudio() {
    const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/menu_blip_2.wav'));
    await sound.setVolumeAsync(sfxVolume);
    await sound.playAsync();
    //await sound.unloadAsync();  
    setTimeout(async () => {
      await sound.unloadAsync();
    }, 500);
  }



  const router = useRouter();

  const playerGame = () => {
    playAudio();
    router.push("/(game)");
  }

  const comGame = () => {
    playAudio();
    router.push("/(game)");
    // selecting computer brings you to the results page for testing
    //router.push("./results/?props=1404");
  }

  const backHome = () => {
    playAudio();
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
        <TouchableOpacity style={[styles.button, styles.yellow]} onPress={comGame}>
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
    fontSize: 55,
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