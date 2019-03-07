class HUD extends Phaser.GameObjects.DynamicBitmapText {
  constructor(scene, x, y, key, text, size, align) {
    super(scene, x, y, key, text, size, align);
    // ...
    scene.add.existing(this);
  }
  // ...

  // preUpdate(time, delta) {}
}
