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

function getNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName, time, roomid, senderid, isMultiChat, isMention, unread) {
  
  let today = java.text.SimpleDateFormat('y/M/d HH:mm:ss E요일').format(Date.now());
  
  if(msg.startsWith(prefix+'로또결과')){
    if(msg.length <= prefix.length+5){
      replier.reply([
      sender+'님 명령어가 올바르지 않습니다.'
      ].join('\n'));
      return;
    }
    let round = msg.substr(prefix.length+5);
    let site = org.jsoup.Jsoup.connect('https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo='+round).get().text();
    let result = JSON.parse(site);
    if(result.returnValue == 'fail') {
      replier.reply([
      sender+'님 동행복권 '+round+'회차는 존재하지 않습니다.'
      ].join('\n'));
      return;
    }
    replier.reply([
    '[동행복권 당첨결과]',
    '추첨일시 : '+result.drwNoDate,
    result.drwtNo1+', '+result.drwtNo2+', '+result.drwtNo3+', '+result.drwtNo4+', '+result.drwtNo5+', '+result.drwtNo6+' + '+result.bnusNo,
    '<상세정보는 더보기 클릭>'+all,
    '',
    '총판매금액 : '+String(result.totSellamnt).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원',
    '총1등당첨금 : '+String(result.firstAccumamnt).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원',
    '1등수령액 : '+String(result.firstWinamnt).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원',
    '1등당첨인원 : '+String(result.firstPrzwnerCo).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'명 '
    ].join('\n'));
  }
  
  if(msg==prefix+'로또추천'){
    let list = [];
    for(let i = 0; i < 7; i++){
      let number = getNumber(1,45);
      if(!list.includes(number)){
        list.push(number);
      }else{
        i--;
      }
    }
    list.sort((a, b) => a - b);
    replier.reply([
    '[동행복권 추천번호]',
    '🍀행운을 빌어요!',
    list.slice(0,6).join(', ')+' + '+list.slice(6)
    ].join('\n'));
  }
  
}

function onStartCompile() {
  
}

/**
MIT License
Copyright (c) 2024/04/21 https://github.com/jaehyun1122

**/
