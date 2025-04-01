// gameEngine.ts - Core Yahtzee Logic

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
    CHANCE = 'Chance',
  }
  
  export type Die = {
    value: number;
    locked: boolean;
  };
  
  export type RollState = {
    dice: Die[];
    rollsLeft: number;
  };
  
  export type ScoreCard = {
    [key in Category]?: number;
  };
  
  export type Player = {
    name: string;
    scoreCard: ScoreCard;
    yahtzeeBonusCount: number;
  };
  
  export function rollDice(currentDice: Die[]): Die[] {
    return currentDice.map(d => d.locked ? d : { value: Math.ceil(Math.random() * 6), locked: false });
  }
  
  export function toggleLock(dice: Die[], index: number): Die[] {
    return dice.map((d, i) => i === index ? { ...d, locked: !d.locked } : d);
  }
  
  export function resetRoll(): RollState {
    return {
      dice: Array(5).fill(null).map(() => ({ value: Math.ceil(Math.random() * 6), locked: false })),
      rollsLeft: 2,
    };
  }
  
  function countOccurrences(dice: number[]): Record<number, number> {
    return dice.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);
  }
  
  function isStraight(dice: number[], length: number): boolean {
    const unique = Array.from(new Set(dice)).sort();
    for (let i = 0; i <= unique.length - length; i++) {
      if (unique.slice(i, i + length).every((val, idx, arr) => idx === 0 || val === arr[idx - 1] + 1)) {
        return true;
      }
    }
    return false;
  }
  
  export function calculateScore(category: Category, dice: number[]): number {
    const counts = countOccurrences(dice);
    const values = Object.values(counts);
    const total = dice.reduce((a, b) => a + b, 0);
  
    switch (category) {
      case Category.ONES: return dice.filter(n => n === 1).length * 1;
      case Category.TWOS: return dice.filter(n => n === 2).length * 2;
      case Category.THREES: return dice.filter(n => n === 3).length * 3;
      case Category.FOURS: return dice.filter(n => n === 4).length * 4;
      case Category.FIVES: return dice.filter(n => n === 5).length * 5;
      case Category.SIXES: return dice.filter(n => n === 6).length * 6;
      case Category.THREE_OF_A_KIND: return values.some(v => v >= 3) ? total : 0;
      case Category.FOUR_OF_A_KIND: return values.some(v => v >= 4) ? total : 0;
      case Category.FULL_HOUSE: return values.includes(3) && values.includes(2) ? 25 : 0;
      case Category.SMALL_STRAIGHT: return isStraight(dice, 4) ? 30 : 0;
      case Category.LARGE_STRAIGHT: return isStraight(dice, 5) ? 40 : 0;
      case Category.YAHTZEE: return values.includes(5) ? 50 : 0;
      case Category.CHANCE: return total;
      default: return 0;
    }
  }
  
  export function calculateUpperBonus(scoreCard: ScoreCard): number {
    const upperCategories = [
      Category.ONES, Category.TWOS, Category.THREES,
      Category.FOURS, Category.FIVES, Category.SIXES
    ];
    const upperScore = upperCategories.reduce((sum, cat) => sum + (scoreCard[cat] || 0), 0);
    return upperScore >= 63 ? 35 : 0;
  }
  
  export function calculateTotalScore(scoreCard: ScoreCard, yahtzeeBonusCount: number): number {
    const baseScore = Object.values(scoreCard).reduce((a, b) => a + (b || 0), 0);
    const bonus = calculateUpperBonus(scoreCard);
    const yahtzeeBonus = yahtzeeBonusCount * 100;
    return baseScore + bonus + yahtzeeBonus;
  }
  