const functions = require('firebase-functions');
const admin = require('firebase-admin');
const config = require('./runconfig.json')
admin.initializeApp(functions.config(config.production).firebase);

const express = require('express');
const app = express();
const cors = require('cors')({origin:true});
app.use(cors);

const anonymousUser = {
    id: "anon",
    name: "anonymous",
    avatar: ""
};

const checkUser = (req, res, next) => {
    req.user = anonymousUser;
    if(req.query.auth_token !== undefined){
        let idToken = req.query.auth_token;
        admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
            let authUser = {
                id: decodedIdToken.user_id,
                name: decodedIdToken.name,
                avatar: decodedIdToken.pickture
            };
            req.user = authUser;
            next();
            return false;
        }).catch(error => {
            next();
        })
    }
}

// 채널 생성 api
/*
    어드민SDK의 admin.database()로 실시간 db를 조작한다.
    chnnels에 post요청이 들어왔을 때 요청 body에 포함된 cname 값을 createChannel함수에 넘겨서 채널을 생성한다.
*/
function createChannel(cname){
    let channelsRef = admin.database().ref('channels'); // channels 노드 참조
    let date1 = new Date();
    let date2 = new Date();
    date2.setSeconds(date2.getSeconds() + 1);
    
    const DefaultData = `{
        "messages" : {
            "1": {
                "body" : "Welcom To #${cname} channel!",
                "date" : "${date1.toJSON()}", 
                "user" : {
                    "avatar" : "",
                    "id" : "robot",
                    "name" : "Robot"
                }
            }, 
            "2": {
                "body" : "첫 번째 메시지",
                "date" : "${date2.toJSON()}",
                "user" : {
                    "avatar" : "",
                    "id" : "robot",
                    "name" : "Robot"
                }
            }
        }
    }`;
    channelsRef.child(cname).set(JSON.parse(DefaultData));
}

app.get('/', (req, res) => {
    res.send(config.production);
})

app.post('/todolist', (req, res) => {    
    // res.send(req.body)
    // let cname = req.params.cname;
    let message = {
        date: new Date().toJSON(),
        todo: '밥하기',
        user: '최종원'
        // body: req.body.body,
        // user: req.user        
    };
    let messagesRef = admin.database().ref(`todolist/`);
    messagesRef.push(message);
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.status(201).send({result: "ok"});
});

app.get('/todolist', (req, res) => {
    let todoRef = admin.database().ref('todolist');
    todoRef.once('value', (snapshot) => {
        let items = new Array();
        snapshot.forEach((childSnapshot) => {
            let todo = childSnapshot;
            items.push(todo);
        })
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.send({todoList: items});
    })
});

app.post('/channels', (req, res) => {
    let cname = req.body.cname;
    createChannel(cname);
    res.header('Content-type', 'application/json; charset=utf-8');
    res.status(201).json({result: 'ok'});
})

// 채널 목록 확인 api
app.get('/channels', (req, res) => {
    let channelsRef = admin.database().ref('channels');
    channelsRef.once('value', (snapshot) =>{
        let items = new Array();
        snapshot.forEach((childSnapshot) => {
            let cname = childSnapshot.key;
            items.push(cname);
        });
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.send({channels: items});
    })
});

//지정한 채널에 새 메시지를 추가하는 api
app.post('/channels/:cname/messages', (req, res) => {
    let cname = req.params.cname;
    let message = {
        date: new Date().toJSON(),
        body: req.body.body,
        user: req.user
    };
    let messagesRef = admin.database().ref(`channels/${cname}/messages`);
    messagesRef.push(message);
    res.header('Content-type', 'application/json; charset=utf-8');
    res.status(201).send({result:"ok"});
})

//채널 내 메시지 목록을 확인하는 api
app.get('/channels/:cname/messages', (req, res) => {
    let cname = req.params.cname;
    let messagesRef = admin.database().ref(`channels/${cname}/messages`).orderByChild('date').limitToLast(20);
    messagesRef.once('value', snapshot => {
        let items = new Array();
        snapshot.forEach(childSnapshot => {
            let message = childSnapshot.val();
            message.id = childSnapshot.key;
            items.push(message);
        });
        items.reverse();
        res.header('Content-type', 'application/json; charset=utf-8');
        res.send({message: items});
    });
});

// 초기 상태로 되돌리기

app.post('/reset', (req, res) => {
    createChannel('general');
    createChannel('random');
    res.header('Content-type', 'application/json; charset=utf-8');
    res.send({message: items});
})

exports.v1 = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
