# Контракты e2e

### запустить сервер со свагером

```bash
npx tsx src/api-contracts/RPG/startSwagger.ts
```

### сгенерировать Yaml файл

```bash
npx tsx src/api-contracts/RPG/generateYaml.ts
```

#### Что лежит в `contracts`:

- `apiTypes.ts` - типизация с валидацией через [zod](https://github.com/colinhacks/zod) вот [Дока Zod](https://zod.dev/)
- Все файлы контрактов - контракты для отдельных путей используют [ts-rest](https://github.com/ts-rest/ts-rest) вот [Дока ts-rest](https://ts-rest.com/docs/intro)

#### Что лежит в `docs`:

- Yaml файл с докементацией на АПИ
