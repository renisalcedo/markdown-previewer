const marked = require('marked')
const fs = require('fs')
const path = require('path')

class Preview {
  constructor() {
    this.markExtensions = ['.markdown', '.mdown', '.mkdn', '.md', '.mkd',
                           '.mdwn', '.mdtxt', '.mdtext', '.text', '.Rmd']
  }

  createHtml(fileContent) {
    const html = marked(fileContent)

    return html
  }

  // Function for getting the markdown content
  htmlContent(file) {
    return new Promise((resolve, reject) => {
      // Check for the extension to be markdown
      if(!this.markExtensions.includes(path.extname(file))) {
        return reject(Error ("This is not a markdown file!"))
      }

      // Reads file and returns html
      fs.readFile(file, (err, data) => {
        const fileContent = data.toString('utf8')

        return resolve(this.createHtml(fileContent))
      })
    })
  }
}

module.exports = Preview
