//音乐选择Loving Strangers
let $pageOne = $(".pageOne")
let $btn = $('.btn')
let $btn1 = $('.btn1')
let $pageTwo = $('.pageTwo')
let $banner = $('.banner')
let $w2 = $('.w2')
let $w4 = $('.w4')
let $w3 = $('.w3')
let $w1 = $('.w1')
let $fj = $('.fj')
let $bg = $('.bg')
let $pageThree = $('.pageThree')
let $box = $('.box')
let $bor = $('.bor')
let $con1 = $('.con1')
let $con2 = $('.con2')
let $con3 = $('.con3')
let $con4 = $('.con4')
let $p1 = $('.p1')
let $p2 = $('.p2')
let $p3 = $('.p3')
let $p4 = $('.p4')
let $bot = $('.bot')
let $pageFour = $('.pageFour')
let $img2 = $('.img2')
let $btn2 = $('.btn2')
let $f1 = $('.f1')
let $f2 = $('.f2')
let $f3 = $('.f3')
let $f4 = $('.f4')
let $box1 = $('.box1')
let $bor1 = $('.bor1')
let $fon1 = $('.fon1')
let $fon2 = $('.fon2')
let $fon3 = $('.fon3')
let $a1 = $('.a1')
let $a2 = $('.a2')
let $a3 = $('.a3')
let $a4 = $('.a4')
let $bot1 = $('.bot1')
let $pageFive = $(".pageFive")
let $pageSix = $('.pageSix')
let $diyi = $('.diyi')
let $dier = $('.dier')
let $san = $('.san')
let $btn3 = $('.btn3')
let $s1 = $('.s1')
let $s2 = $('.s2')
let $s3 = $('.s3')
let $s4 = $('.s4')
let $pageSeven = $('.pageSeven')
let $t1 = $('.t1')
let $t2 = $('.t2')
let $g1 = $('.g1')
let $z1 = $('.z1')
let $e1 = $('.e1')
let $e2 = $('.e2')
let $e3 = $('.e3')
let $e4 = $('.e4')
let $music = $('.music')
let audio = document.getElementById('audio')
$btn.tap(function() {
    $pageOne.animate({
        opacity: 0
    }, 1000, function() {
        $pageOne.css('display', 'none')
        $bg.css('animation', 'dis 2s cubic-bezier(0.36, 0.38, 0.77, 0.78) 0s both')
        $fj.css('animation', ' fj1 6s ease 3s infinite both')
        $w1.css('animation', 'move1 5s ease 6s both')
        $w2.css('animation', 'move1 5s ease 2s both')
        $w3.css('animation', 'move1 5s ease 9s both')
        $w4.css('animation', 'roatate1 2.5s ease 6s both')
        $btn1.css('animation', 'big 4s ease 4s both')
        $btn1.find('img').css('animation', 'display 2s ease 8s infinite')
        $pageTwo.animate({
            opacity: 1
        }, 2000)
    })
})

$btn1.tap(function() {
    $pageTwo.animate({
        opacity: 0
    }, 1000, function() {
        $pageTwo.css('display', 'none')
        let num = 7.5
        $box.css("animation", "big 3s ease 2s both")
        $bor.css('animation', ' let 4s ease 3s both')
        $con1.css('animation', 'con1 3s ease 1.5s both')
        $con2.css('animation', 'con2 3s ease 3.5s both')
        $con3.css('animation', 'con3 3s ease 5.5s both')
        $con4.css('animation', 'con4 3s ease 3.5s both')
        $p1.css('animation', 'roatate1 2s ease 6s both')
        $p2.css('animation', 'roatate2 2s ease 6s both')
        $p3.css('animation', 'roatate3 2s ease 6s both')
        $p4.css('animation', 'roatate4 2s ease 6s both')
        $bot.find('span').forEach((element, index) => {
            num = 9.5 + index * 0.1
            $(element).css('animation', `display 1.2s ease ${num}s infinite`)
        });
        $bot.css('animation', 'con3 3s ease 6s both')
        $pageThree.animate({
            opacity: 1
        }, 2000, )
    })
})
$bot.tap(function() {
    $pageThree.animate({
        opacity: 0
    }, 1000, function() {
        $pageThree.css('display', 'none')
        $img2.css('animation', 'move 3s ease 0s both')
        $btn2.css('animation', 'big 3s ease 4s both')
        $f1.css('animation', 'move1 5s ease 6s both')
        $f2.css('animation', 'move1 5s ease 0s both')
        $f3.css('animation', 'move1 5s ease 9s both')
        $f4.css('animation', ' roatate1 2.5s ease 4s both')
        $btn2.find('img').css('animation', 'display 2s ease 8s infinite')
        $pageFour.animate({
            opacity: 1
        }, 2000, )
    })

})
$btn2.tap(function() {
    $pageFour.animate({
        opacity: 0
    }, 1000, function() {
        $pageFour.css('display', 'none')
        $box1.css("animation", "big 3s ease 2s both")
        $bor1.css('animation', ' let 4s ease 3s both')
        $fon1.css('animation', 'con1 3s ease 1.5s both')
        $fon2.css('animation', 'con2 3s ease 3.5s both')
        $fon3.css('animation', 'con3 3s ease 5.5s both')
        $a1.css('animation', 'roatate1 2s ease 6s both')
        $a2.css('animation', 'roatate2 2s ease 6s both')
        $a3.css('animation', 'roatate3 2s ease 6s both')
        $a4.css('animation', 'roatate4 2s ease 6s both')
        $bot1.find('span').forEach((element, index) => {
            num = 9.5 + index * 0.1
            $(element).css('animation', `display 1.2s ease ${num}s infinite`)
        });
        $bot1.css('animation', 'con3 3s ease 6s both')
        $pageFive.animate({
            opacity: 1
        }, 2000, )
    })
})
$bot1.tap(function() {
    $pageFive.animate({
        opacity: 0
    }, 1000, function() {
        $pageFive.css('display', 'none')
        $btn3.css('animation', 'big 3s ease 4s both')
        $s1.css('animation', 'move1 5s ease 6s both')
        $s2.css('animation', 'move1 5s ease 0s both')
        $s3.css('animation', 'move1 5s ease 9s both')
        $s4.css('animation', ' roatate1 2.5s ease 4s both')
        $btn3.find('img').css('animation', 'display 2s ease 8s infinite')
        $pageSix.animate({
            opacity: 1
        }, 2000)
        $san.css('animation', 'display 2s ease 2s infinite')
        $san.tap(function() {
            $diyi.css('animation', 'dis3 2s ease both')
            $san.css('display', 'none')
        })
    })
})
$btn3.tap(function() {
    $pageSix.animate({
        opacity: 0
    }, 1000, function() {
        $pageSix.css('display', 'none')
        $t1.css('animation', 'Move9 2s ease 13s both')
        $t2.css('animation', 'Move8 2s ease 10s both')
        $g1.find('img').forEach((item, index) => {
            let str = 'Move' + (7 - index)
            $(item).css('animation', `${str} 2s ease 11s both`)
        })
        $z1.find('li').forEach((item, index) => {
            let str = 11 + (index * 0.1)
            $(item).css('animation', `Move3 2s ease ${str}s both`)
        })
        $e1.css('animation', 'move1 5s ease 5s both')
        $e2.css('animation', 'move1 5s ease 0s both')
        $e3.css('animation', 'move1 5s ease 8s both')
        $e4.css('animation', 'roatate1 2.5s ease 4s both')
        $pageSeven.animate({
            opacity: 1
        }, 2000)
    })
})
let flage = false
$music.tap(function() {
    if (flage) {
        $music.css('animation', "roat 4s linear infinite both")
        flage = false
        audio.play()
    } else {
        $music.css("animation-play-state", "paused")
        flage = true
        audio.pause()
    }
})