import type { ApiResponse } from "../interfaces/ApiResponse.js";
import type { ResponseData } from "../interfaces/ResponseData.js";

export class BaseResponse implements ApiResponse {
  constructor(
    private readonly status: string,
    private readonly statusCode: number,
    private readonly data?: any,
    private readonly error?: any
  ) {}
  getData(): ResponseData {
    return {
      status: this.status,
      statusCode: this.statusCode,
      data: this.data,
      error: this.error,
    };
  }
}
