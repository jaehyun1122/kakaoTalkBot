# KoreaBank - KakaoTalk Banking Alert System  

**KoreaBank** is a KakaoTalk bot module that detects **deposit and withdrawal alerts** from Korean banking apps and integrates them into a bot for automated financial tracking.  

## Supported Banks
- **NongHyup Bank** (`nonghyupBank.js`)  
- **KakaoBank** (`kakaoBank.js`)  
- **Toss Bank** (`tossBank.js`) *(May not work correctly in some cases.)*

## File Structure
```
/koreaBank
 ├── kakaoBank.js      # KakaoBank alert processing
 ├── nonghyupBank.js   # NongHyup Bank alert processing
 ├── tossBank.js       # Toss Bank alert processing (Experimental)
 ├── README.md         # Documentation
```

## Function Overview

### Toss Bank Alert Function  
```javascript
function tossBank(time, type, user, cash) {
  /**
  time : Date and time of the alert
  type : "Deposit" or "Withdrawal"
  user : Name of the recipient
  cash : Amount received or withdrawn
  **/
}
```
> **Note:** Toss Bank (`tossBank.js`) may not function correctly in some cases.

## Usage  
This system listens for KakaoTalk banking alerts and extracts transaction details, allowing you to integrate automated responses into your bot.

Stay tuned for more updates and improvements! 🚀  