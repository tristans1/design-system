<template>
    <form class="form-container">
        <slot></slot>
    </form>
</template>
<script>
    export default {
        name: 'FormContainerComponent',
    };
</script>
<style scoped lang="scss">
    @import "../assets/scss/variable";
    .form-container {
        display: flex;
        flex-direction: column;
        border-radius: $form-border-radius;
        box-shadow: $form-box-shadow;
        background-color: $form-bg-color;
        max-width: $form-width;
        width: 100%;
        margin: $spacing-auto;
        padding: $spacing-l;
    }
</style>
