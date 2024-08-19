# Setting up the Firebase hosing

## One time for each PC
```bash
npm i -g firebase-tools
firebase login
```

## For each project
```bash
firebase init
```
1. Select line that starts with "Host" and the longer one
2. select the existing
3. the select the project name
4. write -> "build" + enter
5. spa? -> answer Y

## For every change in the project---
```bash
npm run build
firebase deploy
```