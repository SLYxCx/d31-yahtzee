import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter, Link } from 'expo-router';
import { Image } from "expo-image";
import { Audio } from 'expo-av';
import { useGlobalContext } from '../constants/GlobalContext';
import React, { useState, useEffect } from "react";

export default function Page() {
  const router = useRouter();


  const { sfxVolume, musicVolume } = useGlobalContext();

  const [backgroundMusic, setBackgroundMusic] = useState<Audio.Sound | null>(null);

  async function playAudio() {
    const { sound } = await Audio.Sound.createAsync(require('../assets/audio/menu_Blip.mp3'));
    await sound.setVolumeAsync(sfxVolume);
    await sound.playAsync();
    //await sound.unloadAsync();  
  }

  async function playMusicTest() {

    if (backgroundMusic) { // make sure the music isn't already playing
      await backgroundMusic.setVolumeAsync(musicVolume);
      return;
    } else {

      const { sound: music } = await Audio.Sound.createAsync(require('../assets/audio/2004-BMW-e46-330i.wav'));
      await music.setVolumeAsync(musicVolume);
      await music.setIsLoopingAsync(true);
      await music.playAsync();
      setBackgroundMusic(music);
      //await sound.unloadAsync();  

    }
  }

  useEffect(() => {
    if (backgroundMusic) {
      backgroundMusic.setVolumeAsync(musicVolume);
    }
  }, [musicVolume, backgroundMusic]);

  const play = () => {
    playAudio();
    router.push("/(play)");
  }

  const options = () => {
    playAudio();
    playMusicTest()
    router.push("/options");
  }


  
  return (
    <View style={styles.container}>
      <View style={styles.main}>

        {/* IMAGE */}
        <Image
          style={styles.image}
          source={require('../assets/d31logo.png')}
          contentFit="contain"
          contentPosition="center"
        />

        {/* BUTTONS */}
        <View style={styles.buttonArea}>

          {/* PLAY Button */}
          <TouchableOpacity style={styles.button} onPress={play}>
            <View style={styles.buttonInner}>
              <Image
                source={require('../assets/dice-icon.png')}
                style={styles.dice}
              />
              <Text style={styles.buttonText}>PLAY</Text>
              <Image
                source={require('../assets/dice-icon.png')}
                style={styles.dice}
              />
            </View>
          </TouchableOpacity>

          {/* OPTIONS Button */}
          <TouchableOpacity style={styles.button} onPress={options}>
            <View style={styles.buttonInner}>
              <Image
                source={require('../assets/dice-icon.png')}
                style={styles.dice}
              />
              <Text style={styles.buttonText}>OPTIONS</Text>
              <Image
                source={require('../assets/dice-icon.png')}
                style={styles.dice}
              />
            </View>
          </TouchableOpacity>

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
    paddingTop: "20%",
  },
  image: {
    flex: 1,
    maxHeight: '35%',
    minWidth: '100%',
  },
  buttonArea: {
    marginTop: '30%',
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
});