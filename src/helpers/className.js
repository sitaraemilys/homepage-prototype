const className = function(name, options) {

    let classString = [];
    classString.push(name);

    for (var key in options) {
        if (options[key]) {
            classString.push(name + key);
        }
    }

    return classString.join(' ');

};

export default className;
