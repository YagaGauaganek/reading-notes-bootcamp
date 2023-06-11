## Read 05: Design Web pages with CSS

### What is CSS?  
> CSS - Cascading Style Sheets  
- CSS allows you to create great-looking web pages  
- Can be used for very basic document text styling - changing the color, size of headings and links  
- Can be used to create a layout or effects like animation  
### CSS Syntax  
- rule-based language:
    - you define the rules by specifying groups of styles that should be applied to particular elements or groups of elements on your web page
> **Example**
[CSS Colour](/Images/css%20colour.png)
> - h1 is an selector which *selects* the HTML element to be styled
> - we use pair of curly braces { }
> - inside them we add declarations. it can be one and more. They take form of property and value pairs. **Property** is soecified before colon,
>  **value** is after property gose after colon  

### CSS Modules
This language is broken into modules

### [Getting started with CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)

### CSS Specification
> All web standards technologies (HTML, CSS, JavaScript, etc.) are defined in giant documents called specifications (or "specs"), which are published by  
> standards organizations (such as the W3C, WHATWG, ECMA, or Khronos) and define precisely how those technologies are supposed to behave.  

### Skim
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)  
- [Meyers Web Reset Stylessheet](https://meyerweb.com/eric/tools/css/reset/)

## Questions and Answers:
1. What is the purpose of CSS?  
CSS for web pages is like furniture for the house. It gives 'decoration' to our web page project. It is a language that provides Web developers with a standard way to define, apply, and manage sets of style characteristic like fonts, colours, layputs, etc.
2. What are the three ways to insert CSS into your project?  
External CSS - with use of external sheet, each HTML page musy include a referance to the external sheet file inside the link element, inside head section.  
Internal CSS - to use if one, single HTML page has a unique style, it is define inside style elemnt, inside the head section.  
Inline CSS - may be used to apply a unique style for a single element, to it,we add the style attribute to the relevant element. The style attribute can contain any CSS property.
3. Write an example of a CSS rule that would give all <p> elements red text.  
p {  
    colour: red;  
}  