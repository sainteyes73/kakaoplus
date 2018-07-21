var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/keyboard', (req, res) => {
  var menu = {
      type: 'buttons',
      buttons: ["AED 위치 찾기"]
  };
  res.send(menu);
});

router.post('/message', (req,res) =>{
  var msg = req.body.content;
  if(msg=="AED 위치 찾기"){
    let message= {
    "message": {
      "text": "아래 버튼을 눌러 현재 위치와 가장 가까운 AED를 알아내세요.",
      "message_button": {
        "label": "현 위치에서 가장 가까운 AED",
        "url": "https://woosungweb.herokuapp.com/"
      }
    },
    "keyboard": {
      "type": "buttons",
      "buttons": [
        "처음으로"
      ]
    }
  }
    res.send(message);
  }else if(msg=="처음으로"){
    let message = {
    "message": {
      "text": "처음으로 돌아갑니다."
    },
    "keyboard": {
      "type": "buttons",
      "buttons": [
        "AED 위치 찾기"
      ]
    }
  }
    res.send(message);
  }


});

module.exports = router;
