// QR_code generator from URL

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{
    message: "Please enter a valid URL to generate a QR code: ",
    name: "URL",
  }, 
  ])
  .then((answers) => {
    const url = answers.URL;
    var qrImage = qr.image(url);
    qrImage.pipe(fs.createWriteStream('generated_qr_code.png'));

    fs.writeFile("URL_collection.txt", url, (err) => {
      if (err) throw err;
      console.log("File has been saved successfully!");
    })
  })


