function sortByKey(key, array) {
    if (key.trim().length < 1 || array.lenght <= 1) {
        return array;
    }

    let allObjectsWithKey = array.filter(x => Object.keys(x).includes(key));
    if(allObjectsWithKey.length != array.length) {
        return false;
    }

    key = key.toLowerCase();

    return array.sort((a, b) => a[key]- b[key]);
}

// simple sort
// function sortByKey(key, array) {
//     if (array.lenght <= 1) {
//         return array;
//     }
    
//     return array.sort((a,b) => a[key]- b[key])
// }
    

let bla = [{a: 15, b: 15}, {a:12, c:17}, {a: 14}];
console.log(sortByKey('a', bla));