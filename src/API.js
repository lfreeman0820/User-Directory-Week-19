import axios from 'axios';

export const getUsers = num => axios.get(`https://randomuser.me/api/?nat=us&results=${num}`);