function tossBank(time, type, user, cash) {
  
}

function onNotificationPosted(sbn, sm) {
  let packageName = sbn.getPackageName();
  if(!packageName || packageName=='') return;
  /** 토스뱅크 **/
  if(packageName.startsWith('viva.republica.toss')) {
    let extras = sbn.getNotification().extras;
    if(!extras || extras=='') return;
    let time = sbn.getPostTime();
    let title = String(extras.get('android.title'));
    let text = extras.get('android.text');
    if(!title.includes('원')) return;
    let type = String(title).split(' ')[1];
    let user = undefined;
    let cash = Number(String(title).split(' ')[0].replace(/\D/g,''));
    if(typeof tossBank == 'function'){
      tossBank(time, type, user, cash);
    }
  }
}
