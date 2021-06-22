# Git tips

🔗 https://git-scm.com/  

<br>
<a href="#ssh-keys">SSH keys</a>
<br>
<a href="#clone-the-repository">Clone the repository</a>
<br>
<a href="#create-a-new-branch">Create a new branch</a>
<br>
<a href="#list-branches">List branches</a>
<br>
<a href="#access-a-branch">Access a branch</a>
<br>
<a href="#confirm-what-branch-you-are">Confirm what branch you are</a>
<br>
<a href="#merge">Merge</a>
<br>
<a href="#abort-merge">Abort merge</a>
<br>
<a href="#update-your-branch">Update your branch</a>
<br>
<a href="#update-your-branch-with-a-specific-file">Update your branch with a specific file</a>
<br>
<a href="#undo-push-and-commits">Undo push and commits</a>
<br>
<a href="#compare-two-branches">Compare two branches</a>
<br>
<br>

## SSH keys:

[Checking for existing SSH keys](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)  
[Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#about-ssh-key-generation)  
[Working with SSH key passphrases](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)  
[Adding a new SSH key to your GitHub account](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)  

## Clone the repository:

```
git clone https://github.com/marcelosperalta/study_git
```

## Create a new branch:

```
git checkout -n <branch_name>
```
  
e.g.  

```
git checkout -n marcelo  
```

## List branches:

```
git branch  
```

_usually the branch that you are using has a "*"_  

## Access a branch:

```
git checkout <branch_name>
``` 
  
e.g.  

```
git checkout marcelo  
```

## Confirm what branch you are:

```
git branch  
```

##  Merge:

Update your branch with the latest master branch version  

_references:_  
https://remarkablemark.org/blog/2017/06/02/git-update-branch/  
https://rogerdudler.github.io/git-guide/index.pt_BR.html  

**to switch to branch "master":**  

```
git checkout master
```

**to check your current branch:**  

```
git branch
```

**to update your local master branch with the GitHub master's branch:**  

```
git pull
```

**to merge your local personal branch (e.g. "marcelo") with the local master branch that was updated:**  

```
git checkout marcelo
```

```
git merge master
```

## Abort merge:

```
git merge --abort  
```

## Update your branch:

```
git add .
git commit -m "your comment..."
git push origin <branch_name>
```

## Update your branch with a specific file:

```
git add <filename.xxx>
git commit -m "your comment..."
git push origin <branch_name>
```

## Undo push and commits:

_reference:_  
https://gist.github.com/HashNuke/608259  

**to undo a git push:**  

```
git push -f origin HEAD^:master
```

**to get to previous commit (preserves working tree):**  

```
git reset --soft HEAD
```

**to get back to previous commit (you'll lose working tree):**  

```
git reset --hard HEAD^
```

## Compare two branches:

_reference:_  
https://devconnected.com/how-to-compare-two-git-branches/  

```
git diff branch1..branch2
```

```
git diff branch1...branch2
```
