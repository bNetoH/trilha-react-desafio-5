import { api } from '../services/api';

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 
    if(data){
        return data;
    }
    return []
}

export const getPostBySlug = async (id) => {
 try {
    const { data } = await api.get(`/post?id=eq.${id}`);
    return data.length ? data[0] : {};
  } catch (error) {
    console.error('Erro ao tentar recuperar o conteúdo do post:', error);
    throw new Error('Falha ao tentar obter post');
  }
}