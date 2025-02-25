![BlogPessoal](https://github.com/fern-menezes/blogpessoal-react/blob/main/public/Login-blog.png)
# 📌 Blog Pessoal com React, TypeScript e Vite

Este projeto é um blog pessoal desenvolvido com **React**, **TypeScript** e **Vite**. O foco principal é a criação de uma aplicação segura e de fácil manutenção, com deploy automatizado utilizando **Vercel**.

## 🚀 Tecnologias Utilizadas

- ⚛ **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- 🦕 **TypeScript**: Superset do JavaScript que adiciona tipos estáticos.
- ⚡ **Vite**: Ferramenta de construção rápida e leve para projetos front-end.
- 🛤 **React Router DOM**: Biblioteca de roteamento para React.
- 🎨 **Tailwind CSS**: Framework utilitário de CSS para estilização.
- ▲ **Vercel**: Plataforma para deploy e hospedagem de aplicações front-end.

---

## 📂 Estrutura do Projeto

```plaintext
src/
├── components/
│   ├── navbar/
│   │   └── Navbar.tsx
│   ├── postagens/
│   │   ├── cardpostagens/
│   │   │   └── CardPostagens.tsx
│   │   ├── deletarpostagens/
│   │   │   └── DeletarPostagens.tsx
│   │   ├── formpostagens/
│   │   │   └── FormPostagem.tsx
│   │   └── listapostagens/
│   │       └── ListaPostagens.tsx
│   ├── temas/
│   │   ├── cardtemas/
│   │   │   └── CardTemas.tsx
│   │   ├── deletartemas/
│   │   │   └── DeletarTema.tsx
│   │   ├── formtemas/
│   │   │   └── FormTema.tsx
│   │   └── listatemas/
│   │       └── ListaTemas.tsx
├── pages/
│   ├── home/
│   │   └── Home.tsx
│   ├── login/
│   │   └── Login.tsx
│   └── perfil/
│       └── Perfil.tsx
├── App.tsx
├── index.tsx
└── tailwind.config.js
```

---

## 🛠 Instalação

Clone o repositório:

```sh
git clone https://github.com/fern-menezes/blogpessoal-react.git
```

Navegue até o diretório do projeto:

```sh
cd blogpessoal-react
```

Instale as dependências:

```sh
yarn install
```

---

## ⚙️ Configuração

### **TypeScript**
Certifique-se de que o arquivo **tsconfig.json** ou **tsconfig.app.json** está corretamente configurado para incluir os caminhos e módulos necessários.

---

## 🎯 Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```sh
yarn dev
```

### 📦 Build

Para criar a build de produção:

```sh
yarn build
```

---

## 🚀 Deploy

O deploy é feito automaticamente utilizando a **Vercel**. Certifique-se de que as configurações de deploy estão corretas no painel da Vercel.

---

## 🔐 Segurança

- Certifique-se de que todas as dependências estão atualizadas para evitar vulnerabilidades.
- Utilize boas práticas de segurança ao lidar com dados sensíveis e autenticação.
- Implemente **validação e sanitização de inputs** para prevenir ataques como **SQL Injection** e **XSS**.

---

## 💡 Contribuição

Se quiser contribuir com o projeto, siga os seguintes passos:

1. 🍴 **Faça um fork do projeto**
2. 🌿 Crie uma nova branch:
   ```sh
   git checkout -b feature/nova-funcionalidade
   ```
3. 📝 Commit suas mudanças:
   ```sh
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. 🚀 Faça push para a branch:
   ```sh
   git push origin feature/nova-funcionalidade
   ```
5. 🔄 Abra um **Pull Request**

---

## 📜 Licença

Este projeto está licenciado sob a **licença MIT**.

---

Feito com ❤️ por [fern-menezes](https://github.com/fern-menezes) ✨

