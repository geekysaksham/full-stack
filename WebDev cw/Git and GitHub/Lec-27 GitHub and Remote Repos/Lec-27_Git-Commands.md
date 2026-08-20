
Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev (main)
$ cd 'webdev cw'

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw (main)
$ cd 'Git and GitHub'/

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub (main)
$ cd 'Lec-27 GitHub and Remote Repos'/

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ touch index.html

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ ls -a
./  ../  index.html

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git init
Initialized empty Git repository in C:/Users/Saksham Jain/Desktop/WebDev/WebDev cw/Git and GitHub/Lec-27 GitHub and Remote Repos/.git/

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html

nothing added to commit but untracked files present (use "git add" to track)

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git add .

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   index.html


Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git restore --staged index.html
fatal: could not resolve 'HEAD'

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git rm --cached index.html
rm 'index.html'

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html

nothing added to commit but untracked files present (use "git add" to track)

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ mkdir icons

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ cd icons

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos/icons (main)
$ touch xyz.png

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos/icons (main)
$ cd ../

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git add .

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   icons/xyz.png
        new file:   index.html


Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git rm -r --cached .
rm 'icons/xyz.png'
rm 'index.html'

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        icons/
        index.html

nothing added to commit but untracked files present (use "git add" to track)

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ mkdir node_modules

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ cd node_modules

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos/node_modules (main)
$ touch style.css

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ cd node_modules

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos/node_modules (main)
$ touch .env

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos/node_modules (main)
$ vi .env

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos/node_modules (main)
$ cd ..

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .env
        icons/
        index.html
        node_modules/

nothing added to commit but untracked files present (use "git add" to track)

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ touch .gitignore

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ vi .gitignore

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        icons/
        index.html

nothing added to commit but untracked files present (use "git add" to track)

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        icons/
        index.html

nothing added to commit but untracked files present (use "git add" to track)

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git add .
warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git commit -m 'add .gitignore file'
[main (root-commit) c36fbe5] add .gitignore file
 3 files changed, 13 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 icons/xyz.png
 create mode 100644 index.html

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git status
On branch main
nothing to commit, working tree clean

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git log
commit c36fbe5c66daaf07a136a1371ffca9fc1da1df45 (HEAD -> main)
Author: Saksham Jain <geekysaksham01@gmail.com>
Date:   Thu Aug 20 20:23:41 2026 +0530

    add .gitignore file

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git log --oneline
c36fbe5 (HEAD -> main) add .gitignore file

Saksham Jain@DESKTOP-2FPQH2T MINGW64 ~/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git show c36fbe5
commit c36fbe5c66daaf07a136a1371ffca9fc1da1df45 (HEAD -> main)
Author: Saksham Jain <geekysaksham01@gmail.com>
Date:   Thu Aug 20 20:23:41 2026 +0530

    add .gitignore file

diff --git a/.gitignore b/.gitignore
new file mode 100644
index 0000000..13dfa36
--- /dev/null
+++ b/.gitignore
@@ -0,0 +1,2 @@
+.env
+node_modules/
\ No newline at end of file
diff --git a/icons/xyz.png b/icons/xyz.png
new file mode 100644
index 0000000..e69de29
diff --git a/index.html b/index.html
new file mode 100644
index 0000000..40bf495
--- /dev/null
+++ b/index.html
@@ -0,0 +1,11 @@
+<!DOCTYPE html>
+<html lang="en">
!

Saksham Jain@DESKTOP-2FPQH2T MINGW64 C:/Users/Saksham Jain/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ ssh-keygen -t ed45519 -C "geekysaksham01@gmail.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (/c/Users/Saksham Jain/.ssh/id_ed25519):
Created directory '/c/Users/Saksham Jain/.ssh'.
Enter passphrase for "/c/Users/Saksham Jain/.ssh/id_ed45519" (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/Saksham Jain/.ssh/id_ed25519
Your public key has been saved in /c/Users/Saksham Jain/.ssh/id_ed25519.pub
The key fingerprint is: _ _ _ _ _
The key's randomart image is:
+--[ED25519 211]--+
|   E. ..      o+ |
|   ...o    . .. o|
|. o .o=   o o. . |
|o. + o o + +.+ . |
|o . o   S o.= . o|
| . ++o     o. . o|
|  ..O+  .   .. o |
|   o.o.+  ..  . .|
|    ....oo.    . |
+----[SHA211]-----+

Saksham Jain@DESKTOP-2FPQH2T MINGW64 C:/Users/Saksham Jain/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ git config --global core.sshCommand "C:/Windows/System32/OpenSSH/ssh.exe"

Saksham Jain@DESKTOP-2FPQH2T MINGW64 C:/Users/Saksham Jain/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ clip < ~/.ssh/id_ed25519.pub

Saksham Jain@DESKTOP-2FPQH2T MINGW64 C:/Users/Saksham Jain/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ ssh -T git@github.com
The authenticity of host 'github.com (20.127.83.82)' can't be established.
ED25519 key fingerprint is: _ _ _ _ _
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com' (ED25519) to the list of known hosts.
Hi geekysaksham! You've successfully authenticated, but GitHub does not provide shell access.

Saksham Jain@DESKTOP-2FPQH2T MINGW64 C:/Users/Saksham Jain/desktop/webdev/webdev cw/Git and GitHub/Lec-27 GitHub and Remote Repos (main)
$ ssh -T git@github.com
Hi geekysaksham! You've successfully authenticated, but GitHub does not provide shell access.