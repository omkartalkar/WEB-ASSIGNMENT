//HOme
gsap.from('.info', { duration: 0.6, x:'-100%', ease:'sine.out'});
gsap.from('.btn', { duration: 1, x: '-100%', ease:'power3.out'});
gsap.from('.image', { duration: 0.6, x:'100%', ease:'sine.out'});
//contact
gsap.from('.form',{duration:0.6, x:'-100%', ease:'sine.out'});
gsap.from('.text-content',{duration:0.6, x:'100%', ease:'sine.out'});
//projects
gsap.from('.cards',{duration:1.2, y:'300%', opacity: 0});
//resume
gsap.from('#btn',{duration:0.8, y:'-50%', opacity: 0});
gsap.from('object',{duration:0.8, y:'80%', opacity: 0.5, ease:'sine.out'});
//visit
gsap.from('iframe',{duration:0.8, x:'-100%', ease:'expo.out'});
gsap.from('.text',{duration:0.6, x:'100%', ease:'circ'});

