const fsPromises = require('fs').promises;
const fs = require('fs');
const path = require('path');

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, 'files', 'starter.txt'),
      'utf8'
    );
    console.log(data);

    await fsPromises.unlink(path.join(__dirname, 'files', 'newReply.txt'));

    await fsPromises.writeFile(
      path.join(__dirname, 'files', 'promisesWrite.txt'),
      data
    );

    await fsPromises.appendFile(
      path.join(__dirname, 'files', 'promisesWrite.txt'),
      '\n\nnice to meet you'
    );

    await fsPromises.rename(
      path.join(__dirname, 'files', 'promisesWrite.txt'),
      path.join(__dirname, 'files', 'changedPromisesWrite.txt')
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, 'files', 'changedPromisesWrite.txt'),
      'utf8'
    );
    console.log(newData);
  } catch (error) {
    console.error(error);
  }
};

fileOps();

/*
fs.writeFile(
  path.join(__dirname, 'files', 'reply.txt'),
  'nice to meet you',
  err => {
    if (err) throw err;
    console.log('write colplete');

    fs.appendFile(
      path.join(__dirname, 'files', 'reply.txt'),
      'testing text',
      err => {
        if (err) throw err;
        console.log('append colplete');

        fs.rename(
          path.join(__dirname, 'files', 'reply.txt'),
          path.join(__dirname, 'files', 'newReply.txt'),
          err => {
            if (err) throw err;
            console.log('rename colplete');
          }
        );
      }
    );
  }
);
*/
process.on('uncaughtException', err => {
  console.error(`There was na uncaught error: ${err}`);
  process.exit(1);
});
