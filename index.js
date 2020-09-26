console.log('Bongo! We\'re running buddy!')

function toggle() {
    let lodging = document.querySelector('.lodging-sub-text')
    console.log(lodging)
    if (lodging.style.display === 'block') {
        lodging.style.display = 'none';
    } else {
        lodging.style.display = 'block';
    }
}
