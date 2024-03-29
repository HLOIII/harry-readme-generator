// create a function that returns description
// create a function that returns table of contents
const renderTableOfContents = contentTable => {
    let listOfContent = '';
    contentTable.forEach((item) => {
        if (!item) {
            return '';
        } else {
            listOfContent += `* [${item}](#${(item).toLowerCase().split(' ').join('-')})
  `;
        }
    });
    return `## Table of Contents
  ${listOfContent}`;
}

// create a function that returns installation
const renderInstallationSection = installation => {
    if (!installation) {
        return '';
    } else {
        return `## Installation
  Please see below for installation requirements:
  ${installation}
  `
    }
}

// create a function that returns usage
const renderUsageSection = usage => {
    if (!usage) {
        return '';
    } else {
        return `## Usage
  ${usage}`;
    }
}

// create a function that returns contributing
const renderContributingSection = contributing => {
    if (!contributing) {
        return '';
    } else {
        return `## Contributing
  ${contributing}`;
    }
}

// create a function that returns tests
const renderTestSection = tests => {
    if (!tests) {
        return '';
    } else {
        return `## Tests
  ${tests}`;
    }
}

// create a function that returns questions
const renderQuestionSection = (email, github) => {
    if (!email && !github) {
        return '';
    } else {
        return `## Questions
  If you have any questions please use the following two links to contact me:
  * https://github.com/${github}
  * ${email}`;
    }
}

// create a function that returns screenshots
const renderScreenshotSection = screenshot => {
    let multipleScreenshots = '';
    if (!screenshot) {
        return '';
    } else {
        screenshot.forEach(itemScreenshot => {
            multipleScreenshots += `${itemScreenshot.descriptionScreenshot}
  ![alt=${itemScreenshot.nameScreenshot}](${itemScreenshot.linkScreenshot})`;
        });
        return `## Screenshots
  ${multipleScreenshots}`;
    }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
    if (!license) {
        return '';
    } else {
        return `
  ![GitHub license badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
    if (!license) {
        return '';
    } else {
        return `
  [GitHub-license](https://raw.githubusercontent.com/sshahram/readme-generator/develop/utils/license-${license}.txt)`
    }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
    if (!license) {
        return '';
    } else {
        return `## License
  Please see the following link for license information: ${renderLicenseLink(license)}`
    }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
    return `# ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ${renderTableOfContents(data.contentTable)}
  ${renderInstallationSection(data.installation)}
  ${renderUsageSection(data.usage)}
  ${renderLicenseSection(data.license)}
  ${renderContributingSection(data.contributing)}
  ${renderTestSection(data.tests)}
  ${renderScreenshotSection(data.screenshotArr)}
  ${renderQuestionSection(data.email, data.github)}
  `;
};

module.exports = generateMarkdown;