const key = '26585367-5869658d2a40ee5f2afd1fe75';

export default function fetchUrl(imageUrl,pages ) {
    const url = ` https://pixabay.com/api/?q=${imageUrl}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12&page=${pages}`;
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(new Error(`We did not find a photo with ${imageUrl} title `))
        });
};