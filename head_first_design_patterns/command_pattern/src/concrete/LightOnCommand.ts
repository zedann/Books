import type { Command } from "../interfaces/Command.js";
import type { Light } from "./Light.js";

export class LightOnCommand implements Command {
  public constructor(private readonly light: Light) {}
  execute(): void {
    this.light.on();
  }
  undo(): void {
    this.light.off();
  }
}
