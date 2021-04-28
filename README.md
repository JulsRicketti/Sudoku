# Sudoku

## Installation and Execution
No ceremony necessary, just install the packages and run it with the `dev` command.

```
npm install
npm run dev
```

For the tests, run:
```
npm run test
```

## CLI Algorithm
If you wish to run the Sudoku solution algorithm in isolation with node in the CLI, the `algorithm` script was added. In order for it to work, you will need to pass in a value using the string pattern from the [norvig.com](http://norvig.com/sudoku.html) as an argument.

```
npm run algorithm ........5.3..........7......2.....6.......4......1.........3.7.5..2.....1.4......
```

## WebApp Usage
There are two boards, the left board which is the main one to play and the right one, which is just a solution board.

Click any empty cell in the left board to fill it in as you please. The one on the right is uneditable since it is only used to display solutions.

Both boards start out empty. There are two ways to fill those out:

1. `Make Your Own Puzzle`
By clicking on that button, you can create your own puzzle through the UI.
Fill in the board as you see fit through clickin each cell, make sure to click `Done` once you are done and ready to play.

2. `Generate Puzzle From String`
Will use [norvig.com](http://norvig.com/sudoku.html) string pattern to fill in the board.

### Actions on the boards

#### Solve
This will display the solution on the right board. You may hide it again by clicking `Clear`

#### Verify
Will verify if the left side board has been correctly solved

#### Reset
Will reset the left side board
