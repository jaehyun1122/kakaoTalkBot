function nhBank(time, type, user, cash) {
  /**
  time : 수신일시
  type : 입금 ? 출금
  user : 수신유저이름
  cash : 수신금액
  **/
}

function onNotificationPosted(sbn, sm) {
  let packageName = sbn.getPackageName();
  if(!packageName || packageName=='') return;
  /** NH농협콕뱅크 **/
  if(packageName.startsWith('nh.smart.nhcok')){
    let extras = sbn.getNotification().extras;
    if(!extras || extras=='') return;
    let time = sbn.getPostTime();
    let title = extras.get('android.title');
    let text = extras.get('android.text');
    if(title != '입출금 알림') return;
    let type = String(text).split('\n')[0].split(' ')[1].trim();
    let user = String(text).split('\n')[1].split(' ').slice(3).join(' ').split('잔액').slice(0,-1).join('잔액').trim();
    let cash = Number((String(text).split('\n')[0].split(' ')[1].split('금')[1].split('원')[0].trim()).replace(/\D/g,''));
    if(typeof nhBank == 'function'){
      nhBank(time, type, user, cash);
    }
  }
}

/**
MIT License
Copyright (c) 2024/04/21 https://github.com/jaehyun1122

**/
