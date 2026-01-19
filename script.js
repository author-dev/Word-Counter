/*
** App name   : Words counter
** Copyright  : osousli0@gmail.com / 2021
** Start at   : Sun Jan 10 2021 09:31:42
** End at     : Mon Jan 18 2021 10:07:26
** Version    : 2.5.1
** URL        : https://wordscounter.netlify.app
*/
// Start call elements
var counterModel = document.getElementById("counter-model"),
  input = document.getElementById("content"),
  textArea = document.getElementById("textarea"),
  textTrans = document.getElementById("text-transform"),
  transformModel = textTrans.parentElement,
  loadingText = document.getElementsByClassName("loadingText"),
  sticky = document.querySelector(".sticky"),
  select = document.getElementsByClassName("select"),
  loadingText = document.getElementsByClassName("loadingText"),
  results = document.getElementsByClassName("result"),
  copyButton = document.getElementsByClassName('copy'),
  reset = document.getElementById("reset"),
  color = document.getElementById("color"),
  size = document.getElementById("size"),
  theme = document.getElementById("theme"),
  trans = document.getElementsByClassName("trans"),
  // Get results boxes
  wordsResult = document.getElementsByClassName("result")[0],
  lettersResult = document.getElementsByClassName("result")[1],
  spacsResult = document.getElementsByClassName("result")[2],
  charsResult = document.getElementsByClassName("result")[3],
  linesResult = document.getElementsByClassName("result")[4],
  punctuationResult = document.getElementsByClassName("result")[5],
  enWordsResult = document.getElementsByClassName("result")[6],
  arWordsResult = document.getElementsByClassName("result")[7],
  enLettersResult = document.getElementsByClassName("result")[8],
  arLettersResult = document.getElementsByClassName("result")[9],
  advanceWordResult = document.getElementsByClassName("result")[10],
  withInCapitalResult = document.getElementsByClassName("result")[11],
  withInSmallResult = document.getElementsByClassName("result")[12],
  advanceLetters = document.getElementsByClassName("result")[13],
  upperCaseResult = document.getElementsByClassName("result")[14],
  lowerCaseResult = document.getElementsByClassName("result")[15],
  numbersResult = document.getElementsByClassName("result")[16],
  numbersResult1 = document.getElementsByClassName("result")[17],
  numbersResult2 = document.getElementsByClassName("result")[18],
  numbersVResult = document.getElementsByClassName("result")[19],
  numbersVResult1 = document.getElementsByClassName("result")[20],
  numbersVResult2 = document.getElementsByClassName("result")[21],
  advancePunResult = document.getElementsByClassName('result')[22],
  commaResult = document.getElementsByClassName('result')[23],
  periodResult = document.getElementsByClassName('result')[24],
  semicolonResult = document.getElementsByClassName('result')[25],
  exclamationResult = document.getElementsByClassName('result')[26],
  qusetionMarkResult = document.getElementsByClassName('result')[27],
  colonResult = document.getElementsByClassName('result')[28],
  sideMenu = document.querySelector("aside"),
  advanceButton = document.querySelector(".main-line"),
  advanceSection = document.getElementById("advance-section"),
  message = document.querySelector('.message'),
  // Create cookies requirments
  mainCookies = document.cookie,
  allCookies = mainCookies.split(';'),
  cookies = [],
  mainDate = new Date(),
  date = mainDate.toDateString().split(' '),
  expires = `${date[0]} ${date[1]} ${mainDate.getDate() + 9} ${date[3]} ${mainDate.getHours()}:${mainDate.getMinutes()}:${mainDate.getSeconds()}`;

// Start cookies
for (var x = 0; x < allCookies.length; x++) {
  if (allCookies[x].charAt(0) == ' ') {
    cookies.push(allCookies[x].replace(allCookies[x].charAt(0),''));
  } else {
    cookies.push(allCookies[x]);
  }
}
function setCookie(name, value) {
  var cookie = [];
  for (x = 0; x < cookies.length; x++) {
    cookie = cookies[x].split('=');
    cookie[0] == name ?  cookies.splice(x,1): false;
  }
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  cookies.push(`${name}=${value}`);
}
function getCookie(name) {
  var cookieValue, cookie;
  for (x = 0; x < cookies.length; x++) {
    cookie = cookies[x].split('=');
    cookieValue = cookie.pop();
    if (cookie[0] == name) {return cookieValue}
  }
}

// Start counting functions
function count() {
  let inputValue = input.value,
    mainArray = inputValue.split(``),
    wordsArray1 = inputValue.replaceAll(String.fromCharCode(10), " "),
    deleted = select[0].firstElementChild.getAttribute("value"),
    delChar = select[1].firstElementChild.getAttribute("value"),
    x = 0;
  // Create values
  var wordsArray = [],
    words = 0,
    spaces = 0,
    lines = 1,
    enLetters = [],
    punctuation = 0,
    notChar = 0,
    chars = mainArray.length,
    isLetter = false;
  // Show results
  if (input.value.length == 0) {
    for (x; x < results.length; x++) {
      results[x].style.display = "none";
      loadingText[x].style.display = "flex";
    }
  } else {
    for (x; x < results.length; x++) {
      results[x].style.display = "block";
      loadingText[x].style.display = "none";
    }
  }
  // Start checking
  for (x = 0; x < wordsArray1.length; x++) {
    isLetter = false;
    if (wordsArray1[x].charCodeAt(0) > 64) {
      isLetter = true;
    }
    if (wordsArray1[x].charCodeAt(0) > 90) {
      isLetter = false;
    }
    if (wordsArray1[x].charCodeAt(0) > 96) {
      isLetter = true;
    }
    if (wordsArray1[x].charCodeAt(0) > 122) {
      isLetter = false;
    }
    if (isLetter == true) {
      enLetters.push(wordsArray1[x]); // If character is letter push it in base words array
    }
    if (wordsArray1[x].charCodeAt(0) == 32) {
      isLetter = true; // If character is space push it in base words array
    }
    if (isLetter == true) {
      wordsArray.push(wordsArray1[x]);
    }
  }
  // convert all letters to string to get words with letters only
  wordsArray = wordsArray.join();
  wordsArray = wordsArray.replaceAll(",", "");
  wordsArray = wordsArray.split(" ");
  for (x = 0; x < wordsArray.length; x++) {
    if (wordsArray[x].length > deleted) {
      words++;
    }
  }
  for (x = 0; x < mainArray.length; x++) {
    switch (mainArray[x].charCodeAt(0)) {
      case 10:
        lines++;
        break;
      case 32:
        spaces++;
        break;
      case 33:
        punctuation++;
        break;
      case 34:
        punctuation++;
        break;
      case 39:
        punctuation++;
        break;
      case 40:
        punctuation++;
        break;
      case 41:
        punctuation++;
        break;
      case 44:
        punctuation++;
        break;
      case 45:
        punctuation++;
        break;
      case 46:
        punctuation++;
        break;
      case 58:
        punctuation++;
        break;
      case 59:
        punctuation++;
        break;
      case 63:
        punctuation++;
        break;
      case 96:
        punctuation++;
        break;
      case 1548:
        punctuation++;
        break;
      case 1563:
        punctuation++;
        break;
      case 1567:
        punctuation++;
        break;
    }
  }
  if (delChar == 1) {
    notChar = spaces;
  } else if (delChar == 2) {
    notChar = lines;
  } else if (delChar == 3) {
    notChar = lines + spaces;
  } else {
    notChar = 0;
  }
  wordsResult.textContent = words;
  lettersResult.textContent = enLetters.length;
  charsResult.textContent = chars - notChar;
  spacsResult.textContent = spaces;
  linesResult.textContent = lines;
  punctuationResult.textContent = punctuation;
  function advanceCount() {
    var arWords = [],
      arabicWords = 0,
      arLetters = 0,
      upperCase = 0,
      lowerCase = 0,
      withInCapital = 0,
      withInSmall = 0,
      numbers = [],
      numValue = [],
      numValues = [],
      checkNums = [],
      checkNumsV = [],
      num = 0,
      nums = 0,
      colon = 0,
      comma = 0,
      semicolon = 0,
      questionMark = 0,
      period = 0,
      exclamationMark = 0;
    for (x = 0; x < wordsArray1.length; x++) {
      isLetter = false;
      if (wordsArray1[x].charCodeAt(0) > 1568) {
        isLetter = true;
      }
      if (wordsArray1[x].charCodeAt(0) > 1594) {
        isLetter = false;
      }
      if (wordsArray1[x].charCodeAt(0) > 1600) {
        isLetter = true;
      }
      if (wordsArray1[x].charCodeAt(0) > 1610) {
        isLetter = false;
      }
      if (isLetter == true) {
        arLetters++; // Count arabic letters
      }
      if (wordsArray1[x].charCodeAt(0) == 32) {
        isLetter = true;
      }
      if (isLetter == true) {
        arWords.push(wordsArray1[x]);
      }
    }
    arWords = arWords.join('').split(' ');
    for (x = 0; x < arWords.length; x++) {
      if (arWords[x].length != 0) {
        arabicWords++;
      }
    }
    for (x = 0; x < wordsArray.length; x++) {
      if (wordsArray[x] != "") { // If this item not empty check it
        wordsArray[x].charAt(0) == wordsArray[x].charAt(0).toUpperCase() ? withInCapital++ : withInSmall++;
      }
    }
    for (x = 0; x < enLetters.length; x++) {
      enLetters[x].charAt(0) == enLetters[x].charAt(0).toUpperCase() ? upperCase++ : lowerCase++;
    }
    for (x = 0; x < mainArray.length; x++) {
      var isNumber = false;
      mainArray[x].charCodeAt(0) > 47 ? (isNumber = true) : false;
      mainArray[x].charCodeAt(0) > 57 ? (isNumber = false) : false;
      isNumber == true ? numbers.push(mainArray[x]) && numValue.push(mainArray[x]) : false;
      mainArray[x] == " " ? numValue.push(mainArray[x]) : false;
    }
    numValue = numValue.join().replaceAll(",", "").split(" "); // convert single numbers to values
    for (x = 0; x < numValue.length; x++) {
      numValue[x] != "" ? numValues.push(numValue[x]) : false;
    }
    for (x = 0; x < numbers.length; x++) {
      checkNums.push(numbers[x] / 2);
      checkNums.splice(x, 1, checkNums[x].toString());
      for (var y = 0; y < checkNums[x].length; y++) {
        checkNums[x].charAt(y) == "." ? num++ : false; // check if number is an odd number or even number
      }
    }
    for (x = 0; x < numValues.length; x++) {
      checkNumsV.push(numValues[x] / 2);
      checkNumsV.splice(x, 1, checkNumsV[x].toString());
      for (var y = 0; y < checkNumsV[x].length; y++) {
        checkNumsV[x].charAt(y) == "." ? nums++ : false; // check if value is an odd value or even value
      }
    }
    for (x = 0; x < mainArray.length; x++) {
      switch (mainArray[x].charCodeAt(0)) {
        case 46:
          period++;
          break;
        case 44:
          comma++;
          break;
        case 1548:
          comma++;
          break;
        case 63:
          questionMark++;
          break;
        case 1567:
          questionMark++;
          break;
        case 33:
          exclamationMark++;
          break;
        case 59:
          semicolon++;
          break;
        case 1563:
          semicolon++;
          break;
        case 58:
          colon++;
          break;
      }
    }
    enWordsResult.textContent = words;
    arWordsResult.textContent = arabicWords;
    enLettersResult.textContent = enLetters.length;
    arLettersResult.textContent = arLetters;
    advanceWordResult.textContent = words;
    withInCapitalResult.textContent = withInCapital;
    withInSmallResult.textContent = withInSmall;
    advanceLetters.textContent = enLetters.length;
    upperCaseResult.textContent = upperCase;
    lowerCaseResult.textContent = lowerCase;
    numbersResult.textContent = numbers.length;
    numbersResult1.textContent = num;
    numbersResult2.textContent = numbers.length - num;
    numbersVResult.textContent = numValues.length;
    numbersVResult1.textContent = nums;
    numbersVResult2.textContent = numValues.length - nums;
    advancePunResult.textContent = punctuation;
    commaResult.textContent = comma;
    colonResult.textContent = colon;
    exclamationResult.textContent = exclamationMark;
    qusetionMarkResult.textContent = questionMark;
    semicolonResult.textContent = semicolon;
    periodResult.textContent = period;
  }
  advanceSection.classList.contains("show") ? advanceCount() : false;
  for (x = 0; x < results.length; x++) { // Disible results with '0'
    if (results[x].textContent == 0) {
      results[x].style.color = "#DDD";
    } else {
      results[x].style.color = "#309aef";
    }
  }
}
function showAdvanceSection() {
  advanceSection.classList.toggle("show");
  if (advanceSection.classList.contains("show")) {
    advanceSection.style.display = "flex";
    count();
  } else {
    advanceSection.removeAttribute("style");
  }
}
function openTextTransform() {
  if (transformModel.hasAttribute("close")) {
    input.style.height = "179px";
    transformModel.style.height = "auto";
    transformModel.style.padding = "5px";
    transformModel.removeAttribute("close");
    transformModel.setAttribute("open", "");
  } else {
    transformModel.style.height = "30px";
    transformModel.style.padding = "0";
    input.style.height = "225px";
    transformModel.removeAttribute("open");
    transformModel.setAttribute("close", "");
  }
}
function selectOption() {
  select[0].classList.toggle(`droped`);
  let second = select[0].firstElementChild.nextElementSibling,
    third = second.nextElementSibling,
    current = this.textContent,
    last = select[0].firstElementChild.firstElementChild.textContent,
    currentValue = this.getAttribute("value"),
    lastValue = select[0].firstElementChild.getAttribute("value");
  select[0].firstElementChild.firstElementChild.textContent = current;
  this.textContent = last;
  this.setAttribute("value", lastValue);
  select[0].firstElementChild.setAttribute("value", currentValue);
  count();
  if (second.getAttribute(`value`) > third.getAttribute(`value`)) { // Order values from small to larg
    var sec = third.textContent,
      thr = second.textContent,
      secV = third.getAttribute(`value`),
      thrV = second.getAttribute(`value`);
    third.textContent = thr;
    second.textContent = sec;
    third.setAttribute(`value`, thrV);
    second.setAttribute(`value`, secV);
  }
}
function selectOption2() {
  select[1].classList.toggle(`droped`);
  let second = select[1].firstElementChild.nextElementSibling,
    third = second.nextElementSibling,
    fourth = third.nextElementSibling,
    current = this.textContent,
    last = select[1].firstElementChild.firstElementChild.textContent,
    currentValue = this.getAttribute("value"),
    lastValue = select[1].firstElementChild.getAttribute("value");
  select[1].firstElementChild.firstElementChild.textContent = current;
  this.textContent = last;
  this.setAttribute("value", lastValue);
  select[1].firstElementChild.setAttribute("value", currentValue);
  count();
  if (second.getAttribute(`value`) > third.getAttribute(`value`)) { // order values
    var sec = third.textContent,
      thr = second.textContent,
      secV = third.getAttribute(`value`),
      thrV = second.getAttribute(`value`);
    third.textContent = thr;
    second.textContent = sec;
    third.setAttribute(`value`, thrV);
    second.setAttribute(`value`, secV);
  }
  if (third.getAttribute(`value`) > fourth.getAttribute(`value`)) {
    var thr = fourth.textContent,
      fth = third.textContent,
      thrV = fourth.getAttribute(`value`),
      fthV = third.getAttribute(`value`);
    third.textContent = thr;
    fourth.textContent = fth;
    third.setAttribute(`value`, thrV);
    fourth.setAttribute(`value`, fthV);
  }
}
function clean() {
  if (this.hasAttribute("animated")) {
    this.removeAttribute("animated");
    this.style.animation = `reset .5s 1 linear`;
  } else {
    this.setAttribute(`animated`, ``);
    this.style.animation = `clean .5s 1 linear`;
  }
  input.value = ``;
  count();
}
function copy() {
  if (this.hasAttribute("animated")) {
    this.removeAttribute("animated");
    this.style.animation = `click .3s 1 linear`;
  } else {
    this.setAttribute(`animated`, ``);
    this.style.animation = `tick .3s 1 linear`;
  }
  let box = document.createElement('textarea'),
      text = `Main results:-
Words:        ${wordsResult.textContent}
Letters:      ${lettersResult.textContent}
Spaces:       ${spacsResult.textContent}
Characters:   ${charsResult.textContent}
Lines:        ${linesResult.textContent}
Punctuation   ${punctuationResult.textContent}`;
  document.body.appendChild(box);
  box.value = text;
  box.select();
  document.execCommand('copy');
  box.remove();
  message.style.opacity = '1';
  setTimeout(_ => message.removeAttribute('style'), 2000);
}
function advanceCopy() {
  if (this.hasAttribute("animated")) {
    this.removeAttribute("animated");
    this.style.animation = `click .3s 1 linear`;
  } else {
    this.setAttribute(`animated`, ``);
    this.style.animation = `tick .3s 1 linear`;
  }
  let box = document.createElement('textarea'),
      text = `Main results:-
  Words:                      ${wordsResult.textContent}
  Letters:                    ${lettersResult.textContent}
  Spaces:                     ${spacsResult.textContent}
  Characters:                 ${charsResult.textContent}
  Lines:                      ${linesResult.textContent}
  Punctuation:                ${punctuationResult.textContent}

Advance results:-
  English words:              ${wordsResult.textContent}
  Arabic words:               ${arWordsResult.textContent}
  English letters:            ${lettersResult.textContent}
  Arabic letters:             ${arLettersResult.textContent}
  Words:                      ${wordsResult.textContent}
  Words start with capital:   ${withInCapitalResult.textContent}
  Words start with small:     ${withInSmallResult.textContent}

  Letters:                    ${lettersResult.textContent}
  Upper case:                 ${upperCaseResult.textContent}
  Lower case:                 ${lowerCaseResult.textContent}

  Characters of numbers:      ${numbersResult.textContent}
  Odd numbers:                ${numbersResult1.textContent}
  Even numbers:               ${numbersResult2.textContent}

  Numbers:                    ${numbersVResult.textContent}
  Odd numbers:                ${numbersVResult1.textContent}
  Even numbers:               ${numbersVResult2.textContent}

  Punctuation:                ${punctuationResult.textContent}
  Period:                     ${periodResult.textContent}
  Comma:                      ${commaResult.textContent}
  Semicolon:                  ${semicolonResult.textContent}
  Colon:                      ${colonResult.textContent}
  Question mark:              ${qusetionMarkResult.textContent}
  Exclamation mark:           ${exclamationResult.textContent}`;
  document.body.appendChild(box);
  box.value = text;
  box.select();
  document.execCommand('copy');
  box.remove();
  message.style.opacity = '1';
  setTimeout(_ => message.removeAttribute('style'), 2000);
}
function transform() {
  let x = 0;
  for (x = 0; x < trans.length; x++) {
    trans[x].classList.remove("active");
  }
  this.classList.add("active");
  switch (this.getAttribute("value")) {
    case "capitalize":
      input.style.textTransform = "capitalize";
      break;
    case "uppercase":
      input.style.textTransform = "uppercase";
      break;
    case "lowercase":
      input.style.textTransform = "lowercase";
      break;
    default:
      input.style.textTransform = "none";
      break;
  }
}
function changeColor() {
  if (this.hasAttribute("animated")) {
    this.removeAttribute("animated");
    this.style.animation = `click .5s 1 linear`;
  } else {
    this.setAttribute(`animated`, ``);
    this.style.animation = `tick .5s 1 linear`;
  }
  switch (input.style.color) {
    case "rgb(255, 213, 0)":
      input.style.color = "rgb(48, 154, 239)";
      break;
    case "rgb(48, 154, 239)":
      input.style.color = "rgb(255, 85, 85)";
      break;
    case "rgb(255, 85, 85)":
      input.style.removeProperty(`color`);
      break;
    default:
      input.style.color = "rgb(255, 213, 0)";
      break;
  }
}
function changeSize() {
  if (this.hasAttribute("animated")) {
    this.removeAttribute("animated");
    this.style.animation = `click .5s 1 linear`;
  } else {
    this.setAttribute(`animated`, ``);
    this.style.animation = `tick .5s 1 linear`;
  }
  switch (input.style.fontSize) {
    case "16px":
      input.style.fontSize = "18px";
      break;
    case "18px":
      input.style.fontSize = "14px";
      break;
    default:
      input.style.fontSize = "16px";
      break;
  }
}
function resetDefault() {
  let x = 0;
  input.value = ``;
  input.removeAttribute(`style`);
  transformModel.removeAttribute(`style`);
  transformModel.removeAttribute(`open`);
  transformModel.setAttribute(`close`, ``);
  for (x = 0; x < trans.length; x++) {
    trans[x].classList.remove("active");
  }
  trans[0].classList.add("active");
  count();
}
(function setting() {
  sticky.style.visibility = "visible";
  setTimeout(function () {
    sticky.style.visibility = "hidden";
  }, 1250);
})();
function setDarkTheme() {
  let style = document.createElement('style'),
      vars = document.createTextNode(`:root {
    --brand-color:#CCC;
    --brand-background:#303134;
    --brand-floor:#202124;
    --brand-border:3px #303134 solid;
    --brand-box-shadow:0 0 10px #111;
    --brandHover-box-shadow:0 0 15px #111;
    --brandC-border:2px #f0f0f080 solid;
    --brandS-background:#303134;
    --brandHeader-box-shadow:3px 3px 7px #111;
    --brandFooter-box-shadow:0 -5px 7px #111;
      }`);
  style.appendChild(vars);
  document.head.appendChild(style);
  theme.setAttribute(`src`, `../pictures/light.png`);
  document.body.setAttribute('dark-theme', '');
  setCookie(`Theme`, `Dark`); // set cookie to remeber user theme
}
function changeTheme() {
  if (document.body.hasAttribute('dark-theme')) {
    document.body.removeAttribute('dark-theme');
    theme.setAttribute(`src`, `../pictures/dark.png`);
    document.querySelector('style').remove();
    setCookie(`Theme`, `Light`);
  } else {
    setDarkTheme();
  }
}
function swiped() {
  if (sideMenu.hasAttribute('swiped')) {
    sideMenu.removeAttribute('swiped');
    sideMenu.removeAttribute('style');
    sideMenu.lastElementChild.removeAttribute('style');
  } else {
    sideMenu.setAttribute('swiped', '');
    sideMenu.style.left = '0';
    sideMenu.style.paddingLeft= '10px';
    sideMenu.style.background = '#333';
    sideMenu.lastElementChild.style.display = 'block';
  }
}
function op() {
  advanceSection.style.display = "flex";
  advanceSection.classList.add("show");
}
getCookie('Theme') == 'Dark' ? setDarkTheme() : false; // If user has alredy joined and change theme
advanceButton.onclick = showAdvanceSection;
textTrans.onclick = openTextTransform;
input.addEventListener("keydown", count);
input.addEventListener("keyup", count);
copyButton[0].onclick = copy;
copyButton[1].onclick = advanceCopy;
reset.onclick = clean;
reset.ondblclick = resetDefault;
select[0].onclick = (_) => select[0].classList.toggle(`droped`);
select[1].onclick = (_) => select[1].classList.toggle(`droped`);
select[0].children[1].onclick = selectOption;
select[0].children[2].onclick = selectOption;
select[1].children[1].onclick = selectOption2;
select[1].children[2].onclick = selectOption2;
select[1].children[3].onclick = selectOption2;
trans[0].onclick = transform;
trans[1].onclick = transform;
trans[2].onclick = transform;
trans[3].onclick = transform;
color.onclick = changeColor;
size.onclick = changeSize;
theme.onclick = changeTheme;
sideMenu.firstElementChild.firstElementChild.onclick = swiped;

// Mon Jan 18 2021 10:34:16 : سبحان الله، سبحانك اللهم وبحمدك أشهد أن لا إله إلا أنت أستغفرك و أتوب إاليك
