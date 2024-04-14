import axios from 'axios';

const API_BASE_URL = 'http://localhost:3010/api/v1'; 


// Users
export const registerUser = async (name: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, { name, email, password });
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const logoutUser = async (id: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/logout/${id}`);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    console.log('Users', response.data);
    return response.data.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const uploadAvatar = async (id: string, avatar: any) => {
    try {
        const formData = new FormData();
        formData.append('avatar', avatar);
        const response = await axios.post(`${API_BASE_URL}/upload-avatar`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
    }

export const getUserById = async (id
: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${id}`);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
}

export const updateUser = async (id: string, name: string, email: string, password: string) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/update/${id}`, { name, email, password });
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/delete/${id}`);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

// Potions
export const getPotions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/potions`);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const getPotionById = async (id: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/potion/${id}`);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
