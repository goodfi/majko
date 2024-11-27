const answerKrzystof = ['dupa', 'dupa1', 'dupa3'];

//funkcja tworząca czat mająca 4 atrybuty
//mess - wiadomość
//user - imie i nazwisko Użytkownika
//src - ścieżka do obrazka
//className - klasa css
function createChat(mess, user, src, className) {
  let chat = document.querySelector('.chat');

  //blok główny czatu
  let div = document.createElement('div');
  div.setAttribute('class', className);

  // zdjęcie czatu
  let img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', user);

  // wiadomość
  let p = document.createElement('p');
  p.textContent = mess;

  //dodanie obrazka i wiadomości do bloku głównego czatu
  div.appendChild(img);
  div.appendChild(p);

  // dodanie nowej wiadomości na czat
  chat.appendChild(div);

  //scrollowanie okienka czatu na sam dół
  chat.scrollBy(0, chat.scrollHeight);
}

// funkcja odpowiadająca za pobranie tekstu z inputa po kliknięciu buttona wyślij
function JolantaAnswer() {
  let message = document.getElementById('message').value;

  createChat(
    message,
    'Jolanta Nowak',
    'https://placehold.co/70x70',
    'chat-user user'
  );
}

// funkcja odpowiadająca za wylosowanie odpowiedzi krzystofa po kliknięciu buttona generuj
function RandomAnswer() {
  let message =
    answerKrzystof[Math.floor(Math.random() * answerKrzystof.length)];

  createChat(
    message,
    'Krzysztof Łukasiński',
    'https://placehold.co/70x70',
    'chat-user root'
  );
}
