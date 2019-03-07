class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene'
    });
  }
  preload() {
    const progress = this.add.graphics();

    // Register a load progress event to show a load bar
    this.load.on('progress', value => {
      progress.clear();
      progress.fillStyle(0xffffff, 1);
      progress.fillRect(
        0,
        this.sys.game.config.height / 2,
        this.sys.game.config.width * value,
        60
      );
    });

    // Register a load complete event to launch the title screen when all files are loaded
    this.load.on('complete', () => {
      // prepare all animations, defined in a separate file
      progress.destroy();
      console.log('complete');
      this.scene.start('TitleScene');
    });

    //Loading assets for Town Scene
    this.load.image('tiles', './assets/magecity.png');
    this.load.tilemapTiledJSON('map', './assets/town-scene.json');

    this.load.tilemapTiledJSON('arenamap', './assets/Arena.json');

    //Loading assets for players animations
    // this.load.atlas(
    //   'atlas',
    //   '../assets/player-anim.png',
    //   '../assets/player-anim.json'
    // );

    this.load.atlas(
      'atlas',
      '../assets/adventure-sprite-anims.png',
      '../assets/adventure-anims.json'
    );

    // this.load.atlas(
    //   'atlas',
    //   '../assets/weapon-anims.png',
    //   '../assets/weapon-anims.json'
    // );

    //Loading assets for title screen && HUD
    this.load.bitmapFont(
      'font',
      'assets/fonts/font.png',
      'assets/fonts/font.fnt'
    );
  }
}

export default BootScene;
