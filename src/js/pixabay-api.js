import axios from "axios";


export async function fetchImages(query) {
    const API_KEY = '49620243-9bab7bc345dc9a388b23e7e17';
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
    const loader = document.querySelector('.loader');

    if (loader) {
        loader.classList.add('active');
    }

    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error(error);
        return { hits: [] };
    } finally {
        if (loader) {
            loader.classList.remove('active'); // ✅ Hide loader
        }
    }

}