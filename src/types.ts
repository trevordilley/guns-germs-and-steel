import {Scene} from "phaser";
import Vector2 = Phaser.Math.Vector2;

export const FULL_CALORIES = 1000
export const BASE_RADIUS = 10
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


export const INITIAL_ENTITY_STATE: Entity = {
  isDead: false,
  attackDamage: 10,
  fertility: FERTILITY_THRESHOLDS.NORMAL,
  calories: FULL_CALORIES,
  position: new Vector2(0,0),
}


export interface AddEntity<T extends  Entity> {
  scene: Scene
  entity: T
}

export interface Entity {
  position: Vector2,
  calories: number,
  attackDamage: number,
  // How many calories before they multiply
  fertility: FERTILITY_THRESHOLDS,
  isDead: boolean
}

export interface Animal extends Entity {
  isDomesticatable: boolean,
  food: number,
  productivityBoost: number,
  behaviour: AI_BEHAVIOUR,
  plague?: PLAGUES
}

export interface Human extends Entity{
  // Each group of individuals will be represented with a unique id
  allegiance: number

  // Plagues this human has survived
  plaguesSurvived: PLAGUES[]

  techLevel: number,
}

export interface NPC extends Human {
  behaviour: AI_BEHAVIOUR
}

export interface EntityActions {
  die: () => void,
  move: (pos: Vector2) => void
  eat: (calories: number) => void
}
