## Read 02: the Coder's Computer
### Terminal commands (Ubuntu)
- pwd: Print working Directory, this shows us our current location in the command line. 
- ls: list, will list all of the files and directories that are directly within our current location. 
- cd: Change Directory, this will move us to a new location on the command line. 
- ls -a: Lists everything including hidden files. 
- command k: Clears the terminal 
- cd ~: takes us back to the root directory 
- mkdir: makes a new directory 
- cd ..: Takes you back one on the command line 
- rmdir: removes a directory
***
- Better Comments 
- Error Lens 
- ES7+ React/Redux/React-Native snippets 
- ESLint 
- Indent-rainbow 
- Live Server 
- Prettier 
- Code Formatter 
- Thunder Client 
- vscode-icons
### What is git?
- it is local repository
### What is GitHub?
- it is remote repository
- not git
- online place to keep your code
### What is repository?
- it is a collection of files 
- files are written in .md format
- to create repository on GitHub:
    - Tick README.md box (it will create Markdown document)
    - go to settings
    - click pages on left hand side menu
    - pick *main* then *root*
    - Save
### Connecting VSC with GitHub:
- make new repository
- make sure SSH selected when pressing code - green button <> Code
- copy and paste into Ubuntu making sure you know what path you are in.
- git clone (paste address from gitHub)
- git:() in blue - it is from gitHub
- main- shows you  are in a main branch
- check git status (to see that its not uploaded: red) - it can be run after every command listed below
- git add . (will commit all uncommited files)
- git commit -m "update" (will commit with a message)
- git push
### How to open VSC via Terminal:
~pwd
*displays name of the folder*
~cd reading-notes-bootcamp
Reading-notes-bootcamp git: (main) code .
### Creating folder:
- to store your websites
- save files in appropriate folder or subfolders within the main website folder
- make sure that files have correct extensions at the end of the file names:
    - HTML - index.html
    - CSS - style.css
### Third Party Editors:
- Notepad++
- Text Wrangler
- BB Edit
- Visual Studio Code
- Atom
- Brackets 
- Sublime Text

**Git cloning and pushing manual to be found [Here](https://pages.github.com/)**
[Basic Linux Commands](https://maker.pro/linux/tutorial/basic-linux-commands-for-beginners)

### Questions and answers:
1.	What are four important features to look for in a text editor?
- code completion - **allows you to start typing, and the code completionfeature will display possible suggestions based on what you originally typed.** Some code completion includes the closing of tags when you open them, or the closing of brackets when you open them, or the closing of quotation marks when you open them, thus making sure you’re always writing your code.
- syntax highlighting - **is a feature that takes the text you type, and makes it more noticeable by colorizing the text**. Attributes are a different color than elements. And elements are a different color than copy.
- a nice variety of themes **(to reduce eye strain and fatigue)** - themes will allow you to change the color of the background of your text editor, the series of colors in your text, and sometimes themes will affect other aspects of your text editing software as well.
- extensions when needed - Extensions are like plugins for your text editor, that **allow you to have superpowers that you wouldn’t have otherwis**e**. A text editor that has a great selection of extension will ensure that you have the ability to add functionality as you need it.
*Additional*: Emmet - shorthand language, speeds up your code writing faster than you can
imagine.
2.	What do the following commands do?
- pwd
- ls
- cd
- mkdir
- touch
3.	Can you explain what is happening in the following scenario if these commands and arguments are entered into the command line? (Arguments are extra instructions given to a command.)
- cd projects
- mkdir new-project
- touch new-project/newfile.md
- cd ..
- ls projects/new-project
