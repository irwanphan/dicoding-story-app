import { postStory } from '../../config/axios-instance';

const Add = {
    async init() {
        await this._initialListener();
    },

    async _initialListener() {
        const imageUpload = document.querySelector('#storyImage');
        imageUpload.addEventListener('change', () => {
            this._updatePhotoPreview();
        });

        const addStoryForm = document.querySelector('#addStoryForm');
        addStoryForm.addEventListener(
            'submit',
            (event) => {
                event.preventDefault();
                event.stopPropagation();

                addStoryForm.classList.add('was-validated');
                this._sendPost();
            },
            false,
        );
    },

    async _sendPost() {
        const formData = this._getFormData();

        if (this._validateFormData({ ...formData })) {
            console.log('formData');
            console.log(formData);
        }
        const response = await postStory(formData);

        alert('Story added successfully');
        this._goToDashboardPage();
    },

    _getFormData() {
        const storyImageInput = document.querySelector('#storyImage');
        const descriptionInput = document.querySelector('#storyNotes');

        return {
            storyImage: storyImageInput.files[0],
            description: descriptionInput.value,
        };
    },

    _updatePhotoPreview() {
        const storyImageChange = document.querySelector('image-preview');
        const storyImageInput = document.querySelector('#storyImage');

        const photo = storyImageInput.files[0];
        if (!photo) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            storyImageChange.setAttribute('fileUrl', event.target.result);
        };
        reader.readAsDataURL(photo);
    },

    _validateFormData(formData) {
        const formDataFiltered = Object.values(formData).filter((item) => item === '');
        return formDataFiltered.length === 0;
    },

    _goToDashboardPage() {
        window.location.href = '/';
    },
};

export default Add;
