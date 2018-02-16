# Selenium Grid Prototype

## Install
```
npm install
```

## Selenium Grid Console
```
http://localhost:4444/grid/console
```

## Running Tests

## Environment Variables
* `BROWSER` - default `'chrome'`. Comma seperated list of browsers to test eg. `BROWSERS=chrome,firefox`
* `HEADLESS` - default `'false'`. When `true` run tests in headless mode for all available browsers. eg. `HEADLESS=true`
* `ITERATIONS` - default `10`. Number of tests to repeat for each website. eg. `ITERATIONS=10`

## Using Selenium
```
npm run test:e2e
```

## Using Selenium Grid
```
npm run test:grid
```

## Results

| Selenium Grid | Browser | Browsers Avail | Nodes | Iterations | Duration (s) |
| ------------- |:-------:|:--------------:|:-----:|:----------:| ------------:|
| No            | chrome  |       1        |   1   |     20     |        ~ 300 |
| Yes           | chrome  |       5        |   2   |     20     |         ~ 54 |
