import Vue from 'vue';
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
            let component;

            return {
                show: function (element) {
                    component = new Vue({
                        el: element,
                        components: {
                            HelloWorldComponent: HelloWorldComponent
                        },
                        provide: {
                            openmct,
                            domainObject
                        },
                        template: '<hello-world-component></hello-world-component>'
                    });
                },
                destroy: function (element) {
                    component.$destroy();
                    component = undefined;
                }
            };
        },
        priority: function () {
            return 1;
        }
    };
}
