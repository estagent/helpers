export default (string, attributes = []) => {

    if (Object.keys(attributes).length === 0)
        return string;

    Object.keys(attributes).forEach(function (key) {
        const re = new RegExp(':' + key, "g");
        if (!attributes[key])
            return;
        string = string.replace(re, attributes[key]);
    });

    return string;
}
