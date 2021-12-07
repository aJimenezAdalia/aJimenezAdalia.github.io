document.addEventListener("DOMContentLoaded",
 function () { 
     new SweetScroll({}); 
     particlesJS("particles-js",{ 
        particles: { 
            number: {
                value: 30, 
                density: { 
                    enable: !0, 
                    value_area: 800 
                }
            }, 
            color: { 
                value: "#ffffff" 
            }, 
            shape: { 
                type: "circle", 
                stroke: {
                    width: 0, 
                    color: "#000000" 
                },
                
            //polygon: { 
               // nb_sides: 5 
            //},
            image: { 
                src: "img/github.svg", 
                width: 100, 
                height: 100 
                } 
            }, 
            opacity: { 
                value: .5, 
                random: !1, 
                anim: { 
                    enable: !1, 
                    speed: 1, 
                    opacity_min: .1, 
                    sync: !1 
                } 
            }, 
            size: { 
                value: 3, 
                random: !0, 
                anim: { 
                    enable: !1, 
                    speed: 19.18081918081918, 
                    size_min: .1, sync: !1 
                } 
            }, 
            line_linked: { 
                enable: !0, 
                distance: 150, 
                color: "#ffffff", 
                opacity: .4, 
                width: 0.5 
            }, 
            move: { 
                enable: !0, 
                speed: 2, 
                direction: "none", 
                random: !0, 
                straight: !1, 
                out_mode: "out", 
                bounce: !1, 
                attract: { 
                    enable: !1, 
                    rotateX: 600, 
                    rotateY: 1200 
                }
            },
            nb: 80 
        }, 
        interactivity: { 
            detect_on: "canvas", 
            events: { 
                onhover: { 
                    enable: !1, 
                    mode: "grab"
            }, 
            onclick: { 
                enable: !0, 
                mode: "push" 
            }, 
            resize: !0 
            }, 
            modes:{ 
                grab: { 
                    distance: 400, 
                    line_linked: {
                        opacity: 1 
                    } 
                }, 
                bubble:{        
                    distance: 400,          
                    size: 40, 
                    duration: 2, 
                    opacity: 8, 
                    speed: 3 
                }, 
                repulse:{ 
                    distance: 200, 
                    duration: .4 
                },
                push:{ 
                    particles_nb: 4 
                }, 
                remove:{ 
                    particles_nb: 2 
                } 
            } 
        }, 
        retina_detect: !0 })

}, !1);

// Show all projects button

function displayall(){
    document.getElementById('all-projects').style.cssText="display:contents;";
    document.getElementById('btn-show-area').style.cssText="display:none"
}

// Show less project button

function displayless(){
    document.getElementById('all-projects').style.cssText="display:none;";
    document.getElementById('btn-show-area').style.cssText="display:contents" 
}
function dropdown() {
    document.getElementById("drop-menu").classList.toggle("show-menu");
}


window.onclick = function(event) {
    if (!event.target.matches('.drop-btn')) {
      var dropdowns = document.getElementsByClassName("projects-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-menu')) {
          openDropdown.classList.remove('show-menu');
        }
      }
    }
  }
