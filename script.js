// Available characters
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}<>?";

// Generate a random password
function generatePassword(length, includeNumbers, includeUppercase, includeSymbols) {
    let allChars = lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeSymbols) allChars += symbolChars;

    return Array.from({ length }, () => {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        return allChars[randomIndex];
    }).join('');
}

// Display the generated password
function displayPassword() {
    const length = parseInt(document.querySelector('#length').value);
    const includeNumbers = document.querySelector('#includeNumbers').checked;
    const includeUppercase = document.querySelector('#includeUppercase').checked;
    const includeSymbols = document.querySelector('#includeSymbols').checked;

    const password = generatePassword(length, includeNumbers, includeUppercase, includeSymbols);

    const html = `
        <li>
        <span class="name">Generated password:</span>
        <span class="password">${password}</span>
        </li>
    `;

    suggestions.innerHTML = html;
    passwordOutput = password; // store latest password
}

// Copy password to clipboard
function copyPassword() {
    if (!passwordOutput) {
        alert("Please generate a password first");
        return;
    }

    const tempInput = document.createElement("input");
    tempInput.value = passwordOutput;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Password copied to clipboard ✅");
}

// Select elements
const generateBtn = document.querySelector('#generateBtn');
const copyBtn = document.querySelector('#copyBtn');
const suggestions = document.querySelector('.suggestions');

let passwordOutput = "";

// Events
generateBtn.addEventListener('click', displayPassword);
copyBtn.addEventListener('click', copyPassword);
