import axios from 'axios';

const baseUrl = 'http://localhost:3010/api/v1';

const createPayment = async (paymentData: any) => {
    try {
        const response = await axios.post(`${baseUrl}/create-payment`, paymentData);
        return response.data;
    } catch (error) {
        console.error('Error to create payment:', error);
        return error;
    }
}

export default createPayment;