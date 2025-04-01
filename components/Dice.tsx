import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

type DiceProps = {
  value: number;
  locked: boolean;
  onToggle: () => void;
  index: number;
};

export default function Dice({ value, locked, onToggle }: DiceProps) {
  return (
    <TouchableOpacity onPress={onToggle} style={[styles.die, locked && styles.locked]}>
      <View style={styles.face}>
        {renderPips(value)}
      </View>
    </TouchableOpacity>
  );
}

const renderPips = (value: number) => {
  const pip = <View style={styles.pip} />;

  const positions: { [key: number]: JSX.Element[][] } = {
    1: [[<></>], [pip], [<></>]],
    2: [[pip], [], [pip]],
    3: [[pip], [pip], [pip]],
    4: [[pip, pip], [], [pip, pip]],
    5: [[pip, pip], [pip], [pip, pip]],
    6: [[pip, pip], [pip, pip], [pip, pip]],
  };

  return (
    <View style={styles.pipContainer}>
      {positions[value].map((row, i) => (
        <View key={i} style={styles.row}>
          {row.map((dot, j) => (
            <View key={j} style={styles.cell}>{dot}</View>
          ))}
        </View>
      ))}
    </View>
  );
};

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
    backgroundColor: '#ccc',
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
    backgroundColor: '#000',
  },
});
