import { createApp } from 'vue';
import HelloWorldComponent from './components/HelloWorldComponent.vue';

export default function HelloWorldViewProvider(openmct) {
    return {
        key: 'webPage',
        name: 'Web Page',
        cssClass: 'icon-page',
        canView: function (domainObject) {
            return domainObject.type === 'hello-world';
        },
        view: function (domainObject) {
            let appInstance;

            return {
                show: function (element) {
                    // Create a new Vue application instance for the component
                    appInstance = createApp(HelloWorldComponent, {
                        openmct: openmct,
                        domainObject: domainObject
                    });

                    // Mount the Vue application to the DOM element
                    appInstance.mount(element);
                },
                destroy: function () {
                    if (appInstance) {
                        // Unmount the Vue application from the DOM element
                        appInstance.unmount();
                        appInstance = null;
                    }
                }
            };
        },
        priority: function () {
            return 1;
        }
    };
}
