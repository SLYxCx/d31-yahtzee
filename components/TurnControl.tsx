import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Props definition for the TurnControl component
interface TurnControlProps {
  rollsLeft: number;        // Number of rolls left in the current turn
  onRoll: () => void;       // Function to call when "Roll" is pressed
  onEndTurn: () => void;    // Function to call when "End Turn" is pressed
  canRoll: boolean;         // Whether the "Roll" button should be active
}

// Functional component for turn controls (Roll and End Turn buttons)
export default function TurnControl({ rollsLeft, onRoll, onEndTurn, canRoll }: TurnControlProps) {
  return (
    <View style={styles.container}>
      {/* Display number of rolls left */}
      <Text style={styles.text}>Rolls Left: {rollsLeft}</Text>

      {/* Roll button, disabled if canRoll is false */}
      <TouchableOpacity
        style={[styles.button, !canRoll && styles.disabled]} // Apply disabled style conditionally
        onPress={onRoll}
        disabled={!canRoll} // Prevent interaction if rolling is not allowed
      >
        <Text style={styles.buttonText}>Roll</Text>
      </TouchableOpacity>

      {/* End Turn button, always enabled */}
      <TouchableOpacity style={styles.button} onPress={onEndTurn}>
        <Text style={styles.buttonText}>End Turn</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles for layout and visuals
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',          // Lay out elements horizontally
    justifyContent: 'space-around',// Even spacing between items
    alignItems: 'center',          // Vertically align items in center
    marginVertical: 20,            // Add vertical margin for spacing
  },
  text: {
    fontSize: 16,                  // Font size for "Rolls Left" label
  },
  button: {
    padding: 10,                   // Button padding for tap area
    backgroundColor: '#333',       // Dark background
    borderRadius: 5,               // Slightly rounded corners
  },
  buttonText: {
    color: '#fff',                 // White text for contrast
    fontWeight: 'bold',            // Emphasize button label
  },
  disabled: {
    backgroundColor: '#999',       // Grayed-out look when disabled
  },
});
