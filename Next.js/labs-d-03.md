# Lab Day 03

## 06

### Lab

Next.js supports all the usual ways you're used to using CSS in React apps.

For this course, we'll look at how Next.js supports a global CSS file, component scoped CSS Modules, and we'll go through setting up Tailwind CSS.

### Global CSS file

The create-next-app template includes a `globals.css` file which is made available on every page of the site. It supports importing other CSS files to let you organise your styles as you might have done on many projects in the past.

You can use this will any CSS naming scheme that you would like, eg. BEM.

The downside to this is Next won't be able to perform page route-level code splitting on your styles like it can with modules.

### CSS Modules

You can import a CSS file at the component level using a simple import statement. The file naming convention is `filename.module.css`. The build system is smart enough to be able to split up the CSS imported this way into discrete bundles containing only the necessary styles for the page being loaded. This helps minimise data downloaded over the network and helps speed up the site, since you won't be downloading all the unique CSS for the homepage when you view the About page.

CSS modules work out of the box with Next.js, so you can just start create .`module.css` files for your components and get to work.

**⛳️ Exercise: Experiment with CSS modules**
Create custom styles on diffrent pages, try sharing styles and experiment with CSS selectors (but be aware that using HTML tags as styling targets might be restrictive, tying the styles to the structure).

[Article: Stop targeting tags in CSS](https://frontstuff.io/you-need-to-stop-targeting-tags-in-css)

### Tailwind CSS

Tailwind CSS is a very popular CSS utility-first framework that suggests a different approach to styling and conventional views on separation of concerns.

[Tailwind Docs: Configuring Tailwind with Next.js](https://tailwindcss.com/docs/guides/nextjs)  
[Next.js Docs: Tailwind CSS](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css)

## 07

## The Next.js `<Image />` component

The `<Image />` component offers some useful optimisation strategies for your images, and is designed as a replacement for the regular HTML `<img />` tag.

**Some of the key benefits of the component are:**

- Resize and generate responsive images to optimise file sizes, dimensions and formats to target the device loading the image. This means you'll serve up large full size images on desktops, but only smaller reduced size versions on smaller screens.
- Lazy loading: Images are only loaded as they become visible on a page. So a gallery containing 20 images won't download 20 images unless they're scrolled into view.
- Placeholder support: You can provide a much smaller blurred image placeholder to show in place while the bigger image is loading.
- Supports loading images from cloud storage and image CDNs, including S3 and Cloudinary.
- Plus plenty more on in the documentation.
  **⛳️ Exercise: Loading Images with next/image**
- Load some images using the image component (tip: There are some example images in the course Github repo under demo-app/public/images).

- Experiment with the component props from the documentation. Load many different images and inspect the way they are loaded on the Network tab.

- Try to load images from the internet using a URL. You'll get an error and warning on the terminal. It should tell you what the problem is - it's a configuration setting you have to add in a next.config.js file in the root directory (it should be a .js file even if you're using typescript).
