
import { createMemoryHistory, createRouter } from 'vue-router';
import LandingPage from '../components/Landing/LandingPage.vue';
import LoginPage from '../components/Login/LoginPage.vue';
import RegisterPage from '../components/Register/RegisterPage.vue';
import FormFriendsPage from '../components/Forms/FormFriends/FormFriendsPage.vue'


const routes = [
    {
        path: '/',
        name: 'Landing',
        component: () => LandingPage
    },
    {
        path: '/login',
        name: 'Login',
        component: () => LoginPage
    },
    {
        path: '/sing_in',
        name: 'Register',
        component: () => RegisterPage
    },
    {
        path: '/form_friends',
        name: 'FormFriends',
        component: () => FormFriendsPage
    },

];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;