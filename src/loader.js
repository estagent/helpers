const _setOrThrowExists = (target, key, value) => {
    if (typeof target[key] !== undefined)
        throw `${key} already exists `
    target[key] = value;
}

export default (target) => {
    target['load'] = function (mixed) {
        if (arguments.length > 1)
            for (let element of arguments) this.load(element)
        else if (Array.isArray(mixed))
            for (let element of mixed) this.load(element)
        else if (typeof mixed === 'object')
            for (let key of Object.keys(mixed))
                _setOrThrowExists(this, key, mixed[key]);

        else if (typeof mixed === 'function')
            _setOrThrowExists(this, mixed.name, mixed);
        else throw "try to load as object to load undefined value"

        return this
    }

    return target
}
