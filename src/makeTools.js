const fs = require("fs");
const fm = require("front-matter");
const parse = require('csv-parse/lib/sync')
const yaml = require('js-yaml');

const {paths} = require("./config")

const marked = require("marked");
const base = require("../src/base");
const navbar = require("../src/navbar");

marked.setOptions({
    renderer: new marked.Renderer(),
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
});

function readMarkdown(mdPath){
    const data = fs.readFileSync(`${mdPath}`, "utf8");
    const content = fm(data);
    content.body = marked(content.body);
    content.path = mdPath;
    return content;
}

function readYaml(yamlPath){
    let fileContents = fs.readFileSync(`${yamlPath}`, "utf8");
    let documents = yaml.safeLoadAll(fileContents);
    return documents.map(function (doc){
        if (doc.description){
            doc.description = marked(doc.description)
        }
        return doc
    })
}

function readImagesFolder(mdFolder){
    try{
        return fs.readdirSync(`build/${mdFolder}`)
            .map(file => `${mdFolder}/${file}`)
            .filter(file => file !== `${mdFolder}/README.md`);
    } catch (error){
        return []
    }

}

function readCsv(csvPath){
    const data = fs.readFileSync(`${csvPath}`, "utf8");
    return parse(data, {
        columns: true,
        skip_empty_lines: true,
        comment: "#",
        trim: true,
    });
}

function getDate(file){
    let statsObj = fs.statSync(file);
    return new Date(statsObj.mtime).toLocaleDateString('en-GB');
}


function siteMaker(pages){
    for (const pageOptions of pages){
        let navItems = pages.map(p =>
            ({
                active: p.title === pageOptions.title,
                title: p.title,
                href: p.href,
            })
        );
        let pageHTML = base(
            pageOptions.title,
            pageOptions.meta,
            navbar(navItems),
            pageOptions.pageMaker(pageOptions.content)
        );

        fs.writeFile(
            `${paths.output}/${pageOptions.href}`,
            pageHTML,
            e => {
                if (e) throw e;
                console.log(`${paths.output}/${pageOptions.href} was created successfully`);
            }
        )
    }
}

module.exports = {
    readMarkdown, readCsv, siteMaker,
    readImagesFolder, readYaml, getDate
};
