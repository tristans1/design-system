<template>
    <div>
        <form-container-component>
            <text-component tag="h1">Sign up</text-component>
            <flex-container-component>
                <text-component tag="h2">Already got an account ?</text-component>
                <text-component tag="router-link" route-name="SignInView">Sign in</text-component>
            </flex-container-component>
            <form-input-component label="Email" placeholder="Email" name="email"/>
            <form-input-component label="Password" placeholder="Password" name="Password"/>
            <button-component styleType="main" type="submit">Sign up</button-component>
        </form-container-component>
    </div>
</template>
<script>
    import FormContainerComponent from '../components/FormContainerComponent.vue';
    import FlexContainerComponent from '../components/FlexContainerComponent.vue';
    import FormInputComponent from '../components/FormInputComponent.vue';
    import TextComponent from '../components/TextComponent.vue';
    import ButtonComponent from '../components/ButtonComponent.vue';

    export default {
        name: 'SignUpView',
        components: {
            FlexContainerComponent,
            TextComponent,
            FormContainerComponent,
            FormInputComponent,
            ButtonComponent,
        },
    };
</script>

