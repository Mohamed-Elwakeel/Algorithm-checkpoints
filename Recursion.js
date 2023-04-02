function isPalindrome(text) {
if (text.length < 2) {
        return true;
    } else {
        if (text.toLowerCase().split('') == text.split('').reverse().join().toLowerCase()) {
            return true;
        } else {
            return false
        }
    }
}



