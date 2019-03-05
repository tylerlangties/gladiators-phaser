/**
 * @author       David Kaparis
 * @license      See LICENSE.md
 * @description  Pre-load Assets. Then launches the Title Screen
 */

"use strict";
export default class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    config.scene.physics.world.enable(this);
    config.scene.add.existing(this);

    console.log(this);

    this.anims.animationManager.create({
      key: "character-walk-down",
      frames: this.anims.animationManager.generateFrameNames(
        "playerSpriteKey",
        {
          prefix: "Character_Down.",
          start: 0,
          end: 3,
          zeroPad: 3,
          suffix: ".png"
        }
      ),
      frameRate: 10,
      repeat: -1
    });
    this.anims.animationManager.create({
      key: "character-walk-left",
      frames: this.anims.animationManager.generateFrameNames(
        "playerSpriteKey",
        {
          prefix: "Character_Left.",
          start: 0,
          end: 3,
          zeroPad: 3,
          suffix: ".png"
        }
      ),
      frameRate: 10,
      repeat: -1
    });
    this.anims.animationManager.create({
      key: "character-walk-up",
      frames: this.anims.animationManager.generateFrameNames(
        "playerSpriteKey",
        {
          prefix: "Character_Up.",
          start: 0,
          end: 3,
          zeroPad: 3,
          suffix: ".png"
        }
      ),
      frameRate: 10,
      repeat: -1
    });
    this.anims.animationManager.create({
      key: "character-walk-right",
      frames: this.anims.animationManager.generateFrameNames(
        "playerSpriteKey",
        {
          prefix: "Character_Right.",
          start: 0,
          end: 3,
          zeroPad: 3,
          suffix: ".png"
        }
      ),
      frameRate: 10,
      repeat: -1
    });
  }

  preUpdate() {
    // Called every tick before update.
    // Automatically called by World.preUpdate
  }

  update(time, delta, cursors) {
    let speed = 200;
    let input = {
      left: cursors.left.isDown,
      right: cursors.right.isDown,
      down: cursors.down.isDown,
      up: cursors.up.isDown
    };

    if (input.left) {
      this.body.setVelocityX(-speed);
      this.anims.play("character-walk-left", true);
    } else if (input.right) {
      this.body.velocity.x = 150;
      this.anims.play("character-walk-right", true);
    } else if (input.up) {
      this.body.velocity.y = -150;
      this.anims.play("character-walk-up", true);
    } else if (input.down) {
      this.body.velocity.y = 150;
      this.anims.play("character-walk-down", true);
    } else {
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;
      this.anims.stop();
    }
  }
}
