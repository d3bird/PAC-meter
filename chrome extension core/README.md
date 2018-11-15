These are the core files for the unpacked chrome extension

# how to modify the javascripts
The web scrapper requires node libraries to run; however, chrome extetnions only allow one scipt to run at a time.
So everything that the extention should do, should be located in the popup.js

Inorder to compile all of the node.js lib into the popup.js you have to run  watchify popup.js -o popup2.js in a seprate console window in the same dir. 

if you do not compile everything into popup2 then the added code will not run in the chrome extetnion.
