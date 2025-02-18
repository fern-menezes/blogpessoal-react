import axios from "axios";

const api = axios.create({
    baseURL: 'https://blogpessoal-cxvw.onrender.com'
});

export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function ) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

export const login = async(url: string, dados: Object, setDados: Function ) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

// Adicionando a função consultar
export const consultar = async(url: string, setDados: Function ) => {
    try {
        const resposta = await api.get(url);
        setDados(resposta.data);
    } catch (error) {
        console.error('Erro na consulta:', error);
        throw error;
    }
};
export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}
