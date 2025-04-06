import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter, Link } from 'expo-router';
import { Image } from "expo-image";

export default function Page() {
  const router = useRouter();

  const play = () => {
    router.push("/(play)");
  }

  const options = () => {
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