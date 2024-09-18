# Vim Commands Reference

### File Operations

- **Open file in Vim:**

```bash
vim filename.txt
```

Opens the specified file in Vim. If the file doesn’t exist, it creates a new one.

- **Exit from the open file:**

```bash
:q

```

Exits Vim. If there are unsaved changes, Vim will warn you.

- **Exit without saving changes:**

```bash
:q!

```

Exits Vim and discards any unsaved changes.

- **Write (save) and exit:**

```bash
:wq

```

Saves changes and exits Vim.

### Insert Mode

- **Enter insert mode with cursor before the current character:**

```bash
i

```

- **Enter insert mode with cursor after the current character:**

```bash
a

```

- **Enter insert mode with cursor in the next line:**

```bash
o
```

- **Enter insert mode with cursor at the end of the current line:**

```bash
A
```

- **Enter insert mode with cursor at the beginning of the current line:**

```bash
I
```

- **Escape from insert mode:**

```bash
esc
```

### Visual Mode

- **Enter visual mode (character-based selection):**

```bash

v
```

- **Exit visual mode:**

```bash
esc
```

### Editing Text

- **Delete line and enter insert mode:**

```bash
cc
```

- **Replace a single character under the cursor:**

```bash
r
```

- **Delete a whole word:**

```bash
diw
```

- **Delete 2 words:**

```bash
2dw
```

- **Undo the last action:**

```bash
u
```

- **Undo the last 5 actions:**

```bash
5u
```

- **Copy (yank) selected text:**

```bash
y
```

- **Copy the whole line:**

```bash
yy

```

- **Paste text after the cursor:**

```bash
p
```

### Navigation

- **Move up a line:**

```bash
arrow-up or k
```

- **Move down a line:**

```bash
arrow-down or j
```

- **Jump to a specific line number and navigate with arrows:**

```bash

:<line number> + up-arrow/down-arrow
```

### Miscellaneous

- **Open terminal command (from within Vim):**

```bash
:! ls
```

### Additional Notes

- Make sure to use :w to save changes if you only want to write changes without quitting.
