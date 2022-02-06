<template>
    <div class="form-control">
        <label :for="name"> {{ label }}</label>
        <FlexContainerComponent class="input-control">
            <input class="flex-grow-1"
                   :type="inputType"
                   :name="name" :id="name"
                   :placeholder="placeholder"
                   :class="className"
            >
            <button
                v-if="type === 'password'"
                @click="showPassword"
                type="button"
                class="btn-transparent flex-grow-0">
                <EyeOpenIcon v-if="inputType === 'password'"/>
                <EyeCloseIcon v-if="inputType === 'text'"/>
            </button>
        </FlexContainerComponent>
    </div>
</template>
<script>
    import FlexContainerComponent from './FlexContainerComponent';
    import EyeCloseIcon from './icons/EyeCloseIcon';
    import EyeOpenIcon from './icons/EyeOpenIcon';
    export default {
        name: 'FormInputComponent',
        components: {
            FlexContainerComponent,
            EyeCloseIcon,
            EyeOpenIcon
        },
        props: {
            label:  {
                type: String,
                required: true,
            },
            type: {
                type: String,
                default: 'text'
            },
            name: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                required: true
            },
            className: {
                type: String,
                default: 'input'
            },
        },
        data() {
            return {
                inputType: null
            }
        },
        created() {
            this.inputType = this.type;
        },
        methods: {
            showPassword() {
                this.inputType = this.inputType === 'text' ? 'password' : 'text';
            }
        }
    };
</script>
<style scoped lang="scss">
    @import "../assets/scss/variable";

    .form-control{
        display        : flex;
        flex-direction : column;
        text-align     : left;
        margin-bottom  : $spacing-l;
        label {
            font-size    : $font-small-size;
            color        : $second-color-light;
            padding-left : $spacing-m;
        }
        .input-control {
            border        : $input-border;
            border-radius : $input-border-radius;
            padding       : $spacing-l;
            &:focus-within {
                outline : $input-outline;
            }
            input{
                font-size   : $font-regular-size;
                font-weight : $font-regular-weight;
                font-family : $primary-font-main;
                border      : none;
                outline     : none;
                &::placeholder {
                    font-family : $primary-font-main;
                    color       : $second-color-darker;
                }
            }
        }
    }
</style>
