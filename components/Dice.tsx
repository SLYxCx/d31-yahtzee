import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

// Define the props expected by the Dice component
type DiceProps = {
  value: number;         // The number to show on the dice (1–6)
  locked: boolean;       // Whether the dice is currently locked
  onToggle: () => void;  // Function to call when the dice is pressed
  index: number;         // The index of the dice (could be used for keying or ordering)
};

// Main Dice component
export default function Dice({ value, locked, onToggle }: DiceProps) {
  return (
    // When pressed, the dice toggles its lock state
    <TouchableOpacity onPress={onToggle} style={[styles.die, locked && styles.locked]}>
      <View style={styles.face}>
        {/* Render the appropriate number of pips based on value */}
        {renderPips(value)}
      </View>
    </TouchableOpacity>
  );
}

// Function to render pips (dots) based on the dice value
const renderPips = (value: number) => {
  // A single pip view
  const pip = <View style={styles.pip} />;

  // Defines the pip layout for each dice value (1–6)
  const positions: { [key: number]: JSX.Element[][] } = {
    1: [[<></>], [pip], [<></>]],
    2: [[pip], [], [pip]],
    3: [[pip], [pip], [pip]],
    4: [[pip, pip], [], [pip, pip]],
    5: [[pip, pip], [pip], [pip, pip]],
    6: [[pip, pip], [pip, pip], [pip, pip]],
  };

  // Render the layout row by row
  return (
    <View style={styles.pipContainer}>
      {positions[value].map((row, i) => (
        <View key={i} style={styles.row}>
          {row.map((dot, j) => (
            <View key={j} style={styles.cell}>
              {dot}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

// Style definitions for the dice and pips
const styles = StyleSheet.create({
  die: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locked: {
    backgroundColor: '#ccc', // Gray background when locked
  },
  face: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pipContainer: {
    width: '80%',
    height: '80%',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pip: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000', // Black dot
  },
});
