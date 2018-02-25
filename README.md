# markdown-previewer

## Description

A simple, Super Lightweight markdown previewer. It receives a file and converts the markdown
content to html.

## Getting Started
```bash
yarn add markdown-previewer
```

```javascript
const Preview = require('markdown-previewer')

const preview = new Preview // Creates new instance for Preview
const file = process.argv[2] // Name of the file to convert

const html = preview.htmlContent(file) // html content of markdown

console.log(html)
```
