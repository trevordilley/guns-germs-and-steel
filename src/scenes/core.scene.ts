import 'phaser';
import {addHuman, INITIAL_HUMAN_STATE} from "../entities/humans";
import {CreatureActions} from "../types";

export class MenuScene extends Phaser.Scene {

  player?: CreatureActions
  constructor() {
    super({
      key: 'MenuScene'
    });
  }

  preload(): void {
  }

  create(): void {
    this.player = addHuman({
      scene: this,
      entity: {
        ...INITIAL_HUMAN_STATE,
        allegiance: 0x00FF00FF
      }
    })
  }

  update(): void {
    const pos = this.input.mousePointer.position
    this.player?.move(pos)
  }
}
