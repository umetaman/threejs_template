# Three.js template

You can write programs using Three.js just like Unity or openFrameworks.

## Setup
- Install Node.js(npm). 
- Excute these commands to install required packages.
  ```shell
    $ git clone https://github.com/umetaman/threejs_template
    $ cd threejs_template
    $ npm install
  ```

### Required Pakages
- TypeScript
- webpack
- webpack-cli
- ts-loader
- raw-loader
- three
- @types/three

For more infomations, please see package.json.

## How to use this template

Write your programs in ./src/index.ts.

### Setup(): void

The Setup function is called only once when the index.html is loaded.

### Update(): void

The Update function is called many times per seconds.
This function uses requestAnimationFrame function.

### Build your programs

When you executed these commands, bundle.js will be created in ./build.

Build
```shell
$ npm run build
```

Build automatically
```shell
$ npm run watch
```