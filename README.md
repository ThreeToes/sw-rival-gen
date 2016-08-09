# Requirements
node.js and npm

# Building
1. Get gulp and webpack by running `npm install -g gulp webpack webpack-dev-server typescript`
2. Navigate to the project directory and run `npm update` to download dependencies
3. Run `gulp build` to kick off the build. Output will be in `build/dist`

# Running after building
1. Run `webpack-dev-server --content-base build/dist`. This should start a server at `localhost:8080`