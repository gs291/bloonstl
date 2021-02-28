module.exports = {
    webpack: (config, _) => {
        config.resolve.symlinks = false
        return config
    }
}