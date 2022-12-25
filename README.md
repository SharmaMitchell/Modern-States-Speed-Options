# Modern States Speed Options  
![Speed Options Thumbnail](https://user-images.githubusercontent.com/90817905/209464137-492fc59f-70ba-4de6-899c-846efb77b3eb.png)

UserScript adding more video speed options for the Modern States (CLEP Exam Prep) website.  
Can be used via a scripting browser extension (ex. TamperMonkey)  

## Installation and Usage Instructions  
1. Install a userscript manager, like [TamperMonkey](https://www.tampermonkey.net/), as a browser extension
2. [Click here](https://raw.githubusercontent.com/SharmaMitchell/Modern-States-Speed-Options/main/script.js) to open the script's code, prompting your userscript manager to install the script
3. Enjoy! The script should automatically run on all modernstates course pages, extending your video speed options up to 2.5x!  

As an alternative to step 2 (if the above method doesn't work):  
- Click on "script.js" above
- Click "raw" above the code
- If this does not prompt your userscript manager to install the script, open your userscript manager and follow the steps below.
  - Create a new script (e.g. for TamperMonkey, click the extension icon & click the Create Script tab (icon with a plus symbol))
  - Delete the placeholder script code, if there is any (e.g. everything in the "new script" window)
  - Copy and paste the code from this extension (the raw code) into the new script, and save it (file -> save)
  - Viola! The script should automatically run on all modernstates course pages, extending your video speed options up to 2.5x!
  
## Technical Details
- Script runs on all `courses.modernstates.org/courses/` pages
- Script looks for the video speed options element in the page
- If video speed options are present, script creates 4 additional options (speeds for 1.75 to 2.5), and prepends them to the options list
- Script re-runs each time the page title changes
  - This is done to handle page content changing without changes to the URL, e.g. when navigating between chapters in a course
