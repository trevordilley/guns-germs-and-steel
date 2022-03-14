import {BASE_CREATURE_RADIUS, BASE_FOOD_CALORIC_VALUE, BASE_FOOD_RADIUS, FULL_CREATURE_CALORIES} from "./types";


const calcRadiusFromCalories = (calories: number, baseCalories: number, baseRadius: number) =>
  (calories/baseCalories) * baseRadius

export const calcCreatureRadiusFromCalories = (calories: number) =>
  calcRadiusFromCalories(calories, FULL_CREATURE_CALORIES, BASE_CREATURE_RADIUS)

export const calcFoodRadiusFromCalories = (caloricValue: number) =>
  calcRadiusFromCalories(caloricValue, BASE_FOOD_CALORIC_VALUE, BASE_FOOD_RADIUS)
