const scriptName = '';

let prefix = '!';
let all = '\u200b'.repeat(500);
let line = '-'.repeat(50);
let fs = FileStream;
let path = {
  'data':'sdcard/bot/'
}
/*
if(!fs.read(path.data)) fs.write(path.data, '{}');
let data = JSON.parse(fs.read(path.data));
*/

function responseFix(room, msg, sender, isGroupChat, replier, imageDB, packageName, time, roomid, senderid, isMultiChat, isMention, isImage, unread) {
  
  let today = java.text.SimpleDateFormat('y/M/d HH:mm:ss E요일').format(Date.now());
  
  
  
  //fs.write(path.data, JSON.stringify(data, null, 4));
  
}

function onStartCompile() {
  //data = {};
  //fs.write(path.data, JSON.stringify(data, null, 4));
  
}

/**
MIT License
Copyright (c) 2024/00/00 https://github.com/jaehyun1122

**/

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  let time = Date.now();
  let roomid = '1234567890';
  let senderid = '1234567890';
  let isMultiChat = 0;
  let isMention = false;
  let unread = '1개의 안 읽은 메시지';
  let isImage = false;
  if(isDebugChat(replier)) {
    if(this.hasOwnProperty('responseFix')) {
      responseFix(room, msg, sender, isGroupChat, replier, imageDB, packageName, time, roomid, senderid, isMultiChat, isMention, isImage, unread);
    }
  }
}

function isDebugChat(replier) {
  let session = com.xfl.msgbot.script.api.legacy.SessionCacheReplier.__javaObject__.getDeclaredField('isDebugChat');
  session.setAccessible(true);
  return session.get(replier);
}

let unread;
function onNotificationPosted(sbn, sm) {
  let packageName = sbn.getPackageName();
  if(!packageName || packageName=='') return;
  /**
  [카카오톡] responseFix <안드로이드 11이상 및 카카오톡 10.6.1>
  **/
  if(packageName.startsWith('com.kakao.talk')) {
    let bundle = sbn.getNotification().extras;
    if(!bundle || bundle=='') return;
    if(!bundle.get('android.title')){
      unread = bundle.get('android.subText'); 
      return;
    }
    let actions = sbn.getNotification().actions;
    if(!actions || actions=='') return;
    for(let n = 0; n < actions.length; n++) {
      action = actions[n];
      if(!action.getRemoteInputs()) continue;
      let room = bundle.get('android.subText');
      if(room == null) room = bundle.get('android.summaryText');
      let sender = bundle.get('android.title');
      if(room == null) room = sender;
      let msg = bundle.get('android.text').toString();
      let isGroupChat = bundle.get('android.isGroupConversation');
      let replier = new com.xfl.msgbot.script.api.legacy.SessionCacheReplier(packageName, action, room, false, '');
      let icon = bundle.getParcelableArray('android.messages')[0].get('sender_person').getIcon().getBitmap();
      let image = bundle.getBundle('android.wearable.EXTENSIONS');
      if(image != null) image = image.getParcelable('background');
      let imageDB = new com.xfl.msgbot.script.api.legacy.ImageDB(icon, image);
      let time = sbn.getPostTime();
      let roomid = sbn.getTag();
      let senderid = bundle.get('android.messages')[0].get('sender_person').getKey();
      let isMultiChat = sbn.getUser().hashCode();
      let isMention = bundle.get('android.text') instanceof android.text.SpannableString;
      let isImage = sbn.getNotification().hasImage();
      com.xfl.msgbot.application.service.NotificationListener.Companion.setSession(packageName, /*actions.find(v => v.remoteInputs)*/room, action);
      if(this.hasOwnProperty('responseFix')) {
        responseFix(room, msg, sender, isGroupChat, replier, imageDB, packageName, time, roomid, senderid, isMultiChat, isMention, isImage, unread);
      }
    }
  }
}

/**
MIT License
Copyright (c) 2022/02/23 https://github.com/naijun0403

MIT License
Copyright (c) 2024/04/18 https://github.com/jaehyun1122

**/
