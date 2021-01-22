const removeClassSelectorDot = selector => {
    return selector.replace(/\./, '');
}

const transformCamelCase = (str) => {
    const lowerString = [...str]
    .map(item => item.match(/[A-Z]/) ? ` ${item.toLowerCase()}` : item)
    .join('');
    
    return `${lowerString[0].toUpperCase()}${lowerString.slice(1)}`
}

const expandArray = array => {
    const result = [];

    const recursive = arr => {
        arr.forEach(item => {
            Array.isArray(item) ? recursive(item) : result.push(item);
        })
    }
    recursive(array);

    return result;
}

export { removeClassSelectorDot, transformCamelCase, expandArray }