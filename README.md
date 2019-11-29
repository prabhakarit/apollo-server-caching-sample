# apollo-server-caching-sample

#Skyflow studio

__Project structure__
```
studio/
├── .storybook # storybook config addons
├── app        # Frontend SPA
├── beffe      # Backend for frontend, Its the Api gateway for services
├── ci-scripts # build scripts
├── config     # All Configurations
├── scripts    # job scripts
```



##Local setup

__Prerequisites__

* Node > 10.x.x
* npm > 6.x.x



Set npm registry

```
    $ npm config set registry https://prekarilabs.jfrog.io/prekarilabs/api/npm/npm/
```

Authenticate with registry

```
    $ npm login
```

Install the dependencies

```
    $ npm install
```

Generate codegen interfaces

```
    $ npm run generate-types
```

Run the beffe apollo server

```
    $ npm run start:bff
```

Run the app server

```
    $ npm run start:app
```

Running the storybook

```
    $ npm run start-storybook
```

You should be able to see the running application! You are good to go now.

##Building the app

Install dependencies and generate codegen interfaces

Build the app and beffe

```
    $ npm run build
```
The above command builds both app and beffe

Althernatively you can use the below commands if you want to build only either one of them

```
    $ npm run build:app
    $ npm run build:bff
```

Building the stoybook

```
    $ npm run build-storybook
```

The output of app, bff and storybooks will be present at dist, build and .out folders.

##Test suites and linters

Running unit tests

```
    $ npm test
```

Getting the code coverage 

```
    $ npm run test:coverage
```

Running a test for a single component/file

* Install jest-cli 

```
    $ jest <component/filename>
```

To update snapshots

```
    $ jest -u <component/filename>
```

Running integration tests

```
    $ npm run cypress:all
```

Running sonar

```
    $ npm run sonar
```

Running the lint 

```
    $ npm run lint
```

Formatting the code

```
    $ npm run format
```

Generating the graphql schema

```
    $ npm run schema:download
```

##Things to do before commit

* If you have modified beffe schema please download latest schema from local beffe instance and commit it in order to test the app compatibility to changes in beffe during the build process.
* Follow the lint standards.
* Format the source code.

All the above steps are part of pre commit hooks. Hence it is mandatory to complete them before the commit.

##Things to do before PR

* Run the build script locally.
