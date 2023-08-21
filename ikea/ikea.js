






// let imageLinks = document.querySelectorAll('.img-gallery a');
// imageLinks.forEach(link => {
//     link.addEventListener('click', function(event){
//         event.preventDefault();
//         imageLinks.forEach(link => link.querySelector('img').classList.remove('on'));
//         this.querySelector('img').classList.add('on');
//     });
// });

// $(document).ready(function() {
//     const slideContainer = $(".image-gallery");
//     const slides = slideContainer.find(".slide");
//     let currentSlide = 0;
  
//     $(".prev").click(function() {
//       showSlide(currentSlide - 1);
//     });
  
//     $(".next").click(function() {
//       showSlide(currentSlide + 1);
//     });
  
//     function showSlide(index) {
//       if (index >= slides.length) {
//         index = 0;
//       } else if (index < 0) {
//         index = slides.length - 1;
//       }
  
//     //   slides.css("transform", `translateX(-${index * 100}%)`);
//       currentSlide = index;
//     }
//   });



// const imageLinks = $('.img-gallery a');
// let currentIndex = 0;

// function showImage(index) {
//     console.log('1')
//     imageLinks.find('.img-gallery').removeClass('on');
//     console.log('1')
//     imageLinks.eq(index).find('.img-gallery').addClass('on');
//     console.log('1')
// }

// $('.prev').click(function() {
//     console.log('1')
//     currentIndex = (currentIndex - 1)
//     showImage(currentIndex);
//     console.log('2')
// });

// $('.next').click(function() {
//     currentIndex = (currentIndex + 1) % imageLinks.length;
//     showImage(currentIndex);
// });

// showImage(currentIndex);

let count = 0;

$('.btn i').eq(0).on('click', function() {
    if (count > 0) {
        $('.img-gallery').animate({
            left: '+=600px'
        }, 300);
        count--;
        updateDotsStyles();
    }
});

$('.btn i').eq(1).on('click', function() {
    if (count < 2) {
        $('.img-gallery').animate({
            left: '-=600px'
        }, 300);
        count++;
        updateDotsStyles();
    }
});

function updateDotsStyles() {
    let dotPositions = [
        { top: '50%', left: '50%' },
        { top: '52%', left: '18%' },
        { bottom: '12%', left: '53%' }
    ];

    if (count === 0) {
        dotPositions[0].left = '88%';
        dotPositions[1].top = '60%';
        dotPositions[2].left = '80%';
        $('.dot_3').css('display', 'block')
    } else if (count === 2) {
        dotPositions[0].left = '55%';
        dotPositions[1].bottom = '12%';
        $('.dot_3').css('display', 'none');
    }

    $('.dot_1').css({
        'position': 'absolute',
        ...dotPositions[0]
    });
    $('.dot_2').css({
        'position': 'absolute',
        ...dotPositions[1]
    });
    $('.dot_3').css({
        'position': 'absolute',
        ...dotPositions[2]
    });
}

