#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const trackerPath = path.join(__dirname, '..', 'src', 'data', 'tracker.json');
const data = JSON.parse(fs.readFileSync(trackerPath, 'utf-8'));

const today = new Date().toISOString().split('T')[0];
const dsa = args.includes('--dsa');
const ai = args.includes('--ai');
const job = args.includes('--job');

data.entries[today] = [dsa, ai, job];

fs.writeFileSync(trackerPath, JSON.stringify(data, null, 2));
console.log(`Tracked for ${today}: DSA=${dsa}, AI=${ai}, Job=${job}`);
