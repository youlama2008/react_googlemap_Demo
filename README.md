# react_googlemap_Demo

### This is a demo project built by node(express), react, mobx + google map API and styled component

Frontend and Backend are decoupled. Please go to folder 'server and client‘ and install dependencies by running
```
yarn
```

Go to folder 'server' and serve the application at port 3000, run
```
yarn dev || yarn start
```

Go to folder 'client' To run the frontend at port, run
```
yarn start
```

To run the test suite, run
```
yarn test
```

pre-commit and pre-push hook are added, when there is a code change, prettier, eslint and unit test will run as configured


NOTE: Please replace KEY/API_KEY by google map API keys in file 'server/utils/utils.js' and 'client/src/components/CustomMap.js' to see the results


Next step:
Rewrite the app with graphql.
