# NLW Agentes - Server

Este é o servidor backend do projeto **NLW Agentes**, desenvolvido em parceria com a **Rocketseat** durante o Next Level Week.

## 🚀 Tecnologias Utilizadas

### Core
- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação tipada
- **Fastify** - Framework web rápido e eficiente
- **Drizzle ORM** - ORM moderno para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **pgvector** - Extensão PostgreSQL para vetores

### Validação e Tipagem
- **Zod** - Validação de schemas e runtime type safety
- **fastify-type-provider-zod** - Integração Zod com Fastify

### Desenvolvimento
- **Biome** - Linter e formatter (substituindo ESLint + Prettier)
- **Ultracite** - Configuração de linting otimizada
- **Docker Compose** - Containerização do banco de dados

## 📁 Estrutura do Projeto

```
src/
├── db/
│   ├── connection.ts      # Conexão com banco de dados
│   ├── seed.ts           # Script de seed
│   ├── migrations/       # Migrações do Drizzle
│   └── schema/
│       ├── index.ts      # Exportação dos schemas
│       └── rooms.ts      # Schema da tabela rooms
├── http/
│   └── routes/
│       └── get-rooms.ts  # Rota para listar salas
├── env.ts               # Configuração de variáveis de ambiente
└── server.ts           # Arquivo principal do servidor
```

## 🛠️ Padrões de Projeto

### Arquitetura
- **Clean Architecture** - Separação clara entre camadas
- **Repository Pattern** - Abstração do acesso a dados via Drizzle ORM
- **Route-based Structure** - Organização de rotas por funcionalidade

### Configurações
- **Type Safety First** - TypeScript strict mode habilitado
- **Environment Validation** - Validação de variáveis de ambiente com Zod
- **Modern ES Modules** - Uso de ESM nativo do Node.js
- **Snake Case** - Padrão de nomenclatura para banco de dados

## ⚙️ Setup e Configuração

### Pré-requisitos
- Node.js 18+ 
- Docker e Docker Compose
- PostgreSQL (via Docker)

### 1. Clone o repositório
```bash
git clone <repository-url>
cd rocketseat-nlw-agents-server
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/nlw_agents
```

### 4. Inicie o banco de dados
```bash
docker-compose up -d
```

### 5. Execute as migrações (se necessário)
```bash
npx drizzle-kit migrate
```

### 6. Popule o banco com dados iniciais
```bash
npm run db:seed
```

### 7. Inicie o servidor

**Desenvolvimento:**
```bash
npm run dev
```

**Produção:**
```bash
npm start
```

O servidor estará disponível em `http://localhost:3333`

## 📡 Endpoints

### GET /rooms
Retorna a lista de todas as salas disponíveis.

**Resposta:**
```json
[
  {
    "id": "uuid",
    "name": "Nome da Sala"
  }
]
```

## 🧪 Testando a API

Use o arquivo `client.http` para testar os endpoints no VS Code com a extensão REST Client, ou use ferramentas como:

- **Insomnia**
- **Postman**
- **cURL**

Exemplo com cURL:
```bash
curl http://localhost:3333/rooms
```

## 🔧 Scripts Disponíveis

- `npm start` - Inicia o servidor em produção
- `npm run dev` - Inicia o servidor em modo desenvolvimento com hot reload
- `npm run db:seed` - Executa o script de seed do banco de dados

## 🐳 Docker

O projeto inclui configuração Docker para o banco de dados PostgreSQL com pgvector:

```bash
# Iniciar apenas o banco
docker-compose up -d

# Parar o banco
docker-compose down
```

## 📝 Desenvolvimento

### Linting e Formatação
O projeto usa **Biome** para linting e formatação:

```bash
# Verificar código
npx @biomejs/biome check .

# Formatar código
npx @biomejs/biome format --write .
```

### Estrutura de Dados
O banco de dados inclui uma tabela `rooms` com os campos:
- `id` (UUID, Primary Key)
- `name` (Text, Not Null)
- `description` (Text, Optional)
- `created_at` (Timestamp, Auto-generated)

## 🤝 Contribuição

Este projeto foi desenvolvido durante o NLW da Rocketseat. Para contribuições:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

---

Desenvolvido com 💜 pela **Rocketseat** durante o **Next Level Week** 