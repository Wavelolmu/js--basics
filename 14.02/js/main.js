let targsAnimation01 = anime ({
  targets: '.box.is-moving',
  translateX: 300,
  autoplay: false
})
let targsBtn01 = document.getElementById('targsBtn01')
targsBtn01.onclick = targsAnimation01.play

let propsAnimation01 = anime ({
  targets: '.props .box',
  translateX: 500,
  rotate: 180,
  backgroundColor: '#0000ff',
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad',
  autoplay: false
})
let propsBtn01 = document.getElementById('propsBtn01')
propsBtn01.onclick = propsAnimation01.play

let valsAnimation01 = anime ({
  targets: '.vals .triangle',
  translateX: 500,
  duration: 1000,
  easing: 'easeOutElastic',
  autoplay: false,
  delay: anime.stagger(100),
  rotate: anime.stagger(100)
})
let valsBtn01 = document.getElementById('valsBtn01')
valsBtn01.onclick = valsAnimation01.play
