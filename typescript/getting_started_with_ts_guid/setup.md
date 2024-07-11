## Installation

npm i -g typescript

tsc -v

## Create tsconfig.json

tsc --init

specify the root directory `rootDir` and distination `outDir` directory of your project

## Compile

`tsc` complies all .ts files in the current directory
`tsc file1.ts` compiles specific files

## Debugging

`sourceMap: true` in `tsconfig.json`
run `tsc` to generate sourcemap. (shows how ts compiles to js)

vscode -> debug -> launch -> launch.json -> add `"preLaunchTask": "tsc: build - tsconfig.json",` to configurations in the launch.json file. (update the path to the tsconfig.json file if nested folders.
Also update the program and output file paths if required.)

## Run js file

`node dist/index.js`
