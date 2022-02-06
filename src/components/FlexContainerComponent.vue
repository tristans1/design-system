<template>
    <div class="flex-container">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'FlexContainerComponent',
    };
</script>
<style scoped lang="scss">
    @import "../assets/scss/variable";
    .flex-container {
        display: flex;
        align-items: baseline;
        gap: $spacing-xs;
        justify-content: center;
    }
</style>
