export default {
    dateConverter,
    nameConverter,
    tempConverter,
    weeklyDaysConverter
}

function dateConverter() {
    const newDate = new Date()
    return newDate.toGMTString()
}

function nameConverter(name) {
    const words = name.split(" ");
    var newName = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
    return newName
}

function tempConverter(num) {
    const newNum = parseInt((num - 32) / 1.8)
    return newNum
}

function weeklyDaysConverter(date) {
    var day = _getDay(date)
    return day
}

function _getDay(string) {
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    var date = new Date(string);
    var day = date.getDay();
    return weekday[day];
}