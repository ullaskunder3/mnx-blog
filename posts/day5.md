---
title: '6 steps to create a pull request'
desc: 'How to contribute to a project on Github, If you are looking to make your first github contribution...'
id: 005
date: 'Jun 11, 2022'
---

## First Contributions

If you're not comfortable with command line then follow this simple steps.

**You need git for this project**, you can install git from [here.](https://git-scm.com/)

## Step 1: fork the repository

fork this repository by clicking the fork icon. This will create a copy of the project in your repository.

![fork image icon](https://docs.github.com/assets/cb-28613/images/help/repository/fork_button.png)

## Step 2: Clone the repository

Clone this repository by clicking the `Code` drop down icon. Then click the copy to clipboard icon.

![copy to clip board icon](https://docs.github.com/assets/cb-33207/images/help/repository/https-url-clone-cli.png)

## Step 3: Clone the repository to your local system

Open a terminal and run the following `git` command from your system:

`git clone <>the repository url<>`

```bash
git clone https://github.com/ullaskunder3/mnx-blog.git
```

**You need to be inside the working directory**, project directory by using `cd <path_to_directory>`

- Do necessary installation `npm install`

## Step 4: Create a new git branch

Now create a branch using the `git checkout` command:

```bash
git checkout -b your-new-branch-name
```

example:

```bash
git checkout -b name-md-blog1
```

**the example branch name is just an example** go nuts(be meaningfull :)).

## Step 5: Make changes to the branch

Now, you can makes any changes to your repository Like adding new markdown, Change up the CSS. Add more files go nuts(the good one😁).

- Make your changes, big or small, and then save it.
- Display the status of the repository with `git status`

```bash
git status
```

output

```bash
On branch name-md-blog1
Your branch is up-to-date with 'origin/name-md-blog1'.
Changes not staged for commit:
bla bla bla
```

- Add your changes locally with git add `<filename>`

```bash
git add how-to-create-readme.md
```

- Commit your changes locally with  `git commit`

example:

```bash
git commit -m "added new markdown" 
```

- Now enter `git push origin <branch_name>` to push the changes to your branch

```bash
git push origin name-md-blog1
```

If you got stuck for the the help or ask `mr.GOOGLE` 🤩;

## Step 6: create pull request

After success `git push` from local you will see `Compare & pull request` button in your forked repository.

Click on `Compare & pull request` button.

![Compare & pull request](https://opensource.com/sites/default/files/uploads/compare-and-pull-request-button.png)

- Add title and write some description

![pull request img](https://i.stack.imgur.com/aJJ1n.png)

Click on `Create pull request` to submit the pull request.

### Soon the branch merged into the main branch of this project. You will get a notification by email

Celebrate your contribution and share it with your friends 😁.