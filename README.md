# Modern States Speed Options  
![Speed Options Thumbnail](https://user-images.githubusercontent.com/90817905/209464137-492fc59f-70ba-4de6-899c-846efb77b3eb.png)

UserScript adding more video speed options for the Modern States (CLEP Exam Prep) website.  
Can be used via a scripting browser extension (ex. TamperMonkey)  

## Installation and Usage Instructions  
1. Install a userscript manager, like [TamperMonkey](https://www.tampermonkey.net/), as a browser extension
2. [Click here](https://greasyfork.org/en/scripts/457152-modern-states-speed-options) to install the script via GreasyFork
3. Enjoy! The script should automatically run on all modernstates course pages, extending your video speed options up to 2.5x!  

## Technical Details
- Script runs on all `courses.modernstates.org/courses/` pages
- Script looks for the video speed options element in the page
- If video speed options are present, script creates 4 additional options (speeds for 1.75 to 2.5), and prepends them to the options list
- Script re-runs each time the page title changes
  - This is done to handle page content changing without changes to the URL, e.g. when navigating between chapters in a course
