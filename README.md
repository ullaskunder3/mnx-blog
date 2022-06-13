# MnxBlog

Open source is a thankless job. We do it anyway.

The purpose of a blog is to provide content that can help, simplify and guide other even if it small. If you are looking to make your first contribution, follow the steps below.

## First Contributions

If you're not comfortable with command line then follow this simple steps.

**You need git for this project**, you can install git from [here.](https://git-scm.com/)

## Step 1: fork the repository

fork this repository by clicking the fork icon. This will create a copy of the project in your repository.

![fork image icon](https://docs.github.com/assets/cb-28613/images/help/repository/fork_button.png)

## Step 2: Clone the repository

Clone this repository by clicking the `Code` drop down icon. Then click the copy to clipboard icon. click <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-paste" aria-label="The clipboard icon" role="img"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg>.

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
