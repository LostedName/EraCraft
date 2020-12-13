
function animate({timing, draw, duration, name}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1)
          timeFraction = 1;
        
      
  
      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);
  
      draw(progress, name); // отрисовать её
        

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }

function openList(name){
    elem = document.getElementById(name);
    var high = 147;
    if (name == 'Classic')
    high = 102;
    if(elem.classList.toggle("Activate"))
    {
        elem.style.height = "0px";
        elem.style.padding = "";
        elem.style.paddingTop = "0px";
        elem.style.display = "flex";
        animate({
        timing(timeFraction){return timeFraction;},
        draw(progress, name){
            name.style.height = progress * high + "px";
            name.style.paddingTop = progress * 30 + "px";
            },
            duration:250,
            name:elem
        });
    }
  else
  {
        animate({
        timing(timeFraction){return timeFraction;},
        draw(progress, name){
            name.style.height = (high - progress * high) + "px";
            name.style.paddingTop = (30 -progress * 30) + "px";
            },
            duration:250,
            name:elem
        });
  }
}
function buttonDown(name){
    elem = document.getElementById(name);
    elem.style.backgroundColor = "#2c632c";
    elem.style.color = "rgb(219, 219, 219)";
    for (var i = 14;i>=13;i-=0.2)
    {
        elem.style.fontSize = `${i}px`;
    }
    
}
function buttonUp(name){
    elem = document.getElementById(name);
    for (var i = 13;i<=14;i+=0.2)
    {
        elem.style.fontSize = `${i}px`;
    }
    elem.style.backgroundColor = "#3a883a";
    elem.style.color = "#fff";
}
function openMenu(name){
    elem = document.getElementById(name);
    elem.style.transform = "translateX(0%)";
}
function closeMenu(name){
    elem = document.getElementById(name);
    elem.style.transform = "translateX(100%)";

}