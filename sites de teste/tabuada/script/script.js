function tabuada () {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if (num.value.length == 0){
        window.alert('Por favor, digite um número')

        tab.innerHTML = ''
        tab.style.height = '2.5rem'
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            tab.style.height = 'fit-content'
            tab.style.padding = '2%'
            c++
        }

    }
}