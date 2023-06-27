# Blocks
A Javascript framework to make better tutorials and texts. 

#Features
- <b>Foldable hierarchical texts</b>, using simple HTML tags.
Hierarchical Foldable Headings means you can fold all H2 headings, then unfold a select h2 and see its h3 headings,
then you can continue to dig into the next level.
- Many useful <b>CSS classes</b> to decorate the text and make it more readable
- It is more flexible than Markdown.
# Usage
## Add the reference
Add 	blocks.css" and "blocks.js" to your html file, just like the sample.htm file above.

or you use CDN like this
```html
< link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/nhab/blocks@latest/blocks.css'>

< script src='https://cdn.jsdelivr.net/gh/nhab/blocks@latest/blocks.js'></script >
```

## Add hierarchy to body onload
Then set a blocks.js function to onload of the body tag. For example, to make a 2-level hierarchy use this:
```html 
<code>
<body onload='AddToggleButtonsToH2andH3();ReplaceLtGt();hljs.highlightAll();'>
</code>
```

## Adding fold/unfold button:
```html  
<button onclick="toggleAll(this);" >-</button>
 ```
## Make the content:
  After each heading, it should be just one div element.
```html
<h2>headeing 1</h2>
<div>
  content
</div>
```

# Example
https://nhab.github.io/programming/py/py.htm

view the source code of the example to understand how easy is to use it.
