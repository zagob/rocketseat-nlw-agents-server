import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connection.ts'
import { schema } from './schema/index.ts'

await reset(db, schema)

await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 20,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
      with: {
        questions: 5
      }
    },
  }
})

await sql.end()

// biome-ignore lint/suspicious/noConsole: only used in development
console.log('Database reset and seeded successfully.')
