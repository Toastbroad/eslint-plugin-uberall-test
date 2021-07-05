# eslint-plugin-uberall-test

Playing around with eslint for uberall

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-uberall-test`:

```
$ npm install eslint-plugin-uberall-test --save-dev
```


## Usage

Add `uberall-test` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "uberall-test"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "uberall-test/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





