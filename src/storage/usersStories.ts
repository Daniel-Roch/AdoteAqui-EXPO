import { IUser } from "@/interfaces/IUser";
import { create } from "zustand";

interface UsersStories {
  users: IUser[];
  addUsers: (user: IUser) => void;
  login: boolean;
  validLoggin: (validLoggin: boolean) => void;
}

export const usersStore = create<UsersStories>((set) => ({
  users: [
    { name: "admin", email: "teste@gmail.com", password: "123456789" },
    { name: "admin1", email: "teste1@gmail.com", password: "123456789" },
    { name: "admin2", email: "teste2@gmail.com", password: "123456789" },
  ],
  addUsers: (user: IUser) =>
    set((state) => ({ users: [...state.users, user] })),
  login: false,
  validLoggin: (validLoggin: boolean) => set({ login: validLoggin }),
}));
