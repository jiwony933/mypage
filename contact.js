$(document).ready(function () {
  emailjs.init("umYBRO476Vh-aKoNrb");
});

function handleSendClick(event) {
  const template = {
    name: $("input[name=name]").val(),
    email: $("input[name=email]").val(),
    telNo: $("input[name=telNo]").val(),
    message: $("input[name=message]").val(),
  };

  emailjs
    .send("service_mqodxes", "template_3kw7mnw", template, "mYBRO476Vh-aKoNrb")
    .then(function (response) {
      alert("소중한 의견 감사합니다!");
    })
    .catch(function (error) {
      alert("정상적인 제출이 이루어지지 않았습니다.");
    });
}
const sendBt = document.querySelector("#sendBt");
sendBt.addEventListener("click", handleSendClick);
