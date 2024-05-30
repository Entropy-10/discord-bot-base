# Entropy's Discord Bot Base

This is just a small personal use Discord bot base. It is designed and intended to be used with supabase. Feel free to poke around if you'd like. It has support for monitoring and styled logging. Examples may be provided in the future.

## Tech Stack

- [Typescript](https://www.typescriptlang.org): Language
- [Bun](https://bunjs.org): Runtime and Package Manager
- [Discord.js](https://discord.js.org): Discord API Wrapper
- [Supabase](https://supabase.com): Database

## Getting Started

Follow these steps to get up and running:

1. **Set Environment Variables**: Ensure you've set all environment variables.

2. **Install Dependencies**: Use Bun to install project dependencies:

   ```shell
   bun install
   ```

3. **Supabase Project ID**: Update your package.json db:types command with your project ref id from supabase:

   ```json
   {
      "scripts": {
         "db:types": "supabase gen types typescript --project-id <YOUR_PROJECT_REF_ID> src/types/database.types.ts"
      }
   }
   ```

4. **Supabase Types**: Use the supabase cli to pull the types from your project:

   ```shell
   bun db:types
   ```

5. **Push Commands to Discord**: Push the bot's commands to your Discord server:

   ```shell
   bun cmds:update
   ```

6. **Start the Bot**: Run the following command to start the bot in development mode:

   ```shell
   bun dev
   ```
