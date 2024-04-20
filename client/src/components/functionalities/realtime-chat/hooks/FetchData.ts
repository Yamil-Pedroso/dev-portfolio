import api from "./index"

const fetchMessages = async () => {
    try {
        const response = await api.get('/messages');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching messages:", error);
        return [];
    }
};

const sendMessage = async (message: string, sender: string) => {  
    try {
        const payload = { message, sender };  
        const response = await api.post('/messages', payload);  
        console.log("Message sent successfully", response.data);
        return response.data;
    } catch (error) {
        console.error("Error sending message:", error);
    }
};

export { fetchMessages, sendMessage };
