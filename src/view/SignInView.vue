<template>
    <form-container-component>
        <text-component tag="h1">Sign in</text-component>
        <flex-container-component>
            <text-component tag="h2">Not signed up ?</text-component>
            <text-component tag="router-link" route-name="SignUpView">Register</text-component>
        </flex-container-component>
        <form-input-component label="Email" placeholder="Email" name="email" type="email"/>
        <form-input-component label="Password" placeholder="Password" name="password" type="password"/>
        <text-component tag="router-link" route-name="ForgotPassword">Forgot password ?</text-component>
        <button-component style-type="alt" type="submit">Sign In</button-component>
    </form-container-component>
</template>
<script>
    import ButtonComponent from '../components/ButtonComponent';
    import FlexContainerComponent from '../components/FlexContainerComponent';
    import FormContainerComponent from '../components/FormContainerComponent';
    import FormInputComponent     from '../components/FormInputComponent';
    import TextComponent          from '../components/TextComponent';
    import ButtonComponent        from '../components/ButtonComponent.vue';

    export default {
        name: 'SignInView',
        components: {
            ButtonComponent,
            FlexContainerComponent,
            TextComponent,
            FormContainerComponent,
            FormInputComponent,
            ButtonComponent,
        },
    };
</script>


