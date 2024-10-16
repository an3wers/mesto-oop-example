export interface Card {
  _id: string;
  name: string;
  link: string;
  owner: User;
  likes: User[];
  createdAt: Date | string;
}

export interface User {
  _id: string;
  name: string;
  about: string;
  avatar: string;
}

export type CardInfo = Pick<Card, "name" | "link">;
