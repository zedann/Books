export class UserRepository {
  public constructor() {}
  public getUserById(userId: string) {
    // GO FOR DATABASE LOOKUP FOR EXAMPLES
    return {
      id: userId,
      name: "Zedan Mohamed",
      countryCode: "+20",
      phoneNumber: "1012645762",
    };
  }
}
