<template>
    <div>
        <FormContainerComponent>
            <TextComponent tag="h1">Sign up</TextComponent>
            <FlexContainerComponent>
                <TextComponent tag="h2">Already got an account ?</TextComponent>
                <TextComponent tag="router-link" route-name="SignInView">Sign in</TextComponent>
            </FlexContainerComponent>
            <FormInputComponent label="Email" placeholder="Email" name="email"/>
            <FormInputComponent label="Password" placeholder="Password" name="Password"/>
            <ButtonComponent buttonColorType="main">Sign up</ButtonComponent>
        </FormContainerComponent>
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

