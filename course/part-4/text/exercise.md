# Exercise for Part 3 - Reversi

Reversi is a 2-player strategy game, played on the board, consisting of 8x8 squares. Players take turns to place 64 discs on the board one at a time. The discs are dark on one site and light on the other. Players agree, which side they play. The game starts with four discs placed on the board: two light discs on squares (4, 4) and (5, 5) and two dark ones on squares (5, 4) and (4, 5). The first square is (1, 1). 

A player places a disc on the board with the assigned colour facing up. The placed disc must create a horizontal or vertical line with another disc of the same colour in such a way that between the discs, there is one or more discs with the opponent's colour. All opponent's discs bounded by the placed disc and another disc with the same colour are flipped to show the current player's colour. If the player cannot place any disc, the turn changes to the opponent.

The game ends, when the board becomes full or neither player can place new discs on the board. The player, who has more discs with the assigned colour on the board, wins.

* Create a green board of 64 four green squares and white border line. The board size must react to window size changes.
* Consider creating as re-usable board component as possible.
* Use the QML Flipable type to create discs. Each disc should have a dark and light face, circle-shape, and a border.
* Animate disc opacity and scale, when the disc is flipped. 
* Place the four initial discs on the board when the game is started.
* Allow the player to place discs on legal positions only.
* Change the turn to another player either after the current player has placed one disc or clicked on a button, which gives the turn to the opponent. 
* Implement the game logic to implement the moves and to determine the game winner in the end. 
* Add a button to start and another button to pause the game. Measure the game duration. When paused, the game duration time should be paused as well. 
* Add a button to finish the game in case no more discs can be placed on the board. Let the players decide, when to use it. No logic implementation required. 
* When the game ends, show a dialog to show the winner, the ratio of dark and light disks, and the game duration.
* You may use the JavaScript functions to implement the game logic here. Pay attention to good QML components rather than JS functions, implementing perfect game logic.


****
