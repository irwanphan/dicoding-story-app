const Register = {
    async init() {
        await this._initialListener();
    },

    async _initialListener() {
        document.addEventListener('DOMContentLoaded', () => {
            const registerForm = document.querySelector('#registerForm');
            registerForm.addEventListener(
                'submit',
                async (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    registerForm.classList.add('was-validated');
                    await this._handleLoginSubmit();
                },
                false,
            );
        });     
    },

    _handleRegisterSubmit() {
        const formData = this._getFormData();

        if(this._validateFormData({ ...formData })) {
            console.log('formData');
            console.log(formData);
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
    }
}

export default Login;