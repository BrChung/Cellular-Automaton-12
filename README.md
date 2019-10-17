# Cellular Automaton 12
 Recreation of Langston's Ant (cellular automaton), four colors

-----Introduction-----
What Does It Do?:
In this program an Ant crawls on a 41x41 2D grid where each cell has an initial color of black. As the ant crawls its direction is changed based on the color of the cell under it. The color is changed to the next color in the sequence as the ant crawls over the cell. (Ant Rules: 1. Black-Right 2. Red-Right 3. Yellow-Left 4. Blue-Left) The ant begins at the center cell facing west/left and is expected to make 1000 steps.

Algorithms Used:
We implemented several algorithms for this project. The program relies on an external library P5.js. The program displays a 41x41 grid square objects that are rendered each time after the ant crawls. The drawGridColor() algorithm renders the 41x41 grid with the colors of each box where the color states are stored in a 41x41 2D array. Next we run the ant_dir() function to determine which direction the ant should be facing based on the color state of the cell the ant is on. Finally we run with move_forward() function which increments the color of the cell that the ant was on as well as moves the ant towards the direction it is facing by decrementing/incrementing the x or y position of the ant. The process is repeated until the ant runs out of predetermined moves.


-----Contents/Files-----
README.txt - The current document you are reading
RUNTIME.pdf - One page document with analysis of the Big-O running time of the algorithm.
assets - Stores the vital algorithm/script that runs the ant (run-ant.js) and styling rules for the html page (styles.css).
webpage - Stores the html file/webpage that is used to run the algorithm
project_reporting - Stores the project tasks pdf as well as standup reports that were 

-----External Requirements-----
External library P5.js is used.
*Script is called through HTML file and no setup/installation is required*

-----Setup and Installation-----
None.

-----Features-----
Ant crawls as expected by the project.

Missing: Would like to add functionality for user to input the amount of steps they would like to see the ant crawl as well as change any of the predetermined rules. Also would like to implement a feature where the user can alter the ant's crawling speed.

-----Bugs-----
If the ant travels outside the predetermined 41x41 square the program will crash.


-----Sample invocation/Usage-----
1. Locate main HTML file (cella-ant-12.html), a web page. This is located in the webpage folder.
 a. Web page links to (loads) assets/styles.css, a very simple CSS file.
 b. Web page has some HTML markup for title, header and text.
 c. After body, web page loads a script file from assets folder (run-ant.js).

How to show (and run) the web page:
2. Drag and drop the html file onto a browser (ex. Google Chrome) to see the ant crawl.
