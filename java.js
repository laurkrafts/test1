// Obiect pentru a stoca textele salvate pentru fiecare casetă
var textePersonalizate = {
  'casuta1': ["Welcome to my naughty little corner of the internet, [Subscriber Name]! Get ready to dive into a world of seduction, where your deepest desires come to life. Let's make some unforgettable memories together!",
   "mHey there, [Subscriber Name]! Welcome to my exclusive club of pleasure-seekers. Get ready to indulge in a sinful feast of tantalizing content that will leave you craving for more. Brace yourself for an exhilarating journey!", 
   "tWelcome, [Subscriber Name], to a realm where fantasies come true. As a subscriber, you have unlocked the door to a universe of unbridled passion and uninhibited pleasure. Get ready to explore the depths of your desires with me.",
  ],
  'casuta2': ["text2.1", "text2.2", "text2.3", "Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more"],
  'casuta3': ["text3.1", "text3.2", "text3.3", "jale", "manele", "succes", "OMG DADDY I CAN'T BELIEVE HOW BIG IS YOUR DICK", "I want to suck on that huge cock allnight", "let me fuck you"]
};

function schimbaTextul(id) {
  // Găsește elementul casetei
  var casuta = document.getElementById(id);

  var textNou;

  // Verificați dacă există text personalizat pentru caseta specificată
  if (textePersonalizate.hasOwnProperty(id)) {
    // Alegeți un text aleatoriu din lista de texte personalizate pentru caseta respectivă
    textNou = textePersonalizate[id][Math.floor(Math.random() * textePersonalizate[id].length)];
  } else {
    textNou = "Text implicit.";
  }

  // Obține elementul casetei și schimbă textul
  var textElement = casuta.querySelector('.casutasubs p');
  textElement.innerHTML = textNou;
}

// Adăugați funcționalitatea de schimbare a textului la butoane
function adaugaFunctionalitateLaButoane() {
  var butoane = document.querySelectorAll('.glow-on-hover');

  butoane.forEach(function(buton) {
    buton.addEventListener('click', function() {
      var targetId = this.getAttribute('data-target');
      schimbaTextul(targetId);
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  adaugaFunctionalitateLaButoane();
});











function copiazăTextul(idText, idCasuta) {
  // Găsește elementul casetei
  var casuta = document.getElementById(idCasuta);

  // Obține textul din casetă
  var textDeCopiat = casuta.querySelector('.casutasubs p').innerText;

  // Creează un element de tip textarea pentru a putea selecta textul și copia
  var textarea = document.createElement('textarea');
  textarea.value = textDeCopiat;

  // Adaugă elementul textarea la DOM
  document.body.appendChild(textarea);

  // Selectează textul din textarea
  textarea.select();
  textarea.setSelectionRange(0, 99999); // Pentru a selecta textul pe toate browserele

  // Copiază textul în clipboard
  document.execCommand('copy');

  // Elimină elementul textarea din DOM
  document.body.removeChild(textarea);

  // Obține poziția butonului de copiere
  var buttonRect = document.getElementById(idText).getBoundingClientRect();

  // Creează un element div pentru a afișa mesajul popup
  var popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = 'Textul a fost copiat în clipboard!';

  // Setează poziția popup-ului sub butonul de copiere
  popup.style.top = buttonRect.bottom + 'px';
  popup.style.left = (buttonRect.left + buttonRect.right) / 2 + 'px';

  // Adaugă elementul popup la DOM
  document.body.appendChild(popup);

  // După 2 secunde, elimină elementul popup
  setTimeout(function () {
    document.body.removeChild(popup);
  }, 2000);
}
