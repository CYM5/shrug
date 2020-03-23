
function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(function() {
    /* clipboard successfully set */
  }, function() {
    /* clipboard write failed */
  });
}

browser.browserAction.onClicked.addListener(updateClipboard(" ¯\\_(ツ)_/¯"));