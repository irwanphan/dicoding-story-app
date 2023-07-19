import Auth from "../auth/auth";
import Utils from "../utils/utils";
import Config from "../config/config";
import CheckUserAuth from "../auth/check-user-auth";

const Login = {
    async init() {
        CheckUserAuth.checkLoginState();

        this._initialListener();
    },

    _initialListener() {
        const loginForm = document.querySelector('#loginForm');
        loginForm.addEventListener('submit', 
            async (event) => {
                event.preventDefault();
                event.stopPropagation();

                loginForm.classList.add('was-validated');
                await this._handleLoginSubmit();
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