import BootScene from "./scenes/BootScene.js";
import TitleScene from "./scenes/TitleScene.js";
import TownScene from "./scenes/TownScene.js";
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game-container",
  pixelArt: true,
  scene: [BootScene, TitleScene, TownScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  }
};

const game = new Phaser.Game(config);
