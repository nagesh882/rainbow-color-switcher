const btn = document.querySelectorAll('.button')
const body = document.querySelector('body')


btn.forEach( function(button) {
    // console.log(button)
    button.addEventListener('click', function(event){
        console.log(event)
        console.log(event.target)

        const color = event.target.id
        switch (color) {
            case 'red':
                body.style.backgroundColor = color
                break;
            case 'orange':
                body.style.backgroundColor = color
                break;
            case 'yellow':
                body.style.backgroundColor = color
                break;
            case 'green':
                body.style.backgroundColor = color
                break;
                case 'blue':
                body.style.backgroundColor = color
                break;
            case 'indigo':
                body.style.backgroundColor = color
                break;
            case 'violet':
                body.style.backgroundColor = color
                break;
            default:
                body.style.backgroundColor = 'black'
                break;
        }
    });

} );