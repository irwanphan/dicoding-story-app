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
        const passwordInput = document.querySelector('#password');
        const showPasswordCheckbox = document.querySelector('#showPasswordCheckbox');

        showPasswordCheckbox.addEventListener('change', () => {
            if (showPasswordCheckbox.checked) {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });

        loginForm.addEventListener('submit', 
            async (event) => {
                event.preventDefault();
                event.stopPropagation();

                loginForm.classList.add('was-validated');
                loginButton.setAttribute('disabled', true); 
                loginButton.setAttribute('isLoading', true); 
                try {
                    await this._handleLoginSubmit();
                    loginButton.setAttribute('isLoading', '');
                    loginButton.setAttribute('disabled', '');
                } catch (error) {
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