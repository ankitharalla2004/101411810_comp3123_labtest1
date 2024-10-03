function lowerCaseWords(list){
    return new Promise((resolve, reject) => {
        if (!Array.isArray(list)) {
            reject(new Error("Input must be an array."));
        }

        const filteredStrings = list.filter(item => typeof item === 'string');
        const convertToLowerCase = filteredStrings.map(word => word.toLowerCase());

        if (convertToLowerCase.length > 0) {
            resolve(convertToLowerCase);
        } else {
            reject(new Error("No valid string elements to convert."));
        }
    });
}


const mixedArray = ['PIZZA',10,true,25,false,'Wings']
console.log(lowerCaseWords(mixedArray))

