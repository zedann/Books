import type { ResponseData } from "../interfaces/ResponseData.js";
import { ResponseDecorator } from "../interfaces/ResponseDecorator.js";

export class TimestampDecorator extends ResponseDecorator {
  getData(): ResponseData {
    const originalResponse = this.apiResponse.getData();
    return {
      ...originalResponse,
      data: {
        ...originalResponse,
        timestamp: new Date().toISOString(),
      },
    };
  }
}
