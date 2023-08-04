# OpenMCT as a Dependency

This repository serves as an example to guide users on how to build, develop, and test Open MCT when it's used as a dependency.

Please refer to the following showcases for a comprehensive understanding:

- [openmct-yamcs](https://github.com/akhenry/openmct-yamcs)
- [openmct-mcws](https://github.com/NASA-AMMOS/openmct-mcws)

Please note, this is not the starting point for newcomers! To familiarize yourself with Open MCT, refer to the [Open MCT Tutorials](https://github.com/nasa/openmct-tutorial). These tutorials provide step-by-step instructions to help you get started and also address common developer use cases.

## Development

A comprehensive development guide is available [here](https://github.com/nasa/openmct/blob/master/API.md#developing-applications-with-open-mct).

## Building

There are two ways to specify OpenMCT in your build process:

1. Node package hosted on npm:
   This method is ideal if you do not plan to make any changes to the core OpenMCT project or if you are satisfied with using older/stable builds. Specify it in your package.json as follows:
   
```json
"dependencies": {
    "openmct": "stable",
If you want to use a specific version, you can do it like this:

```json
"dependencies": {
    "openmct": "^2.2.5",
```
GitHub repo alias:
This method is suitable if you plan on using recent builds of OpenMCT or if you want to use pre-production versions.

```json
"dependencies": {
    "openmct": "nasa/openmct#master",
```

## Testing
There are two approaches to testing with Open MCT as a dependency: unit tests and e2e (end-to-end) tests.

In both cases, it's essential to gather the devDependencies from the OpenMCT project to run the tests. Implement this with a build step to be executed just before your tests are run:

```json
"build:example": "npm install openmct@unstable --no-save",
"build:example:master": "npm install nasa/openmct#master --no-save",
```

### Unit Tests as a Dependency
Open MCT unit tests are designed to be run with Karma and Jasmine.

### e2e Tests as a Dependency
In addition to our unit test pattern, we also have an established e2e test-as-a-dependency model. It is widely used in both open-source and closed-source repositories. For a good open-source example, please refer to [openmct-yamcs](https://github.com/akhenry/openmct-yamcs/blob/master/tests/README.md)
