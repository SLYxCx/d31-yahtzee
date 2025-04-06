import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Category } from '../constants/categories'; // ✅ Importing Category enum/type

// Props definition for ScoreCard component
interface ScoreCardProps {
  scores: { [key in Category]?: number };               // Mapping of each category to its score (if set)
  usedCategories: Set<Category>;                        // Categories that have already been used
  onSelectCategory: (category: Category) => void;       // Callback when user selects a category
  diceValues: number[];                                 // Current dice values
  calculateScore: (category: Category, dice: number[]) => number; // Function to calculate score based on dice
}

// Main ScoreCard component
export default function ScoreCard({
  scores,
  usedCategories,
  onSelectCategory,
  diceValues,
  calculateScore
}: ScoreCardProps) {
  return (
    <View style={styles.container}>
      {/* Iterate through all category values */}
      {Object.values(Category).map((cat) => (
        <TouchableOpacity
          key={cat}
          style={[styles.row, usedCategories.has(cat) && styles.used]} // Apply 'used' style if category is already chosen
          disabled={usedCategories.has(cat)} // Disable button if category is used
          onPress={() => onSelectCategory(cat)} // Handle category selection
        >
          {/* Category name */}
          <Text style={styles.category}>{cat}</Text>

          {/* Either display the already recorded score or show the potential score */}
          <Text style={styles.score}>
            {usedCategories.has(cat) ? scores[cat] : calculateScore(cat, diceValues)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',              // Layout: category on the left, score on the right
    justifyContent: 'space-between',   // Evenly space category and score
    paddingVertical: 8,                // Vertical spacing between rows
    borderBottomWidth: 1,              // Divider line between rows
    borderColor: '#ccc',               // Light gray border color
  },
  used: {
    backgroundColor: '#ddd',           // Gray background for used categories
  },
  category: {
    fontWeight: 'bold',                // Emphasize category name
  },
  score: {
    fontSize: 16,                      // Slightly larger font for scores
  },
});
