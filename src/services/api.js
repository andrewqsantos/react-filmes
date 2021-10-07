import axios from 'axios';
import { AppRegistry } from 'react-native';

// URL FILMES EM CARTAZ:
// movie/now_playing &language=pt-BR&page=1

export const key = 'e1a9b6f40b42300288416cd11d4639dd'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;