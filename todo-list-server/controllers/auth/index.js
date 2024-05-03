
module.exports = {
    register: require('./endpoints/register'),
    login: require('./endpoints/login'),
    refreshAccessToken: require('./endpoints/refreshAccessToken')
}