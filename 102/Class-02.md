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
- rmdir: removes a directory, only empty directory
- man & --help: to know more about a command and how to use it. It shows the manual pages of the command. 
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
reading-notes-bootcamp git: (main) code .  
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
- pwd -in what directory you are/home directory of your user/where you are in git
- ls -what files are in the directory we are in. Hidden files are to find by typing ~ls -a
- cd -'change directory', that command goes to directory. Other similar commands: 'cd Downloads',  'cd ..' - use it to go back from a folder to the folder before that.
- mkdir -creates folder or directory, e.g., mkdir DYI to create DIY directory
- remeber to use '/' instead of space when used name has two or more elements
- touch - use it ot create file
3.	Can you explain what is happening in the following scenario if these commands and arguments are entered into the command line? (Arguments are extra instructions given to a command.)
- cd projects - changes current directory to new directory 'projects'
- mkdir new-project - creates new directory 'new-projects'
- touch new-project/newfile.md - creates a file newfile.md within 'new-project'
- cd .. - goes back from a folder to the folder before that
- ls projects/new-project - will list all the files and directories in the 'projects/new-project directory'.
## Read 03: Revision and the Cloud
### Questions and Answers:
1. What is Version Control?
> Version control is a system that records changes to a file 
> or set of files over time so that you can recall specific versions later.
> It allows you to revert selected files back to a previous state, revert the entire project back to a
> previous state, compare changes over time, see who last modified something that might be causing a 
> problem, who introduced an issue and when, and more.
2. What is cloning in Git?
> primarily used to point to an existing repo and make a clone or copy of that repo at in a new 
> directory, at another location.The original repository can be located on the local filesystem or on 
> remote machine accessible supported protocols.
3. What is the command to track and stage files?  
'git add'
4. What is the command to take a snapshot of your changed files?  
'git commit' that action cane be *labeled* via e.g., 'git commit -m 'update'
5. What is the command to send your changed files to Github?  
'git push'