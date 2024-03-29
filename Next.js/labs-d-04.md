# Lab Day 04

## 8. Deploying a walking Skeleton

A walking skeleton is a minimal implementation of the core functionality of a software system that is used to demonstrate the overall architecture and design of the system.

The main goal of a walking skeleton is to deploy early and often, which allows for the validation of the entire infrastructure, including any external dependencies and integration points, as well as the software itself.

It's better to test the system end to end as early as possible to validate assumptions and avoid running into complicated issues at the end of a project.

Modern hosting companies like Vercel and Netlify streamline the deployment of your projects by implementing tightly with git and Github.

By commiting the changes to your project to a free Github account, and connecting your Github to a free Vercel account you can easily set up your own continuous integration process.

**⛳️ Exercise: set up Github / Vercel**
Deploy the app.

1. Create a new project on Vercel: Go to the Vercel website and sign up or log in to your account. Then, create a new project by clicking on the "New Project" button.

2. Connect to Github: In the project settings, you will be prompted to connect to your Github account. Follow the prompts to connect your Github account to Vercel.

3. Import your Next.js app: Once your Github account is connected, you will be prompted to import your Next.js app. Select the repository that contains your Next.js app and click the "Import" button.

4. Configure the project settings: In the project settings, you can configure the build settings, environment variables, and other options for your Next.js app. To begin with, the defaults should be fine.

5. Deploy the app: Once you have configured your project settings, you can deploy your Next.js app by clicking the "Deploy" button. This will trigger a build and deploy process on Vercel, which will take a few minutes to complete.

6. Verify the deployment: Once the deployment is complete, you will be given a URL to access your Next.js app. Verify that the app is working as expected by visiting the URL.

**⛳️ Exercise 2: Start of the Blog Project**
Now that you've got the skeleton, you can get a head start on the blog before tomorrow:

You should aim to have:

- A home page explaining what your blog is
- A `/blog` page that shows a list of posts (just hard code these for now with lorem content)
- A `[slug]` dynamic route segment to show for each individual post

### 9. Building a blog or news section

To demonstrate how to render a list of posts, we'll start with a simple JS object containing an array of posts.

### Generating some posts to render

    // /lib/posts.ts
    const POSTS = [
    {
        id: 1,
        title: "My firstpost",
        slug: "my-first-post",
        content: "This is my first ever post!",
        date: "2023-01-01 18:00:00.000",
    },
    {
        id: 2,
        title: "My second post",
        slug: "my-second-post",
        content: "This is my second ever post!",
        date: "2023-01-02 18:00:00.000",
    },
    {
        id: 3,
        title: "My third post",
        slug: "my-third-post",
        content: "This is my thirdever post!",
        date: "2023-01-03 18:00:00.000",
    },
    ];

    export function getPosts() {
    return POSTS;
    }

    export function getPostById(postId: number) {
    return getPosts().find((post) => post.id === postId);
    }

    export function getPostBySlug(slug: string) {
    return getPosts().find((post) => post.slug === slug);
    }

This file acts as a source for our data - it could be loading posts from a third party API, a database or CMS. The important thing is we can retrieve an array of blog posts and use them to generate a unique page for each one.

Create a new page at `/app/blog/page.tsx` to retrive the posts and render them as a list on the page.

You can call the `getPosts` function directly in your `page.tsx` component, and the function can be asynchronous - just make sure you mark the component itself as async if you're using await inside it.

This is one of the big new features in React and implemented first in Next.js 13 - Server Components that can be asynchronous, load data during rendering on the server, and make use of HTTP Streaming to manage fast responses and asynchronous data fetching without complex useEffect queries or complex third party libraries like react-query. It's worth reading up on this from the most up to date offical Next.js documentation, linked in the Useful Resources section of the README.

    export default async function BlogPage() {
    const posts = getPosts();
    return (
        <ul>
        {posts.map((post) => (
            <li>{post.title}</li>
        ))}
        </ul>
    );
    }

Use the next `<Link/>` component to make each of the page titles into a link that directs the user to the page for the post:

> <Link href={`/blog/${post.slug}`}>{post.title}</Link>

### Individual post pages

Now we'll generate a unique page for each of our posts.

Next.js looks for a `generateStaticParams` exported function in our page component which if defined allows us to return an array of props, in this case just our post object, for rendering our post page component for each of the pages during the build step of our app.

A page component at `/app/blog/[slug]/page.tsx` will allow us to render our posts at `http://example.com/blog/my-first-post`, using the page component. Next will pass the array of props objects to the page component, and render a unique page for each one.

See the example for a more complete view of the code.

    export async function generateStaticParams() {
    // get the posts
    const posts = getPosts();

    // return an array of props objects that will be passed to
    // our page component one by one, generating a unique page
    // (in the example we use the post object, hard coded to more clearly show what is returned)
    return [{ slug: "my-first-post" }, { slug: "my-second-post" }, { slug: "my-third-post" }];
    }

    export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    // if the post is missing, return a 404 by running the Next.js notFound function
    if (!post) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-4xl">
        <h1 className="text-2xl">{post.title}</h1>
        {post.content}
        <br />
        <Link href="/blog">Back to posts</Link>
        </main>
    );
    }

### Next.js `/pages` directory, pre-Next.js

The `/app` directory is quite new. Most existing Next.js projects that exist today are still using the `/pages` directory. Adoption of the new architecture will gradually grow, but understanding the `/pages` directory is still important. There is no set date for those APIs being retired.

The example in the `/pages` directory renders a post index and individual pages using the `getStaticProps`, `getStaticPaths` and the pages directory routing.

In `/pages/oldblog.tsx` you can see the `getStaticProps` function is loading the posts and passing them as a prop to the page. We don't need to do this anymore in `/app` because we can now call asynchronous functions directly in our server components.

In `/pages/[slug]`.tsx we use getStaticPaths to define a list objects with a page slug just like `generateStaticProps` in the `/app` directory, and then in getStaticProps we use that props object with the slug to retrive the individual blog post by the slug. We don't need the second `getStaticProps` function in the new architecture, for the same reason as before - our components can be asynchronous now!

**Note:** The example `getPosts` function in `/lib/posts.ts` isn't async for the simplicity of this example, but the `/lib/posts.t`s library does contain an asynchronous version of the function called `getPostsAsynchronous` that pretends to be async. This would be just like if you called a third party CMS API.

Mark your page component as asynchronous and use the asynchronous functions to get your posts.

The `/pages` directory used `getServerSideProps` to do full dynamic rendering. There is no equivalent to this function in the `/app` directory, because asynchronous server components do the same thing, but in a more flexible and composable way.

You can call APIs and databases directly from your server components. This is a big new feature of React itself, and Next.js 13 is the first widely available framework to release an implementation.

Read more about it on the React and Next.js docs linked in the Helpful Resources section of the README.
