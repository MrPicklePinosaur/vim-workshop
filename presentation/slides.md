%title: vim - return to monke
%author: pinosaur
%date: 2021-06-05


```
                                       
                        _              
                 __   _(_)_ __ ___     
                 \ \ / / | '_ ` _ \    
                  \ V /| | | | | | |   
                   \_/ |_|_| |_| |_|   
                        return to monke
                                       
```

-------------------------------------------------

-> **the heck is vim?** <-

-> a quick demonstration <-

-------------------------------------------------

-> **try it out** <-

## web [recommended]
i have a hosted version of vim for you to try out [here](https://vim.danieliu.xyz)
the web version comes with my configuration file builtin

## vscode
get the extension [here](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)

## sublime text
how to guide [here](https://www.sublimetext.com/docs/vintage.html)

## terminal
git bash / wsl / linux installations should come with vi
by default

-------------------------------------------------

-> **modal text editor** <-

normal mode:   moving
insert mode:   editing
visual mode:   highlighting
command mode:  automating

-------------------------------------------------

-> **normal mode** <-
-> the basics <-

## basic movement
h j k l

## word movement
w b e ge

## line movement
0 ^ $

## file movement
gg G

-------------------------------------------------

-> **normal mode** <-
-> deleting and history <-

## single character
x r

## generic deleting
d<motion> [what's a motion???]

^
## undo/redo
u <C-r>

-------------------------------------------------

-> **normal mode** <-
-> clipboard <-

## copy
y<motion>

## paste
p

## using registers
"<buffer>y "<buffer>p

-------------------------------------------------

-> **normal mode** <-
-> multipliers & repeaters <-

## repeating a command
<number><command>

## repeating previous command
.

-------------------------------------------------

-> **normal mode** <-
-> searching <-

## searching
/<search>  [tip: this works with regex!]

## cycle matches
n N

-------------------------------------------------

-> **insert mode** <-
-> good old fashioned text editor <-

## entering insert mode
i I a A o O

## replacing
c<motion>

## leaving insert mode
<esc>

-------------------------------------------------

-> **visual mode** <-

## visual
v

## visual line
V

## visual block
<C-v> 

^
## inserting on multiple lines
<C-v>I<esc>

-------------------------------------------------

-> **command mode** <-
-> exiting and saving <-

## exiting
:q

## saving
:w

-------------------------------------------------

-> **command mode** <-
-> working with files <-

## opening netrw
:Ex OR <space>+f

## go to next buffer
:bn OR <space>+l

## go to previous buffer
:bp OR <space>+h

## closing buffer
:bd OR <space>+d

-------------------------------------------------

-> **buffers, windows, tabs - what is the deal?** <-

-------------------------------------------------

-> **command mode** <-
-> search & replace <-

## visual substituting
:s/<search>/<replace>/g

## global substituting
:%s/<search>/<replace>/g

-------------------------------------------------

-> **advanced tips** <-
-> random cool things (that you may or may not need) <-

## changing case
~ gu gU

## incrementing/decrementing numbers
<C-a> <C-x>  [bonus: on letters too]

## moving vertically faster
<C-u> <C-d> {}

## moving sentences
()

## operations on brackets
di( da(

-------------------------------------------------

-> **advanced tips** <-
-> macros <-

q<letter> to record
q again to stop
@<letter> to call macro

-------------------------------------------------

-> **advanced tips** <-
-> plugins <-

-------------------------------------------------

-> **wanna learn more?** <-

type `vimtutor` in git bash/wsl/linux to get full tutorial

personal plug: find my vim config on [github](https://github.com/MrPicklePinosaur/dotfiles/blob/master/.vimrc)

