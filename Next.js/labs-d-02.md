# Lab Day 02

## 04

### Page url params and Query Strings

URL parameters and query string values are both used to send data to the server when making a request in web development, but they work in slightly different ways.

_URL parameters_ are included in the URL itself, typically used to identify a specific resource, like a user or a product. For example, the URL `example.com/users/123` includes a URL parameter of "123" to identify the user.

_Query string_ values are included in the URL after a question mark and are typically used to filter or sort data. For example, `example.com/team?sortBy=asc` includes a query string key/value pair of `sortBy:` asc to specify the sort direction for a list of team members.

- 📄 Page.js Docs - the Next.js page conventions
  **⛳️ Exercise: reading additional page parameters, and values from query strings**
  Continuing with your about website, try adding more parameters to a url route by creating some new routing folders and files. Display the values in the query string and the url on the page, or conditionally show content based on those values.

For example you could try something like:

`http://localhost:3000/team/james` -> renders content for James. `http://localhost:3000/team?sortBy=asc` -> lists team members sorted by ascending or descending alphabetical order

## 05

### Page meta tags and document

In HTML, meta tags are used to provide metadata about a web page, which can be used by search engines and web browsers. The metadata is placed in the head section of the HTML document. In Next.js 13, each layout.tsx or page.tsx file can export a static metadata object or a dynamic generateMetadata function to specify page metadata.

Tags such as the charset and viewport are only usually needed once in the top level layout.tsx file, but others, especially title and description, are probably different for every page.

### Tags included by Next.js on every page by default

`<meta charset="UTF-8">`: This tag is used to specify the character encoding for the document. This is important for ensuring that special characters and non-English text is displayed correctly. THIS IS ALWAYS INCLUDED BY Next.js automatically.

`<meta name="viewport" content="width=device-width, initial-scale=1">`: This tag is used to control the layout of the page on different devices. It tells the browser to use the device's width as the width of the viewport, and to set the initial zoom level to 1. THIS IS ALWAYS INCLUDED BY NEXT.js automatically.

### Tags you'll commonly find exported from page files:

    export const metadata = {
    title: "Title of a great page",
    description: "This page is very good",
    robots: "noindex",
    openGraph: {
        title: "title of a great page when shared on facebook",
    },
    };

_description:_ This tag is used to provide a brief summary of the web page's content. This description is often used by search engines as a snippet when the page appears in search results.

_robots:_ This tag is used to control how search engines index and follow the links on a web page. If a page contains a "noindex" directive, search engines will not include the page in their index. If a page contains a "nofollow" directive, search engines will not follow any links on the page.

This is also where you would include Open Graph tags, to customise your images and metadata on search engines and social network crawlers.

Using meta tags can be beneficial for SEO, better indexing and improving the user experience of your website.

### Dynamic metadata

generateMetadata is a function export that will be passed the page parameters from the URL, so you can use these to lookup specific metadata, for example the name of the pet on the pet's page.

    // Dynamic metadata
    export async function generateMetadata({ params }) {
    // you can do any asynchrone js in here, such as load items from a db
    // to get page specific information
    return {
        title: params.pet + " | Pets",
    };
    }

### Social Share Testing

Once we deploy our walking skeleton in a future class, we can preview our opengraph values using the facebook social debugger.

[https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)

**⛳️ Exercise: Meta data and descriptions**
Customise the meta tags for the different pages on your website, especially the description.

_Note:_ you can call the same data fetching functions in your `head.tsx` file as you use for the content in your `page.tsx`.

**⛳️ Extra Exercise: Open graph data**
Add open graph meta tags for richer social cards. We'll be able to test these work properly in a later class.
