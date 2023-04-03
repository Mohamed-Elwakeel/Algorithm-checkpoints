function isPalindrome(text) {
    if (text.length < 2) {
        return true;
    } if (text[0] !== text.length[-1]) {
        return false;
    }
    return isPalindrome(text.substr(1, text.substr-2));
}

console.log(isPalindrome('bob'));