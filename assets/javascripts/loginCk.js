function check(){
  var serialNum = prompt("serial number", "need to check");
  var pw = prompt("비밀번호를 입력하시기 바랍니다.", "");
  var log = document.getElementById("openHack");
  var going = 0;
  if(serialNum == "2506" && pw == "sun2010"){
      alert("확인되었습니다.");
      going = 1;
      // location.href="{{ site.paths.blog | relative_url }}"
  }else{
      alert("시리얼넘버나 비밀번호가 틀렸습니다. 데이터를 체크합니다.");
      going;
      // document.getElementById("openHack").click();

  }
}