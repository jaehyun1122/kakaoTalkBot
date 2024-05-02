const scriptName = '';

let prefix = '!';
let all = '\u200b'.repeat(500);
let line = '-'.repeat(50);
let fs = FileStream;
let path = {
  '':'sdcard/'
}
/*
if(!fs.read(path.)) fs.write(path., '{}');
let  = JSON.parse(fs.read(path.));

fs.write(path., JSON.stringify(, null, 4));
*/

let hitter = {};
let countStart = 3;
let sentence = [
'재현이는 멋있다'
];

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName, time, roomid, senderid, isMultiChat, isMention, unread) {
  
  let today = java.text.SimpleDateFormat('y/M/d HH:mm:ss E요일').format(Date.now());
  
  if(msg==prefix+'타자게임'){
    replier.reply([
    '타자게임'+all,
    '',
    prefix+'타자시작 - 타자게임을 시작합니다.',
    prefix+'타자포기 - 타자게임을 포기합니다.'
    ].join('\n'));
  }
  
  if(msg==prefix+'타자시작'){
    if(hitter[room]){
      replier.reply([
      '이미 타자게임이 시작되었습니다.',
      hitter[room].quiz
      ].join('\n'));
      return;
    }
    let pickSentence = sentence[Math.floor(Math.random() * sentence.length)];
    hitter[room] = {
      'join':today,
      'quiz':(pickSentence).replace(/(.)(?!$)/g, '$1\u200b'),
      'answer':pickSentence,
      'timeStart':0
    };
    for(let i = 0; i < countStart; i++){
      replier.reply([
      (countStart-i)+'초 후 타자게임을 시작합니다.'
      ].join('\n'));
      java.lang.Thread.sleep(1000);
    }
    hitter[room].timeStart = Date.now();
    replier.reply([
    '<타자게임시작>',
    '아래 문장을 그대로 따라 적어 주세요.'
    ].join('\n'));
    java.lang.Thread.sleep(500);
    replier.reply([
    hitter[room].quiz
    ].join('\n'));
  }
  
  if(hitter[room]){
    if(msg==hitter[room].quiz){
      replier.reply([
      '<🚨부정행위 감지🚨>',
      sender+'님',
      '복사 붙여넣기가 감지되었습니다.',
      '정정당당하게 다시시도 해보세요!!'
      ].join('\n'));
      return;
    }
    if(msg==hitter[room].answer){
      timeEnd = Date.now();
      replier.reply([
      '<타자게임종료>',
      sender+'님 타자게임 성공!',
      '제시된문장 : '+hitter[room].answer,
      '타자수 : '+(hitter[room].answer).length,
      '걸린시간 : '+((timeEnd-hitter[room].timeStart)/1000)+'초'
      ].join('\n'));
      delete hitter[room];
    }
  }
  
  if(msg==prefix+'타자포기'){
    if(!hitter[room]){
      replier.reply([
      '타자게임이 시작되지 않았습니다.'
      ].join('\n'));
      return;
    }
    timeEnd = Date.now();
    replier.reply([
    '<타자게임종료>',
    sender+'님이 타자게임을 포기하셨습니다.',
    '제시된문장 : '+hitter[room].answer,
    '타자수 : '+(hitter[room].answer).length,
    '걸린시간 : '+((timeEnd-hitter[room].timeStart)/1000)+'초'
    ].join('\n'));
    delete hitter[room];
  }
  
}

function onStartCompile() {
  
}

/**
MIT License
Copyright (c) 2024/05/2 https://github.com/jaehyun1122

**/
