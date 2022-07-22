#!/usr/bin/env node
'use strict';
const React = require('react');
const importJsx = require('import-jsx');
const {render} = require('ink');
const meow = require('meow');

const ui = importJsx('./ui');

const cli = meow(`
	Usage
	  $ atlas-static-site-search-cli

	Options
    --group-id      Your MongoDB Atlas Project ID
    --cluster-name  Your MongoDB Atlas Cluster name
    --public-key    Your MongoDB Atlas Public API Key
    --private-key   Your MongoDB Atlas Private API Key
    --sitemap-url   Your website's sitemap URL

	Examples
	  $ atlas-static-site-search-cli --group-id=62d9b1228afdfc537e593b9e --cluster-name=Cluster0 --public-key=lkumasst --private-key=736130cc-0b47-4dbf-ae2e-1556be632d78 --sitemap-url="https://skunkblog.nlarew.com/sitemap/sitemap-index.xml"
	  Your Docs Search App ID: docs-search-abcde
`);

render(React.createElement(ui, cli.flags));
