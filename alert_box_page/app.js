let showBtn =  document.querySelector('.showBtn')
let closeBtn =  document.querySelector('.closeBtn')
let dialog =  document.querySelector('.dialog')
let layer =  document.querySelector('.layer')



showBtn.addEventListener('click',function(){
    showBtn.classList.add('opacity-0','pointer-event-none')
    dialog.classList.remove('opacity-0','pointer-event-none')
    dialog.classList.add('translate-y-0')
    layer.classList.remove('opacity-0','pointer-event-none')

})

closeBtn.addEventListener('click',()=>{
    showBtn.classList.remove('opacity-0','pointer-event-none')
    layer.classList.add('opacity-0','pointer-event-none')
    dialog.classList.add('opacity-0','pointer-event-none')
    dialog.classList.remove('translate-y-0')

})
