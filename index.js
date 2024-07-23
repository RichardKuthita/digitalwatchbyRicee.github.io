// Created by richard kuthita

setInterval(function(){
  const hour = document.querySelector(".hour");
  const minute = document.querySelector(".minute");
  const seconds = document.querySelector(".seconds");
  const date = new Date();
  const hourText = date.getHours();
  const minuteText = date.getMinutes();
  const secondsText = date.getSeconds();
  hour.innerHTML = hourText;
  minute.innerHTML = minuteText;
  seconds.innerHTML = secondsText;
},1000);