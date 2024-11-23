
export enum UserStatus {
  PENDING="PENDING",
  IN_PROGRESS="IN_PROGRESS",
  DONE="DONE",
}

export class User {
  id: string
  title: string
  description: string
  estatus: UserStatus
}
