const ghpages = require('gh-pages');
const ncp = require('ncp').ncp;
const del = require('del');
const fs = require('fs');
var npm = require('npm');

const githubIoBase = 'https://dario-piotrowicz.github.io';
const repoName = 'ReactJS-CSS_demo_fictional-company_website_miniproject';

const consoleError = (message) => {
  console.error('\x1b[31m', message);
  console.log('\x1b[0m', '');
};

const consoleLogSuccess = (message) => {
  console.log('\x1b[32m', message);
  console.log('\x1b[0m', '');
};

const consoleLogInfo = (message) => {
  console.log('\x1b[33m', message);
  console.log('\x1b[0m', '');
};

const deleteDist = () => {
  consoleLogInfo(`Cleanup, Attempting to delete 'dist' folder`);
  del(['dist'])
    .then(() => {
      consoleLogSuccess(`'dist' folder deleted successfully`);
      console.log('');
      consoleLogSuccess('The deployment process has terminated with no errors');
      consoleLogSuccess(
        'Your project should have been deployed at the following url:'
      );
      consoleLogSuccess(`${githubIoBase}/${repoName}/`);
    })
    .catch(() => consoleError('unable to delete temporary dist folder'));
};

const publish = () => {
  consoleLogInfo(`Attempting to publish 'dist' using ghpages`);
  ghpages.publish('dist', (err) => {
    if (err) {
      consoleError('ghpages was unable to publish dist folder');
    } else {
      consoleLogSuccess(`'dist' published successfully`);
      deleteDist();
    }
  });
};

const create404File = (result) => {
  consoleLogInfo('Attempting to create 404.html for deployment');
  fs.writeFile('dist/404.html', result, 'utf8', function (err) {
    if (err) {
      consoleError('Error, unable to write to dist/index.html file');
    } else {
      consoleLogSuccess('404.html created successfully');
      publish();
    }
  });
};

const updateIndexHtml = () => {
  consoleLogInfo('Attempting to update index.html for deployment');
  fs.readFile('dist/index.html', 'utf8', function (err, data) {
    if (err) {
      consoleError('Error, unable to read dist/index.html file');
    } else {
      let result = data.replace(
        /src="\//g,
        `src="${githubIoBase}/${repoName}/`
      );
      result = result.replace(
        /href="\//g,
        `href="${githubIoBase}/${repoName}/`
      );
      result = result.replace(
        `document.IndexBrowserRouterBasename = '/';`,
        `document.IndexBrowserRouterBasename = "/${repoName}"`
      );

      fs.writeFile('dist/index.html', result, 'utf8', function (err) {
        if (err) {
          consoleError('Error, unable to write to dist/index.html file');
        } else {
          consoleLogSuccess('index.html updated successfully');
          create404File(result);
        }
      });
    }
  });
};

const createDist = () => {
  consoleLogInfo(`Attempting to create 'dist' folder`);
  ncp('public', 'dist', (err) => {
    if (err) {
      consoleError(`Error, unable to create 'dist' folder`);
    } else {
      consoleLogSuccess(`'dist' folder created successfully`);
      updateIndexHtml();
    }
  });
};

const build = () => {
  consoleLogInfo('Attempting to run build script');
  npm.load((err) => {
    if (err) {
      consoleError('Error in loading npm');
    } else {
      npm.commands.run(['build'], (err) => {
        if (err) {
          consoleError(`Error in running 'build' script`);
        } else {
          console.log('');
          consoleLogSuccess('build script run successfully');
          createDist();
        }
      });
    }
  });
};

if (fs.existsSync('./dist')) {
  consoleError(
    `A folder called 'dist' is present in the root directory,
        this script expects that no such folder exists,
              please remove it and try again`
  );
} else {
  build();
}
