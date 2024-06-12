# cp package2.json package.json
copyfiles -u 1 src/library/assets/icons/*.svg lib/src
copyfiles -u 1 src/library/assets/*/*.json lib/src
copyfiles -u 1 src/library/assets/*/*.ttf lib/src
cp package.json lib