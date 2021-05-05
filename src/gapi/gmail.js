import './api';

export let GoogleAuth; // Google Auth object.
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
    console.log('isSignedIn', GoogleAuth.isSignedIn);
}

export const initGAPI = async () => {
    console.log('initGAPI');
    gapi.load('client:auth2', initClient);
}

export const signInGoogle = async () => {
    console.log('sign in');
    await GoogleAuth.signIn();
    console.log('signed in');
}

export const inbox = [];
export const getInbox = async () => {
    console.log('get inbox');
    const response = await gapi.client.gmail.users.messages.list({
        "userId": "pocketssofat@gmail.com",
        "includeSpamTrash": false,
        "maxResults": 15
    });
    const data = JSON.parse(response.body);
    data.messages.forEach((v) => {
        inbox.push(v["id"]);
    });
    console.log('got inbox', inbox);
}

export const listData = [];
export const updateListData = async () => {
    const read = async (id) => {
        const response = await gapi.client.gmail.users.messages.get({
            "userId": "pocketssofat@gmail.com",
            "id": id,
        });
        const data = JSON.parse(response.body);

        let title = 'title';
        let senter = 'senter';
        let date = 'date';
        for (const obj of data['payload']['headers']) {
            if (title === 'title' && obj['name'] === 'Subject') {
                title = obj['value'];
            }
            else if (senter === 'senter' && obj['name'] === 'From') {
                senter = obj['value'].split(' ')[0];
                if (senter[0] === `"`) {
                    senter = senter.slice(1, -1);
                }
            }
            else if (date === 'date' && obj['name'] === 'Received') {
                date = obj['value'];
            }
        }
        const description = data['snippet'];
        const content = data['payload']['body']['data'];
        // const content = 'c29tZXRoaW5nIHdlbnQgd3Jvbmc=';

        listData.push({
            title: title,
            senter: senter,
            date: date,
            description: description,
            content:content,
        });
        console.log('pushed one');
    }
    for (const id of inbox) {
        await read(id);
    }
}