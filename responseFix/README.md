# ResponseFix - Enhanced KakaoTalk Message Handling  

**ResponseFix** is a powerful module that improves message processing and automated responses for KakaoTalk bots.  
This module is designed to work with **the latest KakaoTalk version** and requires **Android 11 or higher** for full functionality.  

## 📜 License & Credits  
- **License:** MIT License  
- **Original Author:** [naijun0403](https://github.com/naijun0403)  
- **Contributor:** jaehyun1122  

## 🔧 ResponseFix Function  

```javascript
responseFix(room, msg, sender, isGroupChat, replier, imageDB, packageName, time, roomid, senderid, isMultiChat, isMention, unread) {
  
}
```

### 📝 Parameter Details  
| Parameter      | Description                                      |
|---------------|--------------------------------------------------|
| **room**      | Name of the chatroom                             |
| **msg**       | Message content                                  |
| **sender**    | Username of the sender                          |
| **isGroupChat** | `true` if the chat is a group chat, otherwise `false` |
| **replier**   | Object for sending replies                      |
| **imageDB**   | Image-related data                              |
| **packageName** | App package name (KakaoTalk, etc.)            |
| **time**      | Timestamp when the message was received         |
| **roomid**    | Unique ID of the chatroom                       |
| **senderid**  | Unique ID of the sender                         |
| **isMultiChat** | `true` if the message is from a cloned KakaoTalk app |
| **isMention** | `true` if the sender mentioned the bot          |
| **unread**    | Number of unread messages in the chat           |

## 🚀 Features & Benefits  
- Handles **real-time** KakaoTalk messages  
- Supports **group chat and direct messages**  
- Detects **mentions** and **unread message count**  
- Compatible with **multi-instance KakaoTalk**  

Stay tuned for future updates and improvements! ⭐  