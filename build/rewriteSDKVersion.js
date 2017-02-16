const fs = require('fs')

fs.readFile('./platforms/android/app/build.gradle', (err, data) => {
    if (err) console.error(err)

    let d = data.toString().replace(/weex\_sdk\:[0-9]\.[0-9]\.[0-9]/, 'weex_sdk:0.9.5')

    fs.writeFile('./platforms/android/app/build.gradle', d, (err) => {
        if (err) console.error(err)
    })
});
