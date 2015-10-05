# Get started #


**_I suggest you get 'webtt'newest version from SVN ,download version update slowly_**

```
svn checkout http://webtt.googlecode.com/svn/trunk/ webtt-read-only
```


_**first:config**_

_edit your config.js_

```
/**
 * support languages
 *
 *
 */
var translate_to = Array('en', 'ja', 'ko', 'ar', 'ru', 'cn', 'tw');

/**
 * tags and method need to translate
 */
var translate_tags = {
    "a": "innerHTML",
    "b": "innerHTML",
    "td": "innerHTML",
    "div": "innerHTML",
    "span": "innerHTML",
    "p": "innerHTML",
    "li": "innerHTML",
    "th": "innerHTML",
    "h1": "innerHTML",
    "h2": "innerHTML",
    "h3": "innerHTML",
    "h4": "innerHTML",
    "h5": "innerHTML",
    "h6": "innerHTML",
    "title": "innerHTML",
    "label": "innerHTML",
    "input": "value",
    "button": "value",
    "img": "title",
    "img": "alt",
    "area": "title"
};

```

_**Second:Quote**_

_quote webtt.js which page need to  support foreign language_

```
<script id="webttjs" language="javascript" charset="utf-8" src="webtt.js">
</script>
```