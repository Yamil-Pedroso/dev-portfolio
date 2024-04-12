import axios from "axios";
const baseUrl = "http://localhost:8080/api/v1";

export const userFetch = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data } = await axios.get(`${baseUrl}/users`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
 };

export const userRegister = async (name: string, email: string, password: string) => {
    try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data } = await axios.post(`${baseUrl}/register`, {name, email, password});
    console.log("Autenticacion desde el backend",data);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
    } catch (error) {
        console.log(error);
    }
};

export const userLogin = async (name: string, email: string, password: string) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { data } = await axios.post(`${baseUrl}/login`, {name, email, password});
        console.log("Autenticacion desde el backend",data);
        localStorage.setItem("user", JSON.stringify(data));
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return data;
    } catch (error) {
        console.log(error);
    }
};


export const logoutUser = async (id: string) => {
    try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data } = await axios.get(`${baseUrl}/logout/${id}`);
    if (data) {
        localStorage.removeItem("id");
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data;
    } catch (error) {
        console.log(error);
    }
}
 