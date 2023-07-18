import Auth from "../auth/auth";

const Register = {
    async init() {
        await this._initialListener();
    },

    async _initialListener() {
        document.addEventListener('DOMContentLoaded', () => {
            const registerForm = document.querySelector('#registerForm');
            console.log(registerForm)
            registerForm.addEventListener(
                'submit',
                async (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    registerForm.classList.add('was-validated');
                    await this._handleRegisterSubmit();
                },
                false,
            );
        });     
    },

    async _handleRegisterSubmit(event) {
        event.preventDefault();
        const formData = this._getFormData();

        if(this._validateFormData({ ...formData })) {
            console.log('formData');
            console.log(formData);
        }

        try {
            await Auth.register({
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });
            window.alert('Registered a new user');
            // this._goToLoginPage();
        } catch (error) {
            console.error(error);
        }
    },
    
    _getFormData() {
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');
        
        return {
            name: nameInput.value,
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
    _goToLoginPage() {
        window.location.href = '/login.html';
    }
}

export default Register;