import Auth from '../auth/auth';
import Utils from '../utils/utils';
import Config from '../config/config';

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

        loginForm.addEventListener(
            'submit',
            async (event) => {
                event.preventDefault();
                event.stopPropagation();
                loginForm.classList.add('was-validated');
                try {
                    loginButton.setAttribute('disabled', true);
                    loginButton.setAttribute('isLoading', true);
                    await this._handleLoginSubmit();
                    loginButton.removeAttribute('isLoading');
                    loginButton.removeAttribute('disabled');
                } catch (error) {
                    console.error(error);
                    loginButton.removeAttribute('isLoading');
                    loginButton.removeAttribute('disabled');
                }
            },
            false,
        );
    },

    async _handleLoginSubmit() {
        const formData = this._getFormData();
        // Remove shown error messages
        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');
        emailInput.classList.remove('is-invalid');
        passwordInput.classList.remove('is-invalid');

        if (this._validateFormData({ ...formData })) {
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
                // Handle the error response, show the appropriate error message, and mark the invalid fields
                if (error.response && error.response.data && error.response.data.message) {
                    const errorMessage = error.response.data.message;
                    if (errorMessage.includes('email')) {
                        emailInput.classList.add('is-invalid');
                    }
                    if (errorMessage.includes('password')) {
                        passwordInput.classList.add('is-invalid');
                    }
                }
            }
        } else {
            if (!formData.email) {
                emailInput.classList.add('is-invalid');
            }
            if (!formData.password) {
                passwordInput.classList.add('is-invalid');
            }
        }
    },

    _getFormData() {
        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');

        return {
            email: emailInput.value,
            password: passwordInput.value,
        };
    },

    _validateFormData(formData) {
        const formDataFiltered = Object.values(formData).filter((item) => item === '');
        return formDataFiltered.length === 0;
    },

    _goToDashboardPage() {
        window.location.href = '/';
    },
};

export default Login;
