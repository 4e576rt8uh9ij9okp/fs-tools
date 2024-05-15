
# fs-tools
Simple nodejs fs tools (which I use and need)

# getFilesFrom(folderPath, filter)

**return**
Array with relative string paths.

    ['./test/about/index.html', './test/script.js', './images/cats.jpg']

**Return all files**

    const files = getFilesFrom("./folder")
    // Outputs all files

**Return specific file extensions**

    const htmlFiles = getFilesFrom("./folder", [".html"])
    // Outputs an array with just html files

