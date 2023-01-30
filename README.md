# Remark-Toc-Export

I'm writing a blog project with mdx-bundler and came across the problem of needing to get the TOC of the markdown. This plugin does just that!

### Usage

```js
import exportToc from '@jasonlamv-t/remark-toc-export'

const md = remark()
  .use(exportToc, {
    callback: (headers) => {
      console.log(headers);
    },
    depth: 3,
  })
  .processSync(content);
```

For some markdown files like this:

```md
# Title

some text

## Subtitle

### Step 1: Copy
```

Outer TOC will spit out an array of objects like this:

```js
[
  { value: 'Title', depth: 1, id: 'title' },
  { value: 'Subtitle', depth: 2, id: 'subtitle' },
  { value: 'Step 1: Copy', depth: 3, id: 'step-1-copy' }
]
```

### Options

`callback`

The callback function outside-toc will use to give back the headers found. Default: `console.log`

`depth`

The depth of headers you want to add to TOC will grab h1, h2, h3, and so on. Default: **2**.
