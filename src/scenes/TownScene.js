import Player from '../player/player.js';

export default class TownScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'TownScene'
    });
  }

  preload() {}

  create() {
    this.playerHasReachedDoor = false;
    const map = this.make.tilemap({ key: 'map' });

    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)
    const tileset = map.addTilesetImage('mage-tileset', 'tiles');

    // Parameters: layer name (or index) from Tiled, tileset, x, y
    const belowLayer = map.createDynamicLayer('Below Player', tileset, 0, 0);
    const worldLayer = map.createDynamicLayer('World', tileset, 0, 0);
    const aboveLayer = map.createDynamicLayer('Above Player', tileset, 0, 0);

    worldLayer.setCollisionByProperty({ collides: true });

    // By default, everything gets depth sorted on the screen in the order we created things. Here, we
    // want the "Above Player" layer to sit on top of the player, so we explicitly give it a depth.
    // Higher depths will sit on top of lower depth objects.
    aboveLayer.setDepth(10);

    const spawnPoint = map.findObject(
      'Objects',
      obj => obj.name === 'Spawn Point'
    );

    this.player = new Player(this, spawnPoint.x, spawnPoint.y);
    this.physics.add.collider(this.player.sprite, worldLayer);
    const camera = this.cameras.main;

    // Debug graphics
    this.input.keyboard.once('keydown_F', event => {
      // Turn on physics debugging to show player's hitbox
      this.physics.world.createDebugGraphic();
      console.log(this.player, worldLayer);
      // Create worldLayer collision graphic above the player, but below the help text
      const graphics = this.add
        .graphics()
        .setAlpha(0.75)
        .setDepth(20);
      worldLayer.renderDebug(graphics, {
        tileColor: null, // Color of non-colliding tiles
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
        faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
      });
    });

    //Debugging for scene switching
    this.input.keyboard.once('keydown_D', () => {
      this.scene.stop('TownScene');
      this.scene.start('ArenaScene');
      console.log(this.player.sprite.x);
    });

    //Callback when player collides with door
    worldLayer.setTileIndexCallback([327], () => {
      worldLayer.setTileIndexCallback(200, null);
      this.playerHasReachedDoor = true;
      console.log('farts');
      camera.fade(250, 0, 0, 0);
      camera.once('camerafadeoutcomplete', () => {
        this.scene.stop('TownScene');
        this.scene.start('ArenaScene');
      });
    });

    // Create HUD
    this.createHUD();

    // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    camera.startFollow(this.player.sprite);
  }
  update(time, delta) {
    if (this.playerHasReachedDoor) return;

    this.player.update();
  }

  createHUD() {
    var rect = new Phaser.Geom.Rectangle(5, 5, 58, 28);

    var graphics = this.add.graphics({
      fillStyle: { color: 0x0000ff, alpha: 0.35 }
    });

    graphics.fillRectShape(rect);

    graphics.setScrollFactor(0, 0);

    const hud = this.add.bitmapText(10, 10, 'font', 'HEALTH', 8);
    hud.setScrollFactor(0, 0);

    this.health = {
      pts: 0,
      textObject: this.add.bitmapText(10, 20, 'font', '100', 8)
    };
    this.health.textObject.setScrollFactor(0, 0);
  }
}
