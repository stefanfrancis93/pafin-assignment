import { Request, Response } from "express";
import { validateUser, validateUserUpdate } from "../validators/userValidator";
import { userService } from "../services/user.service";
import { UserRequestData, UserResponseData, UserIdParams } from "../types/user";

export const createUser = async (
  req: Request<{}, {}, UserRequestData>,
  res: Response<UserResponseData | ErrorResponse>
) => {
  try {
    const { name, email, password } = req.body;
    const { error } = validateUser(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const newUser = await userService.createUser(name, email, password);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
};

export const getAllUsers = async (
  _req: Request,
  res: Response<UserResponseData[] | ErrorResponse>
) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving users.' });
  }
};

export const getUserById = async (
  req: Request<UserIdParams>,
  res: Response<UserResponseData | ErrorResponse>
) => {
  try {
    const userId = parseInt(req.params.id, 10);
    const user = await userService.getUserById(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving the user with id ${parseInt(req.params.id, 10)}.` });
  }
};

export const updateUser = async (
  req: Request<UserIdParams, {}, UserRequestData>,
  res: Response<UserResponseData | ErrorResponse>
) => {
  try {
    const userId = parseInt(req.params.id, 10);
    const { name, email, password } = req.body;
    const { error } = validateUserUpdate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const updatedUser = await userService.updateUser(userId, name, email, password);

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the user.' });
  }
};

export const deleteUser = async (
  req: Request<UserIdParams>,
  res: Response<UserResponseData | ErrorResponse>
) => {
  try {
    const userId = parseInt(req.params.id, 10);
    const deletedUser = await userService.deleteUser(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
};
