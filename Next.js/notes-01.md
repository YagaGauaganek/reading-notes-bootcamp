# Next.js - Day one

## 0. React Recap & Bare bones Next.js from scratch

### Overview

We are going to show a very basic demo of `create-react-app`. This will help show the difference between React with and without Next. For real projects we'll be using `create-next-app` by default, but it's useful to understand the simple minimalist requirements for running a Next.js project.

### Class Outline

**Demo:** Create a basic create-react-app project and making use of components.
**Demo:** Create a barebones Next.js project with app directory support on the command line in 7 simple steps.
Lab: Create your own minimalist installation.

### Learning Objectives

Understanding Componennt Based Architecture
Understanding the basic minimum components of a simple Next.js application
Configuring a new project from scratch in an empty folder.
Notes

### Helpful Resources

[Next.js Docs: Installation Guide](https://nextjs.org/docs/getting-started/installation)

## 1. Introduction to NextJS

### Overview

An introduction to Next.js. Why it exists, and where it sits within the front and back end development ecosystem.

### Class Outline

- Lecture and Discussion: Next what?

### Learning Objectives

- What is Next.js?
- Main features in Next.js
- Benefits of Next.js
- Dynamic rendering: Server-Side Rendering (SSR)
- Static rendering: Static Site Generation (SSG)
- Other competing frameworks are available

### Notes

📝 At the time of writing the new `/app` directory has been released as stable in Next.js 13.4, and Server Actions have been introduced as an experimental feature.

### Questions to consider:

- What are the key benefits of using Server-Side Rendering or Static Site Generation with Next.js instead of client-side only rendering with Create React App?
- What are the primary differences between Server Side Rendering and Static Generation? Are there any advantages to one over the other in some situations?

### Helpful Resources

[Next.js Docs: Rendering fundamentals](beta.nextjs.org/docs/rendering/- fundamentals)
[The Next.js Homepage](https://nextjs.org/)
[The Next.js Beta documenation](https://nextjs.org/docs)
[The Next.js Production documentation](https://nextjs.org/docs)

## About NextJS

The best overview of Next.js can of course be found in the [official documentation](https://github.com/Tech-Educators/nextjs-02/tree/main/class-01).

But as a brief intro:

Next.js is a JavaScript framework for building server-rendered React applications. It allows developers to easily create and build scalable React applications with a powerful development environment, automatic code splitting, and optimized performance. With Next.js, developers can improve the speed and SEO of their web applications. Additionally, Next.js offers a built-in development server, hot module replacement, and static export capabilities, making it a popular choice for building high-performance, production-ready React applications.

### Server-side Rendering (SSR)

In the beginning, the core selling point of Next.js was it's ability to enable effortless Server Side Rendering, without managing a complex webpack configuration. It was important for building search engine optimised applications.

<<< insert meme - dude looking at a blackboard of complex mathematics scratching his head, captioned: "the react build process before next.js">>>

Server rendering, also known as Universal rendering, is a technique where the initial render of a web page happens on the server, rather than in the browser. The rendered HTML is then sent to the browser, just like a traditional application, and JavaScript then takes over and the page becomes a fully interactive single-page application (SPA).

In the context of a React application, server rendering is important because it allows for improved performance, caching and better search engine optimisation (SEO). When a web page is server-rendered, the initial HTML that is sent to the browser already contains the fully rendered content, allowing the page to load faster and improving the time-to-first-paint. This can be especially important for users on slow internet connections or low-end devices. Additionally, search engines can better crawl and index server-rendered pages, resulting in improved SEO. You can properly configure page and OpenGraph metadata to ensure social network crawlers can aslo access high quality images and metasdata for embeds and shares.

### Static Site Generation

Static site generation is a technique used to build websites by pre-generating all of the HTML, CSS, and JavaScript files that make up the site. The resulting files are then deployed to a web server, where they can be served to users.

One of the main benefits of static site generation is that it allows for faster performance, since the generated files are simply served to users without the need for any server-side processing.

Another advantage is that static sites are more secure, since they don't require server-side code to be executed, and hence are not vulnerable to server-side security issues.

There are some occasions where generating many static pages of unique content is useful, and Next.js continues to support this use case in version 13.

### Other competing frameworks are available

Next.js led many innovations in React development. However, there are now a number of newer frameworks gaining attention and offering new perspectives, and in many cases bringing back a more traditional, web platform focused development approach. Front end developers have become used to working around browser differences and platform inadequacies over the years and began to lose touch with the fundamental capabilities of the platform. In 2023, the platform is more advanced and browsers are more up to date. Devices are more capable. Fundamental concepts from the earlier more fragile days of the web, such as progressive enhancement, are being revisited and promoted to a new generation of developers. Frameworks like Remix and SvelteKit each offer a unique perspective on modern web application devlopment and are worth being aware ofas you dive deep into Next.js.

SvelteKit: web development, streamlined [Svelte Kit](https://kit.svelte.dev/)

[Remix](https://remix.run/)

## 2. Creating a new Next.js Application

### Overview

Setting up a new Next.js project with create-next-app and a look at the project structure and tools that you get out of the box.

### Class Outline

- **Demo:** Run through of installation and basic project structure
- **Lab:** Start your own project, explore the structure and files

### Learning Objectives

- How to bootstrap a new Next.js app with create-next-app
- Understanding configuration options and project structure
- Default tooling: ESLint, TypeScript
- Running the local development server

### Notes

- Which default directory is new in Next.js 13?
- What's the default port of the Next.js dev server? Can it be changed? How?
- What is the purpose of ESLint and why is it useful?

### Helpful Resources

[Next.js Docs: Installation Guide](https://nextjs.org/docs/getting-started/installation)  
[ESLint](https://eslint.org/)  
[TypeScript](https://typescript.org/)

## 3. Navigation and routing

### Overview

Creating pages and linking between them using the file-system router.

### Learning Objectives

**Describe and define**

- Next page router
- Next navigation components

**Execute**

- Create Next.js client and server routing basics
- Building new web pages
- Navigate between web pages
  **Questions and challenges**
- Create a few pages and navigation links and buttons.
- Right click and view source, and notice the server rendered HTML output.

### Helpful Resources

[Next.js Docs: Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing)  
[Next.js Docs: Linking and Navigating](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)  
[Next.js Docs: Link component](https://nextjs.org/docs/app/api-reference/components/link)
