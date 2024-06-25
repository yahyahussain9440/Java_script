function Checkchar(char){
    const context = /^[a-zA-Z]$/;
    if (!context.test(char)) {
        return "invalid character";
    }
    const lowercase = char.toLowerCase();
    const vowels = new Set(['a','e','i','o','u'])

    if (vowels.has(lowercase)) {
        return "Vowel";
    }
    else{
        return "Consonant";
    }
}
const userinput = prompt("Enter a Character:");
const result = Checkchar(userinput);
alert(result);