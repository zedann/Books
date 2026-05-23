export interface NotificationService {
  send: (userId: string, message: string) => Promise<void>;
}
