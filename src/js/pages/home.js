const Home = {
    async init() {
        await this._initialData();
    },
   
    async _initialData() {
        this._userStory = null;

        const fetchRecords = await fetch('/data/DATA.json');
        const responseRecords = await fetchRecords.json()
            .then((data) => this._userStory = data.listStory);

        console.log(this._userStory);
        
        this._populateStoryDataToCard(this._userStory);
    },
   
    _populateStoryDataToCard(stories = null) {
        if (!(typeof stories === 'object')) {
            throw new Error(
                `Parameter responseRecords should be an object.`,
            );
        }

        if (!Array.isArray(stories)) {
            throw new Error('Parameter stories should be an array.');
        }

        const recordStories = document.querySelector('#recordStories');
   
        recordStories.innerHTML = '';
        if (stories.length <= 0) {
            recordStories.innerHTML = this._templateEmptyStory();
            return;
        }
        stories.forEach((item) => {
            recordStories.innerHTML += this._templateStoryCard(item);
        });
    },

    _templateStoryCard(story) {
        return `
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="card bordered h-100 bg-gradient">
                    <div class="card-body">
                        <div class="card-author mb-2">
                            <i class="bi bi-person-circle"></i> ${story.name}
                        </div>
                        <img src="${story.photoUrl}" class="card-img-top" alt="${story.description}">
                        <p class="card-text mt-2">${story.description}</p>
                    </div>
                </div>
            </div>
        `
    },

    _templateEmptyStory() {
        const recordStories = document.querySelector('#recordStories');
        return `
            <div class="text-center">No story to show</div>
        `;
    },
};
   
export default Home;