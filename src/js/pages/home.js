import { getStories } from "../config/axios-instance";

const Home = {
    async init() {
        await this._initialData();
    },
   
    async _initialData() {
        this._userStory = await getStories();
        this._populateStoryDataToCard(this._userStory);
    },
   
    _populateStoryDataToCard(stories = null) {
        if (!Array.isArray(stories)) {
            throw new Error('Parameter stories should be an array.');
        }

        const recordStories = document.querySelector('#recordStories');
        recordStories.innerHTML = '';
        
        stories.forEach((item) => {
            recordStories.innerHTML += this._templateStoryCard(item);
        });
    },

    _templateStoryCard(story) {
        const createdAt = new Date(story.createdAt).toLocaleString("en-EN", {
            month: 'long', day: 'numeric', year: 'numeric', 
            hour: 'numeric', minute: 'numeric', second: 'numeric'
        });

        return `
            <div class="col-12 col-sm-6 col-lg-4">
                <story-card
                    id="${story.id}"
                    name="${story.name}"
                    photoUrl="${story.photoUrl}"
                    description="${story.description}"
                    createdAt="${createdAt}"
                ></story-card>
            </div>
        `
    }
};
   
export default Home;