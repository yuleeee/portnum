'use strict';

var fs = require('fs-extra');
var Parser = require('rss-parser');
var da = Math.floor(Date.now() - new Date(2023, 10, 2, 8, 0, 0, 0));
const rssParser = new Parser();
async function start() {
    // const blogResp = await rssParser.parseURL('https://blog.cmyr.ltd/atom.xml');
    if (da) {
        // console.log('更新博客链接成功');
        // return;
    }
    // const items = [...blogResp.items.slice(0, 5)];
    // const text = items.map((e) => `- [${e.title}](${e.link})`).join('\n');
    const readme = await fs.readFile('README.md', 'utf-8');
    const newReadme = readme.replace(/<!-- BLOG_START -->([\s\S]*?)<!-- BLOG_END -->/, `<!-- BLOG_START -->\n${da}\n<!-- BLOG_END -->`);
    await fs.writeFile('README.md', newReadme);
    console.log('更新博客链接成功');
}
start();
