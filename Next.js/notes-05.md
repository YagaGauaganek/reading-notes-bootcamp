# Next.js - Day five

## 9. Static/Incremental rendering: Adding a blog or news page with static rendering (also we talk about /pages & /app)

### Overview

Generate a blog or news page with a list of posts, and individual pages for those posts, using Next.js's static generation and incremental regeneration features.

### Class Outline

- Lecture: Static vs Incremental vs Dynamic Rendering
- Lab: Render a blog index and individual pages for a dynamic list of posts, compare /app and /pages

### Learning Objectives

- Understand the differences between static and dynamic rendering in Next.js and why you might use each one
- How to generate static content pages using the /app directory using `generateStaticParams`
- An understanding of how Next.js achieved this prior to Next.js 13, using `getStaticProps` and `getStaticPaths`.

### Helpful Resources

[Next.js Docs: Static and Dynamic Rendering](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic)

## 10. Dynamic rendering: Make a pageview counter for posts using Vercel KV (/pages & /app)

### Overview

Experiment with dynamic rendering. We're going to use the Vercel KV database to create a simple site-wide view counter for our website, just like the geocities days

We'll also use the patched Next.js fetch API to load data from a third-party API in a server component and think about caching that data for efficiency.

We'll also look at how we can access HTTP request headers in our server components, and configure some environment variables so we can access our database.

### Class Outline

- Lecture: Dynamic rendering. Using asyncrhonous and dynamic functions in server components.
- Lab: Build a page view counter with Vercel KV, loading github stars for your favourite repo using fetch

### Learning Objectives

- Understand dynamic rendering with server components
- Calling third party APIs from Server Components with external libraries
- Using Environment Variables in Next.js

### Helpful Resources

[Vercel KV docs](https://vercel.com/docs/storage/vercel-kv)
[Next.js Docs: Static and Dynamic Rendering](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic)  
[https://vercel.com/docs/concepts/projectsenvironment-variables](https://vercel.com/docs/concepts/projectsenvironment-variables)  
[https://nextjs.org/docs/app/building-your-application/data-fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)  
[https://nextjs.org/docs/app/building-your-application/data-fetching/fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)
