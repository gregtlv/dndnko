// Greg

// Navigation

headerBurger.onclick = function expandMenu() {
  var headerNav = document.getElementById('headerNav');

  let headerNavClass = headerNav.classList;

  // console.log(headerNavClass);

  if (headerNav.className === "header-top__nav") {
      headerNav.className += " responsive";
  } else {
    headerNavClass.remove("responsive");
  }

  // console.log(headerNavClass);

}

// Scroll


$(document).ready(function(){
 $("#headerNav").on("click","a", function (event) {
   //отменяем стандартную обработку нажатия по ссылке
   event.preventDefault();

   //забираем идентификатор бока с атрибута href
   var id  = $(this).attr('href'),

   //узнаем высоту от начала страницы до блока на который ссылается якорь
     top = $(id).offset().top;

   //анимируем переход на расстояние - top за 1500 мс
   $('body,html').animate({scrollTop: top}, 1500);
 });
});


// End Scroll


// Form Validation

sendButton.onclick = function sendForm(event) { //event важная вещь для Firefox

	event.preventDefault();

	var userName = document.getElementById('inputName');
	var userNumber = document.getElementById('inputPhone');
	var userMail = document.getElementById('inputEmail');
	var userDate = document.getElementById('inputDate');
	var userText = document.getElementById('inputText');

	var alertMessage = document.getElementById('alertMessage');



	let userName_Class = userName.classList;
	let userNumber_Class = userNumber.classList;
	let userMail_Class = userMail.classList;
	let userDate_Class = userDate.classList;
	let userText_Class = userText.classList;

	let alertMessage_Class = alertMessage.classList;


	if (userName.value == "") {
		userName_Class.remove("regular__input");
		userName_Class.add("red__input");

	}
	else {
		userName_Class.remove("red__input");

	}



	if (userNumber.value == "") {
		userNumber_Class.remove("regular__input");
		userNumber_Class.add("red__input");

	}
	else {
		userNumber_Class.remove("red__input");

	}



	if (userMail.value == "") {
		userMail_Class.remove("regular__input");
		userMail_Class.add("red__input");

	}
	else {
		userMail_Class.remove("red__input");

	}



	if (userDate.value == "") {
		userDate_Class.remove("regular__input");
		userDate_Class.add("red__input");

	}
	else {
		userDate_Class.remove("red__input");

	}

	// Text Message

	if (userText.value == "") {
		userText_Class.remove("regular__input");
		userText_Class.add("red__input");
		console.log('Text mesage here');

	}
	else {
		userText_Class.remove("red__input");

	}


	console.log(userName.classList);
	console.log(userMail.classList);
	console.log(userDate.classList);
	console.log(userText.classList);


	if (userName.value != "" && userNumber.value != "" && userMail.value != "" && userDate.value != "" && userText.value != "") {
		// form.style.display = "none";
		// classNamesForm.remove("form");


        console.log('Form sent');

        $(function() {
        $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        $("#form").trigger("reset");
      });
      return false;
    });

	} else {
		alertMessage.style.opacity = "1";

	}

}
// end of form validation
