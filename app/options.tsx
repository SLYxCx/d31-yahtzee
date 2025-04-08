import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { useState } from "react";
import { useRouter, Link } from 'expo-router';
import { Image } from "expo-image";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Slider from '@react-native-community/slider';
import { useGlobalContext } from '../constants/GlobalContext'; // Import the typed hook
import { Audio } from 'expo-av';

export default function Page() {
  const router = useRouter();

  const back = () => {
    playAudio();
    router.back();
  }

  const { sfxVolume, setsfxVolume, anim, toggleAnim, musicVolume,  setMusicVolume } = useGlobalContext(); // Use the typed hook


  

  async function playAudio() {
    const { sound } = await Audio.Sound.createAsync(require('../assets/audio/menu_blip_2.wav'));
    await sound.setVolumeAsync(sfxVolume);
    await sound.playAsync();
    //await sound.unloadAsync(); 
    setTimeout(async () => {
      await sound.unloadAsync();
    }, 500);
  }



  // THIS WAS MOVED TO /constants/GlobalContext.tsx!
  // This allows us to use the values anywhere
  {/*
  // sound effect volume
  const [sfxVolume, setsfxVolume] = useState(1);
  // animation control boolean
  const [anim,setAnim] = useState(true);
  // simple function to invert/toggle the setAnim (set animation)
  const toggleAnim = () => setAnim(previousState => !previousState);
  */}

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <TouchableOpacity onPress={back}>
            <AntDesign style={styles.backArrow} name="arrowleft" size={32} color="black" />
        </TouchableOpacity>

        <FontAwesome style={styles.image} name="cog" size={128} color="black" />

        {/* BUTTONS + LABELS */}
        <View style={styles.buttonArea}>

          {/* Sound FX Label */}
          <View style={styles.button}>
            <View style={styles.buttonInner}>
              <Image
                source={require('../assets/dice-icon.png')}
                style={styles.dice}
              />
              <Text style={styles.buttonText}>Sound FX</Text>
              <Image
                source={require('../assets/dice-icon.png')}
                style={styles.dice}
              />
            </View>
          </View>

          {/* Sound FX Slider */}
            <View>
                <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#C7361F"
                maximumTrackTintColor="#000000"
                thumbTintColor="#f4f3f4"
                value={sfxVolume}
                onValueChange={(value) => setsfxVolume(Number(value.toFixed(2)))}
                />
            </View>

            {/* Music Label */}
          <View style={styles.button}>
            <View style={styles.buttonInner}>
              <Image
                source={require('../assets/dice-icon.png')}
                style={styles.dice}
              />
              <Text style={styles.buttonText}>Music</Text>
              <Image
                source={require('../assets/dice-icon.png')}
                style={styles.dice}
              />
            </View>
          </View>

          {/* Music Slider */}
            <View>
                <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#C7361F"
                maximumTrackTintColor="#000000"
                thumbTintColor="#f4f3f4"
                value={musicVolume}
                onValueChange={(value) => setMusicVolume(Number(value.toFixed(2)))}
                />
            </View>


          {/* Animation Label */}
          <View style={styles.button}>
            <View style={styles.buttonInner}>
              <Image
                source={require('../assets/dice-icon.png')}
                style={styles.dice}
              />
              <Text style={styles.buttonText}>Animations</Text>
              <Image
                source={require('../assets/dice-icon.png')}
                style={styles.dice}
              />
            </View>
          </View>

            {/* Animation Toggle */}
            <View>
                <Switch
                style={styles.switch}
                trackColor={{false: '#767577', true: '#C7361F'}}
                thumbColor={anim ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#C7361F"
                onValueChange={toggleAnim}
                value={anim}
                />
            </View>


        </View>
      </View>
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
  main: {
    flex: 1,
    paddingTop: "5%",
  },
  image: {
    flex: 1,
    maxHeight: '35%',
    minWidth: '100%',
    textAlign: 'center',
  },
  backArrow: {
    margin: 5,
  },
  buttonArea: {
    marginTop: '5%',
    alignItems: 'center',
    gap: 30,
  },
  button: {
    backgroundColor: "#C7361F",
    borderRadius: 30,
    borderWidth: 4,
    borderColor: "#FDC500",
    paddingVertical: 10,
    width: 350,
    height: 100,
    justifyContent: "center",
  },
  buttonInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dice: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
  buttonText: {
    fontFamily: "SawarabiMincho",
    color: "#000",
    fontSize: 36,
  },
  switch: {
    transform: [{ scale: 2}],
  },
  slider: {
    transform: [{ scale: 2}],
    width: 150,
    height: 40,
  },
});