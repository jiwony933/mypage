const mailing = "contact.jiwony@gmail.com";

const telNo = document.querySelector("#telNo");

// RegExp 정규 표현식 : 패턴을 사용해 텍스트를 판별
const numPattern = new RegExp("[0-9]{2-3}-[0-9]{3,4}-[0-9]{3,4}");
const res = numPattern.test($(telNo).val());

// if (!numPattern($(telNo).val())) {
//   alert("양식에 맞게 전화번호를 입력해주세요");
//   return false;
// }
