exports.getDate = function () {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    day = today.toLocaleDateString("en-US", options);

    return day;
}