var courseList = document.querySelectorAll('.cour');
console.log(courseList);
var containerFood = document.querySelector('.course');
var btnList = document.querySelectorAll('.fillter__typeall-item');
console.log(btnList);

// Cách 1
btnList.forEach(btn => {
    btn.addEventListener('click', e => {
        let type = e.currentTarget.getAttribute('type');
        courseList.forEach(cour => {
            let foodType = cour.getAttribute('type');

            if (type == 'all' || foodType == type) {
                cour.classList.remove('hide');
            } else {
                cour.classList.add('hide');
            }
        })
    });
});