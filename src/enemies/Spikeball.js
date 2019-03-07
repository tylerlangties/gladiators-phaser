export default class SpikeBall {
  constructor(scene, x, y) {
    this.scene = scene;
    this.health = 100;
    this.sprite = scene.physics.add.sprite(x, y, 'spikeball');

    this.sprite.setBounce(1);

    this.sprite.setVelocity(Phaser.Math.Between(0, 300), 20);
    this.sprite.allowGravity = false;
    this.sprite.body.setCircle(120);
  }
  update() {
    if (this.health <= 0) {
      this.die();
    }
  }
  die() {
    this.destroy();
  }
}
