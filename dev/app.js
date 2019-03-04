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
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Author: Michael Hadley, mikewesthad.com
 * Asset Credits:
 *  - Tuxemon, https://github.com/Tuxemon/Tuxemon
 */
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game-container",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 0
      }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};
const game = new Phaser.Game(config);
let cursors;
let player;
let showDebug = false;

function preload() {
  this.load.image("tiles", "./assets/magecity.png");
  this.load.tilemapTiledJSON("map", "./assets/mage-map.json"); // An atlas is a way to pack multiple images together into one texture. I'm using it to load all
  // the player animations (walking left, walking right, etc.) in one image. For more info see:
  //  https://labs.phaser.io/view.html?src=src/animation/texture%20atlas%20animation.js
  // If you don't use an atlas, you can do the same thing with a spritesheet, see:
  //  https://labs.phaser.io/view.html?src=src/animation/single%20sprite%20sheet.js

  this.load.atlas("atlas", "../assets/body.png", "../assets/body.json");
}

function create() {
  const map = this.make.tilemap({
    key: "map"
  }); // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
  // Phaser's cache (i.e. the name you used in preload)

  const tileset = map.addTilesetImage("mage-tileset", "tiles"); // Parameters: layer name (or index) from Tiled, tileset, x, y

  const belowLayer = map.createStaticLayer("Below Player", tileset, 0, 0);
  const worldLayer = map.createStaticLayer("World", tileset, 0, 0);
  const aboveLayer = map.createStaticLayer("Above Player", tileset, 0, 0);
  worldLayer.setCollisionByProperty({
    collides: true
  }); // By default, everything gets depth sorted on the screen in the order we created things. Here, we
  // want the "Above Player" layer to sit on top of the player, so we explicitly give it a depth.
  // Higher depths will sit on top of lower depth objects.

  aboveLayer.setDepth(10); // Object layers in Tiled let you embed extra info into a map - like a spawn point or custom
  // collision shapes. In the tmx file, there's an object layer with a point named "Spawn Point"

  const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point"); // Create a sprite with physics enabled via the physics system. The image used for the sprite has
  // a bit of whitespace, so I'm using setSize & setOffset to control the size of the player's body.

  player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "atlas", "idle-down").setSize(32, 32); // Watch the player and worldLayer for collisions, for the duration of the scene:

  this.physics.add.collider(player, worldLayer); // Create the player's walking animations from the texture atlas. These are stored in the global
  // animation manager so any sprite can access them.

  const anims = this.anims;
  anims.create({
    key: "run-left",
    frames: anims.generateFrameNames("atlas", {
      prefix: "run-left.",
      start: 0,
      end: 4,
      zeroPad: 3
    }),
    frameRate: 12,
    repeat: -1
  });
  anims.create({
    key: "run-right",
    frames: anims.generateFrameNames("atlas", {
      prefix: "run-right.",
      start: 0,
      end: 4,
      zeroPad: 3
    }),
    frameRate: 12,
    repeat: -1
  });
  anims.create({
    key: "run-down",
    frames: anims.generateFrameNames("atlas", {
      prefix: "run-down.",
      start: 0,
      end: 4,
      zeroPad: 3
    }),
    frameRate: 12,
    repeat: -1
  });
  anims.create({
    key: "run-up",
    frames: anims.generateFrameNames("atlas", {
      prefix: "run-up.",
      start: 0,
      end: 4,
      zeroPad: 3
    }),
    frameRate: 12,
    repeat: -1
  });
  anims.create({
    key: "push-right",
    frames: anims.generateFrameNames("atlas", {
      prefix: "push-right.",
      start: 0,
      end: 1,
      zeroPad: 3
    }),
    frameRate: 12,
    repeat: -1
  });
  const camera = this.cameras.main;
  camera.startFollow(player);
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  cursors = this.input.keyboard.createCursorKeys(); // Help text that has a "fixed" position on the screen
  // Debug graphics

  this.input.keyboard.once("keydown_F", event => {
    // Turn on physics debugging to show player's hitbox
    this.physics.world.createDebugGraphic(); // Create worldLayer collision graphic above the player, but below the help text

    const graphics = this.add.graphics().setAlpha(0.75).setDepth(20);
    worldLayer.renderDebug(graphics, {
      tileColor: null,
      // Color of non-colliding tiles
      collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
      // Color of colliding tiles
      faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges

    });
  });
}

function update(time, delta) {
  let speed = 200;
  coolingDown = false;
  const prevVelocity = player.body.velocity.clone(); // Stop any previous movement from the last frame

  player.body.setVelocity(0); // Horizontal movement

  if (cursors.left.isDown) {
    if (cursors.space.isDown) {
      speed = 400;
      player.body.setVelocityX(-speed);
    }

    player.body.setVelocityX(-speed);
  } else if (cursors.right.isDown) {
    if (cursors.space.isDown) {
      speed = 400;
      player.body.setVelocityX(speed);
    }

    player.body.setVelocityX(speed);
  } // Vertical movement


  if (cursors.up.isDown) {
    if (cursors.space.isDown) {
      speed = 400;
      player.body.setVelocityY(-speed);
    }

    player.body.setVelocityY(-speed);
  } else if (cursors.down.isDown) {
    if (cursors.space.isDown) {
      speed = 400;
      player.body.setVelocityY(speed);
    }

    player.body.setVelocityY(speed);
  } // Normalize and scale the velocity so that player can't move faster along a diagonal


  player.body.velocity.normalize().scale(speed); // if (cursors.left.isDown) {
  //   player.anims.play("run-left", true);
  // } else {
  //   player.anims.stop();
  // }
  // Update the animation last and give left/right animations precedence over up/down animations

  if (cursors.left.isDown) {
    player.anims.play("run-left", true);
  } else if (cursors.right.isDown) {
    player.anims.play("run-right", true);
  } else if (cursors.up.isDown) {
    player.anims.play("run-up", true);
  } else if (cursors.down.isDown) {
    player.anims.play("run-down", true);
  } else {
    player.anims.stop();
  } //   // If we were moving, pick and idle frame to use


  if (!cursors.left.isDown && prevVelocity.x < 0) player.setTexture("atlas", "idle-left");else if (!cursors.right.isDown && prevVelocity.x > 0) player.setTexture("atlas", "idle-right");else if (!cursors.up.isDown && prevVelocity.y < 0) player.setTexture("atlas", "idle-up");else if (!cursors.down.isDown && prevVelocity.y > 0) player.setTexture("atlas", "idle-down");
}

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bill/gamedev/gladiators-phaser/src/main.js */"./src/main.js");


/***/ })

/******/ });
});
//# sourceMappingURL=app.js.map