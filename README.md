
|       |
|       |       | t1:g1 | t2:g1 |
|       |       |       |       |
| t3:g2 |       |       |       |       | t5:g3 |
| t4:g2 |       |       |       |       | t6:g3 |
|       |       |       |       |       |       |
|       |       | t7:g4 | t8:g4 |       |       |
|       |


-   []
-   - s1:g1
    - s2:g1
-   []
-   - ~
-   - ~
    - app1
    - app2
-   []
-   ""
    - ""
    - ""
    - ""
    - ""
    - ""


[
   [],
    [
      { text: "the server 1", group: "g1" },
      { text: "server2", group: "g1" },
    ],
    [],
    [null, { text: "app1" }, { text: "app2" }],
    [],
    [null, null, null, null, null, null, { text: "app3", group: "g2" }],
    [null, null, null, null, null, null, { text: "app4", group: "g2" }],
]

# reference

- https://www.w3schools.com/graphics/svg_intro.asp
# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
