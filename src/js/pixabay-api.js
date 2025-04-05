import axios from 'axios';

const API_KEY = '49620243-9bab7bc345dc9a388b23e7e17';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function fetchImages(query, page = 1) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: PER_PAGE,
        page
    };

    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('active');
    }

    try {
        const response = await axios.get(BASE_URL, { params });
        return response.data;
    } catch (error) {
        console.error('❌ Fetch error:', error);
        return { hits: [], totalHits: 0 };
    } finally {
        if (loader) {
            loader.classList.remove('active'); // ✅ Hide loader
        }
    }
}
