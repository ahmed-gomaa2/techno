var codeExamples = document.querySelectorAll('.Example__item');

codeExamples.forEach(ex => {
    ex.addEventListener('click', e => {
        const copyBtn = e.target.closest('.copyBtn');
        if(!copyBtn) return;
        const textCopy = ex.querySelector('code').innerText;
        navigator.clipboard.writeText(textCopy);
    });
});

var testTaps = document.querySelector('.Testimonials__container');
var taps = document.querySelectorAll('.Testimonial__row');
var testContent = document.querySelectorAll('.Testimonial__review')

testTaps.addEventListener('click', e => {
    var clicked = e.target.closest('.Testimonial__row');
    if(!clicked) return;
    console.log(clicked);

    taps.forEach(t => t.classList.remove('Testimonial__active'));
    testContent.forEach(t => t.classList.add('d-none'))
    clicked.classList.add('Testimonial__active');

    console.log(clicked.dataset)
    document.querySelector(`.Testimonial__tap-${clicked.dataset.tab}`).classList.remove('d-none');
})