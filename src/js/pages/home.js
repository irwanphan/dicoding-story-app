import '../components/story-card.js';

const Home = {
    async init() {
        await this._initialData();
    },
   
    async _initialData() {
        this._userStory = null;

        const fetchRecords = await fetch('/data/DATA.json');
        const responseRecords = await fetchRecords.json()
            .then((data) => this._userStory = data.listStory);
        // console.log(this._userStory);
        
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
            // const storyCard = document.createElement('story-card');
            // storyCard.id = item.id;
            // storyCard.name = item.name;
            // storyCard.photoUrl = item.photoUrl;
            // storyCard.description = item.description;
            // storyCard.createdAt = item.createdAt;

            // recordStories.appendChild(storyCard);
        });
    },

    _templateStoryCard(story) {
        return `
            <div class="col-12 col-sm-6 col-lg-4">
                <story-card
                    id="${story.id}"
                    name="${story.name}"
                    photoUrl="${story.photoUrl}"
                    description="${story.description}"
                    createdAt="${story.createdAt}"
                ></story-card>
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