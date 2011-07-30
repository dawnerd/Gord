# GORD

### The library agnostic object conversion utility thingy.

***

#### What is Gord?

Converts a complex Object to a usable query string (and eventually other formats). Non-useful properties are tossed out (properties that only contain another object for example). This leaves you with a string that can be used in an ajax request, saved to cookie or even local storage.

#### Note about NodeJS

Please don't use this in a NodeJS project. Instead, use the native built-in.

````var querystring = require('querystring');

querystring.stringify(obj);````