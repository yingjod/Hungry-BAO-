# ReadMe Sections

## Description
Hungry Bao! is a game based on the game Frogger. You must take the Bao to the finish line without hitting any obstacles. Should not hit the sauce dish, also not get hit by the steamer or picked from the chopstick.

## Deployment link
This site was built using [GitHub Pages](https://yingjod.github.io/Hungry-BAO-/).


## Getting Started/Code Installation
If you want it to run locally on your machine:
 - Go to the [GitHub repository](https://github.com/yingjod/Hungry-BAO-).
 - Fork it to your own GitHub account
 - Clone in via this green button where it is written <>code and copy the link from SSH
 - Open the terminal and change the current working directory to the location where you want the cloned directory.
 - Type git clone, and then paste the URL of the SSH link you copied earlier in Step 2
 - Press Enter to create your local clone. 
 - You do have the code and all the necessary sources to run it locally on your machine

## Timeframe & Working Team (Solo)
I spent 5 days working independently to build a grid-based game using JavaScript, HTML, and CSS. In my version of Frogger, I replaced the frog with the Bao, who must navigate the course using the keyboard arrow buttons while avoiding all obstacles. The game has two different levels. Once you hit the finish line, the next round will be more difficult.



## Technologies Used

001. HTML
       - Header with name of the game.
       - Division for information bar for level and lives and score.
       - Section for the Grid
       - Audio element for the background music.
       - The button for the game starts and mutes the background music.
    
002. CSS
       - CSS to design the background and organise all the items on the page.
       - Use the transform and -webkit-transform property to flip the image.
         
003. JavaScript
       - key event to move the characters.
       - setInterval to move obstacles.
       - clearIntervel to remove obstacles.
       - Play and Mute background music.
       - Click events to start the game.
       - Grid with Cells including 7 rows and 7 columns in a total of 49 cells.


## Brief








## Planning
The project aimed to provide an enjoyable gaming experience, enhancing skills in JavaScript, HTML, and CSS. The ambition was to create a visually appealing and functional game with clear objectives and progressively challenging levels.






## Build/Code Process


## Insert your Build/Code Process here:

- Day 1 – Initiated the game by sketching a wireframe and creating pseudocode. Developed the HTML structure, styled the User Interface using CSS, and curated images and music for the game.
- Day 2: I utilized JavaScript to construct the grid, incorporating the Bao character. I implemented key functions for Bao's movement and established a start button to initiate the game.
- Day 3- Introduced dynamic obstacles with varying speeds, moving both from right to left and left to right. Implemented elements such as the sauce dish and additional stationary obstacles. Set up a scoring system to track the player's progress. From a technical standpoint, this involved using JavaScript to manipulate the DOM, adjusting element positions, and updating score variables based on user interactions.
- Day 4 – Established a lives counting system with three functions for different collision scenarios. Added a user-friendly end-of-game pop-up and integrated background music. To manage the game state, handle collisions, and enhance the overall gaming experience, a mix of JavaScript functions, event handling, and DOM manipulation was required.
- Day 5 – Added a second level for increased complexity and engagement. Improved the User Interface with refined styles and layout. Emphasized code organization for clarity, maintaining readability despite growing complexity. This involved enhancements to existing JavaScript functions, grid layout adjustments, and CSS styling for a polished user experience.


## Challenges
- Make the lives decrease when the collision happens, whether the Bao hits the enemy or is hit by enemies. We must set up different functions for different situations.
- Disabling the other two surfers while the first one was active.
- Getting the right sound effect to stop playing after 4 seconds when winning or the game is over.
- Making the obstacles move at a higher speed after each round.

## Wins

Working on a project from inception to completion for the first time is a valuable experience where you get to apply what you've learned in a practical setting. It's crucial to recognise the importance of seeking help when encountering challenges or getting stuck on a problem.

## Key Learnings/Takeaways
- Learned how to use setInterval () and clearIntervel().
- Learned how to use CSS to flip the image.
- Learned how to create a grid by using HTML/CSS/JS
- Learned how to use play() and mute() functions to control the audio.
- I learned how to use functions correctly to the exact part to make the code tidy and clean. DRY the code.

## Bugs
When the lives turn to zero, the alert will not pop up immediately. 

## Future Improvements

- Establish the winning status for the game.
- Incorporate diverse music tracks for various in-game events.
- Implement a pop-up to explain the game rules upon loading the page.



