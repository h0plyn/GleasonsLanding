console.log('Bongo! We\'re running buddy!')

function toggleFacilities() {
    let facilities = document.getElementsByClassName('facilities-sub-text')[0];
   
    if (facilities.style.display === 'block') {
        facilities.style.display = 'none';
    } else {
        facilities.style.display = 'block';
    }
}

function toggleNature() {
    let nature = document.getElementsByClassName('nature-sub-text')[0];

    if (nature.style.display === 'block') {
        nature.style.display = 'none';
    } else {
        nature.style.display = 'block';
    }
}

function toggleRecreation() {
    let recreation = document.getElementsByClassName('recreation-sub-text')[0];

    if (recreation.style.display === 'block') {
        recreation.style.display = 'none';
    } else {
        recreation.style.display = 'block';
    }
}