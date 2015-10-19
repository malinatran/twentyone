##twentyone#

[Game] (malinatran.github.io)  :rocket:  [Public Repo] (github.com/malinatran/malinatran.github.io)

###Objective###
Create a fully functional game of Blackjack, which I aptly refer to as 'twentyone', using a working knowledge of HTML, CSS, JavaScript, and jQuery.
This is a one-player game of with user playing against a dealer (computer). The user has the option of continuing the game in multiple rounds or resetting the game after a loss. First to 21, or closest to 21 without going over, wins.

###Approach####
Pseudocode logic > code > refactor > design
- [x] Identify and declare variables for objects and players, as well as data structures 
- [x] Create a series of basic actions (i.e. player hits, player stays, dealer receives card if hand is less than 17)
- [x] Develop an algorithm to handle Aces, which can be either 1 or 11 depending on the player's hand
- [x] Compare dealer and winner's hands and declare winner based on scenarios (i.e. both player and dealer have less than 21)
- [x] Create options for user to reset entire game or continue playing with bankroll amount

###Unsolved Problems###
- [ ] Cases of property being undefined when player continues the game in consecutive rounds
- [ ] Cases of Aces not being handled properly

###Technical Details###
* Used jQuery methods, such as `.val`, `.css`, `.show`, `.hide`, `.keypress`, `.stopPropagation`, and `.preventDefault`
* Iterated through dealer and player's hands using `for` loop to identify Ace and change its value 
* Used media query to make the website responsive to user's screen size
* Included option to reset game or continue game with same bankroll amount

###Technical Challenges##
* Passing arguments through parameters and ensuring that variables and functions were appropriately passed through a function
* Debugging and tracing through code to identify source of error

##Future Improvements##
* Refactoring to shorten source code
* Implementing more advanced features of the game
