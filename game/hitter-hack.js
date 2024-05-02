const scriptName = "";

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

let start = false;
let decoding = /[\u200B-\u200D\uFEFF]/g;

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
  let today = java.text.SimpleDateFormat('y/M/d HH:mm:ss E요일').format(new Date());
  
  let endWord = ['타자게임', '종료'];
  if(endWord.filter(keyword => msg.includes(keyword)).length == endWord.length){
    if(start == false){
      replier.reply([
      prefix+'타자게임'
      ].join('\n'));
    }
  }
  
  let startWord = ['타자게임', '시작', '아래', '문장'];
  if(startWord.filter(keyword => msg.includes(keyword)).length == startWord.length){
    if(start == false){
      start = true;
      return;
    }
  }
  
  if(start == true){
    replier.reply([
    msg.replace(decoding, '')
    ].join('\n'));
    start = false;
  }
  
}

function onStartCompile() {
  
}

/**
MIT License
Copyright (c) 2024/05/2 https://github.com/jaehyun1122

**/
