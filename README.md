# SlackLille Website


## Installation

The website is built using Sveltekit: https://svelte.dev/docs/kit/introduction

Even if the resulting website is a static website, you'll need NodeJS and git installed on your machine to build it.

```bash
# clone the repo
git clone git@github.com:0gust1/slacklille-website.git
# go in the repo dir
cd slacklille-website
# install dependencies
npm install 

# either: 

# launch in dev mode
npm run dev

# build the website (in build/ dir)
npm run build

```

## Developing, previewing content

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Most of the content of the website is in `.md` files (Markdown syntax), in `src/routes/content.md` and `src/routes/ressources/content.md`

## Building

To create a production version of the website:

```bash
npm run build
```
The final files will be generated in the `build/` folder.

You can preview the production build with `npm run preview`.

Once you are satisfied with the result, upload the content of the `build/` folder to your hosting provider.



