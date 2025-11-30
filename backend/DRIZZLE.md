# Drizzle ORM - Guia de Uso

## Configuração Inicial

1. **Configure as variáveis de ambiente:**
   - Copie `.env.example` para `.env`
   - Atualize a `DATABASE_URL` com suas credenciais do PostgreSQL

```bash
cp .env.example .env
```

2. **Certifique-se de que o PostgreSQL está rodando**

## Scripts Disponíveis

### Gerar Migrações
Gera arquivos de migração baseados no schema:
```bash
npm run db:generate
```

### Aplicar Migrações
Aplica as migrações pendentes no banco de dados:
```bash
npm run db:migrate
```

### Push Schema (Development)
Sincroniza o schema diretamente com o banco (útil para desenvolvimento):
```bash
npm run db:push
```

### Drizzle Studio
Abre uma interface visual para gerenciar o banco de dados:
```bash
npm run db:studio
```

## Estrutura de Arquivos

- `src/db/schema.ts` - Define as tabelas do banco de dados
- `src/db/index.ts` - Configuração da conexão com o banco
- `drizzle.config.ts` - Configuração do Drizzle Kit
- `drizzle/` - Pasta com as migrações geradas (não commitada)

## Exemplo de Uso

### Importar o banco de dados
```typescript
import { db } from '@db/index.js';
import { users, books } from '@db/schema.js';
```

### Inserir dados
```typescript
await db.insert(users).values({
  name: 'João Silva',
  email: 'joao@example.com',
});
```

### Consultar dados
```typescript
const allUsers = await db.select().from(users);
```

### Atualizar dados
```typescript
await db.update(users)
  .set({ name: 'João Santos' })
  .where(eq(users.id, 1));
```

### Deletar dados
```typescript
await db.delete(users).where(eq(users.id, 1));
```

## Documentação Oficial

Para mais informações, consulte a [documentação oficial do Drizzle ORM](https://orm.drizzle.team/docs/get-started-postgresql).
