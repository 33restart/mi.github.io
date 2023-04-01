window.addEventListener('DOMContentLoaded', function () {
    const as = document.querySelectorAll('.numerical-code a')
    for (let j = 0; j < as.length; j++) {
        as[j].addEventListener('mouseenter', function () {
            document.querySelector('.product-list .actively').classList.remove('actively')
            document.querySelector(`.product-list .product-list-box:nth-child(${j + 1})`).classList.add('actively')
        })
    }
    const data = [
        { url: './image/7.jpg' },
        { url: './image/8.webp' },
        { url: './image/9.webp' },
        { url: './image/10.webp' }
    ]
    const rotation = document.querySelector('.rotation-loaded')
    const category = document.querySelector('.category-list')
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')
    const lis = document.querySelectorAll('.slider-indicator li')
    let i = 0
    next.addEventListener('click', function () {
        i++
        i = i >= data.length ? 0 : i
        toggle()
    })
    prev.addEventListener('click', function () {
        i--
        i = i < 0 ? data.length - 1 : i
        toggle()
    })
    for (let j = 0; j < lis.length; j++) {
        lis[j].addEventListener('click', function () {
            rotation.style.backgroundImage = `url(${data[j].url})`
            document.querySelector('.slider-indicator .active').classList.remove('active')
            document.querySelector(`.slider-indicator li:nth-child(${j + 1})`).classList.add('active')
        })
    }
    let timer = null
    fn()
    rotation.addEventListener('mouseenter', function () {
        clearInterval(timer)
    })
    rotation.addEventListener('mouseleave', function () {
        fn()
    })
    category.addEventListener('mouseenter', function () {
        fn()
    })
    category.addEventListener('mouseleave', function () {
        clearInterval(timer)
    })

    function toggle() {
        rotation.style.backgroundImage = `url(${data[i].url})`
        document.querySelector('.slider-indicator .active').classList.remove('active')
        document.querySelector(`.slider-indicator li:nth-child(${i + 1})`).classList.add('active')
    }
    function fn() {
        timer = setInterval(function () {
            next.click()
        }, 5000)
    }
    const sidebar = document.querySelector('.sidebar')
    const back = document.querySelector('.back')
    window.addEventListener('scroll', function () {
        const k = document.documentElement.scrollTop
        if (k > 1000) {
            sidebar.style.bottom = 170 + 'px'
            back.style.opacity = 1
        } else {
            sidebar.style.bottom = 65 + 'px'
            back.style.opacity = 0
        }
    })
    const category_li = document.querySelectorAll('.category-list>li')
    const div = document.querySelectorAll('.commodity-list')
    for (let j = 0; j < category_li.length; j++) {
        category_li[j].addEventListener('mouseenter', function () {
            div[j].style.display = 'block'
        })
        category_li[j].addEventListener('mouseleave', function () {
            div[j].style.display = 'none'
        })
    }
    const under = document.querySelectorAll('.more .under')
    for (let j = 0; j < under.length; j++) {
        under[j].addEventListener('mouseenter', function () {
            document.querySelector('.more .underline').classList.remove('underline')
            this.classList.add('underline')
            document.querySelector('.show').classList.remove('show')
            document.querySelector(`.handset:nth-child(${j + 1})`).classList.add('show')
        })
    }
    const hot = document.querySelectorAll('.more-a .hot')
    for (let j = 0; j < hot.length; j++) {
        hot[j].addEventListener('mouseenter', function () {
            document.querySelector('.more-a .underline').classList.remove('underline')
            this.classList.add('underline')
            document.querySelector('.hand .show-a').classList.remove('show-a')
            document.querySelector(`.handset-a:nth-child(${j + 1})`).classList.add('show-a')
        })
    }
})
