let chat = document.querySelector(".chat-widget");
chat.addEventListener("click", e => {
	chat.classList.add("chat-widget_active");
})

const messages = document.querySelector( ".chat-widget__messages" );

var arr = ["Добрый день!", "И что тебе надо?", "Ничего не хочу слышать об этом", "Что, самому слабо?" ];



//отправлет сообщение
  document.querySelector('input').addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {

    let field = this.value;

    var rand = Math.floor(Math.random() * arr.length);

    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();

    let hour = d.getHours();
    let minute = d.getMinutes();
    let sec = d.getSeconds();

    if (field) {
        messages.innerHTML += `
    <div class="message  message_client">
        <div class="message__time"> ${day}.${month}.${year}  <br /> ${hour}:${minute}:${sec}</div>
        <div class="message__text"> ${field} </script> </div>
    </div>

    `;	
    }

    // добавлеятся сообщение бота

        messages.innerHTML += `
    <div class="message">
        <div class="message__time"> ${day}.${month}.${year}  <br /> ${hour}:${minute}:${sec}</div>
        <div class="message__text"> ${arr[rand]} </script> </div>
    </div>

    `;

   
    //============================================

    // очищает input 
      document.querySelector("input").value = "";
    //=============================================

      
    }
  });
//===========================================================//


      
