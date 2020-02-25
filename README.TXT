1.git init
2.git config user.name "somemdmone"
3.git config user.email "someone@someplace.com"
4.touch .gitignore
5.git add *
6.git commit -m "some init msg"
7.git remote add origin https://github.com/user/repo.git  OR
  git remote add origin git@github.com:username/new_repo
8.git push origin master -f OR
  git push -u origin master
