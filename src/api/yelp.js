import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer UETKGBVpSN5CW7mYGTypvpit3P-1DEbPaWK3ibHqc_MYOLBxiCqA1DhU7O_nU5wOrXn2AunJiKXgjuu7-bTQ68hgR-FhXXE3r2aiYStUFb8oB1lWD_0gpkH3Zn3cXnYx'
    }
});