### 类Unix系统下的常用的Terminal及Vim主题设置

1. Mac OS X下的Terminal、iTerm 扁平化主题设置

   https://dribbble.com/shots/1021755-Flat-Terminal-Theme

   ![](https://cdn.dribbble.com/users/135757/screenshots/1021755/flat_terminal.png)

2. Ubuntu下扁平化终端主题（选择Flat）：

   http://mayccoll.github.io/Gogh/

3. vim的主题设置（同时支持Jetbrains全家桶、Xcode等）

   https://github.com/raphamorim/lucario

   编辑~/.vimrc文件，加入以下：

   `set background=dark`
   `colorscheme lucario`

4. vim显示空格

   如果你对代码缩进也像我这样比较执着的话，可以这样让vim显示出空白字符：

   1）编辑~/.vimrc文件，加入以下：

   `" Show special charactors`
   `set listchars=space:◦`
   `set list`

   2）编辑*~/.vim/colors/lucario.vim*文件，修改*SpecialKey*这一行：

   hi SpecialKey **ctermfg=grey ctermbg=NONE** cterm=NONE guifg=#61bbc8              guibg=#405160 gui=NONE