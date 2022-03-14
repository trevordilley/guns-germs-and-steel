import {Scene} from "phaser";
import Vector2 = Phaser.Math.Vector2;

export const FULL_CREATURE_CALORIES = 1000
export const BASE_CREATURE_RADIUS = 10

export const BASE_FOOD_CALORIC_VALUE = 100
export const BASE_FOOD_RADIUS = 10

export enum PLAGUES {
  MEASLES,
  MUMPS,
  SMALL_POX,
  BUBONIC
}

export enum FERTILITY_THRESHOLDS {
  SLOWEST = 10000000,
  SLOW = 1000000,
  NORMAL = 40000,
  FAST = 20000
}

export enum AI_BEHAVIOUR {
  AGGRESSIVE,
  DOCILE,
  FLIGHTY
}


export const INITIAL_CREATURE_STATE: Creature = {
  isDead: false,
  attackDamage: 10,
  fertility: FERTILITY_THRESHOLDS.NORMAL,
  calories: FULL_CREATURE_CALORIES,
  position: new Vector2(0,0),
}

export const INITIAL_FOOD_STATE: Food = {
  position: new Vector2(0,0),
  caloricValue: 100
}

export interface AddEntity<T extends  Entity> {
  scene: Scene
  entity: T
}

export interface Entity {
  position: Vector2,
}

export interface Food extends Entity{
  caloricValue: number
}

export interface Creature extends Entity{
  calories: number,
  attackDamage: number,
  // How many calories before they multiply
  fertility: FERTILITY_THRESHOLDS,
  isDead: boolean

}

export interface Animal extends Creature {
  isDomesticatable: boolean,
  food: number,
  productivityBoost: number,
  behaviour: AI_BEHAVIOUR,
  plague?: PLAGUES
}

export interface Human extends Creature {
  // Each group of individuals will be represented with a unique id
  allegiance: number

  // Plagues this human has survived
  plaguesSurvived: PLAGUES[]

  techLevel: number,
}

export interface NPC extends Human {
  behaviour: AI_BEHAVIOUR
}

export interface CreatureActions {
  die: () => void,
  move: (pos: Vector2) => void
  eat: (calories: number) => void
}
