<template>
    <form-container-component>
        <text-component tag="h1">Forgot your password</text-component>
        <flex-container-component>
            <text-component tag="h2">Not signed up ?</text-component>
            <text-component tag="router-link" route-name="SignUpView">Register</text-component>
        </flex-container-component>
        <form-input-component label="Email" placeholder="Email" name="email" type="email"/>
        <text-component tag="router-link" route-name="SignInView">Sign in ?</text-component>
        <button-component style-type="main" type="submit">Send</button-component>
    </form-container-component>
</template>
<script>
    import FormContainerComponent from '../components/FormContainerComponent';
    import FlexContainerComponent from '../components/FlexContainerComponent';
    import FormInputComponent from '../components/FormInputComponent';
    import ButtonComponent from '../components/ButtonComponent';
    import TextComponent from '../components/TextComponent';
    export default {
        name: 'ForgotPassword',
        components: {
            FormContainerComponent,
            FlexContainerComponent,
            FormInputComponent,
            ButtonComponent,
            TextComponent
        }
    };
</script>

