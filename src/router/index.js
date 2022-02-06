import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'SignInView',
            component: () => import('../view/SignInView'),
        },
        {
            path: '/signup',
            name: 'SignUpView',
            component: () => import('../view/SignUpView'),
        },
        {
            path: '/forgotPassword',
            name: 'ForgotPassword',
            component: () => import('../view/ForgotPassword'),
        },
    ],
});
