# Conway's Game of Life

This game was created for a coding aptitude test whilst applying for employment at the BBC. It is an rendition of the famous 'Game of Life' first proposed by the mathematician John Conway in 1970. It is implemented using Javascript in the node.js framework, using Chai and Mocha as a testing suite.

## Installing

To install and run, open a command line interface, navigate to the desired workspace and clone this repository there.

```console
    $ cd /path/to/workspace
    $ git clone git@github.com:breakbeatkid/bbc-game-of-life.git
```

To install the required dependencies for execution and testing, use the node package manager npm. Assuming node and npm are previously installed, this is achieved by entering the command:

```console
    $ npm install
```

## Testing

In order to ensure the desired functionality, thereby increasing maintainability, a testing framework is used. In this case Chai and Mocha. To execute the pre-written tests, enter the following command:

```console
    $ npm test
```

## Running the game

To run the game, enter the following command at the command line interface and you will be prompted to enter certain configuration data:

```console
    $ npm start
```

## Configuration
The game prompts the user to set certain parameters before the game commences. First, the dimensions of the grid must be set.

```console
    $ Please enter integer number of rows (200 >= row > 0): 70
    $ Please enter integer number of columns (200 >= row > 0): 200
    $ _
```
Next the characters displayed in the grid must be set. One for alive cells, one for dead cells.

```console
    $ Please input the symbol for an alive cell: o
    $ Please input the symbol for a dead cell: .
    $ _
```
Finally a set of coordinates are required. These coordinates populate the list of alive cells used when building the initial seed grid. Coordinates are entered by row and by cell individually, until the first is left blank. This signifies that seed entry has finished and the program constructs the grid.

```console
    $ Enter row coord of alive cell 1 (0 <= row < 200, blank to stop): 1
    $ Enter col coord of alive cell 1 (0 <= col < 70,  blank to stop): 4
    $ Enter row coord of alive cell 2 (0 <= row < 200, blank to stop): _
```
## Playing the game

After seed entry has concluded, the game grid is displayed.

```console
    $ Enter row coord of alive cell 2 (0 <= row < 200, blank to stop): _

    ...........
    ...........
    ...........
    ...........
    .....o.....
    .....o.....
    .....o.....
    ...........
    ...........
    ...........
    ...........

    _
```
The cursor at the bottom of the display indicates that the program is awaiting user input. Press enter to transistion to the next generation of life. Repeatedly pressing enter generates successive generation of life.

```console

    ...........
    ...........
    ...........
    ...........
    ...........
    ....ooo....
    ...........
    ...........
    ...........
    ...........
    ...........

    _
```

Typing 'run' then pressing enter will automatically advance game a generation at a time for infinity every 100ms.

```console

    ...........
    ...........
    ...........
    ...........
    .....o.....
    .....o.....
    .....o.....
    ...........
    ...........
    ...........
    ...........

    run_
```


## Task scenarios
BBC Task - Scenario 5
```console
    $ Please enter integer number of rows (200 >= row > 0): 11
    $ Please enter integer number of columns (200 >= row > 0): 11
    $ Please input the symbol for an alive cell: o
    $ Please input the symbol for a dead cell: .
    $ Enter row coord of alive cell 1 (0 <= row < 200, blank to stop): _
```

BBC Task - Scenario 6
```console
    $ Please enter integer number of rows (200 >= row > 0): 11
    $ Please enter integer number of columns (200 >= row > 0): 11
    $ Please input the symbol for an alive cell: o
    $ Please input the symbol for a dead cell: .
    $ Enter row coord of alive cell 1 (0 <= row < 200, blank to stop): 4
    $ Enter col coord of alive cell 1 (0 <= col < 70,  blank to stop): 5
    $ Enter row coord of alive cell 2 (0 <= row < 200, blank to stop): 5
    $ Enter col coord of alive cell 2 (0 <= col < 70,  blank to stop): 5
    $ Enter row coord of alive cell 3 (0 <= row < 200, blank to stop): 6
    $ Enter col coord of alive cell 3 (0 <= col < 70,  blank to stop): 5
    $ Enter row coord of alive cell 4 (0 <= row < 200, blank to stop): _
```
## Interesting patterns
Glider
```console
    $ Please enter integer number of rows (200 >= row > 0): 70
    $ Please enter integer number of columns (200 >= row > 0): 200
    $ Please input the symbol for an alive cell: o
    $ Please input the symbol for a dead cell: .
    $ Enter row coord of alive cell 1 (0 <= row < 200, blank to stop): 1
    $ Enter col coord of alive cell 1 (0 <= col < 70,  blank to stop): 4
    $ Enter row coord of alive cell 2 (0 <= row < 200, blank to stop): 2
    $ Enter col coord of alive cell 2 (0 <= col < 70,  blank to stop): 4
    $ Enter row coord of alive cell 3 (0 <= row < 200, blank to stop): 3
    $ Enter col coord of alive cell 3 (0 <= col < 70,  blank to stop): 4
    $ Enter row coord of alive cell 4 (0 <= row < 200, blank to stop): 3
    $ Enter col coord of alive cell 4 (0 <= col < 70,  blank to stop): 3
    $ Enter row coord of alive cell 5 (0 <= row < 200, blank to stop): 2
    $ Enter col coord of alive cell 5 (0 <= col < 70,  blank to stop): 2
    $ Enter row coord of alive cell 6 (0 <= row < 200, blank to stop): _
```

R-Pentomino
```console
    $ Please enter integer number of rows (200 >= row > 0): 70
    $ Please enter integer number of columns (200 >= row > 0): 200
    $ Please input the symbol for an alive cell: o
    $ Please input the symbol for a dead cell: .
    $ Enter row coord of alive cell 1 (0 <= row < 200, blank to stop): 31
    $ Enter col coord of alive cell 1 (0 <= col < 70,  blank to stop): 74
    $ Enter row coord of alive cell 2 (0 <= row < 200, blank to stop): 32
    $ Enter col coord of alive cell 2 (0 <= col < 70,  blank to stop): 74
    $ Enter row coord of alive cell 3 (0 <= row < 200, blank to stop): 30
    $ Enter col coord of alive cell 3 (0 <= col < 70,  blank to stop): 75
    $ Enter row coord of alive cell 4 (0 <= row < 200, blank to stop): 31
    $ Enter col coord of alive cell 4 (0 <= col < 70,  blank to stop): 75
    $ Enter row coord of alive cell 5 (0 <= row < 200, blank to stop): 31
    $ Enter col coord of alive cell 5 (0 <= col < 70,  blank to stop): 76
    $ Enter row coord of alive cell 6 (0 <= row < 200, blank to stop): _
```
