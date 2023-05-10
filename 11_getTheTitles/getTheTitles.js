const getTheTitles = function(books) {
    let resultArray = [];
    
    books.forEach( (book) => resultArray.push(book.title));
    
    return resultArray;
    
};

// Do not edit below this line
module.exports = getTheTitles;
