import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Category } from '../constants/categories';      // ✅ one level up


interface ScoreCardProps {
  scores: { [key in Category]?: number };
  usedCategories: Set<Category>;
  onSelectCategory: (category: Category) => void;
  diceValues: number[];
  calculateScore: (category: Category, dice: number[]) => number;
}

export default function ScoreCard({ scores, usedCategories, onSelectCategory, diceValues, calculateScore }: ScoreCardProps) {
  return (
    <View style={styles.container}>
      {Object.values(Category).map((cat) => (
        <TouchableOpacity
          key={cat}
          style={[styles.row, usedCategories.has(cat) && styles.used]}
          disabled={usedCategories.has(cat)}
          onPress={() => onSelectCategory(cat)}>
          <Text style={styles.category}>{cat}</Text>
          <Text style={styles.score}>{usedCategories.has(cat) ? scores[cat] : calculateScore(cat, diceValues)}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  used: {
    backgroundColor: '#ddd',
  },
  category: {
    fontWeight: 'bold',
  },
  score: {
    fontSize: 16,
  },
});
