const axios = require('axios');

/**
 * Searches Pixabay Video API for a given query and returns normalized candidate clips.
 * @param {string} query - The search query (e.g., "Tokyo night rain").
 * @returns {Promise<Array>} Array of normalized video clip objects.
 */
async function searchVideos(query) {
    const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;
    
    if (!PIXABAY_API_KEY) {
        throw new Error("Missing PIXABAY_API_KEY in environment variables.");
    }

    try {
        const response = await axios.get('https://pixabay.com/api/videos/', {
            params: {
                key: PIXABAY_API_KEY,
                q: encodeURIComponent(query),
                video_type: 'film',
                per_page: 15,
                safesearch: true
            }
        });

        if (!response.data || !response.data.hits) {
            return [];
        }

        // Normalize the metadata for the clip selector
        const candidates = response.data.hits.map(hit => {
            // Find the best quality video (usually 'large' or 'medium' or 'tiny')
            // For MVP, we'll extract the medium/large fallback
            const videoSource = hit.videos.large || hit.videos.medium || hit.videos.small || hit.videos.tiny;

            return {
                pixabayId: hit.id,
                duration: hit.duration,
                width: videoSource.width,
                height: videoSource.height,
                tags: hit.tags,
                previewUrl: hit.picture_id ? `https://i.vimeocdn.com/video/${hit.picture_id}_640x360.jpg` : null,
                videoUrl: videoSource.url,
                sourceUrl: hit.pageURL,
                size: videoSource.size
            };
        });

        return candidates;

    } catch (error) {
        console.error("Pixabay API Search Error:", error.message);
        throw error;
    }
}

module.exports = {
    searchVideos
};
