AOS.init();
AOS.init({
  
    disable: false, 
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate', 
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99, 
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, 
    delay: 200, 
    duration: 1000, 
    easing: 'ease',
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom',
  
  });

var abrirMenu = $("#abrir-menu");
var fecharMenu = $("#fechar-menu"); 

abrirMenu.on("click", () => {
  this.fecharMenu.addClass("menu-on");
});
$(".botão-fechar").on("click", () => {
  this.fecharMenu.addClass("menu-off");
  this.fecharMenu.removeClass("menu-on");  
    setTimeout(() => {
       fecharMenu.removeClass("menu-off");  
    }, 1000);
});