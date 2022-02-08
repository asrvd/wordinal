# Wordinal
Wordle but it's on your Terminal!

## What's Wordle? 🤔
Wordle is a classic word guessing game developed by Josh Wardle. Players have six attempts to guess a five-letter word; feedback is given for each guess, in the form of colored tiles, indicating when letters match or occupy the correct position.

You can play the original Wordle Game [here](https://www.powerlanguage.co.uk/wordle/).

## Playing Wordinal 🔠
Install the npm package.
```bash
$ npm install wordinal
```
Start the Game.
```bash
$ wordinal
```

## Running Locally 🚀
Clone the GitHub Repo
```bash
$ git clone -b main https://github.com/asheeeshh/wordinal.git
```
Install dependencies, Make sure you have `npm` and `nodejs` installed.
```bash
$ npm install
```
Add the following snippet to your `package.json` file.
```json
"bin": {
    "wordinal": "./bin/main.js"
  },
```
Create symlink.
```bash
$ npm link
```
Run the Game.
```bash
$ wordinal
```

## License ⚖
MIT

## Ending Note ✒
- *Consider giving the repo a ⭐ if you liked the project!*
- *Follow me and checkout my other projects!*

