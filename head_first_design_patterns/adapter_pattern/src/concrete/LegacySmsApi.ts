export class LegacySmsApi {
  public dispatchText(phoneWithCountryCode: string, txt: string) {
    console.log(`[Legacy SMS] Sent to ${phoneWithCountryCode}: ${txt}`);
  }
}
