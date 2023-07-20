import axios from 'axios';
import Config from './config';
import Utils from '../utils/utils';

const axiosInstance = axios.create({
    baseURL: Config.BASE_URL,
    timeout: 2800,
    headers: {
        'Content-Type': 'application/json',
    },
});

const token = Utils.getUserToken(Config.USER_TOKEN_KEY);

export const getStories = async () => {
    const response = await axiosInstance.get('/stories', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.listStory;
};

export const postStory = async ({ storyImage, description }) => {
    try {
        const formData = new FormData();
        formData.append('photo', storyImage);
        formData.append('description', description);

        const response = await axiosInstance.post('/stories', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
};

export default axiosInstance;
