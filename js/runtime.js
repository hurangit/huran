setInterval(() => {
  let create_time = Math.round(new Date('2021-11-28 00:00:00').getTime() / 1000); //在此行修改建站时间
  let timestamp = Math.round((new Date().getTime()) / 1000);
  let second = timestamp - create_time;
  let time = new Array(0, 0, 0, 0, 0);

  var nol = function(h){
    return h>9?h:'0'+h;
  }
  if (second >= 365 * 24 * 3600) {
    time[0] = parseInt(second / (365 * 24 * 3600));
    second %= 365 * 24 * 3600;
  }
  if (second >= 24 * 3600) {
    time[1] = parseInt(second / (24 * 3600));
    second %= 24 * 3600;
  }
  if (second >= 3600) {
    time[2] = nol(parseInt(second / 3600));
    second %= 3600;
  }
  if (second >= 60) {
    time[3] = nol(parseInt(second / 60));
    second %= 60;
  }
  if (second > 0) {
    time[4] = nol(second);
  }
  if ((Number(time[2])<22) && (Number(time[2])>7)){
    currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/HuRan&Blog-营业中-6adea8?style=social&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAhxJREFUSEvdlc0rhEEcx3/zWBs54iQO+2xe2qTQSm2ScmBLzoSLg/wDSmqf58DfoJyW4ipaDkoiyVMcOCzacSAnHMW+5NFvMpp99nmeneXxkrnMM8/Ofj/z/f5mniHwDS0LgxvlsDXkJk284mYg+uSHRBXqZSF6Vw6Juh8Bl2rAM8d/AmzCQC2B7fv/HXUGoiY69ENCqnxSk0qtn8z8T4EDgUCEEHLwDuiklJ6oqsocU0qlNKUmiQ4QQHxl4I+0sdeZwzMwszlpINcqCayq6hIATFavavA4ojEN4XmeUjonEzPOkQaj04q+DnjZPWHaqVSK9cFgkPWVwz3wvL4v7bwomNeOO+NAqzNcgJhEsVq7ghEqioku8TmdTkMoFCpwz//jBncEI9TXWA+5q1vbaK2OrdH7mhogd3njGL0rmIuL8WKkSdqcx21RLz5ci3V3O15SNbbWVYRboRz8pRqjCEZut6H4bnb67dvAbucVF/W/wDxmu83naY2tscYXFyDc3speG6fnMDE1W5C8J1Fbj4+xM54HDvcvFxwvKXD4eMU0usYI9vD6qoOixPgYLwM78PbOAcRmppljOzB+vbiGSWCPmNDLx9izc8yADs0JjPEmjU1XsJNmHrhUx2KNP+/4KK4Z3RNa+CiugaJg3ISPH0Z1uLhuiYmrL1bj5kBSr1nTsXw608SmKB9j1Cb82pO9wL2aV/Rb7RXIqvNr4DdMR0mW6P/vlgAAAABJRU5ErkJggg==' title='距离百年老店也就差不到一百年~'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
  }
  else{
    currentTimeHtml ="<img class='boardsign' src='https://img.shields.io/badge/HuRan&Blog-打烊了-6adea8?style=social&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAARBJREFUOE+V078rxlEUx/HXs7FJysIgLLJISTJQJn+AyKQeMpjlDyBGYrMqJrOBPGWQyWCzWPxaiM1Gp763vj2+z7fvc+p0b51z3vdz77mnprUdYSML72GrKLVWAnjHIn6wi9mqgB5c4BP7OMNatv5jFClYRUiexzo6sNRKaRHgGuc4xC8mcdcOYBS9uMpOPi15J0nBTFPSAJ5KChsplgAhtR1LHWkkwAe62yCEgj7sJMAJlisCojgU3OMgAaI4IFVsAXMYw0S+jceoVyA84xIrkZsHdOIG4yWQKdzm480fqR+biL+Qt0fEcD00wwMQ9xmsID2f8p1mIwAjGMZ05jFMQ/jKKrrwhle8ZB777Yj/ATKiLdFn/UDjAAAAAElFTkSuQmCC' title='这个点了应该去睡觉啦，熬夜对身体不好哦'><div id='runtime'>" + time[0] + ' YEAR ' + time[1] + ' DAYS ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
  }
  document.getElementById("workboard").innerHTML = currentTimeHtml;
}, 1000);