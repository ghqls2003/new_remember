function check(){
  // var serialNum = prompt("serial number", "need to check");
  var pw = prompt("비밀번호를 입력하시기 바랍니다.", "");
  if(pw == "sun2010"){
      alert("확인되었습니다.");
      location.href="/new_remember/blog/"
  }else{
      alert("비밀번호가 틀렸습니다. 데이터를 체크합니다.");
      document.getElementById("openHack").click();

  }
}