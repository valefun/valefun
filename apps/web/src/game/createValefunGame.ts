import * as Phaser from "phaser";

class ValleyScene extends Phaser.Scene {
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  private player?: Phaser.GameObjects.Rectangle;

  constructor() {
    super("valley");
  }

  create() {
    const { width, height } = this.scale;
    this.add.rectangle(width / 2, height / 2, width, height, 0x88c070);
    this.add.rectangle(width / 2, height - 90, width, 180, 0x6b4a2f);
    this.add.rectangle(width - 170, height / 2, 140, height, 0x4aa3df).setAlpha(0.9);
    this.add.rectangle(155, 120, 230, 130, 0x8b5e34);
    this.add.text(46, 54, "Residential Zone", { color: "#ffffff", fontSize: "18px" });
    this.add.text(width - 230, 40, "River", { color: "#ffffff", fontSize: "18px" });
    this.add.text(60, height - 160, "Farming Zone", { color: "#ffffff", fontSize: "18px" });
    this.add.text(width / 2 - 118, 24, "VALEFUN WEB ONBOARDING MVP", { color: "#ffd166", fontSize: "24px", fontStyle: "bold" });

    for (let x = 60; x < width - 280; x += 64) {
      for (let y = height - 140; y < height - 40; y += 42) {
        this.add.rectangle(x, y, 48, 28, 0x7b4f2a).setStrokeStyle(1, 0x2f1c10);
      }
    }

    this.player = this.add.rectangle(width / 2, height / 2, 28, 34, 0x66d9ff).setStrokeStyle(2, 0x1b1b1b);
    this.cursors = this.input.keyboard?.createCursorKeys();
  }

  update(_time: number, delta: number) {
    if (!this.player || !this.cursors) return;
    const speed = 180 * (delta / 1000);
    if (this.cursors.left.isDown) this.player.x -= speed;
    if (this.cursors.right.isDown) this.player.x += speed;
    if (this.cursors.up.isDown) this.player.y -= speed;
    if (this.cursors.down.isDown) this.player.y += speed;
  }
}

export function createValefunGame(parent: HTMLElement) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    width: 1024,
    height: 576,
    backgroundColor: "#101827",
    pixelArt: true,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [ValleyScene],
  });
}
