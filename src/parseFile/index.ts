import fs from 'fs';

async function readFileAndProcess(): Promise<void> {
  try {
    let fileName;
    if(process.argv.length < 3){
        fileName = 'file.txt';
    }else{
        fileName = process.argv[2];
    }
    // Read the file
    const data = await fs.promises.readFile(fileName, 'utf8');

    // Split the contents into an array of lines
    const lines = data.split('\n');

    // Loop through each line
    lines.forEach((line, index) => {
      console.log(`Line ${index + 1}: ${line}`);
      // Perform any additional processing on each line here
    });
  } catch (err) {
    console.error(err);
  }
}

readFileAndProcess();
