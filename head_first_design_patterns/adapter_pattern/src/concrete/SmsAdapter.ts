import { UserRepository } from "../helpers/user.repository.js";
import type { NotificationService } from "../interfaces/NotificationService.js";
import type { LegacySmsApi } from "./LegacySmsApi.js";

export class SmsAdapter implements NotificationService {
  private readonly legacySms: LegacySmsApi;
  public constructor(adaptee: LegacySmsApi) {
    this.legacySms = adaptee;
  }
  public async send(userId: string, message: string): Promise<void> {
    const userRepo = new UserRepository();
    const user = userRepo.getUserById(userId);

    const userPhone = `${user.countryCode}${user.phoneNumber}`;
    this.legacySms.dispatchText(userPhone, message);
  }
}
