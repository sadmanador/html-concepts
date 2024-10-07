# Command for linux command line

### To see currently logged user
```bash
whoami
```
### To see the manual
```bash
man whoami
```

### watching the manual of the man
man shows the other flags that can be combine with the current command
```bash
man man
```

### Exiting man
```bash
q
```

### Present working directory
```bash
pwd
```

### Checking the other combiner of pwd
```bash
man pwd
```

### Make directory
```bash
mkdir filename
```

### Make multiple directory
```bash
mkdir saturday sunday
```

### Make nested directory
```bash
mkdir -p year/month/day
```

### Make file
```bash
touch index.html
```

### Remove or delete directory
```bash
rm file.css
```

### Remove directory
```bash
rm -r foldername
```

### Ping an IP (google.com)
```bash
ping 8.8.8.8
# control + c -> exit
```

### See list of files and directory
```bash
ls
```

### Opening files or directory outside of the terminal
```bash
open file.css
```

### Open the current directory
```bash
open .
```

### Renaming files or directory
```bash
mv oldFileName NewFileName
```

### Move file
```bash
mv filename1 filename2 folder/
```

### Move folder one folder above
```bash
mv folder/ ../
```

## Copy files and folders

### Copy a file and rename it
```bash
cp oldFile.txt newFileName.txt
```

### Copy nested directory
```bash
cp -r oldfolder/ newfolder/
```

### Copy and renaming
```bash
cd filename directoryNameToMove/newfilename
```

### Head (output the first 10lines from a file)
```bash
head fileName
```

### First specific numbers of line
```bash
head fileName -n 100
```

### Tail (output the last 10lines from a file)
```bash
tail fileName
```

### Last specific numbers of line
```bash
tail fileName -n 100
```

### Continuously printing the last 10lines without getting stop
```bash
tail -f fileName
# best use for log files
```

### Current Date
```bash
date
```

### Storing date in file (redirecting the output)
```bash
touch date.txt
date > date.txt

# it erases the file and only store the date
# solution: appending in the end
date >> date.txt
whoami >> date.txt

#name file need not to exist before, it will make the file
whoami >> newDate.txt
```

### Get the entire file in cmd
```bash
cat file.name
```

### Print multiple file together
```bash
cat file1 file2 file3
```

### cat multiple file and make a new file
```bash
cat file1 file2 file3 >> newFile
```

### cat with line number
```bash
cat -n newFile
```

### less
```bash
less fileName
# opens the file in a new scrollable terminal
#less pages are searchable
# one page go down "space"
# one page go up "b"
# one page go top "g"
# one page go bottom "G"
/searchWord
```

### echo (prints)
```bash
echo "Hello world"
```

### echo and redirect
* append the text into the fileName if the file is already there
```bash
echo "Hello world" >> fileName
```

### Count lines word and bytes
* wc - word count
```bash
wc fileName
```

### piping (check the wc)
```bash
ls -l | wc
```

### storing the number of lines in a file
```bash
cat file1 file2 | wc -l >> newFile
```

### View the sorted info
```bash
sort filename
```

### Sort and make a new file
```bash
sort filename > sortedFile
```

### Numeric sort
```bash
sort -n file name
```

### Numeric sort in descending
```bash
sort -nr file name
```

### Numeric sort avoid double (unique number)
```bash
sort -un file name
```

### Concat files then sort and store
```bash
cat file1 file2 | sort >> newfile
```

### uniq - ignore repeated lines
* if the repeated lines are one after another then uniq will pick one line
* However, if the repeated lines are in intervals, uniq will not work
```bash
uniq fileName
```

### uniq with sort to overcome the interval line issues
* sort will align the repeated line next to each other
* uniq will omit the repeated lines
```bash
sort fileName | uniq
# or use
sort -u fileName
```

### uniq command can only print the duplicate values
```bash
sort fileName | uniq -d
```

### uniq command can only print the non-duplicate values
```bash
sort fileName | uniq -u
```

### uniq command to count that how many times each line have occurred
```bash
sort fileName | uniq -c
```

### sorting the fileName | count the uniq | sort in numerical order
```bash
sort fileName | uniq -c | sort -n
# or sort them in reverse order
sort fileName | uniq -c | sort -nr
# store them in newFile
sort fileName | uniq -c | sort -n >> newFile
```

### echo ~ returns the current working dir
```bash
echo ~
```

### echo $PATH returns the current env path
```bash
echo ~
```

### echo * all current file names
```bash
echo *
```

### echo * only the specific files
```bash
echo *.txt
```

### echo * only the specific files
```bash
echo *.txt
```

### long listing info of the specific files
```bash
ls -l *.txt
```

### files that are same extinction up to 3 character
```bash
echo *.???
```

### remove specific file types
```bash
rm *.js
```

### {} expansion - make multiple files
```bash
touch {a,b,c}.txt
```

### {} expansion - make multiple files with a same name
```bash
touch app.{js,css,py,tsx}
```

### list only the file with same name
```bash
ls app.*
# or
ls app.??
```

### {} expansion - make multiple with numeric serial names
```bash
touch Day{1..365}.txt
```

### find the files that start with certain character
```bash
echo F*
```

### diff - find the differences
* returns the differences
* returns the differences of line number
```bash
diff fileName FileName
```

### diff - find the differences, and open the file side by side
* returns the differences
* returns the differences of line number
```bash
diff -y fileName FileName
```
