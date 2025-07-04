function saveValue() {
  let savedWish = document.getElementById("wishInput").value;
  if (savedWish == "") {
    return;
  } else {
    document.getElementById(
      "wishes"
    ).innerHTML += `<p>~ ${savedWish} <button class = "xary" onclick = "deleteWish(this)">卍</button></p>`;
    wishInput.value = "";
  }
}
function deleteWish(btn) {
  btn.parentElement.remove();
}

