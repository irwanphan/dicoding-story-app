// Import our custom CSS
import '../sass/main.scss';
    
// Import javascript file as needed
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Add from './pages/stories/add';
import './components/like-button';
import './components/top-nav';
import './components/story-card';
import './components/fa-button';
import './components/off-canvas';
import './components/image-preview';
// import * as bootstrap from 'bootstrap';
    
const routes = {
    '/': Home,
    '/about.html': About,
    '/login.html': Login,
    '/stories/add.html': Add,
};
    
const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    
    if (header && main && footer) {
        main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
    }
};
    
window.addEventListener('DOMContentLoaded', async () => {
    initPages();
    
    const route = detectRoute();
    route.init();
});