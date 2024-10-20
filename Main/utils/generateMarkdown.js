// Function to create a license badge
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license.replace(' ', '%20')}-brightgreen.svg)`;
  }
  return '';
}

// Function to create the license link in table of contents
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// Function to create the license section
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is covered under the ${license} license.`;
  }
  return '';
}

// Main function to generate the README markdown
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run this command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, use this command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about this project, feel free to contact me at ${data.email}.
You can find more of my work on GitHub: [${data.github}](https://github.com/${data.github}/)

`;
}

module.exports = generateMarkdown;