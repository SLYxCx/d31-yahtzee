import { Audio } from 'expo-av';
import { useState } from 'react';
import { useGlobalContext } from '../constants/GlobalContext';


export default async function playSFX() {


    const { sfxVolume } = useGlobalContext();

    const { sound } = await Audio.Sound.createAsync(require('../assets/audio/menu_Blip.mp3'));
    await sound.setVolumeAsync(sfxVolume);
    await sound.playAsync();
    //await sound.unloadAsync();  

}