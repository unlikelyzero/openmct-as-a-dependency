<template>
<div>
    {{ domainObject.string }} For Hello World
</div>
</template>

<script>
import { inject } from 'vue';

export default {
    setup() {
        // Use inject to access global properties
        const openmct = inject('openmct');
        const domainObject = inject('domainObject');

        // Return the properties you want to use in your template
        return { openmct, domainObject };
    }
};
</script>