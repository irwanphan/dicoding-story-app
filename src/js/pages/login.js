import Auth from "../auth/auth";
import Utils from "../utils/utils";
import Config from "../config/config";

const Login = {
    async init() {
        this._initialListener();
    },

    _initialListener() {
        const loginForm = document.querySelector('#loginForm');
        const loginButton = document.querySelector('#loginButton');
        console.log('loginButton', loginButton)
        loginForm.addEventListener('submit', 
            async (event) => {
                event.preventDefault();
                event.stopPropagation();

                loginForm.classList.add('was-validated');
                loginButton.setAttribute('disabled', true); // Disable the login button
                loginButton.setAttribute('isLoading', true); // Show the loading spinner

                try {
                    // Call the _handleLoginSubmit() method here
                    await this._handleLoginSubmit();
                    // If the login process is successful, reset isLoading to false and enable the login button
                    loginButton.setAttribute('isLoading', '');
                    loginButton.setAttribute('disabled', '');
                } catch (error) {
                    // If there is an error in the login process, reset isLoading to false and enable the login button
                    loginButton.removeAttribute('isLoading');
                    loginButton.removeAttribute('disabled');
                    console.error(error);
                }
            },
            false,
        );
    },

    async _handleLoginSubmit() {
        const formData = this._getFormData();

        if (this._validateFormData({ ...formData })) {
            console.log('formData', formData);
        }

        try {
            const response = await Auth.login({
                email: formData.email,
                password: formData.password,
            });
            Utils.setUserToken(Config.USER_TOKEN_KEY, response.data.loginResult.token);
            window.alert('Signed user in detected');
            this._goToDashboardPage();
        } catch (error) {
            console.error(error);
        }
    },

    _getFormData() {
        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');
        
        return {
            email : emailInput.value,
            password : passwordInput.value
        }
    },

    _validateFormData(formData) {
        const formDataFiltered = Object.values(formData).filter((item) => item === '');
        return formDataFiltered.length === 0;
    },

    _goToDashboardPage() {
        window.location.href = '/';
    },
}

export default Login;