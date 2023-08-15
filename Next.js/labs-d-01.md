# Lab Day 01

## Lab 00

Usually, bootstrapping a Next.js project will be done using the create-next-app command. This configures various tools including tailwind and ESLint for a smoother development experience.

It's still interesting to understand how simple a basic Next.js project can be. This is useful for creating simple and minimalist code examples.

⛳️ Exercise: create a bare bones Next.js project from scratch

1. Create a new direcotry called `next-barebones` and `run cd next-barebones`
2. Initialise an npm project to install dependencies: `npm init -y`
3. Install Next, React and React DOM (because we're in the browser) `npm install next react react-dom`
4. Add the launch script `"dev": "next dev"` to scripts section in `package.json`. Now you can `run npm run dev` in a moment.
5. Make the `/app` directory: `mkdir app`
   Create the file for the homepage: touch `app/page.tsx` and add the following:
   export default function HomePage() {
   return <div>Hello, world!</div>
   }
6. Run the development server: `npm run dev`
   `Next will start up and configure Typescript for your project, if you use the`.tsx.jsx` extension it will not install TypeScript.

## Lab 02

**note:** We assume you have a recent version of Node.js installed (at time of writing we're using v18.12.0 LTS) and we'll stick to using the default `npm` for package management and running scripts.

### ⛳️ Exercise: create your app

Similar to the `create-react-app` command, Next.js maintains `create-next-app` which bootstraps a new Next.js application with sensible defaults. You can run the command to create a new Next.js 13 application like this:

`npx create-next-app@latest`

**You will be prompted to:**

- enter a name for your project
- choose to use TypeScript or not (we will use it for this example)
- ESLint (yes)
- Tailwind (yes)
- src directory (yes)
- use /app router (yes)
- customise default import alias (no)
  This will install the dependencies and set up the project ready for development.

Change into the project directory with the `cd my-project` command.

Open your new project folder in your code editor. (You might be able to type `code .` in your terminal if you use VSCode.)

You can then immediately run the Next.js development server with the command `npm run dev`.

Visit `http://localhost:3000` in your browser to see your brand new, server-rendered Next.js 13 application.

The top level `app/page.tsx` file contains the HTML content for the Next.js 13 default index page you see in your browser.

You can edit this content in real-time and see the changes reflected instantly in your browser.

**To do:**

- Edit the layout.tsx so there is a header and a footer on the page
- Edit the page.tsx so the content is telling us about yourself
- **STRETCH:** play around with the Tailwind classes to see if you can make it look good (no css in a csss file please) Tailwind Docs
  **⚠️ warning:** there have been some bugs with auto-refreshing in Firefox, so if you run into any issues where it won't reload, try a different browser.

## Lab 03

### Server-side navigation

When you make a direct request to the server, the server fetches any necessary data, and sends HTML fully populated with the page content over the network. When a user clicks a link to another page, another request is made to the server and a different page of fully populated HTML is delivered over the network.

### Client-side navigation

When you make a direct request to the server, an empty shell of an HTML document is delivered, with a JavaScript bundle which bootstraps the application, optionally requests some remote data from an API, and injects the resulting HTML into the page. When a user clicks a link to another page, the client may be able to navigate instantly as the content could already be available in the application, although server API requests may still needed to fetch new data to display.

**⛳️ Exercise:** creating pages and navigating between them.
Creating pages.

Call it what you like, but `/about` will make it easier to follow the rest of this guide.

We make a folder called `about` inside the `/app` directory. Inside there we'll create an empty file called `page.tsx`. So it's final location is `/app/about/page.tsx`.

Then we'll return a simple default React component containing "hello, world!".

    export default function AboutRoute() {
    return <p>hello, about page world!</p>
    }

Create this file and then attempt to visit `http://localhost:3000/about` in your browser. Create another page, by making another folder and another `page.tsx` file.

Add links to these pages in the root layout at `/app/layout`.tsx file or in a Header component. Click around the pages to get a feel for how it feels to switch between pages.

**Next up:**

- Make sure your header and footer are in components
- Add at least 3 new pages
- Add at least one new layout.tsx within one of those pages
