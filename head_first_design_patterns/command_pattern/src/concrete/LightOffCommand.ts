import type { Command } from "../interfaces/Command.js";
import type { Light } from "./Light.js";

export class LightOffCommand implements Command {
  public constructor(private readonly light: Light) {}
  execute(): void {
    this.light.off();
  }
  undo(): void {
    this.light.on();
  }
}
