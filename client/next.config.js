/** @type {import('next').NextConfig} */
require('dotenv').config();

const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://bookmark-ppl-server.onrender.com';

const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${API_URL}/api/:path*`,
			},
		]
	},
}

module.exports = nextConfig
