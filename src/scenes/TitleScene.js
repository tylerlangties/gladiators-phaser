class TitleScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'TitleScene'
    });
  }
  preload() {}
  create() {
    this.scene.bringToTop();

    this.registry.set('restartScene', false);
    this.registry.set('attractMode', true);
    this.title = this.add.bitmapText(340, 250, 'font', 'GLADIATORS', 12);

    this.pressX = this.add.bitmapText(305, 270, 'font', 'PRESS X TO START', 12);
    this.blink = 1000;

    this.startKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.X
    );
  }

  update(time, delta) {
    if (this.registry.get('restartScene')) {
      this.restartScene();
    }
    this.blink -= delta;
    if (this.blink < 0) {
      this.pressX.alpha = this.pressX.alpha === 1 ? 0 : 1;
      this.blink = 500;
    }
    if (this.startKey.isDown) {
      this.startGame();
    }
  }

  startGame() {
    this.scene.stop('TownScene');
    this.scene.start('TownScene');
  }

  restartScene() {
    this.scene.stop('TownScene');
    this.scene.launch('TownScene');
    this.scene.bringToTop();
    this.registry.set('restartScene', false);
  }
}

export default TitleScene;
