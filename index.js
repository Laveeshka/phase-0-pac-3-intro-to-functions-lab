//declare the shout function here
function shout(string) {
    return string.toUpperCase();
}

//declare the whisper function here
function whisper(string) {
    return string.toLowerCase();
}

//declare the logShout function here
function logShout(string) {
    console.log(string.toUpperCase());
}

//declare the logWhisper function here
function logWhisper(string) {
    console.log(string.toLowerCase());
}

//declare sayHiToHeadphonedRoommate function here
function sayHiToHeadphonedRoommate(string) {
    if (string === "Let\'s have dinner together!") {
        return "I would love to!";
    }
    else if (string === string.toLowerCase()) {
        return 'I can\'t hear you!'
    }
    else if (string === string.toUpperCase()) {
        return 'YES INDEED!';
    }
}