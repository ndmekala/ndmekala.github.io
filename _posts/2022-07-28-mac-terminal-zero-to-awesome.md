---
layout: post
title: Taking Your Mac Terminal from Zero to Awesome
categories: dev
---
I’ve had mixed feelings about the terminal. On one hand, I’m a big fan of controlling a computer using primarily the keyboard. I use apps like Magnet, Things 3, and Alfred with keyboard shortcuts to perform as many actions as I can without taking my hands off the keyboard. On the other hand, the terminal seemed to be intimidating and have a steep learning curve.

Encountering [Takuya Matsuyama](https://www.craftz.dog/) changed that. He’s written and made videos about how he sets up his terminal for development. I realized that how he uses his terminal is *easier* than what I had been doing. Yes, when you take your first steps with `cd` and `ls`, you’re interacting with the terminal at its *most difficult* not it’s *easiest*.

Starting out with the raw terminal is like parallel parking a stick shift for your first driving lesson. I want to make your terminal experience more like circling a cul-de-sac in an automatic transmission vehicle.

What follows is a quick and easy guide to make your terminal experience more seamless and enjoyable (i.e. awesome!) using **Hyper** on a **Mac** with **zsh** (which has been the default shell on Mac since Catalina).

We are going to install…
- The [Powerlevel10k](https://github.com/romkatv/powerlevel10k) theme (with nerd fonts) to provide more useful information on the command line
- Two utilities that beef up basic command line functions:
	- `z` for directory jumping
	- `exa` for better file listing

## Prerequisites
1. [Homebrew](https://brew.sh/), a free macOS package manager, installed. *We’ll use this to efficiently download software.*
2. [Git](https://git-scm.com/) command line interface installed. *We’ll use this to clone git repositories.*

## Step 1: Downloading Hyper
Hyper stood out to me for a few reasons. I read Josh Comeau’s recent [article](https://www.joshwcomeau.com/javascript/terminal-for-js-devs/) about it and saw it’s pane splitting capabilities and that it was built with the web technologies I was most familiar. After briefly testing it out, I was sold. My favorite feature is the pane splitting, which is intuitive to use. I also like that I can view developer tools (yes, just like you would on a webpage in Chrome 🤯) and inject CSS to tweak the user interface.

You can download the Hyper app from the Hyper [website](https://hyper.is/).

> Note: I would also recommend [iTerm2](https://iterm2.com/) as a great terminal option!

## Step 2: Download and Install the Powerlevel 10k Theme
The default view from the terminal tells you which user you are using and not much else. This is not very useful, but applying a *theme* to z shell can change this so that the prompt line gives you information about the path to your current directory and its git status.

Before doing this, you should install a [nerd font](https://www.nerdfonts.com/). Nerd fonts are fonts patched with special glyphs to enhance the terminal experience. For example, a nerd font will have a UNIX penguin glyph that occupies just a single character width and a git branch glyph among many others.

To install a nerd font:
1. Run this homebrew prompt: `brew tap homebrew/cask-fonts`.
2. Browse [this](https://www.nerdfonts.com/font-downloads) page to decide which font you want to use. (I have been using Fira Code.)
3. Run a homebrew prompt to install a specific font: `brew install --cask font-[FONTNAME]-nerd-font`. (If you encounter issues, all the fonts are listed [here](https://github.com/Homebrew/homebrew-cask-fonts/tree/master/Casks))
4. Edit the `fontFamily` field of the `.hyper.js` file to include the name of your nerd font first.

Install Powerlevel10k and reference it in your runtime configuration file using the following prompts:

`brew install romkatv/powerlevel10k/powerlevel10k`

`echo "source $(brew --prefix)/opt/powerlevel10k/powerlevel10k.zsh-theme" >>~/.zshrc`

To get set up, all you need to do is run `exec zsh` to restart Zsh, and type in `p10k configure` to set up the theme (if configuration does not start automatically). Note that you can edit the theme at any time by running the `p10k configure` command.

> Tip: I like choosing the rainbow, lean, or pure themes because they default to pulling from your terminal’s color scheme. This allows flexible tweaking of your shell theme through your terminal theme—which is a cinch with Hyper.

## Step 3: Download and Install Utilities
### Download and Install `z`
`z` is an incredibly useful shell utility. Typically when navigating around the shell you will use the `cd` command to move very carefully from directory to directory. For those of us who don’t have our system’s file structure memorized this normally means `cd`-ing up and down a single directory at a time.

`z` helps this go *a lot* more smoothly. It takes a regex parameter and automatically sends you to the directory you most likely mean based on frequency and recency. For example, instead of typing `cd ~/Repositories/ndm-notes/` to access my personal note repository, I just hit `z nd`, press enter, and I’m there.

To install it, we need to…
1. Download `z.sh` from [this](https://github.com/rupa/z/) repository.
2. Tell our `.zshrc` file (the **z** **sh**ell **r**untime **c**onfiguration file located at ours system’s home directory) where we’ve put `z.sh`.

You can download `z.sh` with a single command line prompt. The following script will create a directory in your home folder called `.z-jump` (you can make this whatever you like by tweaking the relevant commands) and download `z.sh` to that directory:

`mkdir ~/.z-jump && curl https://raw.githubusercontent.com/rupa/z/master/z.sh > ~/.z-jump/z.sh`

We need to include a line with a path to `z.sh` in our `.zshrc` file. The following command will do that:

`echo ". ~/.z-jump/z.sh" >> ~/.zshrc`

Now that the script is installed, all you need to do is reload your runtime configuration file (by running `exec zsh`), and load up the database by `cd`-ing around your computer. Following these steps should enable the `z` command and simplify your terminal workflow.

### Download and Install `exa`
The command line [tool](https://the.exa.website/) `exa` is a replacement for the `ls` command. It has a ton of awesome features including:

- colors 🎉
- ability to display git information
- ability to display more file information
- options to display a file tree
- options to ignore particular directories or everything in your `.gitignore` file (we’re looking at you, `node_modules` 👀)

Downloading and installing is simple:

`brew install exa`

<!--## Step 4: Configure `nvim` with `lualine`

*Note: it’s important that you’ve installed nerd fonts in order for Lualine to work properly.*

You can install Neovim with Homebrew:

`brew install neovim`

Now in order to install lualine, we need to first configure `vim-plug`. Do that with the following prompt:

`sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
       https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
       
<<This is the area where I go the most rogue so to speak - I need to either confirm this on another system or put in disclaimers before posting. And that might mean I put a pin in this post… would be a shame though… >>

- Create .config/nvim/init.vim
- Add ~ THE mystery of line ~
- Add lualine text in there (vim - plug plus that lil script)

<<>>!!!

Next, create ??!

-->

## Step 4: Select Themes
Shop around for themes you’d like to use for Hyper. (If you follow my recommendations, you can have your shell theme follow your terminal theme.) I also use Neovim and Lualine, so I only focus on themes available for all of those pieces of software. You can find themes with install instructions on the [Hyper website](https://hyper.is/themes). You can try searching for packages on the [npm website](https://www.npmjs.com/) as well.

Here are some themes I’ve found that support all three:
- [Solarized Dark](https://www.npmjs.com/package/hyper-solarized-dark)
- [Nord](https://www.npmjs.com/package/nord-hyper)
- [Dracula](https://www.npmjs.com/package/hyper-dracula)
- [Everforest](https://www.npmjs.com/package/hyper-everforest)

## Recap and Conclusion
I’ve tried to make nearly every action step in this performable in the command line. You shouldn’t need to leave the terminal too much to proceed through this instructional and get your terminal up and running.

The terminal doesn’t have to be intimidating or unappealing to use. There are a lot of utilities that make using it a lot less painful and I’m personally excited to keep using the terminal as much as I can and discover more awesome utilities as I go! Hopefully this little guide will get you started on a journey of terminal usage—or at least make your terminal a little bit more awesome.
