# eslint-config-mtdirect
Standard eslint configuration for MT Direct packages

## Installation

```
$ npm install --save-dev eslint eslint-config-mtdirect eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-standard prettier
```

*Sorry there are so many dependencies that need to be installed with this! Maybe some day this won't be necessary; See [eslint issue #3458](https://github.com/eslint/eslint/issues/3458).*

Then, add `mtdirect` to the "extends" array in your `.eslintrc.json` file.

```json
{
  "extends": [
    "mtdirect"
  ]
}
```

And finally, add the following scripts under `"scripts"` in your `package.json`:

```json
"lint": "eslint **/*.js",
"lint:fix": "npm run lint -- --fix",
```

*It is recommented to also prepend `npm run lint && ` to your `"test"` script, if you have one.*

## Tips

- Copy [this .editorconfig file](./.editorconfig) to the root of your project, so that file editors and IDEs will comply with mtdirect formatting standards
