import {BASE_RADIUS, FULL_CALORIES} from "./types";

export const calcRadiusFromCalories = (calories: number) =>
  (calories/FULL_CALORIES) * BASE_RADIUS
