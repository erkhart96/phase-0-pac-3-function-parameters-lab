function introduction(name) {
    return `Hi, my name is ${name}.`
}

introduction('Samip.');
introduction('Aki.');

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

introductionWithLanguage('Aki', 'Ember.js');
introductionWithLanguage('Samip', 'React');

function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
};

introductionWithLanguageOptional("Gracie");