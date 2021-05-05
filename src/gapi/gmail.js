import './api';

let GoogleAuth; // Google Auth object.
const initClient = async () => {
    await gapi.client.init({
        'clientId': '258563955545-o3qj8nebt6mar2qnbrkortvb2beocgim.apps.googleusercontent.com',
        'apiKey': 't9uE4Txc1PfKnxR0LNLtVzYQ',
        'scope': 'https://mail.google.com/',
        'discoveryDocs': ['https://gmail.googleapis.com/$discovery/rest?version=v1'],
    });
    GoogleAuth = gapi.auth2.getAuthInstance();
    GoogleAuth.isSignedIn.listen(updateSigninStatus);
}
const updateSigninStatus = () => {
    console.log('isSignedIn',GoogleAuth.isSignedIn);
}

export const initGAPI = async () => {
    console.log('initGAPI');
    gapi.load('client:auth2', initClient);
}

export const signInGoogle = () => {
    console.log('sign in');
    GoogleAuth.signIn();
}