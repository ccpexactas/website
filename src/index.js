const {
    readMarkdown,
    readCsv,
    siteMaker,
    readImagesFolder,
    readYaml,
    getDate,
} = require("./makeTools")

const {paths} = require("./config")

const home = require("../src/home");
const proposal = require("../src/proposal")
const candidates = require("../src/candidates")
const activities = require("../src/activities")
const join = require("../src/join")

const pages = [
    {
        title: "Inicio",
        href: "index.html",
        logo: false,
        pageMaker: home,
        content: readMarkdown(`${paths.texts}/presentation.md`)
    },
    {
        title: "Propuestas",
        href: "proposal.html",
        logo: true,
        pageMaker: proposal,
        content: {
            proposal: readMarkdown(`${paths.texts}/proposal.md`),
            linksDocuments: readYaml(`${paths.texts}/linksDocuments.yml`)
        }
    },
    {
        title: "Candidatxs",
        href: "candidates.html",
        logo: true,
        pageMaker: candidates,
        content: {
            dean: {
                short: readMarkdown(`${paths.texts}/deanShort.md`),
                large: readMarkdown(`${paths.texts}/deanLarge.md`)
            } ,
            vicedean: {
                short: readMarkdown(`${paths.texts}/vicedeanShort.md`),
                large: readMarkdown(`${paths.texts}/vicedeanLarge.md`)
            } ,
            counselors: {
                titular: readCsv(`${paths.csvs}/counselorsTitular.csv`),
                alternate: readCsv(`${paths.csvs}/counselorsAlternate.csv`)
            }
        }
    },
    {
        title: "Actividades",
        href: "activities.html",
        logo: true,
        pageMaker: activities,
        content: {
            carousel: readImagesFolder(`${paths.images}/activities`),
            activities: readYaml(`${paths.texts}/activities.yml`)
        }
    },
    {
        title: "Contacto",
        href: "join.html",
        logo: true,
        pageMaker: join,
        content: {
            invitation: readMarkdown(`${paths.texts}/join.md`),
        }
    },
];

siteMaker(pages);

