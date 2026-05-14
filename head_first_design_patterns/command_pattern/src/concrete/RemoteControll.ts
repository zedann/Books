import type { Command } from "../interfaces/Command.js";

export class RemoteControll {
  private historyQueue: Command[] = [];

  public submit(command: Command): void {
    command.execute();
    this.historyQueue.push(command);
  }

  undoLast(): void {
    const command = this.historyQueue.pop();
    if(command)
        command.undo()
  }
}
