# Blocks
A Javascript mini Framework to make Efficient Hierarchical, more readable tutorials easily by using simple html tags.

Hierarchical Foldable Headings, means you can fold all H2 headings,then unfold a select h2 and see its h3 headings,

then you can continue to dig into next level.
  
# Usage
## Add reference
Add 	blocks.css" and "blocks.js" to your html file,just like sample.htm file above.

or you use cdn like this
```html
< link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/nhab/blocks@latest/blocks.css'>

< script src='https://cdn.jsdelivr.net/gh/nhab/blocks@latest/blocks.js'></script >
```

## Add heirarcy to body onload
Then set a blocks.js function to onload of the body tag.for example to make a 2 level hierarcy use this:
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
  After each heading,it should be just one div element.
  
# Example
https://nhab.github.io/programming/py/py.htm

view the source code of the example to understand how easy is to use it.
