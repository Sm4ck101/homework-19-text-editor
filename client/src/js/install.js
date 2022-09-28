const butInstall = document.getElementById("buttonInstall");
console.log("I am connected")

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("window for install")
  event.preventDefault()
  window.deferredPrompt = event

  butInstall.style.visibility = "visible";
  
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
    console.log("before")
    console.log(window.deferredPrompt)
    console.log("after")
    if (!window.deferredPrompt) {
        return;
    }

    window.deferredPrompt.prompt()

    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {});
