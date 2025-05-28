import ghpages from 'gh-pages';
import dotenv from 'dotenv';

dotenv.config();

const repo = `https://${process.env.GITHUB_USERNAME}:${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_USERNAME}/web-wizard.git`;

ghpages.publish('dist', { repo }, (err) => {
  if (err) {
    console.error('Deploy failed:', err);
  } else {
    console.log('Deploy successful!');
  }
});
