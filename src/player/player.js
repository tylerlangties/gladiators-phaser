export default class Player {
  constructor(scene, x, y) {
    this.scene = scene;
    const anims = scene.anims;
    anims.create({
      key: 'character-walk-down',
      frames: anims.generateFrameNames('atlas', {
        prefix: 'Character_Down.',
        start: 0,
        end: 3,
        zeroPad: 3,
        suffix: '.png'
      }),
      frameRate: 10,
      repeat: -1
    });
    anims.create({
      key: 'character-walk-left',
      frames: anims.generateFrameNames('atlas', {
        prefix: 'Character_Left.',
        start: 0,
        end: 3,
        zeroPad: 3,
        suffix: '.png'
      }),
      frameRate: 10,
      repeat: -1
    });
    anims.create({
      key: 'character-walk-up',
      frames: anims.generateFrameNames('atlas', {
        prefix: 'Character_Up.',
        start: 0,
        end: 3,
        zeroPad: 3,
        suffix: '.png'
      }),
      frameRate: 10,
      repeat: -1
    });
    anims.create({
      key: 'character-walk-right',
      frames: anims.generateFrameNames('atlas', {
        prefix: 'Character_Right.',
        start: 0,
        end: 3,
        zeroPad: 3,
        suffix: '.png'
      }),
      frameRate: 10,
      repeat: -1
    });
    anims.create({
      key: 'character-slash-left',
      frames: anims.generateFrameNames('atlas', {
        prefix: 'Character_SlashUpLeft.',
        start: 0,
        end: 4,
        zeroPad: 3,
        suffix: '.png'
      }),
      frameRate: 15,
      repeat: 0
    });
    anims.create({
      key: 'character-slash-right',
      frames: anims.generateFrameNames('atlas', {
        prefix: 'Character_SlashDownRight.',
        start: 0,
        end: 4,
        zeroPad: 3,
        suffix: '.png'
      }),
      frameRate: 15,
      repeat: 0
    });
    anims.create({
      key: 'character-slash-down',
      frames: anims.generateFrameNames('atlas', {
        prefix: 'Character_SlashDownLeft.',
        start: 0,
        end: 4,
        zeroPad: 3,
        suffix: '.png'
      }),
      frameRate: 15,
      repeat: 0
    });
    anims.create({
      key: 'character-slash-up',
      frames: anims.generateFrameNames('atlas', {
        prefix: 'Character_SlashUpRight.',
        start: 0,
        end: 4,
        zeroPad: 3,
        suffix: '.png'
      }),
      frameRate: 15,
      repeat: 0
    });

    this.sprite = scene.physics.add
      .sprite(x, y, 'atlas', 'Character_Down.000.png')
      .setSize(32, 32);

    this.sprite.setScale(1.4);

    this.sprite.anims.play('character-walk-down');
    this.sprite.body.setVelocity(0);

    this.keys = scene.input.keyboard.createCursorKeys();
    this.attackKey = scene.input.keyboard.addKey(
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
    if (this.attackKey.isDown) {
      this.attack();
    } else if (keys.left.isDown) {
      this.playAnim('character-walk-left');
    } else if (keys.right.isDown) {
      this.playAnim('character-walk-right');
    } else if (keys.up.isDown) {
      this.playAnim('character-walk-up');
    } else if (keys.down.isDown) {
      this.playAnim('character-walk-down');
    } else {
      this.idle();
    }
  }

  //player functions

  // becomeIdle(prevVelocity) {
  //   this.sprite.anims.stop();
  //   // If we were moving, pick and idle frame to use
  //   if (prevVelocity.x < 0)
  //     this.sprite.setTexture('atlas', 'Character_Left.000.png');
  //   else if (prevVelocity.x > 0)
  //     this.sprite.setTexture('atlas', 'Character_Right.000.png');
  //   else if (prevVelocity.y < 0)
  //     this.sprite.setTexture('atlas', 'Character_Up.000.png');
  //   else if (prevVelocity.y > 0)
  //     this.sprite.setTexture('atlas', 'Character_Down.000.png');
  // }

  destroy() {
    this.sprite.destroy();
  }

  playAnim(key) {
    this.sprite.anims.play(key, true);
  }

  playAttack(key) {
    const anims = this.sprite.anims;
    anims.play(key, true);

    // this.sprite.anims.play('isLast', () => {
    //   console.log('animation complete');
    // });
  }

  attack() {
    //Prevents player from moving during attack anim
    this.sprite.body.setVelocity(0);

    if (this.sprite.body.facing === 13) {
      this.playAttack('character-slash-left');
    } else if (this.sprite.body.facing === 14) {
      this.playAttack('character-slash-right');
    } else if (this.sprite.body.facing === 11) {
      this.playAttack('character-slash-up');
    } else if (this.sprite.body.facing === 12) {
      this.playAttack('character-slash-down');
    }
  }

  idle() {
    this.sprite.anims.stop();
    // If we were moving, pick an idle frame to use
    if (this.sprite.body.facing === 13)
      this.sprite.setTexture('atlas', 'Character_Left.000.png');
    else if (this.sprite.body.facing === 14)
      this.sprite.setTexture('atlas', 'Character_Right.000.png');
    else if (this.sprite.body.facing === 11)
      this.sprite.setTexture('atlas', 'Character_Up.000.png');
    else if (this.sprite.body.facing === 12)
      this.sprite.setTexture('atlas', 'Character_Down.000.png');
  }
}
