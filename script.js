const VALID_CREDENTIALS = {
  username: "emy",
  password: "24.03"
};

const backgroundImages = [
  "images/Captura de tela 2026-05-13 124214.png",
  "images/Captura de tela 2026-05-13 124245.png",
  "images/Captura de tela 2026-05-13 124328.png",
  "images/Captura de tela 2026-05-13 124346.png",
  "images/Captura de tela 2026-05-13 124403.png",
  "images/Captura de tela 2026-05-13 124418.png",
  "images/Captura de tela 2026-05-13 124444.png",
  "images/Captura de tela 2026-05-13 124500.png",
  "images/Captura de tela 2026-05-13 124521.png",
  "images/Captura de tela 2026-05-13 124533.png",
  "images/Captura de tela 2026-05-13 124546.png",
  "images/Captura de tela 2026-05-13 124558.png",
  "images/Captura de tela 2026-05-13 124610.png",
  "images/Captura de tela 2026-05-13 124626.png",
  "images/Captura de tela 2026-05-13 124702.png",
  "images/Captura de tela 2026-05-13 124717.png",
  "images/Captura de tela 2026-05-13 124737.png",
  "images/Captura de tela 2026-05-13 124750.png",
  "images/Captura de tela 2026-05-13 124807.png",
  "images/Captura de tela 2026-05-13 124823.png",
  "images/Captura de tela 2026-05-13 124849.png"
];

const messageText =
  "Este espaço será usado para montar a mensagem especial e mostrar a foto escolhida por você. Clique no botão sempre que quiser relembrar o carinho.";

const specialPhotoUrl = "images/foto especial.png";

const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const loginScreen = document.getElementById("login-screen");
const app = document.getElementById("app");
const showMessageButton = document.getElementById("show-message-button");
const messageBox = document.getElementById("message-box");
const specialText = document.getElementById("special-text");
const specialPhoto = document.getElementById("special-photo");
const backgroundGrid = document.getElementById("background-grid");

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      console.log('Service Worker registered successfully:', registration);
    })
    .catch(error => {
      console.log('Service Worker registration failed:', error);
    });
}

// Debug logs
console.log("Script loaded");
console.log("Login form:", loginForm);
console.log("Login screen:", loginScreen);
console.log("App:", app);
console.log("Background grid:", backgroundGrid);

let slideIndex = 0;
let slideInterval;

function updateBackgrounds() {
  console.log("Updating backgrounds, slideIndex:", slideIndex);
  const bgItems = Array.from(backgroundGrid.querySelectorAll(".bg-item"));
  console.log("Found bgItems:", bgItems.length);
  bgItems.forEach((item, position) => {
    const currentIndex = (slideIndex + position * 3) % backgroundImages.length;
    const imageUrl = backgroundImages[currentIndex];
    console.log("Setting image for position", position, ":", imageUrl);
    
    // Preload image to check if it exists
    const img = new Image();
    img.onload = function() {
      console.log("Image loaded successfully:", imageUrl);
      item.style.backgroundImage = `url('${imageUrl}')`;
      item.classList.add("visible");
    };
    img.onerror = function() {
      console.error("Failed to load image:", imageUrl);
      item.style.backgroundColor = "rgba(100, 50, 100, 0.5)";
      item.classList.add("visible");
    };
    img.src = imageUrl;
  });
}

function startSlideshow() {
  console.log("Starting slideshow");
  updateBackgrounds();
  slideInterval = setInterval(() => {
    slideIndex = (slideIndex + 3) % backgroundImages.length;
    updateBackgrounds();
  }, 6000);
}

function showApp() {
  console.log("Showing app");
  loginScreen.classList.add("hidden");
  app.classList.remove("hidden");
  startSlideshow();
}

function showError(message) {
  loginError.textContent = message;
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
    showApp();
  } else {
    showError("Login ou senha incorretos. Tente novamente.");
  }
});

showMessageButton.addEventListener("click", () => {
  specialText.textContent = `A gente se conhece desde o 1º ano do ensino fundamental. Naquela época éramos só crianças, nunca fomos tão próximos, mas eu sempre achei você muito linda. Mesmo assim, eu nunca tive coragem de chegar em você. Acho que era coisa de criança mesmo.

Anos depois, quando eu estava no 1º do ensino médio e você no 2º, eu finalmente tomei coragem e começamos a conversar de verdade. Eu gostava muito de falar com você, de estar perto, de trocar mensagens. Mas eu reconheço que, naquele momento, eu acabei sendo grudento demais. Sempre fui carinhoso e respeitoso, mas ainda não tínhamos nada, e eu não soube dosar isso da forma certa. Algumas pessoas até tentaram me alertar, mas eu não escutei na época. No fim, isso contribuiu para o nosso afastamento em 2022.

Com o tempo e com tudo que vivi desde então, eu amadureci bastante. Aprendi com meus erros, aprendi a respeitar mais o espaço das pessoas e a entender melhor as situações. No começo de 2025, quando voltei a seguir você, eu quis agir diferente: continuar sendo carinhoso e atencioso, mas agora respeitando seu espaço e o seu tempo.

Nas últimas semanas, a gente voltou a conversar com mais frequência, e isso me deixou muito feliz. Inclusive, quando você pediu desculpas por como tudo aconteceu em 2022, eu achei muito maduro da sua parte. Mas eu também fiz a minha parte naquele momento, então acho justo reconhecer que os dois estávamos aprendendo.

Hoje eu tenho um carinho enorme por você. Me preocupo de verdade com você, com o que você passa no dia a dia, com seu cansaço, com seu estresse. Se dependesse só de mim, eu faria o que estivesse ao meu alcance para te ajudar sempre. Mas ao mesmo tempo, eu não quero invadir seu espaço — só quero estar presente da forma certa.

Quando você me manda mensagem, eu fico genuinamente feliz. É até engraçado, porque parece aquele meu eu criança lá do 2º ano do fundamental, feliz só por conseguir conversar com a menina que achava bonita Kkkkk. Acho que isso mostra o quanto você sempre foi especial pra mim.

Essa surpresa não é para pressionar, nem para cobrar nada. É só para que, nos dias em que você estiver cansada, estressada ou passando por alguma crise, você possa lembrar que existe alguém que quer te apoiar, conversar, distrair ou simplesmente estar ali. Sem exageros, sem invasão, só com respeito.

E, independente de qualquer coisa, se você precisar conversar, desabafar ou só distrair a mente, eu vou estar aqui.`;
  specialPhoto.src = specialPhotoUrl;
  messageBox.classList.toggle("hidden");
});

// Caso queira trocar o login, altere os valores acima.
