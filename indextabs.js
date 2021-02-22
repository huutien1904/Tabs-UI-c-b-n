var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var tabs = $$('.tab-item')
var panes = $$('.tab-pane')
var tabAcitive = $('.tab-item.active')
var line = $('.tabs .line')
console.log([tabAcitive])
line.style.left = tabAcitive.offsetLeft +'px'
line.style.width = tabAcitive.offsetWidth +'px'
// console.log(tabAcitive)
tabs.forEach((tab,index) => {
    var pane = panes[index]
    tab.onclick = function(){
        
        let curr = document.querySelector(".tab-item.active")
        tab.classList.add('active')
        curr.classList.remove('active')

        let currpane = document.querySelector(".tab-pane.active")
        pane.classList.add('active')
        currpane.classList.remove('active')

        line.style.left = tab.offsetLeft +'px'
        line.style.width = tab.offsetWidth +'px'
    }
});