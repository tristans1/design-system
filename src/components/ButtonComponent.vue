<template>
    <button :class='buttonColorType === "main" ? "button-main" : "button-alt"'>
        <slot></slot>
    </button>
</template>
<script>

export default {
    name: 'ButtonComponent',
    props: {
        buttonText: {
            type: String,
            default: () => "label",
        },

        buttonColorType: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/variable';

button {
    
    
    text-align     : center;
    border         : $button-border;
    border-radius  : $button-border-radius;
    min-width      : $button-minWidth;
    padding        : $button-padding;
    font-family    : $primary-font-main;
    font-size      : $font-regular-size;
}

.button-main {
    color            : $white-color;
    background-color : $main-color-light ;

    &:hover {
        background-color : $main-color-dark;
        color            : $white-color;
    }
}

.button-alt {
    background-color : $white-color;
    color            : $main-color-light;
   
    
    &:hover {
        background-color : $second-color;
        color            : $main-color-light;
    }
}

</style>
