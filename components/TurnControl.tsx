import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TurnControlProps {
  rollsLeft: number;
  onRoll: () => void;
  onEndTurn: () => void;
  canRoll: boolean;
}

export default function TurnControl({ rollsLeft, onRoll, onEndTurn, canRoll }: TurnControlProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rolls Left: {rollsLeft}</Text>
      <TouchableOpacity style={[styles.button, !canRoll && styles.disabled]} onPress={onRoll} disabled={!canRoll}>
        <Text style={styles.buttonText}>Roll</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onEndTurn}>
        <Text style={styles.buttonText}>End Turn</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
  },
  button: {
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: '#999',
  },
});

