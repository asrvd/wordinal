#!/usr/bin/env node

/*
  Wordle Clone on Terminal.
  Made by Ashish © 2022.
  Licensed under MIT License.

  Start the game using *wordinal* command after installing npm package.
*/

// Imports
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import data from '../words.js';

clear(); // Clears the Terminal

// Global Variables 
let guess_str = ``
const correct_word = data["words"][Math.floor(Math.random() * 2481)];
let map =``
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

// Functions
async function welcome() {
  console.log(
    chalk.blue(
      figlet.textSync('WORDINAL', { horizontalLayout: 'fitted' , font: '5 Line Oblique', width: 100})
    )
  );
  const rt = chalkAnimation.rainbow('\n\nThe Terminal Wordle Game! \n');
  await sleep();
  rt.stop()
  console.log(`
    ${chalk.bgBlue('HOW TO PLAY?')} 
    ${chalk.yellow('Wordinal')} is a clone of the game ${chalk.yellow('Wordle')} but you play it in the terminal.
    In Wordle you try to guess a ${chalk.yellow('5 letter word')} in 6 tries.
    After each guess, the color of the tiles will change to show how close your guess was to the word.

    ${chalk.green('Green Letter')} shows that the letter is correct and is at correct position.
    ${chalk.yellow('Yellow Letter')} shows that the letter is correct but not at correct position.
    ${chalk.gray('Gray Letter')} shows that the letter is not correct.

    Good Luck!

  `);
}

function winner(round) {
  console.log(`You won the Wordle Game in ${chalk.blue(round)}/6 rounds!\nThe correct word was ${chalk.green.bold(correct_word)}!\nYour Guessing Map:\n${map}`)
  process.exit(1)
}

function loser() {
  console.log(`You lost the Wordle Game!\nThe correct word was ${chalk.green.bold(correct_word)}!\nYour Guessing Map:\n${map}`)
  process.exit(1)
}

async function handlegame(word, round) {
  let str = ``
  let i = 0
  guess_str = guess_str + `\n`
  map = map + `\n`
  word.toLowerCase().split('').forEach(l => {
    if (l == correct_word[i]) {
      guess_str += chalk.green(l) + ' '
      map += '🟩 '
      i += 1
    } else if (l != correct_word[i] && correct_word.includes(l)) {
      guess_str += chalk.yellow(l) + ' '
      map += '🟨 '
      i += 1
    } else {
      guess_str += chalk.gray(l) + ' '
      map += '⬛ '
      i += 1
    }
  })
  str += `${guess_str}`
  console.log(`${round}/6${str}\n`)
  if (word.toLowerCase() == correct_word) {
    winner(round);
  } else if (round == 6 && word.toLowerCase() != correct_word) {
    loser();
  }
}

async function wordle() {
  for(var i = 0; i < 6; i++){
    const guess = await inquirer.prompt({
      'name': 'guess',
      'type': 'input',
      'message': 'Enter your guess:',
    })
    if (guess.guess.length != 5) {
      i=i-1; console.log(`${chalk.red('Please enter a 5 letter word!')}`); continue;
    } else if (typeof guess.guess != 'string') {
      i=i-1; console.log(`${chalk.red('Please enter only words not numbers!')}`); continue;
    } else {
      handlegame(guess.guess, i+1)
    }
  }
}

await welcome(); // Welcome Player
await wordle(); // Start Game