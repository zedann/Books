import { ResponseDecorator } from "../interfaces/ResponseDecorator.js";

export class VersionDecorator extends ResponseDecorator {
  getData() {
    const originalResponse = this.apiResponse.getData();

    return {
      ...originalResponse,
      verison: "v1",
    };
  }
}
