export default function getBaseUrl() {
    let url;
    switch (process.env.NODE_ENV) {
        case 'production':
            url = 'https://bookmark-ppl-server.vercel.app';
            break;
        case 'development':
        default:
            url = 'http://localhost:5000';
    }

    return url;
}