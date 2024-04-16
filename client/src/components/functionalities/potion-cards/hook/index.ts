import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { UserContext } from '../providers/UserProvider';
import { PotionContext } from '../providers/PotionProvider';

import { setItemsInLocalStorage, getItemsFromLocalStorage, removeItemFromLocalStorage} from '../utils';

const API_BASE_URL = 'http://localhost:3010/api/v1';


// User context
interface User {
    name: string;
    email: string;
    password: string;
    _id: string;
    avatar: string;
}

export const useAuth = () => {
    return useContext(UserContext)
}

export const useProvideAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    console.log('User logged', user);

    useEffect(() => {
        const storedUser = getItemsFromLocalStorage('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false)
    }, [])

    const register = async (formData: any) => {
        const { name, email, password, avatar } = formData;
        const form = new FormData() as any;
        form.append('name', name);
        form.append('email', email);
        form.append('password', password);
        if (avatar) form.append('avatar', avatar);

        try {
            const{ data }= await axios.post(`${API_BASE_URL}/register`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if(data.user && data.token) {
                setItemsInLocalStorage('user', JSON.stringify(data.user));
                setItemsInLocalStorage('token', data.token);
                setUser(data.user);
            }

            return { success: true, message: 'User registered successfully' };
        } catch (error: any) {
            const { message } = error.response.data
            return { success: false, message }
        }
    }

    const getUsers = async () => {
        try {
            const { data } = await axios.get(`${API_BASE_URL}/users`);
            console.log('Users', data.data);
            return data.data;
        } catch (error: any) {
            console.log(error);
        }
    }


    const login = async (formData: any) => {
        const { email, password } = formData;
        try {
            const { data } = await axios.post(`${API_BASE_URL}/login`, { email, password });
            if(data.user && data.token) {
                setItemsInLocalStorage('user', JSON.stringify(data.user));
                setItemsInLocalStorage('token', data.token);
                setUser(data.user);
            }
            return { success: true, message: 'User logged in successfully' };
        } catch (error: any) {
            const { message } = error.response.data
            return { success: false, message }
        }
    }

    const logout = async () => {
        try {
            const { data } = await axios.get(`${API_BASE_URL}/logout`);
            if (data.success) {
                console.log('Data', data.success);
                setUser(null);
                removeItemFromLocalStorage('user');
                removeItemFromLocalStorage('token');
                console.log('Logout successful');
                return { success: true, message: 'Logged out successfully' }
            } else {
                console.log('Logout failed:', data.message);
                return { success: false, message: data.message || 'Failed to logout' }
            }
        } catch (error: any) {
            console.log('Error during logout:', error.response?.data?.message || error.message);
            return { success: false, message: error.response?.data?.message || 'Error logging out' }
        }
    }


    const uploadAvatar = async (avatar: any) => {


        try {
            const formData = new FormData()
            formData.append('avatar', avatar)
            const { data } = await axios.post('/upload-avatar', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })

            //const updatedUserInfo = await updateUser({ avatar: data.url } , user._id);

            // Actualiza el estado del usuario en el frontend si es necesario
            //setUser(updatedUserInfo.user);

            console.log(data.data)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const updateUser = async (formData:any, id: string) => {
        try {
            const { data } = await axios.put(`${API_BASE_URL}/user/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            if (data.success) {
                setItemsInLocalStorage('user', JSON.stringify(data.user));
                setUser(data.user);
                console.log('User updated successfully', data.data);
                return { success: true, message: 'User updated successfully', user: data.user };
            } else {
                return { success: false, message: 'Error updating user' };
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsers();
    }
    , [])

    return {
        user,
        getUsers,
        setUser,
        loading,
        register,
        login,
        logout,
        uploadAvatar,
        updateUser
    }
}

// Potion context
interface Potion {
    _id?: string;
    owner?: string;
    name: string;
    description: string;
    image: string;
    category: string;
    price: number;
}

export const usePotions = () => {
    return useContext(PotionContext)
}

export const useProvidePotions = () => {
    const [potions, setPotions] = useState<Potion[]>([]);
    const [loading, setLoading] = useState(true);

    console.log('Potions', potions);

    useEffect(() => {
        const storedPotions = getItemsFromLocalStorage('potions');
        if (storedPotions) {
            setPotions(JSON.parse(storedPotions));
        }
        setLoading(false)
    }, [])

    
    const addPotion = async (potion: Potion) => {
        try {
            const { data } = await axios.post(`${API_BASE_URL}/add-potion`, potion, {
                headers: {
                    Authorization: `Bearer ${getItemsFromLocalStorage('token')}`,
                },
            });

            if (data && data.data) {
                setPotions(prevPotions => [...prevPotions, data.data]);
                setItemsInLocalStorage('potions', JSON.stringify([...potions, data.data]));
                return { success: true, message: 'Potion added successfully' };
            }
        } catch (error: any) {
            console.error('Error adding potion:', error);
            return { success: false, message: error.message || 'Failed to add potion' };
        }
    };

    const getUserPotions = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/user-potions`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log('User Potions', response.data.data);
            return { success: true, data: response.data.data, message: 'User Potions fetched successfully' };
        } catch (error) {
            console.error('Failed to fetch user potions:', error);
            return { success: false, message: 'Failed to fetch potions' };
        }
    }
    
    const getAllPotions = async () => {
        try {
            const { data } = await axios.get(`${API_BASE_URL}/all-potions`);
            console.log('Potions', data.data.slice(0, 5));
            setPotions(data.data.slice(0, 10));
            setItemsInLocalStorage('potions', JSON.stringify(data.data));

            return { success: true, message: 'Potions fetched successfully' };
        } catch (error: any) {
            console.log(error);
        }
    }

    const deletePotion = async (_id: Potion) => {
        try {
            const { data } = await axios.delete(`${API_BASE_URL}/delete-potion/${_id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log('Potion deleted:', data);
            return { success: true, message: 'Potion deleted successfully' };
        } catch (error: any) {
            console.error('Failed to delete potion:', error);
            return { success: false, message: 'Failed to delete potion' };
        }
    }

    useEffect(() => {
        getAllPotions();
    }
    , [])

    return {
        potions,
        getAllPotions,
        getUserPotions,
        addPotion,
        deletePotion,
        loading
    }
}