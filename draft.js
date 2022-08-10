const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
// const download = (uri)=>{
//     const file = fs.createWriteStream("file.mp4");
//     const request = https.get(uri, function(response) {
//        response.pipe(file);
    
//        // after download completed close filestream
//        file.on("finish", () => {
//            file.close();
//            console.log("Download Completed");
//        });
//     });
// }



fs.stat('file.mp4', (err, stat) => {
    if (err) {
        console.log('error :',err)
        return;
    }
    if(stat){
        console.log('state :',stat)
    }

})



