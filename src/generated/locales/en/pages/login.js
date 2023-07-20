const About = {
    async init() {
        await this._initialListener();
    },
    async _initialListener() {
        document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.querySelector('#loginForm');
            loginForm.addEventListener('submit', handleLoginSubmit);
        });
    },
    _handleLoginSubmit(event) {
        event.preventDefault();
        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');
        const email = emailInput.value;
        const password = passwordInput.value;
        console.group('Login Form');
        console.log('Email:', email);
        console.log('request sent to server');
        console.log(`we'll clean up the form :)`);
        console.groupEnd();
        // Clear form inputs then go to main page, can still do soemthing if login fail later
        emailInput.value = '';
        passwordInput.value = '';
    },
};
export default About;
