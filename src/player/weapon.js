// (FREE = 0), (ROOTED = 1), (KNOCKED_BACK = 2);
// (DEFAULT = 0), (ATTACKING = 1), (ATTACKED = 2), (DEATH = 3);

export default class Player {
  constructor(scene, x, y) {
    this.scene = scene;
    const anims = scene.anims;

    //Demo weapon anims

    anims.create({
      key: 'weapon-slash-down',
      frames: anims.generateFrameNames('weaponatlas', {
        prefix: 'Sword_DownLeft-',
        start: 0,
        end: 3,
        zeroPad: 0,
        suffix: '.png'
      }),
      frameRate: 10,
      repeat: 0
    });
    anims.create({
      key: 'weapon-slash-left',
      frames: anims.generateFrameNames('weaponatlas', {
        prefix: 'Sword_UpLeft-',
        start: 0,
        end: 3,
        zeroPad: 0,
        suffix: '.png'
      }),
      frameRate: 10,
      repeat: 0
    });
    anims.create({
      key: 'weapon-slash-up',
      frames: anims.generateFrameNames('weaponatlas', {
        prefix: 'Sword_UpRight-',
        start: 0,
        end: 3,
        zeroPad: 0,
        suffix: '.png'
      }),
      frameRate: 10,
      repeat: 0
    });
    anims.create({
      key: 'weapon-slash-right',
      frames: anims.generateFrameNames('weaponatlas', {
        prefix: 'Sword_DownRight-',
        start: 0,
        end: 3,
        zeroPad: 0,
        suffix: '.png'
      }),
      frameRate: 10,
      repeat: 0
    });

    this.attackAnimationTime = 400;
    this.attackTime = 500;

    this.movementState = 'FREE';
    this.animationState = 'DEFAULT';

    this.sprite = scene.physics.add
      .sprite(x, y, 'weaponatlas', 'Sword_DownLeft-0.png')
      .setSize(8, 12);

    // this.sprite.body.offset.y = 12;

    // this.sprite.anims.play('character-walk-down');
    this.sprite.body.setVelocity(0);

    this.keys = scene.input.keyboard.createCursorKeys();
    // this.attackKey = scene.input.keyboard.addKey(
    //   Phaser.Input.Keyboard.KeyCodes.SPACE
    // );
    scene.input.keyboard.on(
      'keydown-SPACE',
      callback => {
        this.attack();
      },
      this
    );
  }

  freeze() {
    this.sprite.body.moves = false;
  }

  update() {
    const keys = this.keys;
    const sprite = this.sprite;
    const speed = 400;
    // const prevVelocity = sprite.body.velocity.clone();
    sprite.body.setVelocity(0);

    var currentAnim = this.sprite.anims.currentAnim;

    var direction = 'stop';

    // Horizontal movement
    if (keys.left.isDown) {
      sprite.body.setVelocityX(-speed);
      console.log(this.sprite);
      direction = 'left';
    } else if (keys.right.isDown) {
      sprite.body.setVelocityX(speed);
      direction = 'right';
    }
    // Vertical movement
    if (keys.up.isDown) {
      sprite.body.setVelocityY(-speed);
      direction = 'up';
    } else if (keys.down.isDown) {
      sprite.body.setVelocityY(speed);
      direction = 'down';
    }

    // Normalize and scale the velocity so that player can't move faster along a diagonal
    sprite.body.velocity.normalize().scale(speed);

    // Update the animation last and give left/right animations precedence over up/down animations
    //     if (this.attackKey.isDown) {
    //       //   this.attack();
    //     } else {
    //       this.idle();
    //     }
  }

  destroy() {
    this.sprite.destroy();
  }

  playAttack(key) {
    const anims = this.sprite.anims;
    anims.play(key, false);
  }

  attack() {
    console.log(this.sprite);
    //Prevents body from moving during attack anim
    this.sprite.body.setVelocity(0);

    if (this.sprite.body.facing === 13) {
      this.playAttack('weapon-slash-left');
    } else if (this.sprite.body.facing === 14) {
      this.playAttack('weapon-slash-right');
    } else if (this.sprite.body.facing === 11) {
      this.playAttack('weapon-slash-up');
    } else if (this.sprite.body.facing === 12) {
      this.playAttack('weapon-slash-down');
    }
  }

  idle() {
    this.sprite.anims.stop();
    // If we were moving, pick an idle frame to use
    // if (this.sprite.body.facing === 13)
    //   this.sprite.setTexture('atlas', 'adventure-sprite-anims 20.ase');
    // else if (this.sprite.body.facing === 14)
    //   this.sprite.setTexture('atlas', 'adventure-sprite-anims 14.ase');
    // else if (this.sprite.body.facing === 11)
    //   this.sprite.setTexture('atlas', 'adventure-sprite-anims 6.ase');
    // else if (this.sprite.body.facing === 12)
    //   this.sprite.setTexture('atlas', 'adventure-sprite-anims 0.ase');
  }
}
