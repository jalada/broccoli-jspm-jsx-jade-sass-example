1. npm install -g jspm broccoli-cli
2. npm install
3. jspm install
4. broccoli serve
5. Visit http://locahost:4200
6. Check console for proof of React and JSX.

You might need some kind of SASS thing too.

# Differences from standard JSPM

 - I put app code in `app` not `lib` (and configured JSPM thus).
 - I put `config.js` in a `config` folder because you can't `pickFiles` from the
   top level folder because the `tmp` folder triggers changes. See
   https://github.com/broccolijs/broccoli/issues/205.
   
