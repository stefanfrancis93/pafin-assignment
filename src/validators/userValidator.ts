import Joi from 'joi';

// Validation schema for creating a new user
export const validateUser = (data: any) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

// Validation schema for updating a user
export const validateUserUpdate = (data: any) => {
  const schema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().min(6),
  });

  return schema.validate(data);
};
