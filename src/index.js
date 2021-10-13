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
        meta: {
            title: "CCP Exactas - Inicio - Construcción Colectiva Profesorxs de Exactas",
            description: "Construcción Colectiva Profesorxs de Exactas - Agrupación de docentes CPP Exactas UBA - Facultad de Ciencias Exactas y Naturales de la Universidad de Buenos Aires"
        },
        href: "index.html",
        pageMaker: home,
        content: readMarkdown(`${paths.texts}/presentation.md`)
    },
    {
        title: "Propuestas",
        meta: {
            title: "CCP Exactas: Propuestas",
            description: "Propuestas de la agrupación Construcción Colectiva Profesorxs de Exactas (CCP Exactas)"
        },
        href: "proposal.html",
        pageMaker: proposal,
        content: {
            proposal: readMarkdown(`${paths.texts}/proposal.md`),
            linksDocuments: readYaml(`${paths.texts}/linksDocuments.yml`)
        }
    },
    {
        title: "Candidatxs",
        meta: {
            title: "CCP Exactas: Candidatxs",
            description: "Candidatas a Decana, Vicedecana y consejerxs de la agrupación CPP Exactas"
        },
        href: "candidates.html",
        pageMaker: candidates,
        content: {
            introCandidates: readMarkdown(`${paths.texts}/introCandidates.md`),
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
        meta: {
            title: "CCP Exactas: Actividades",
            description: "Anuncio de futuras actividades y archivo histórico de la agrupación CPP Exactas"
        },
        href: "activities.html",
        pageMaker: activities,
        content: {
            carousel: readImagesFolder(`${paths.images}/activities`),
            activities: readYaml(`${paths.texts}/activities.yml`)
        }
    },
    {
        title: "Contacto y adherentes",
        meta: {
            title: "CCP Exactas: Contacto y adherentes",
            description: "Redes sociales de la agrupación CPP Exactas, formulario para nuevos adherentes y listado de adheridos"
        },
        href: "join.html",
        pageMaker: join,
        content: {
            invitation: readMarkdown(`${paths.texts}/join.md`),
        }
    },
];

siteMaker(pages);

