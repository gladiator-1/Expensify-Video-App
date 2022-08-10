exports.video = (req, res) => {
    const https = require('https');
    const {uri} = req.query;
    // console.log('uri :',uri)
    const encodedUri = uri.split('encryptedAuthToken=')[0] + "encryptedAuthToken=" + encodeURIComponent(uri.split('encryptedAuthToken=')[1])
    console.log('encode uri :',encodedUri)
    https.get(encodedUri, (stream) => {
        stream.pipe(res);
    });
};