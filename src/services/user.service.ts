import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

    // Removing password from response
    const { password: _password, ...newUserWithoutPassword } = newUser;

    const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return {
      ...newUserWithoutPassword,
      token,
    };
  },

  getAllUsers: async () => {
    const users = await prisma.user.findMany({
      select: {
        password: false,
      },
    });

    return users;
  },

  getUserById: async (userId: number) => {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        password: false,
      },
    });

    return user;
  },

  updateUser: async (
    userId: number,
    name: string,
    email: string,
    password: string
  ) => {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
        email,
        password,
      },
      select: {
        password: false,
      },
    });

    return updatedUser;
  },

  deleteUser: async (userId: number) => {
    const deletedUser = await prisma.user.delete({
      where: {
        id: userId,
      },
      select: {
        password: false,
      },
    });

    return deletedUser;
  },
};
