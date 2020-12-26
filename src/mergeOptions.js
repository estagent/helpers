export default (options, defaults) => {
    if (options) {
        for (let key of Object.keys(defaults)) {
            if (options.hasOwnProperty(key)) {
                defaults[key] = options[key]
            }
        }
    }
    return defaults
}
