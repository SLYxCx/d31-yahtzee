// categories.ts

// Enum of all possible Yahtzee categories for clarity and reuse
export enum Category {
    ONES = 'Ones',
    TWOS = 'Twos',
    THREES = 'Threes',
    FOURS = 'Fours',
    FIVES = 'Fives',
    SIXES = 'Sixes',
    THREE_OF_A_KIND = 'Three of a Kind',
    FOUR_OF_A_KIND = 'Four of a Kind',
    FULL_HOUSE = 'Full House',
    SMALL_STRAIGHT = 'Small Straight',
    LARGE_STRAIGHT = 'Large Straight',
    YAHTZEE = 'Yahtzee',
    CHANCE = 'Chance'
  }
  
  // Upper section categories for bonus calculation
  export const UpperCategories: Category[] = [
    Category.ONES,
    Category.TWOS,
    Category.THREES,
    Category.FOURS,
    Category.FIVES,
    Category.SIXES
  ];
  
  // Lower section categories for specific combinations
  export const LowerCategories: Category[] = [
    Category.THREE_OF_A_KIND,
    Category.FOUR_OF_A_KIND,
    Category.FULL_HOUSE,
    Category.SMALL_STRAIGHT,
    Category.LARGE_STRAIGHT,
    Category.YAHTZEE,
    Category.CHANCE
  ];
  
  // All categories as a flat list
  export const AllCategories: Category[] = [...UpperCategories, ...LowerCategories];