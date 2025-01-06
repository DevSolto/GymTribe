
export type CreateUserParams = {
  name: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  gender: "MALE" | "FEMALE" | "OTHER";
  profilePictureURL: string;
  referralCode: string;
}