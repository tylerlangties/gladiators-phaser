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
/* harmony import */ var _scenes_BootScene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/BootScene.js */ "./src/scenes/BootScene.js");
/* harmony import */ var _scenes_TitleScene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/TitleScene.js */ "./src/scenes/TitleScene.js");
/* harmony import */ var _scenes_TownScene_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/TownScene.js */ "./src/scenes/TownScene.js");



const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game-container",
  pixelArt: true,
  scene: [_scenes_BootScene_js__WEBPACK_IMPORTED_MODULE_0__["default"], _scenes_TitleScene_js__WEBPACK_IMPORTED_MODULE_1__["default"], _scenes_TownScene_js__WEBPACK_IMPORTED_MODULE_2__["default"]],
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 0
      }
    }
  }
};
const game = new Phaser.Game(config);

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
    this.sprite.body.setVelocity(0);
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
    sprite.body.setVelocity(0);

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

/***/ "./src/scenes/BootScene.js":
/*!*********************************!*\
  !*** ./src/scenes/BootScene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: "BootScene"
    });
  }

  preload() {
    const progress = this.add.graphics(); // Register a load progress event to show a load bar

    this.load.on("progress", value => {
      progress.clear();
      progress.fillStyle(0xffffff, 1);
      progress.fillRect(0, this.sys.game.config.height / 2, this.sys.game.config.width * value, 60);
    }); // Register a load complete event to launch the title screen when all files are loaded

    this.load.on("complete", () => {
      // prepare all animations, defined in a separate file
      progress.destroy();
      console.log("complete");
      this.scene.start("TitleScene");
    });
    this.load.image("tiles", "./assets/magecity.png");
    this.load.tilemapTiledJSON("map", "./assets/mage-map.json");
    this.load.atlas("atlas", "../assets/player-anim.png", "../assets/player-anim.json");
    this.load.bitmapFont("font", "assets/fonts/font.png", "assets/fonts/font.fnt");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BootScene);

/***/ }),

/***/ "./src/scenes/TitleScene.js":
/*!**********************************!*\
  !*** ./src/scenes/TitleScene.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class TitleScene extends Phaser.Scene {
  constructor() {
    super({
      key: "TitleScene"
    });
  }

  preload() {}

  create() {
    this.scene.bringToTop();
    this.registry.set("restartScene", false);
    this.registry.set("attractMode", true);
    this.title = this.add.bitmapText(360, 250, "font", "GLADIATORS", 8);
    this.pressX = this.add.bitmapText(338, 265, "font", "PRESS X TO START", 8);
    this.blink = 1000;
    this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
  }

  update(time, delta) {
    if (this.registry.get("restartScene")) {
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
    this.scene.stop("TownScene");
    this.scene.start("TownScene");
  }

  restartScene() {
    this.scene.stop("TownScene");
    this.scene.launch("TownScene");
    this.scene.bringToTop();
    this.registry.set("restartScene", false);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TitleScene);

/***/ }),

/***/ "./src/scenes/TownScene.js":
/*!*********************************!*\
  !*** ./src/scenes/TownScene.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TownScene; });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player.js */ "./src/player.js");

class TownScene extends Phaser.Scene {
  constructor() {
    super({
      key: "TownScene"
    });
  }

  preload() {}

  create() {
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

    aboveLayer.setDepth(10);
    const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");
    this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"](this, spawnPoint.x, spawnPoint.y);
    this.physics.add.collider(this.player.sprite, worldLayer);
    const camera = this.cameras.main; // Debug graphics

    this.input.keyboard.once("keydown_F", event => {
      // Turn on physics debugging to show player's hitbox
      this.physics.world.createDebugGraphic();
      console.log(this.player, worldLayer); // Create worldLayer collision graphic above the player, but below the help text

      const graphics = this.add.graphics().setAlpha(0.75).setDepth(20);
      worldLayer.renderDebug(graphics, {
        tileColor: null,
        // Color of non-colliding tiles
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
        // Color of colliding tiles
        faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges

      });
    }); // Create HUD

    this.createHUD(); // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap

    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    camera.startFollow(this.player.sprite);
  }

  update(time, delta) {
    this.player.update();
  }

  createHUD() {
    var rect = new Phaser.Geom.Rectangle(5, 5, 58, 28);
    var graphics = this.add.graphics({
      fillStyle: {
        color: 0x0000ff,
        alpha: 0.35
      }
    });
    graphics.fillRectShape(rect);
    graphics.setScrollFactor(0, 0);
    const hud = this.add.bitmapText(10, 10, "font", "HEALTH", 8);
    hud.setScrollFactor(0, 0);
    this.health = {
      pts: 0,
      textObject: this.add.bitmapText(10, 20, "font", "100", 8)
    };
    this.health.textObject.setScrollFactor(0, 0);
  }

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