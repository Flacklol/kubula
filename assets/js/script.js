let mobile = 'ontouchstart' in document.documentElement;

let switchAllowed = false;

function openSocial(type) {
  let url = 'about:blank';

  switch (type) {
    case 'discord':
      url = 'https://discord.gg/aJGxagWqhe';
      break;
    case 'youtube':
      url = 'https://www.youtube.com/channel/UCq0WYXTaV1H5cgvP8k7W4Ig';
      break;
      case 'steam':
      url = 'https://steamcommunity.com/profiles/76561199213509508';
      break;
      case 'tiply':
      url = 'https://tipply.pl/u/kubula7373';
      break;
  }

  window.open(url);
}function startIntroTyping() {
  new TypeIt('#intro-text', {
    speed: 50,
  })
    .type(`${mobile ? 'tap' : 'click'} anywere`)
    .go();

  setTimeout(function () {
    switchAllowed = true;
  }, 2500);
}


function startIntroTyping() {
  new TypeIt('#intro-text', {
    speed: 50,
  })
    .type(`${mobile ? 'tap' : '❄️ click'} anywere`)
    .go();

  setTimeout(function () {
    switchAllowed = true;
  }, 2500);
}


function typerStartTyping(typer) {
  typer.reset();

  let text = ['❄️ szef','💸montaz filmow | koszulki,kamzy ekipowe oczywiście za siano','❄️ big nejm' ,'❄️ Dc:Kubula#0714',  ' ❄️ig:kubula1312','❄️ dzieki za ip :)'];

  text.forEach(function (language, index) {
    typer.move(null);
    typer.type(language, { delay: 1000 });
    typer.pause(1000);

    typer.delete(language.length, { delay: 1000 });
  });

  typer.go();
}

function startMainTyping() {
  let typer = new TypeIt('#subtext', {
    speed: 50,
    afterComplete: async () => {
      typerStartTyping(typer);
    },
  });

  typerStartTyping(typer);
}

function switchScreen() {
  document.title = 'Kubula | home';

  $('.intro').fadeOut(1000, function () {
    $('.bg-image').fadeIn(1000);
    $('.main').fadeIn(1000, function () {
      startMainTyping();
    });
  });

  ['background',].forEach(function (audioName) {
    let fullPath = `assets/audio/${audioName}.mp3`;

    let audioElement = document.createElement('audio');
    audioElement.setAttribute('src', fullPath);
    audioElement.style.display = 'none';

    audioElement.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    });

    audioElement.play();
  });
}

document.addEventListener('keydown', function (e) {
  if (switchAllowed) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('touchstart', function (e) {
  if (switchAllowed && mobile) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  startIntroTyping();
});

