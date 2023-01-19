function add(a) {
    return a.split(",")
        .map(x => parseInt(x))
        .reduce((a, b) => a + b)
}

exports.add = add;