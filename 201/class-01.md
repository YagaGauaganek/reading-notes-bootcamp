## Setup Developer Toolbelt

### GitHub and git branches  
**What are branches for**  
Allow you to develop features, fix bugs, or safely experiment with new ideas in a contained area of your repository
**How to create a new branch**
- git branch branch name / explain this creates a new branch  
- git checkout branch name / explain this puts us on the new branch  
- edit your code  
- A,C,P - Make sure git push -u origin name-of-branch, upstream allows you to set the default remote branch for your current local branch  
- git checkout main  
- then go to github  
- create the pull request  
- click merge pull request  
- click confirm merge  
- go to VSCode make sure you are on the main branch  
- git pull  

### Chris's Demo  
[Chris's Demo 201-01](https://github.com/CSEAMAN3/201-d5-class-demos/tree/main/201-class-01)  

### Reading
[Getting Started](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)  
[How the Web Works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)  
[Website Design and Process](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)  
[ JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)  
[Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)  
[Getting Started with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)  
[HTML Document Structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)  
[Metadata in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)  
[How to start to design a Website](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Design_and_accessibility/Thinking_before_coding)  
[Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)  
[What is JavaScript?](What is JavaScript?)  

### Answers and Questions  
1. Compose a short poem describing how HTTP sends data between computers.  
Don't know hoe to write a poem  
I sigh  
Although I know how HTTP sends data  
And I thrive  
HTTP requests message to the other side  
Responses go  
Clients send their plea  
Servers answers with glee  
Data dances through space  
Connecting  
In a swift-paced chase   

2. Describe how HTML, CSS, and JS files are “parsed” in the browser.  
**HTML parse:**  
- browser reads code from top to bottom and builds Document Object Model (DOM), what represents elements, attributes and content of the document i.e. images  
**CSS parse:**  
- CSS code analysis  
- identifying selectors, features and values  
- then browser connects CSS rules with DOM model to create Render Tree which defines how the website should be displayed  
**JS parse:**
- an analysis and interpretation of *JS* code  
- the browser reads the code and creates AST - Abstract Syntax Tree and then executes the script  
- JS my manipulate with DOM, moderate styles, handle events or performes different computation  
3. How can you find images to add to a Website?  
Stock Image Websites: Shutterstock, Adobe Stock, Unsplash, Pixabay, and Pexels  
Creative Commons: Flickr and Wikimedia Commons  
Search Engines: e.g., Google Images (be aware, understand and respect copywrights when using this source)  
Self-Captured or Custom Images: This is something I will be using when building my own portfolio website  
Social Media Platforms:  Pinterest and/or Flickr - **note:** always obtain proper permissions and give credit to the original creators when using such content  
Collaboration with Photographers or Artists: again, it might be my way to utilise my photos or photos of my Tog folks when building websites, depending on requirements  

**To be noted:** When using images on your website, make sure you review usage rights, licenses, and any attribution requirements associated with the images you find to ensure you comply with copyright laws and respect the rights of the creators  

4. How do you create a String vs a Number in JavaScript?  
- To create string we use double quote " ", sometimes it can be single quote ' ', especially when we uses double qoute in our string:  
let aString = "Hello Yaga!";  
- to create a number we use number without quotation mark. Number can be assigned directly to a variable  
let aNumber = 36;
5. What is a Variable and why are they important in JavaScript?  
Variable is a value holder. It is significant for storing and manipulating data within a program. If we won't give a value, no calculations will be provided  
6. What is an HTML attribute?  
Gives additional info about the element. Attributes include "class," "id," "src," "href," "style," and "alt  
7. Describe the Anatomy of an HTMl element.  
The simpliest explanation is that a html element is made up of an opening tag, content and a closing tag  
8. What is the Difference between <article> and <section> element tags?  
- The <article> element is used for self-contained, standalone content such as blog posts or articles  
- The <section> element is used to group related content together within a document  
9. What Elements does a “typical” website include?  
header, main, body, footer, article, section, aside and nav  
10. How does metadata influence Search Engine Optimization?
Providies information to search engines about the content and relevance of a webpage. Key metadata elements like title tags, meta descriptions, and header tags help search engines understand the page's topic, keywords, and purpose. Optimized metadata can improve a webpage's visibility, click-through rates, and rankings in search engine results.
11. How is the <meta> HTML tag used when specifying metadata?  
The <meta> HTML tag is used to specify metadata within the head section of an HTML document. It includes attributes such as "name" and "content" to provide information about the webpage's characteristics, such as the title, description, keywords, character encoding, viewport settings, and more. 
Metadata specified with the <meta> tag helps search engines, browsers, and other applications understand and process the webpage's information correctly (Google or any other search engine )
12. What is the first step to designing a Website?  
13. What is the most important question to answer when designing a Website?  
To define the goals, purpose, and target audience of the website  
14. Why should you use an <h1> element over a <span> element to display a top level heading?  
H1 is a block alement, where span is an inline element. We should use one h1 per page  
15. What are the benefits of using semantic tags in our HTML?  
Using semantic tags in HTML improves accessibility, enhances SEO, aids code readability and maintenance, promotes consistent styling, and ensures compatibility with future web standards  
16. Describe 2 things that require JavaScript in the Browser?  
Two things that commonly require JavaScript in the browser are form validation and interactive web elements 
17. How can you add JavaScript to an HTML document?  
inline, within a script or in a seperate linked document using the 'src' attribute  
## Things I want to know more about




