# pigg_countdown
amebapigg countdown
## inject javascript to ameblo
```javascript
function generatePlguins(injectSrc) {
    var scripts = String(injectSrc)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\x22/g, '&quot;')
        .replace(/\x27/g, '&#39;');
    return '<input autofocus onfocus="' +
        'window.__isJSHook !== true && ' +
            '(' + scripts + ')(), ' +
        'window.__isJSHook = true">';
}

copy(generatePlguins(function() {
    //put javascript and paste output to free-plugin.
    })
);
```
