# Progess-Steps
This is Day 2 of my 30 days of Javacript project

So this one's a progress tracker, when you click on next or previous it updates the progress on the progress bar.
I made use of the before pseudo element on CSS. Its being an issue for me recently but I think I get it now.
Step by step procedure:
1. Made the header.
2. Made the container for the progress circles.
3. Added divs for the circles and styled them to be round.
4. Added a before pseudo element to the container for the progress bar when nothing is selected. Positioned it midway verically and made it same color as the circles.
5. Added a progress bar and centered it verticaly giving it a width of zero and positioning it directly above the before pseudo element.
6. Javacript. Got variables for the circles, buttons and the progressbar. Also a variable for active circles.
7. Added onclick event to the buttons. For the next button, it keeps adding 1 to actve circle until its the same as the number of the circles.
For the prev button it keeps subtracting 1 from active circles until its 1.
Then using the value of acyive circles, I loop through the circles and add an "active" class to it if its index+1 is less or equal than active circles.
Then increase the with of the progress bar sequentially ising the index and the number of circles.
