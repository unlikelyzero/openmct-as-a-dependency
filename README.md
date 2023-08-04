# openmct-as-a-dependency
This is an example repo to help users build, develop and test Open MCT when used as a dependency.

The best showcases are available here:
https://github.com/akhenry/openmct-yamcs
and
https://github.com/NASA-AMMOS/openmct-mcws

This is not the place to get started! The best place to start is with the [Open MCT Tutorials](https://github.com/nasa/openmct-tutorial). These will walk you through the process of getting up and running with Open MCT, as well as addressing some common developer use cases.

## Development
Development guide is available [here](https://github.com/nasa/openmct/blob/master/API.md#developing-applications-with-open-mct)

## Building
There are two ways of specifying openmct in your build process:
1. node package hosted on npm
Best if you have no plans to implement changes to the core openmct project or your satisfied with using older/stable builds. In your package.json:
```json
  "dependencies": {
    "openmct": "stable",
```
Or to specify a specific version number
```json
  "dependencies": {
    "openmct": "^2.2.5",
```

2. Github repo alias
Best if you plan on using recent builds of openmct or want pre-production versions.
```json
  "dependencies": {
    "openmct": "nasa/openmct#master",
```

## Testing
Testing with Open MCT as a dependency is possible with two approaches: unit tests and e2e tests.

In both cases, it's required to gather the devDependencies from the openmct project to run the tests. The best approach is with a build step which should be executed just before your tests are executed:

```json    
"build:example": "npm install openmct@unstable --no-save",
"build:example:master": "npm install nasa/openmct#master --no-save",
```

### Unit Tests as a dependency
Open MCT unit tests are designed to be run with karma+jasmine.

### e2e Tests as a dependency
In addition to our unit test pattern, we also have an established e2e-test-as-a-dependency model which is used in open and closed source repos. The best open source example is [openmct-yamcs](https://github.com/akhenry/openmct-yamcs/tree/master/tests)
