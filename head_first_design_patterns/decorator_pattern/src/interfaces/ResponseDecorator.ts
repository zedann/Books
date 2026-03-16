import type { ApiResponse } from "./ApiResponse.js";
import type { ResponseData } from "./ResponseData.js";

export abstract class ResponseDecorator implements ApiResponse {
  constructor(protected apiResponse: ApiResponse) {}
  abstract getData(): ResponseData;
}
