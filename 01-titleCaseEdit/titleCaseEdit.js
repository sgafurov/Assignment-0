function titleCaseEdit(title) {
    //break into many strings wherever there is a space character
    title = title.split(' ')

    //for each word, capitalize the first character and join it with the rest of the string
    for(let i = 0; i < title.length; i++){
        title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1)
    }

    //join the seperate words together with a space character
    title = title.join(' ')
    return title
}
    


// Do not edit this line;
module.exports = titleCaseEdit;