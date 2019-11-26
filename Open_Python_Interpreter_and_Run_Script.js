/*
If you're someone that doesn't want to convert already existing .py 
automation or just prefers using pyautogui this command is a means of running py
files by running the python translator and then passing a .py file as a parameter. 
*/
	
fd.GetAutoIt.Run('path/to/python.exe path/to/your.py'); 
/*
Important - If either path contains a 'u' at the beggining of the directory
name, then it will be interpreted as unicode and will throw 
the following error in the activity log 'Error: Expected Hexidecimal Digit.'
You can avoid the error by reversing '\' in the file path to '/' to prevent
your path from being interpreted as unicode.
Example:

c:\users\JonDoe\foo\bar.txt  - will throw an error

c:/users/JonDoe/foo/bar.txt - Will not
*/
	