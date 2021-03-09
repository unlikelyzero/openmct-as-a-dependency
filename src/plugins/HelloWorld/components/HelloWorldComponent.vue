<template>
<div>
    {{ domainObject.string }} For Hello World
</div>
</template>

<script>
export default {
    inject: ['openmct', 'domainObject']
};
</script>