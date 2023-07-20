import Auth from '../auth/auth';

const Register = {
    async init() {
        this._initialListener();
    },

    _initialListener() {
        const registerForm = document.querySelector('#registerForm');
        const registerButton = document.querySelector('#registerButton');
        const passwordInput = document.querySelector('#password');
        const showPasswordCheckbox = document.querySelector('#showPasswordCheckbox');

        showPasswordCheckbox.addEventListener('change', () => {
            if (showPasswordCheckbox.checked) {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });

        registerForm.addEventListener(
            'submit',
            async (event) => {
                event.stopPropagation();
                event.preventDefault();

                registerForm.classList.add('was-validated');
                try {
                    loginButton.setAttribute('disabled', true);
                    loginButton.setAttribute('isLoading', true);
                    await this._handleRegisterSubmit();
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

    async _handleRegisterSubmit() {
        const formData = this._getFormData();
        // Remove shown error messages
        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');
        emailInput.classList.remove('is-invalid');
        passwordInput.classList.remove('is-invalid');

        if (this._validateFormData({ ...formData })) {
            try {
                await Auth.register({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                });
                window.alert('Registered a new user');
                this._goToLoginPage();
            } catch (error) {
                console.error(error);
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
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');

        return {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        };
    },

    _validateFormData(formData) {
        const formDataFiltered = Object.values(formData).filter((item) => item === '');
        return formDataFiltered.length === 0;
    },

    _goToLoginPage() {
        window.location.href = '/login.html';
    },
};

export default Register;
