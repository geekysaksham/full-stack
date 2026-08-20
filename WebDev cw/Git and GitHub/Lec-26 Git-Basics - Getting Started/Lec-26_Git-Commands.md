<!-- Git Commands -->

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~
$ git -v
git version 2.55.0.windows.4

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~
$ pwd
/c/Users/Saksham Jain

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~
$ cd desktop; cd webdev; cd 'webdev cw'; cd 'git and github';

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github (main)
$ cd 'Lec-26 Git-Basics - Getting Started'/

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ touch index.html

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ mkdir javascript

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ rm index.html

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ rm javascript
rm: cannot remove 'javascript': Is a directory

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ rm -rf javascript

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ touch index.html

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git config --global user.name
Saksham Jain

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git config --global user.email
geekysaksham01@gmail.com

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ vi index.html

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git init
Initialized empty Git repository in C:/Users/Saksham Jain/Desktop/WebDev/WebDev cw/Git and GitHub/Lec-26 Git-Basics - Getting Started/.git/

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ ls
index.html

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ ls -a
./  ../  .git/  index.html

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ ls -la
total 9
drwxr-xr-x 1 Saksham Jain 197121   0 Aug 20 17:50 ./
drwxr-xr-x 1 Saksham Jain 197121   0 Aug 20 17:26 ../
drwxr-xr-x 1 Saksham Jain 197121   0 Aug 20 17:50 .git/
-rw-r--r-- 1 Saksham Jain 197121 237 Aug 20 17:49 index.html

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ ls -l
total 1
-rw-r--r-- 1 Saksham Jain 197121 237 Aug 20 17:49 index.html

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ cat .git
cat: .git: Is a directory

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ cat index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Git-Basics</title>
</head>
<body>
    <h1>Hello Dosto</h1>
</body>
</html>
Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ cd .git

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started/.git (GIT_DIR!)
$ ls
HEAD  config  description  hooks/  info/  objects/  refs/

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started/.git (GIT_DIR!)
$ ls -a
./  ../  HEAD  config  description  hooks/  info/  objects/  refs/

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started/.git (GIT_DIR!)
$ cat head
ref: refs/heads/main

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started/.git (GIT_DIR!)
$ cat config
[core]
        repositoryformatversion = 0
        filemode = false
        bare = false
        logallrefupdates = true
        symlinks = false
        ignorecase = true

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started/.git (GIT_DIR!)
$ cat description
Unnamed repository; edit this file 'description' to name the repository.

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started/.git (GIT_DIR!)
$ cd hooks

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started/.git/hooks (GIT_DIR!)
$ ls
applypatch-msg.sample*      pre-commit.sample*        prepare-commit-msg.sample*
commit-msg.sample*          pre-merge-commit.sample*  push-to-checkout.sample*
fsmonitor-watchman.sample*  pre-push.sample*          sendemail-validate.sample*
post-update.sample*         pre-rebase.sample*        update.sample*
pre-applypatch.sample*      pre-receive.sample*

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started/.git/hooks (GIT_DIR!)
$ pwd
/c/Users/Saksham Jain/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started/.git/hooks

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started/.git/hooks (GIT_DIR!)
$ cd ../../

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ touch style.css

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ ls
index.html  style.css

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html
        style.css

nothing added to commit but untracked files present (use "git add" to track)

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git add index.html

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        style.css


Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git rm --cached index.html
rm 'index.html'

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html
        style.css

nothing added to commit but untracked files present (use "git add" to track)

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git add index.html

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        style.css


Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git commit -m 'My first commit'
[main (root-commit) 3b28757] My first commit
 1 file changed, 11 insertions(+)
 create mode 100644 index.html

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git log
commit 3b287577b9a8aa5defa2f3c72b64d618892b559e (HEAD -> main)
Author: Saksham Jain <geekysaksham01@gmail.com>
Date:   Thu Aug 20 18:08:07 2026 +0530

    My first commit

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git log --oneline
3b28757 (HEAD -> main) My first commit

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git add style.css

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   style.css


Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git restore --staged style.css

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git status
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        style.css

nothing added to commit but untracked files present (use "git add" to track)

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ touch products.js

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git status
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        products.js
        style.css

nothing added to commit but untracked files present (use "git add" to track)

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git add .

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   products.js
        new file:   style.css


Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git commit -m 'My second commit'
[main b29f750] My second commit
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 products.js
 create mode 100644 style.css

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git log
commit b29f750af40908b337cdc62d661b4d2a05968da2 (HEAD -> main)
Author: Saksham Jain <geekysaksham01@gmail.com>
Date:   Thu Aug 20 18:19:10 2026 +0530

    My second commit

commit 3b287577b9a8aa5defa2f3c72b64d618892b559e
Author: Saksham Jain <geekysaksham01@gmail.com>
Date:   Thu Aug 20 18:08:07 2026 +0530

    My first commit

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git show 3b287577b9a8aa5defa2f3c72b64d618892b559e
commit 3b287577b9a8aa5defa2f3c72b64d618892b559e
Author: Saksham Jain <geekysaksham01@gmail.com>
Date:   Thu Aug 20 18:08:07 2026 +0530

    My first commit

diff --git a/index.html b/index.html
new file mode 100644
index 0000000..bf268d4
--- /dev/null
+++ b/index.html
@@ -0,0 +1,11 @@
+<!DOCTYPE html>
+<html lang="en">
+<head>
+    <meta charset="UTF-8">
+    <meta name="viewport" content="width=device-width, initial-scale=1.0">
+    <title>Git-Basics</title>
+</head>
+<body>
+    <h1>Hello Dosto</h1>
+</body>
+</html>
\ No newline at end of file

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/git and github/Lec-26 Git-Basics - Getting Started (main)
$ git show b29f750af40908b337cdc62d661b4d2a05968da2
commit b29f750af40908b337cdc62d661b4d2a05968da2 (HEAD -> main)
Author: Saksham Jain <geekysaksham01@gmail.com>
Date:   Thu Aug 20 18:19:10 2026 +0530

    My second commit

diff --git a/products.js b/products.js
new file mode 100644
index 0000000..e69de29
diff --git a/style.css b/style.css
new file mode 100644
index 0000000..e69de29