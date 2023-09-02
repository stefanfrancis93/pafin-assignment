import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const userService = {
  createUser: async (name: string, email: string, password: string) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return newUser;
  },

  getAllUsers: async () => {
    const users = await prisma.user.findMany();

    return users;
  },

  getUserById: async (userId: number) => {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    return user;
  },

  updateUser: async (
    userId: number,
    name: string,
    email: string,
    password: string
  ) => {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { name, email, password },
    });

    return updatedUser;
  },

  deleteUser: async (userId: number) => {
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });

    return deletedUser;
  },
};
