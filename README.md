# Task Management API — Estudo NestJS + TypeORM

Projeto de estudo e exemplificação de uma API REST construída com NestJS e TypeORM.

Resumo
- Propósito: exercitar conceitos do NestJS (controllers, services, modules, pipes) e integração com banco via TypeORM.
- Tecnologias: Node.js, NestJS, TypeScript, TypeORM, Class-Validator, PostgreSQL (exemplo).

Estrutura principal
- `src/` — código-fonte do aplicativo
  - `task/` — controller, service e DTOs das tarefas
  - `users/` — módulos e serviços de usuário
  - `auth/` — autenticação (guard, controller, DTOs)
  - `db/` — entidades e migrations do TypeORM
- `docker-compose.yml` — composição (opcional) para banco
- `migrations/` — migrations geradas pelo TypeORM

Funcionalidades
- CRUD de Tasks
- Validação de payloads com `class-validator`
- Autenticação básica via `AuthGuard` (exemplo)
- Filtro de listagem (query params)

Pré-requisitos
- Node.js (v16+ recomendado)
- npm ou yarn
- PostgreSQL (local ou via Docker)

Instalação (PowerShell)

1. Instalar dependências

  npm install

2. Configurar variáveis de ambiente

  Copie um arquivo `.env` a partir de um exemplo (se existir) e ajuste as credenciais do banco (host, port, username, password, database). O projeto usa TypeORM — ver `src/db/typeOrm.migration-config.ts` para as chaves esperadas.

3. Rodar banco via Docker (opcional)

  docker-compose up -d

4. Rodar migrations (se houver script no package.json)

  npm run typeorm:migrate

5. Iniciar em modo de desenvolvimento

  npm run start:dev

Como usar
- Endpoints estão sob a rota `/task` (ver `src/task/task.controller.ts`).
- Requisições protegidas esperam passar pelo `AuthGuard` — veja `src/auth`.
- Para atualizar parcialmente recursos, use o endpoint PUT com o DTO de update que aceita campos opcionais.

Boas práticas / observações
- O projeto é didático: adapte as validações, tratamento de erros e regras de autenticação para produção.
- Prefira `PATCH` para atualizações parciais em APIs REST ou garanta que o DTO de update aceite campos opcionais.

Contribuição
- Projetado como material de estudo. Pull-requests são bem-vindos para correções e melhorias.

Licença
- Uso livre para estudo.

Contato
- Projeto exemplo — sem suporte formal.
