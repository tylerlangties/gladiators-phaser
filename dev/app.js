(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["app"] = factory();
	else
		root["app"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dev/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scenes_townScene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/townScene.js */ "./src/scenes/townScene.js");

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  pixelArt: true,
  scene: _scenes_townScene_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0
      }
    }
  }
};
const game = new Phaser.Game(config); // const config = {
//   type: Phaser.AUTO,
//   width: 800,
//   height: 600,
//   parent: 'game-container',
//   pixelArt: true,
//   physics: {
//     default: 'arcade',
//     arcade: {
//       gravity: { y: 0 }
//     }
//   },
//   scene: {
//     preload: preload,
//     create: create,
//     update: update
//   }
// };
// const game = new Phaser.Game(config);
// let cursors;
// let player;
// let showDebug = false;
// function preload() {
//   this.load.image('tiles', './assets/magecity.png');
//   this.load.tilemapTiledJSON('map', './assets/mage-map.json');
//   this.load.atlas(
//     'weapon',
//     '../assets/weapon-anims.png',
//     '../assets/weapon-anims.json'
//   );
//   // An atlas is a way to pack multiple images together into one texture. I'm using it to load all
//   // the player animations (walking left, walking right, etc.) in one image. For more info see:
//   //  https://labs.phaser.io/view.html?src=src/animation/texture%20atlas%20animation.js
//   // If you don't use an atlas, you can do the same thing with a spritesheet, see:
//   //  https://labs.phaser.io/view.html?src=src/animation/single%20sprite%20sheet.js
//   this.load.atlas(
//     'atlas',
//     '../assets/player-anim.png',
//     '../assets/player-anim.json'
//   );
// }
// function create() {
//   const map = this.make.tilemap({ key: 'map' });
//   // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
//   // Phaser's cache (i.e. the name you used in preload)
//   const tileset = map.addTilesetImage('mage-tileset', 'tiles');
//   // Parameters: layer name (or index) from Tiled, tileset, x, y
//   const belowLayer = map.createStaticLayer('Below Player', tileset, 0, 0);
//   const worldLayer = map.createStaticLayer('World', tileset, 0, 0);
//   const aboveLayer = map.createStaticLayer('Above Player', tileset, 0, 0);
//   worldLayer.setCollisionByProperty({ collides: true });
//   // By default, everything gets depth sorted on the screen in the order we created things. Here, we
//   // want the "Above Player" layer to sit on top of the player, so we explicitly give it a depth.
//   // Higher depths will sit on top of lower depth objects.
//   aboveLayer.setDepth(10);
//   // Object layers in Tiled let you embed extra info into a map - like a spawn point or custom
//   // collision shapes. In the tmx file, there's an object layer with a point named "Spawn Point"
//   const spawnPoint = map.findObject(
//     'Objects',
//     obj => obj.name === 'Spawn Point'
//   );
//   // Create a sprite with physics enabled via the physics system. The image used for the sprite has
//   // a bit of whitespace, so I'm using setSize & setOffset to control the size of the player's body.
//   player = this.physics.add
//     .sprite(spawnPoint.x, spawnPoint.y, 'atlas', 'Character_Down.000.png')
//     .setSize(32, 32);
//   weapon = this.physics.add
//     .sprite(player.x, player.y, 'weapon', 'Sword_UpRight-3.png')
//     .setSize(32, 32)
//     .setOffset(0, -15);
//   weapon.visible = false;
//   //play invisible frame first
//   // player.addChild(weapon);
//   // Watch the player and worldLayer for collisions, for the duration of the scene:
//   this.physics.add.collider(player, worldLayer);
//   // Create the player's walking animations from the texture atlas. These are stored in the global
//   // animation manager so any sprite can access them.
//   const anims = this.anims;
//   anims.create({
//     key: 'SlashAnim',
//     frames: anims.generateFrameNames('weapon', {
//       prefix: 'Sword_UpRight-',
//       start: 0,
//       end: 3,
//       zeroPad: 0,
//       suffix: '.png'
//     }),
//     frameRate: 10,
//     repeat: 0
//   });
//   anims.create({
//     key: 'character-walk-down',
//     frames: anims.generateFrameNames('atlas', {
//       prefix: 'Character_Down.',
//       start: 0,
//       end: 3,
//       zeroPad: 3,
//       suffix: '.png'
//     }),
//     frameRate: 10,
//     repeat: -1
//   });
//   anims.create({
//     key: 'character-walk-left',
//     frames: anims.generateFrameNames('atlas', {
//       prefix: 'Character_Left.',
//       start: 0,
//       end: 3,
//       zeroPad: 3,
//       suffix: '.png'
//     }),
//     frameRate: 10,
//     repeat: -1
//   });
//   anims.create({
//     key: 'character-walk-up',
//     frames: anims.generateFrameNames('atlas', {
//       prefix: 'Character_Up.',
//       start: 0,
//       end: 3,
//       zeroPad: 3,
//       suffix: '.png'
//     }),
//     frameRate: 10,
//     repeat: -1
//   });
//   anims.create({
//     key: 'character-walk-right',
//     frames: anims.generateFrameNames('atlas', {
//       prefix: 'Character_Right.',
//       start: 0,
//       end: 3,
//       zeroPad: 3,
//       suffix: '.png'
//     }),
//     frameRate: 10,
//     repeat: -1
//   });
//   anims.create({
//     key: 'character-slash-left',
//     frames: anims.generateFrameNames('atlas', {
//       prefix: 'Character_SlashUpLeft.',
//       start: 0,
//       end: 4,
//       zeroPad: 3,
//       suffix: '.png'
//     }),
//     frameRate: 10,
//     repeat: -1
//   });
//   anims.create({
//     key: 'character-slash-right',
//     frames: anims.generateFrameNames('atlas', {
//       prefix: 'Character_SlashDownRight.',
//       start: 0,
//       end: 4,
//       zeroPad: 3,
//       suffix: '.png'
//     }),
//     frameRate: 10,
//     repeat: -1
//   });
//   anims.create({
//     key: 'character-slash-down',
//     frames: anims.generateFrameNames('atlas', {
//       prefix: 'Character_SlashDownLeft.',
//       start: 0,
//       end: 4,
//       zeroPad: 3,
//       suffix: '.png'
//     }),
//     frameRate: 10,
//     repeat: -1
//   });
//   anims.create({
//     key: 'character-slash-up',
//     frames: anims.generateFrameNames('atlas', {
//       prefix: 'Character_SlashUpRight.',
//       start: 0,
//       end: 4,
//       zeroPad: 3,
//       suffix: '.png'
//     }),
//     frameRate: 10,
//     repeat: -1
//   });
//   // anims.create({
//   //   key: 'misa-back-walk',
//   //   frames: anims.generateFrameNames('atlas', {
//   //     prefix: 'misa-back-walk.',
//   //     start: 0,
//   //     end: 1,
//   //     zeroPad: 1
//   //   }),
//   //   frameRate: 10,
//   //   repeat: -1
//   // });
//   const camera = this.cameras.main;
//   camera.startFollow(player);
//   camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
//   cursors = this.input.keyboard.createCursorKeys();
//   // Help text that has a "fixed" position on the screen
//   // Debug graphics
//   this.input.keyboard.once('keydown_F', event => {
//     // Turn on physics debugging to show player's hitbox
//     this.physics.world.createDebugGraphic();
//     console.log(game);
//     // Create worldLayer collision graphic above the player, but below the help text
//     const graphics = this.add
//       .graphics()
//       .setAlpha(0.75)
//       .setDepth(20);
//     worldLayer.renderDebug(graphics, {
//       tileColor: null, // Color of non-colliding tiles
//       collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
//       faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
//     });
//   });
// }
// function update(time, delta) {
//   let speed = 200;
//   const prevVelocity = player.body.velocity.clone();
//   // console.log(player);
//   // Stop any previous movement from the last frame
//   player.body.setVelocity(0);
//   weapon.body.setVelocity(0);
//   player.depth = 1;
//   weapon.x = player.x;
//   weapon.y = player.y - 10;
//   weapon.depth = 0;
//   // Horizontal movement
//   if (cursors.left.isDown) {
//     // if (cursors.space.isDown) {
//     //   speed = 400;
//     //   player.body.setVelocityX(-speed);
//     // }
//     player.body.setVelocityX(-speed);
//     weapon.body.setVelocityX(-speed);
//   } else if (cursors.right.isDown) {
//     // if (cursors.space.isDown) {
//     //   speed = 400;
//     //   player.body.setVelocityX(speed);
//     // }
//     player.body.setVelocityX(speed);
//     weapon.body.setVelocityX(speed);
//   }
//   // Vertical movement
//   if (cursors.up.isDown) {
//     // if (cursors.space.isDown) {
//     //   speed = 400;
//     //   player.body.setVelocityY(-speed);
//     // }
//     player.body.setVelocityY(-speed);
//     weapon.body.setVelocityY(-speed);
//   } else if (cursors.down.isDown) {
//     // if (cursors.space.isDown) {
//     //   speed = 400;
//     //   player.body.setVelocityY(speed);
//     // }
//     player.body.setVelocityY(speed);
//     weapon.body.setVelocityY(speed);
//   }
//   // Normalize and scale the velocity so that player can't move faster along a diagonal
//   player.body.velocity.normalize().scale(speed);
//   weapon.body.velocity.normalize().scale(speed);
//   function attack() {
//     // if (!weapon.anims.currentFrame.index === 4) {
//     weapon.visible = true;
//     player.anims.play('character-slash-up', true);
//     weapon.anims.play('SlashAnim', true);
//     console.log(weapon);
//     weapon.anims.currentAnim.hideOnComplete = true;
//     player.anims.currentAnim.hideOnComplete = true;
//     // console.log(game.input.keyboard);
//     // weapon.anims.destroy();
//     // this.physics.add.existing
//     //   .sprite(player.x, player.y, 'weapon', 'Sword_UpRight-3.png')
//     //   .setSize(32, 32)
//     //   .setOffset(0, -15);
//     // weapon = new Sprite(
//     //   game.scene,
//     //   player.x,
//     //   player.y,
//     //   'weapon',
//     //   'Sword_UpRight-3.png'
//     // );
//     // }
//   }
//   // Update the animation last and give left/right animations precedence over up/down animations
//   if (cursors.space.isDown && player.body.facing === 13) {
//     player.anims.play('character-slash-left', true);
//   } else if (cursors.space.isDown && player.body.facing === 14) {
//     player.anims.play('character-slash-right', true);
//   } else if (cursors.space.isDown && player.body.facing === 11) {
//     attack();
//   } else if (cursors.space.isDown && player.body.facing === 12) {
//     player.anims.play('character-slash-down', true);
//   } else if (cursors.left.isDown) {
//     player.anims.play('character-walk-left', true);
//   } else if (cursors.right.isDown) {
//     player.anims.play('character-walk-right', true);
//   } else if (cursors.up.isDown) {
//     player.anims.play('character-walk-up', true);
//   } else if (cursors.down.isDown) {
//     player.anims.play('character-walk-down', true);
//   } else {
//     player.anims.stop();
//     // If we were moving, pick and idle frame to use
//     if (prevVelocity.x < 0)
//       player.setTexture('atlas', 'Character_Left.000.png');
//     else if (prevVelocity.x > 0)
//       player.setTexture('atlas', 'Character_Right.000.png');
//     else if (prevVelocity.y < 0)
//       player.setTexture('atlas', 'Character_Up.000.png');
//     else if (prevVelocity.y > 0)
//       player.setTexture('atlas', 'Character_Down.000.png');
//   }
// }

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
class Player {
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
      frameRate: 10,
      repeat: -1
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
      frameRate: 10,
      repeat: -1
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
      frameRate: 10,
      repeat: -1
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
      frameRate: 10,
      repeat: -1
    });
    this.sprite = scene.physics.add.sprite(x, y, 'atlas', 'Character_Down.000.png').setSize(32, 32);
    this.sprite.anims.play('character-walk-down');
    this.keys = scene.input.keyboard.createCursorKeys();
  }

  freeze() {
    this.sprite.body.moves = false;
  }

  update() {
    const keys = this.keys;
    const sprite = this.sprite;
    const speed = 300;
    const prevVelocity = sprite.body.velocity.clone();

    if (keys.left.isDown) {
      sprite.body.setVelocityX(-speed);
    } else if (keys.right.isDown) {
      sprite.body.setVelocityX(speed);
    } // Vertical movement


    if (keys.up.isDown) {
      sprite.body.setVelocityY(-speed);
    } else if (keys.down.isDown) {
      sprite.body.setVelocityY(speed);
    } // Normalize and scale the velocity so that player can't move faster along a diagonal


    sprite.body.velocity.normalize().scale(speed); // Update the animation last and give left/right animations precedence over up/down animations

    if (keys.left.isDown) {
      sprite.anims.play('character-walk-left', true);
    } else if (keys.right.isDown) {
      sprite.anims.play('character-walk-right', true);
    } else if (keys.up.isDown) {
      sprite.anims.play('character-walk-up', true);
    } else if (keys.down.isDown) {
      sprite.anims.play('character-walk-down', true);
    } else {
      sprite.anims.stop(); // If we were moving, pick and idle frame to use

      if (prevVelocity.x < 0) sprite.setTexture('atlas', 'Character_Left.000.png');else if (prevVelocity.x > 0) sprite.setTexture('atlas', 'Character_Right.000.png');else if (prevVelocity.y < 0) sprite.setTexture('atlas', 'Character_Up.000.png');else if (prevVelocity.y > 0) sprite.setTexture('atlas', 'Character_Down.000.png');
    }
  }

  destroy() {
    this.sprite.destroy();
  }

}

/***/ }),

/***/ "./src/scenes/townScene.js":
/*!*********************************!*\
  !*** ./src/scenes/townScene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TownScene; });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player.js */ "./src/player.js");

class TownScene extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image('tiles', './assets/magecity.png');
    this.load.tilemapTiledJSON('map', './assets/mage-map.json'); // this.load.atlas(
    //   'weapon',
    //   '../assets/weapon-anims.png',
    //   '../assets/weapon-anims.json'
    // );
    // An atlas is a way to pack multiple images together into one texture. I'm using it to load all
    // the player animations (walking left, walking right, etc.) in one image. For more info see:
    //  https://labs.phaser.io/view.html?src=src/animation/texture%20atlas%20animation.js
    // If you don't use an atlas, you can do the same thing with a spritesheet, see:
    //  https://labs.phaser.io/view.html?src=src/animation/single%20sprite%20sheet.js

    this.load.atlas('atlas', '../assets/player-anim.png', '../assets/player-anim.json');
  }

  create() {
    const map = this.make.tilemap({
      key: 'map'
    }); // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)

    const tileset = map.addTilesetImage('mage-tileset', 'tiles'); // Parameters: layer name (or index) from Tiled, tileset, x, y

    const belowLayer = map.createStaticLayer('Below Player', tileset, 0, 0);
    const worldLayer = map.createStaticLayer('World', tileset, 0, 0);
    const aboveLayer = map.createStaticLayer('Above Player', tileset, 0, 0);
    worldLayer.setCollisionByProperty({
      collides: true
    }); // By default, everything gets depth sorted on the screen in the order we created things. Here, we
    // want the "Above Player" layer to sit on top of the player, so we explicitly give it a depth.
    // Higher depths will sit on top of lower depth objects.

    aboveLayer.setDepth(10);
    const spawnPoint = map.findObject('Objects', obj => obj.name === 'Spawn Point');
    this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"](this, spawnPoint.x, spawnPoint.y);
    const camera = this.cameras.main; // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap

    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    camera.startFollow(this.player.sprite);
  }

  update(time, delta) {
    this.player.update();
  }

}

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tylerlangties/projects/gamedev/tuxmon-walker/src/main.js */"./src/main.js");


/***/ })

/******/ });
});
//# sourceMappingURL=app.js.map