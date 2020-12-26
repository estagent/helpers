export default (target) => {
    target['load'] = function (mixed) {
        if (arguments.length > 1)
            for (let element of arguments) this.load(element)
        else if (Array.isArray(mixed))
            for (let element of mixed) this.load(element)
        else if (typeof mixed === 'object')
            for (let key of Object.keys(mixed)) this[key] = mixed[key]
        else if (typeof mixed === 'function') this[mixed.name] = mixed

        return this
    }

    return target
}
