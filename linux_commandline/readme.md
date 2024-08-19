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
```bash
echo "Hello world" >> fileName
```

### Count lines word and bytes
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

### Numeric sort avoid double
```bash
sort -un file name
```

### Concat files then sort and store
```bash
cat file1 file2 | sort >> newfile
```

