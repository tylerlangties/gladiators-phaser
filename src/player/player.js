export default class Player {
  constructor(scene, x, y) {
    this.scene = scene;
    const anims = scene.anims;
    anims.create({
      key: "character-walk-down",
      frames: anims.generateFrameNames("atlas", {
        prefix: "Character_Down.",
        start: 0,
        end: 3,
        zeroPad: 3,
        suffix: ".png"
      }),
      frameRate: 10,
      repeat: -1
    });
    anims.create({
      key: "character-walk-left",
      frames: anims.generateFrameNames("atlas", {
        prefix: "Character_Left.",
        start: 0,
        end: 3,
        zeroPad: 3,
        suffix: ".png"
      }),
      frameRate: 10,
      repeat: -1
    });
    anims.create({
      key: "character-walk-up",
      frames: anims.generateFrameNames("atlas", {
        prefix: "Character_Up.",
        start: 0,
        end: 3,
        zeroPad: 3,
        suffix: ".png"
      }),
      frameRate: 10,
      repeat: -1
    });
    anims.create({
      key: "character-walk-right",
      frames: anims.generateFrameNames("atlas", {
        prefix: "Character_Right.",
        start: 0,
        end: 3,
        zeroPad: 3,
        suffix: ".png"
      }),
      frameRate: 10,
      repeat: -1
    });
    anims.create({
      key: "character-slash-left",
      frames: anims.generateFrameNames("atlas", {
        prefix: "Character_SlashUpLeft.",
        start: 0,
        end: 4,
        zeroPad: 3,
        suffix: ".png"
      }),
      frameRate: 10,
      repeat: 0
    });
    anims.create({
      key: "character-slash-right",
      frames: anims.generateFrameNames("atlas", {
        prefix: "Character_SlashDownRight.",
        start: 0,
        end: 4,
        zeroPad: 3,
        suffix: ".png"
      }),
      frameRate: 10,
      repeat: 0
    });
    anims.create({
      key: "character-slash-down",
      frames: anims.generateFrameNames("atlas", {
        prefix: "Character_SlashDownLeft.",
        start: 0,
        end: 4,
        zeroPad: 3,
        suffix: ".png"
      }),
      frameRate: 10,
      repeat: 0
    });
    anims.create({
      key: "character-slash-up",
      frames: anims.generateFrameNames("atlas", {
        prefix: "Character_SlashUpRight.",
        start: 0,
        end: 4,
        zeroPad: 3,
        suffix: ".png"
      }),
      frameRate: 10,
      repeat: 0
    });

    this.sprite = scene.physics.add
      .sprite(x, y, "atlas", "Character_Down.000.png")
      .setSize(32, 32);

    this.sprite.anims.play("character-walk-down");
    this.sprite.body.setVelocity(0);

    this.keys = scene.input.keyboard.createCursorKeys();
    this.keys.spaceBar = scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
  }
  freeze() {
    this.sprite.body.moves = false;
  }
  update() {
    const keys = this.keys;
    const sprite = this.sprite;
    const speed = 300;
    const prevVelocity = sprite.body.velocity.clone();
    sprite.body.setVelocity(0);

    // Horizontal movement
    if (keys.left.isDown) {
      sprite.body.setVelocityX(-speed);
    }

    if (keys.right.isDown) {
      sprite.body.setVelocityX(speed);
    }
    // Vertical movement
    if (keys.up.isDown) {
      sprite.body.setVelocityY(-speed);
    }

    if (keys.down.isDown) {
      sprite.body.setVelocityY(speed);
    }

    // Normalize and scale the velocity so that player can't move faster along a diagonal
    sprite.body.velocity.normalize().scale(speed);

    // Update the animation last and give left/right animations precedence over up/down animations
    if (keys.left.isDown) {
      sprite.anims.play("character-walk-left", true);
    } else if (keys.right.isDown) {
      sprite.anims.play("character-walk-right", true);
    } else if (keys.up.isDown) {
      sprite.anims.play("character-walk-up", true);
    } else if (keys.down.isDown) {
      sprite.anims.play("character-walk-down", true);
    } else if (keys.spaceBar.isDown) {
      this.attack();
    } else {
      sprite.anims.stop();

      // If we were moving, pick and idle frame to use
      if (prevVelocity.x < 0)
        sprite.setTexture("atlas", "Character_Left.000.png");
      else if (prevVelocity.x > 0)
        sprite.setTexture("atlas", "Character_Right.000.png");
      else if (prevVelocity.y < 0)
        sprite.setTexture("atlas", "Character_Up.000.png");
      else if (prevVelocity.y > 0)
        sprite.setTexture("atlas", "Character_Down.000.png");
    }
  }
  destroy() {
    this.sprite.destroy();
  }

  attack() {
    if (this.keys.spaceBar.isDown && this.sprite.body.facing === 13) {
      this.sprite.anims.play("character-slash-left", true);
    } else if (this.keys.spaceBar.isDown && this.sprite.body.facing === 14) {
      this.sprite.anims.play("character-slash-right", true);
    } else if (this.keys.spaceBar.isDown && this.sprite.body.facing === 11) {
      this.sprite.anims.play("character-slash-up", true);
    } else if (this.keys.spaceBar.isDown && this.sprite.body.facing === 12) {
      this.sprite.anims.play("character-slash-down", true);
    }
  }
}
