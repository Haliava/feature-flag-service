export const createUser = async (userRepository, userData) => {
  return await userRepository.create(userData);
};

export const getAllUsers = async (userRepository) => {
  return await userRepository.findAll();
};

export const getUserById = async (userRepository, id) => {
  return await userRepository.findById(id);
};

export const updateUser = async (userRepository, id, userData) => {
  return await userRepository.update(id, userData);
};

export const deleteUser = async (userRepository, id) => {
  return await userRepository.delete(id);
};
