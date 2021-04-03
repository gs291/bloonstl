module.exports = {
    target: 'serverless',
    images: {
        loader: 'cloudinary',
        path: 'https://res.cloudinary.com/bloons/image/upload/',
        deviceSizes: [960]
    },
}