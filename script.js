const urlInput = document.querySelector('#url-input');

const goButton = document.querySelector('#go-button');

const contentFrame = document.querySelector('#content-frame');

function loadURL() {

  let url = urlInput.value;

  if (!url.startsWith('http')) {

    url = 'http://' + url;

  }

  contentFrame.src = url;

}

goButton.addEventListener('click', loadURL);

contentFrame.addEventListener('load', () => {

  urlInput.value = contentFrame.contentWindow.location.href;

});

