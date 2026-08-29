const lang = ["HTML", "CSS", "JavaScript"];
const newLangStr = lang.reduce(
    (finalLangStr, currentLangStr) => `${finalLangStr}, ${currentLangStr}`
);
console.log(newLangStr);