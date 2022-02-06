<template>
    <div>
        <FormContainerComponent>
            <TextComponent tag="h1">Sign in</TextComponent>
            <FlexContainerComponent>
                <TextComponent tag="h2">Not signed up ?</TextComponent>
                <TextComponent tag="router-link" route-name="SignUpView">Register</TextComponent>
            </FlexContainerComponent>
            <FormInputComponent label="Email" placeholder="Email" name="email" type="email"/>
            <FormInputComponent label="Password" placeholder="Password" name="password" type="password"/>
            <TextComponent tag="router-link" route-name="ForgotPassword">Forgot password ?</TextComponent>
            <ButtonComponent buttonColorType="main">Sign in</ButtonComponent>
        </FormContainerComponent>
    </div>
</template>
<script>
    import FlexContainerComponent from '../components/FlexContainerComponent';
    import FormContainerComponent from '../components/FormContainerComponent';
    import FormInputComponent     from '../components/FormInputComponent';
    import TextComponent          from '../components/TextComponent';
    import ButtonComponent        from '../components/ButtonComponent.vue';

    export default {
        name: 'SignInView',
        components: {
            FlexContainerComponent,
            TextComponent,
            FormContainerComponent,
            FormInputComponent,
            ButtonComponent,
        },
    };
</script>


