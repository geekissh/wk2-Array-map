function findMatching(driversArray, query) {
  return driversArray.filter(driver =>
    driver.toLowerCase() === query.toLowerCase()
  );
}

function fuzzyMatch(driversArray, query) {
  return driversArray.filter(driver =>
    driver.toLowerCase().startsWith(query.toLowerCase())
  );
}
function matchName(driversArray, query) {
  return driversArray.filter(driver =>
    driver.name.toLowerCase() === query.toLowerCase()
  );
}

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {

    const words = tutorial.split(' ');

    const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    return titleCaseWords.join(' ');
  });
};

module.exports = { findMatching, fuzzyMatch, matchName, titleCased };

