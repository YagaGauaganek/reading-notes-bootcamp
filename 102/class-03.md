## Read 04: Structure web pages wit HTML

### Wireframe and Design
[My Figma Project](https://www.figma.com/file/sScz1kH8vxtNCzLv9uhmvH/Yaga-on-Film-Project?type=design&node-id=0-1&t=O03zntYyVHIbcEcE-0)
1. What is a wireframe?
- a practice used by UX designers which allows them to define and plan the information hierarchy of their design for a website, app, or product
- When designing for the screen you need to know where all the information is going to go in plain black and white diagrams before building anything with code
- A commonly-used argument for wireframing is that if a user doesn’t know where to go on a plain hand-drawn diagram of your site page, then it is irrelevant what colors or fancy text eventually get used
2. Wireframe examples:
- can be done in app like figma, Invision or Balsamiq  
- can be done by hand on paper - Wireframes drawn with paper and a pencil, or at a whiteboard, have the advantage of looking and being very easy to change  
3. Things to consider before you start wireframing:
- number of ways different designers can structure the process from design to implementation:
    - Wireframe > Interactive Prototype > Visual > Design
    - Sketch > Code
    - Sketch > Wireframe > Hi-Def Wireframe > Visual > Code
    - Sketch > Wireframe > Visual > Code
4. The best tools for wireframing:
- **UXPin**: UXPin has a wide range of functionalities, but one of the best ones is how it facilitates building responsive, clickable prototypes directly in your browser.
- **InVision**: InVision allows you to get feedback straight from your team and users through clickable mock-ups of your site design. It’s completely free too!
- **Wireframe.cc**: Wireframe.cc provides you with the technology to create wireframes really quickly within your browser, the online version of pen and paper.
5. 6 Steps to make a wireframe
- Do your research
- Prepare your research for quick reference
- Make sure you have your user flow mapped out
- Draft, don’t draw. Sketch, don’t illustrate
- Start turning your wireframes into prototypes
- Add some detail and get testing
6. How to make your wireframe good: Three key principles
- Clarity
- Confidence
- Simplicity is key

### Mozilla HTML Basics
1. What is HTML:
- HTML (HyperText Markup Language)
- code that is used to structure a web page and its content
- a markup language that defines the structure of your content
- consists of a series of *elements*:
    - part of a webpage
    - may contain a data item or a chunk of text or an image, or perhaps nothing
    - A typical element includes an opening tag with some *attributes*, enclosed text content, and a closing tag
- enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, etc.
2.  **Element**:
- The main parts of element are as follows:
    - The opening tag: This consists of the name of the element, wrapped in opening and closing angle brackets. This states where the element begins or starts to take effect 
    - The closing tag: This consists of the name of the element, wrapped in opening and closing angle brackets. This states where the element begins or starts to take effect 
    - The content: This is the content of the element (text, link, image, etc.)
    - The element: The opening tag, the closing tag, and the content together comprise the element
3. **Attributes**:
- Contain extra information about the element that you don't want to appear in the actual content:
    - <<p class="editor note">My cat is very grumpy<</p>> - Here, *class* is the **attribute** name and *editor-note* is the **attribute** value.
    - The class attribute allows you to give the element a non-unique identifier that can be used to target it with style information and other things
- Attributes that set a value always have:
    - A space between it and the element name (or the previous attribute, if the element already has one or more attributes)
    - The attribute name followed by an equal sign
    - The attribute value wrapped by opening and closing quotation marks
    - **Note:** Simple attribute values that don't contain ASCII whitespace (or any of the characters " ' ` = < >)  > can remain unquoted, but it is recommended that you quote all attribute values, as it makes the code more consistent and understandable
4. Nesting Elements:
- elements inside other elements - here '<<strong>><</strong>> is neting element:
    - <<p>>My cat is <<strong>>very<</strong>> grumpy.<</p>>
- remember to open and close elements correctly so that they are clearly inside or outside one another
5. Void elements:
- have no content:
    - <**img** src="images/firefox-icon.png" alt="My test image"/>
    - This contains two attributes, but there is no closing 
6. Anatomy:
- <!DOCTYPE html> - required preamble. Don't do much nowadays, but in 91/92 were meant to act as links to as set of rules; needed now to make sure your document behaves correctly
- <<html>><</html>> - element; wraps all the content on the entire page and is sometimes known as the root element
- <<head>></head>> - element; acts as a container for all the stuff you want to include on the HTML page that isn't the content you are showing to your page's viewers; 
- <<meta charset="utf-8">> - sets the character set your document should use to UTF-8 which includes most characters from the vast majority of written languages; can help avoid some problems later on
- <<meta name="viewport" content="width=device-width">> - ensures the page renders at the width of viewport, preventing mobile browsers from rendering pages wider than the viewport and then shrinking them down
- <<title>><</title>> - element; sets the title of your page
- <<body>><</body>> - element; This contains all the content that you want to show to web users when they visit your page, whether that's text, images, videos, games, playable audio tracks, etc.
7. Images:
- **Example**:
<<img src="images/firefox-icon.png" alt="My test image" />>
- embeds an image into our page in the position it appears
- It does this via the src (source) attribute, which contains the path to our image file
- *alt attribute* - alternative attribute; to  specify descriptive text for users who cannot see the image (visual impairment, someting went wrong and image is not displaying); alt text should provide the reader with enough information to have a good idea of what the image conveys
8. Marking up text:
- Headings - HTML contains 6 heading levels, although you'll commonly only use 3 to 4 at most:
    - # <<h1>>My main title<</h1>>
    - ## <<h2>>My top level heading<</h2>>
    - ### <<h3>>My subheading<</h3>>
    - #### <<h4>>My sub-subheading<</h4>>  

- Paragraphs -  contain paragraphs of text:
    - <<p>>This is a single paragraph<</p>>
- Lists:
    - Unordered lists <<ul>> - bullet points
    - Ordered lists <<ol>> - numebered lists
    - Each item inside the lists is put inside an <<li>> (list item) element
- Links:
    - to add a link, use element — <<a>> — "a" being the short form for "anchor"
    - give the <<a>> element an **href** attribute (hypertext reference)
    - add link (include https:// or http://)
    - <<a href="https://www.mozilla.org/en-US/about/manifesto/">>Mozilla Manifesto<</a>>  

### Semantics
> In programming, Semantics refers to the meaning of a piece of code  

1. Semantics in HTML:
- In HTML, for example, the h1 element is a semantic element, which gives the text it wraps around the role (or meaning) of "a top level heading on your page."
- HTML should be coded to represent the data that will be populated and not based on its default presentation styling
- Some of the benefits from writing semantic markup are as follows:
    - Search engines will consider its contents as important keywords to influence the page's search rankings (see SEO)
    - Screen readers can use it as a signpost to help visually impaired users navigate a page
    - Finding blocks of meaningful code is significantly easier than searching through endless divs with or without semantic or namespaced classes
    - Suggests to the developer the type of data that will be populated
    - Semantic naming mirrors proper custom element/component naming

Semantic elements in HTML:  
-<article>
-<aside>
-<details>
-<figcaption>
-<figure>
-<footer>
-<form>
-<header>
-<main>
-<mark>
-<nav>
-<section>
-<summary>
-<time>

2. Semantics in CSS  

3. Semantics in JavaScript  

### Skim  
- [Mozilla HTML Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)  
- [Mozilla HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)  

### Questions and Answers:
1. What is HTML and why do we use it?
HTML is:
- HTML (HyperText Markup Language)
- code that is used to structure a web page and its content
- a markup language that defines the structure of your content
We use to created structure of web page.
2. What are the 3 main parts of an HTML element?
Opening tag, conetent, closing tag
3. What is it called when you give an element extra information?
Attribute
4. What is a semantic element?
- gives the text it wraps around the role (or meaning)
- clearly describes its meaning to both the browser and the developer
- 'relating to meaning'