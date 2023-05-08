# Personal portfolio

Well this is my new portfolio page (🚧 work in progress), which is build with SvelteKit. I'm focused on turning it into a template.

Also im adding some three.js assets to make it more interesting.

## Tech stack

* [SvelteKit](https://kit.svelte.dev/)
* [Sanity](https://www.sanity.io/) (as the headless CMS)

```bash
# install deps
pnpm install

# run the dev server
pnpm dev
```

open up [localhost:3000](http://localhost:3000)

### Configuring Sanity

Actually is very easy to connect, just only inside the env file, put the project id and dataset name.

```bash
cp .env.example .env
```

```bash
# .env
VITE_SANITY_STUDIO_ID=<your project id>
VITE_SANITY_STUDIO_DATASET=<your dataset name>
```
