import HelloWorldViewProvider from './HelloWorldViewProvider';

export default function plugin() {
    return function install(openmct) {
        openmct.objectViews.addProvider(new HelloWorldViewProvider(openmct));

        openmct.types.addType('hello-world', {
            name: "Hello World",
            description: "Enter a string to be shown on the Hello World View",
            creatable: true,
            cssClass: 'icon-page',
            form: [
                {
                    "key": "string",
                    "name": "String",
                    "control": "textfield",
                    "required": true,
                    "cssClass": "l-input-lg"
                }
            ]
        });
    };
}
