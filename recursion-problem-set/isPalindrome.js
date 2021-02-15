/*
Write a recursive function called isPalindrome which returns true if the 
string passed to it is a palindrome. Otherwise it returns false.
*/

function isPalindrome(str) {
    // add whatever parameters you deem necessary - good luck!
    if (str.length < 2) {
        return true;
    }
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1));
    }
    return false;
}