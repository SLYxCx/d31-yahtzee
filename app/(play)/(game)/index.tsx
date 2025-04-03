// Full StyledGameUI for GameScreen with Working Example Logic and How to Play
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import Dice from '../../../components/Dice';
import { Category, UpperCategories, LowerCategories } from '../../../constants/categories';
import {
  rollDice,
  toggleLock,
  calculateScore,
  resetRoll,
  Die,
  ScoreCard as ScoreType,
  calculateTotalScore,
} from '../../../logic/gameEngine';

const ALL_CATEGORIES = [...UpperCategories, ...LowerCategories];
const MAX_TURNS = ALL_CATEGORIES.length * 2; // two players

export default function GameScreen() {
  const [rollState, setRollState] = useState(resetRoll());
  const [scoresP1, setScoresP1] = useState<ScoreType>({});
  const [scoresP2, setScoresP2] = useState<ScoreType>({});
  const [usedP1, setUsedP1] = useState<Set<Category>>(new Set());
  const [usedP2, setUsedP2] = useState<Set<Category>>(new Set());
  const [isPlayer1, setIsPlayer1] = useState(true);
  const [turnsTaken, setTurnsTaken] = useState(0);
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  const currentScores = isPlayer1 ? scoresP1 : scoresP2;
  const setCurrentScores = isPlayer1 ? setScoresP1 : setScoresP2;
  const currentUsed = isPlayer1 ? usedP1 : usedP2;
  const setCurrentUsed = isPlayer1 ? setUsedP1 : setUsedP2;

  const handleRoll = () => {
    if (rollState.rollsLeft > 0) {
      const newDice = rollDice(rollState.dice);
      setRollState({
        dice: newDice,
        rollsLeft: rollState.rollsLeft - 1,
      });
    }
  };

  const handleToggleDie = (index: number) => {
    const newDice = toggleLock(rollState.dice, index);
    setRollState({ ...rollState, dice: newDice });
  };

  const handleSelectCategory = (category: Category) => {
    if (currentUsed.has(category)) return;

    const newScore = calculateScore(category, rollState.dice.map(d => d.value));
    setCurrentScores(prev => ({ ...prev, [category]: newScore }));
    setCurrentUsed(prev => new Set([...prev, category]));

    const newTurns = turnsTaken + 1;
    setTurnsTaken(newTurns);

    if (newTurns >= MAX_TURNS) {
      const totalP1 = calculateTotalScore(scoresP1, 0);
      const totalP2 = calculateTotalScore(scoresP2, 0);
      let message = `Player 1: ${totalP1} vs Player 2: ${totalP2}\n`;
      if (totalP1 > totalP2) message += '🎉 Player 1 wins!';
      else if (totalP2 > totalP1) message += '🎉 Player 2 wins!';
      else message += "It's a tie!";
      Alert.alert('Game Over', message);
    }

    setIsPlayer1(!isPlayer1);
    setRollState(resetRoll());
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => setShowHowToPlay(!showHowToPlay)} style={styles.howToPlayTab}>
        <Text style={styles.howToPlayText}>{showHowToPlay ? 'Hide' : 'How to Play?'}</Text>
      </TouchableOpacity>

      {showHowToPlay && (
        <View style={styles.instructionsWrapper}>
          <ScrollView contentContainerStyle={styles.instructionsContainer}>
            <Text style={styles.heading}>🎲 How to Play Yahtzee</Text>
            <Text style={styles.instructionText}>1. You get 3 rolls per turn. Tap dice to lock them before re-rolling.</Text>
            <Text style={styles.instructionText}>2. Your goal is to fill one scoring category per turn.</Text>
            <Text style={styles.instructionText}>3. You can choose from MINOR (Ones to Sixes) or MAJOR (combos like Full House, Yahtzee).</Text>
            <Text style={styles.instructionText}>4. You must choose a category, even if your score is zero.</Text>
            <Text style={styles.instructionText}>5. After all categories are used, the player with the highest score wins.</Text>
            <Text style={styles.instructionText}>Tip: Use Chance wisely. Try for 63+ in Minor to earn a bonus.</Text>
          </ScrollView>
        </View>
      )}

      <View style={styles.scoreRow}>
        <Text style={styles.scoreBox}>P1: {calculateTotalScore(scoresP1, 0)}</Text>
        <Text style={styles.scoreBox}>P2: {calculateTotalScore(scoresP2, 0)}</Text>
      </View>
      <Text style={styles.turnIndicator}>Turn: Player {isPlayer1 ? '1' : '2'}</Text>

      <View style={styles.scoreCard}>
  <View style={styles.column}>
    <Text style={styles.title}>MINOR</Text>
    {UpperCategories.map((cat) => (
      <TouchableOpacity
        key={cat}
        style={[styles.category, currentUsed.has(cat) && styles.used]}
        onPress={() => handleSelectCategory(cat)}>
        <View style={styles.row}>
          <Image source={require('../../../assets/dice-icon.png')} style={styles.icon} />
          <Text style={styles.label}>{cat}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>

  <View style={styles.column}>
    <Text style={styles.title}>MAJOR</Text>
    {LowerCategories.map((cat) => (
      <TouchableOpacity
        key={cat}
        style={[styles.category, currentUsed.has(cat) && styles.used]}
        onPress={() => handleSelectCategory(cat)}>
        <Text style={styles.label}>{cat}</Text>
      </TouchableOpacity>
    ))}
  </View>
</View>


      <View style={styles.diceRow}>
        {rollState.dice.map((die, idx) => (
          <Dice
            key={idx}
            value={die.value}
            locked={die.locked}
            onToggle={() => handleToggleDie(idx)}
            index={idx}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.rollButton} onPress={handleRoll} disabled={rollState.rollsLeft === 0}>
        <Image
                        source={require('../../../assets/dice-icon.png')}
                        style={styles.dice}
                      />
        <Text style={styles.rollText}>ROLL</Text>
        <Image
                        source={require('../../../assets/dice-icon.png')}
                        style={styles.dice}
                      />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#922018',
    padding: 10,
  },
  instructionsWrapper: {
    maxHeight: 180,
    marginBottom: 10,
  },
  instructionsContainer: {
    padding: 10,
    backgroundColor: '#111',
    borderRadius: 10,
  },
  heading: {
    fontSize: 24,
    color: 'gold',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 6,
  },
  howToPlayTab: {
    backgroundColor: '#B22222',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  howToPlayText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  scoreBox: {
    fontSize: 24,
    color: 'white',
    borderWidth: 2,
    borderColor: 'gold',
    padding: 8,
    borderRadius: 5,
    width: 120,
    textAlign: 'center',
  },
  turnIndicator: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 5,
  },
  scoreCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    padding: 12,
    backgroundColor: 'darkgreen',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 3,
    borderColor: 'white',
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'SawarabiMincho',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 4,
    width: '100%',
    textAlign: 'center',
  },
  category: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginVertical: 4,
    backgroundColor: 'white',
    borderRadius: 8,
    width: 140,
  },
  used: {
    backgroundColor: '#aaa',
  },
  label: {
    fontFamily: 'SawarabiMincho',
    fontSize: 16,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rollButton: {
    backgroundColor: '#B22222',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderWidth: 3,
    borderColor: 'gold',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rollText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  diceRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  dice: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
});