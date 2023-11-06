function renderTitleSection(title) {
  if (title !== "") {
    return `# ${title}`;
  } else {
    return "# Title";
  }
}

function renderDescriptionSection(desc) {
  return `## Description
${desc}`;
}

function renderInstallationSection(install) {
  return `## Instructions
${install}`;
}

function renderUsageSection(usage) {
  return `## Usage
${usage}`;
}

function renderGitHub(profile) {
  if (profile !== "") {
    return `### Github
[${profile}](https://github.com/${profile})`;
  } else {
    return "";
  }
}

function renderEmail(email) {
  if (email !== "") {
    return `### Email
[${email}](${email})`;
  } else {
    return "";
  }
}

function renderCreditsSection(profile, email) {
  let userProfile = renderGitHub(profile);
  let userEmail = renderEmail(email);

  return `## Credits
${userProfile}
${userEmail}`;
}

function renderLicenseBadge(license) {
  let link = renderLicenseLink(license);
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${link})`;
      break;
    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${link})`;
      break;
    case "GPL":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${link})`;
      break;
    default:
      return "";
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
      break;
    case "Apache":
      return "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL":
      return "https://www.gnu.org/licenses/gpl-3.0";
      break;
    default:
      return "";
  }
}

function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license);
  return `## License
${badge}`;
}

function renderContributeSection(contribute) {
  return `## How to Contribute
${contribute}`;
}

function renderTestsSection(tests) {
  return `## Tests
${tests}`;
}

function generateMarkdown(data) {
  let titleSection = renderTitleSection(data.title);
  let descSection = renderDescriptionSection(data.desc);
  let installSection = renderInstallationSection(data.install);
  let usageSection = renderUsageSection(data.usage);
  let licenseSection = renderLicenseSection(data.license);
  let creditsSection = renderCreditsSection(data.username, data.email);
  let contributeSection = renderContributeSection(data.contribute);
  let testsSection = renderTestsSection(data.tests);

  return `${titleSection}
${descSection}
${installSection}
${usageSection}
${creditsSection}
${licenseSection}
${contributeSection}
${testsSection}
`;
}

module.exports = { generateMarkdown };
