function kakaoBank(time, type, user, cash) {
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
  /** 카카오뱅크 **/
  if(packageName.startsWith('com.kakaobank.channel')) {
    let extras = sbn.getNotification().extras;
    if(!extras || extras=='') return;
    let time = sbn.getPostTime();
    let title = String(extras.get('android.title'));
    let text = extras.get('android.text');
    if(!title.includes('원')) return;
    let type = String(title).split(' ')[0];
    let user = String(text).split(' → ')[0];
    let cash = Number(String(title).split(' ')[1].replace(/\D/g,''));
    if(typeof kakaoBank == 'function'){
      kakaoBank(time, type, user, cash);
    }
  }
}

/**
MIT License
Copyright (c) 2024/04/23 https://github.com/jaehyun1122

**/
