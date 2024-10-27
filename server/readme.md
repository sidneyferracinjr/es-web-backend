## Este projeto demonstra a criação de rotas usando o framework Express em Node.js. Ele inclui três funcionalidades principais:

- Duas rotas com links entre elas.
- Uma rota que inverte um texto recebido por parâmetro de consulta (query).
- Uma rota que valida um usuário e senha recebidos via POST.

## Pré-requisitos

- Node.js instalado
- npm (Node Package Manager) instalado

## Instalação

Clone o repositório:

```bash
git clone <URL-do-repositorio>
```

Instale as dependências:

```bash
npm install
```

## Uso

Inicie o servidor:

```bash
npm start
```

Acesse as rotas no navegador ou use ferramentas como Postman ou cURL para testar as funcionalidades.

## Rotas

### Rota 1

- **URL:** `/rota1`
- **Método:** `GET`
- **Descrição:** Exibe um link para a Rota 2.

### Rota 2

- **URL:** `/rota2`
- **Método:** `GET`
- **Descrição:** Exibe um link para a Rota 1.

### Rota para Inverter Texto

- **URL:** `/inverter`
- **Método:** `GET`
- **Parâmetro de Consulta:** `texto`
- **Descrição:** Recebe um texto por parâmetro de consulta e exibe o texto invertido.
- **Exemplo:** `http://localhost:3000/inverter?texto=exemplo`

### Rota para Validar Usuário e Senha

- **URL:** `/validar`
- **Método:** `POST`
- **Corpo da Requisição:**
    ```json
    {
        "usuario": "string",
        "senha": "string"
    }
    ```
- **Descrição:** Recebe usuario e senha via POST e valida se a senha é duas vezes o nome do usuário. Exibe uma mensagem de acordo com a validação.
- **Exemplo de Requisição usando cURL:**
    ```bash
    curl -X POST http://localhost:3000/validar -H "Content-Type: application/json" -d '{"usuario":"nome","senha":"nomenome"}'
    ```

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
