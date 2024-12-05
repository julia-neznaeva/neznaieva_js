export abstract class User {
  protected static id: number= 1000;
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  get passwordPreview(): string {
    let passwordPreview: string = this.password;
    let replacement:string = Array(this.password.length-1).join("*");
    return passwordPreview.replace(/(?<=^.)(.*)(?=.$)/, replacement);
  }

  changePassword(password: string): void {
    if (password.length >= 6) {
      this.password = password;
    } else {
      console.log("Password too short!");
    }
  }

  abstract showProfile(): void;
}
