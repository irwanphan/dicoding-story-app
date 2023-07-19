import Config from "../config/config";
import Utils from "../utils/utils";
import axios from "axios";

const Home = {
    async init() {
        await this._initialData();
    },
   
    async _initialData() {
        this._userStory = null;

        const fetchRecords = await axios.get(`${Config.BASE_URL}/stories`, {
            headers: {
                Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
            },
        });
        console.log(fetchRecords.data.listStory);
        this._userStory = fetchRecords.data.listStory;

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
    },

    _templateEmptyStory() {
        const recordStories = document.querySelector('#recordStories');
        return `
            <div class="text-center">No story to show</div>
        `;
    },
};
   
export default Home;