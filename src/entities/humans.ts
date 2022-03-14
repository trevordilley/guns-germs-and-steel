import Vector2 = Phaser.Math.Vector2;
import {AddEntity, Human, INITIAL_ENTITY_STATE} from "../types";
import {calcRadiusFromCalories} from "../utils";

export const INITIAL_HUMAN_STATE: Human = {
  ...INITIAL_ENTITY_STATE,
  plaguesSurvived: [],
  techLevel: 1,
  allegiance: 0x0000FFFF
}

export const addHuman = (initialState: AddEntity<Human>) => {
  const {entity, scene} = initialState
  const initial = entity
  const state = initial

  const sprite = scene.add.circle(state.position.x, state.position.y,10, state.allegiance)

  const setCalories = (deltaCalories: number) => {
    state.calories = state.calories + deltaCalories
    sprite.scale = calcRadiusFromCalories(state.calories)
    multiply()
  }

  const move = (pos: Vector2) => {
    setCalories( -1)
    state.position = pos
    sprite.setPosition(pos.x, pos.y)
  }

  const eat = (caloriesGained: number) => {
    setCalories(caloriesGained)
    state.calories = state.calories + caloriesGained
  }

  const multiply = () => {
    if(state.calories > state.fertility) {
      state.calories = state.calories/2
      return {
        parent: state,
        child: addHuman({entity: initial, scene})
      }
    } else {
      return { parent: state}
    }
  }

  const die = () => {
    sprite.destroy(true)
    state.isDead = true
  }

  return { move, eat, die }
}
