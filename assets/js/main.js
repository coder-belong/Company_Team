/**
 * 出入场动画的三个关键点：
 *     往下滑合适区域：入场动画
 *     往下滑超出区域：出场动画
 *     往上滑超出区域：出场动画
 */

// 监听页面的滚动
$(window).scroll(function (e) {
    // 导航吸顶效果
    navSticky()

    // 小卡片区域的出入场动画
    cardAnimation()

    // 关于公司区域的出入场动画
    aboutAnimation()

    // 公司服务区域的出入场动画
    serviceAnimation()

    // 项目展示区域的出入场动画
    projectAnimation()

    // 技能数据区域
    skillAnimation()

    // 团队成员区域
    teamAnimation()

    // 创建模板区域
    templateAnimation()

    // 价格计划区域
    priceAnimation()

    // 最近新闻区域
    newsAnimation()

    // 赞助商LOGO区域 
    sponsorAnimation()

    // 客户回馈区域
    feedbackAnimation()

    // 订阅区域
    subscribeAnimation()

    // 联系区域
    contactAnimation()
});


// 监听视频播放按钮的点击
$('#swiper .main .left .btn-list').click(function () {
    $('#video').css({
        display: 'block',
    })
    // 执行视频向上的动画
    setTimeout(() => {
        $('#video .content').css({
            transform: 'translateY(0%)',
            opacity: 1
        })
    }, 10);
})


// 监听视频关闭按钮的电机
$('#video .content .close').click(function () {
    // 执行视频向下的动画
    $('#video .content').css({
        transform: 'translateY(100%)',
        opacity: 0
    })
    // console.log(123);

    setTimeout(() => {
        $('#video').css({
            display: 'none',
        })
    }, 1500);
})

init()
// 设置初始动画状态
function init() {
    // --------- 轮播图初始动画 ------------
    $('#swiper .left').css({
        transform: 'translateY(-20%)',
        opacity: 0,
    })

    $('#swiper .right').css({
        transform: 'translateY(20%)',
        opacity: 0,
    })

    // --------- 小卡片初始动画 ------------
    $('#card .card-item').css({
        position: 'relative',
        top: '50px',
        opacity: 0,
    })

    // --------- 关于公司区域初始动画 ------------
    $('#about .left').css({
        transform: 'translateX(-200%)',
    })

    $('#about .right').css({
        transform: 'translateX(200%)',
    })

    // --------- 公司服务区域的初始动画 ------------
    $('#service').css({
        transform: 'translateX(100%)',
    })

    // --------- 项目展示区域的初始动画 ------------
    $('#project').css({
        transform: 'translateY(50%) scale(0)',
        opacity: 0,
    })

    // --------- 技能数据区域的初始动画 ------------
    $('#skill .left').css({
        transform: 'translateX(-200%)',
        opacity: '0',
    })

    $('#skill .right').css({
        transform: 'translateX(200%)',
        opacity: '0',
    })

    // --------- 团队成员区域的初始动画 ------------
    $('#creative-team .item').css({
        transform: 'scale(0)',
        opacity: '0',
    })

    // --------- 创建模板区域的初始动画 ------------
    $('#template').css({
        transform: 'scale(0)',
        opacity: '0',
    })

    // --------- 价格计划区域的初始动画 ------------
    $('#price-plan').css({
        opacity: '0',
    })

    // --------- 最近新闻区域的初始动画 ------------
    $('#recent-news .item').css({
        opacity: '0',
        transform: 'translateY(-5%)',
    })

    // --------- 赞助商LOGO区域的初始动画 ------------
    $('#sponsor li').css({
        transform: 'scale(0)',
        opacity: '0',
    })

    // --------- 客户回馈区域的初始动画 ------------
    $('#customer-feedback .left').css({
        transform: 'translateX(-20%)',
        opacity: '0',
    })

    $('#customer-feedback .right').css({
        transform: 'translateX(20%)',
        opacity: '0',
    })


    // --------- 订阅区域的初始动画 ------------
    $('#subscribe .left').css({
        transform: 'translateX(-20%)',
        opacity: '0',
    })

    $('#subscribe .right').css({
        transform: 'translateX(20%)',
        opacity: '0',
    })


    // --------- 联系区域的初始动画 ------------
    $('#contact .main').css({
        transform: 'translateY(100%) scale(0)',
        opacity: '0',
    })


    // 延迟测试入场动画效果
    setTimeout(() => {
        // $('#project').css({
        //     transition: 'all 1s',
        //     transform: 'translateY(0%) scale(1)',
        //     opacity: '1',
        // })
    }, 2000);
}


swiperAnimation()
// 设置轮播图的进场动画
function swiperAnimation() {
    // ----------- 轮播图进场动画 -----------
    setTimeout(() => {
        $('#swiper .left').css({
            transition: 'all 1.5s',
            transform: 'translateY(0%)',
            opacity: 1,
        })

        $('#swiper .right').css({
            transition: 'all 1.5s',
            transform: 'translateY(0%)',
            opacity: 1,
        })
    })
}


// 导航吸顶效果
function navSticky() {
    // 获取页面滚动的偏移量
    let top = window.pageYOffset
    // console.log(top);
    if (top > 0) {
        // 给导航条添加一个固定类名，实现吸顶效果
        $('nav').addClass('fixed')
    } else {
        // 移除导航条类名
        $('nav').removeClass('fixed')
    }
}

// 小卡片区域的出入场动画
function cardAnimation() {
    // 获取页面滚动的偏移量
    let scrollTop = window.scrollY
    // 获取小卡片相对于body元素的偏移量
    let cardTop = $('#card').offset().top
    // 获取小卡片的高度
    let cardHeight = $('#card').height()

    // 设置出入场判断条件
    // 1. 入场动画条件
    let flag1 = scrollTop > cardTop / 2 && scrollTop < cardTop + cardHeight
    // 2. 向上滑动的出场动画条件
    let flag2 = scrollTop < cardTop / 2
    // 3. 向下滑动的出场动画条件
    let flag3 = scrollTop > cardTop + cardHeight



    // 当出现在视口高度一半时，发生进场动画
    if (flag1) {
        // --------- 小卡片入场动画 ------------
        $('#card .card-item').css({
            top: '0px',
            opacity: 1,
        })

    } else if (flag2) {
        // 出场动画
        $('#card .card-item').css({
            position: 'relative',
            top: '50px',
            opacity: 0,
        })

    } else if (flag3) {
        // 出场动画
        $('#card .card-item').css({
            position: 'relative',
            top: '50px',
            opacity: 0,
        })
    }


}


// 关于公司区域的出入场动画
function aboutAnimation() {
    // 获取页面滚动的偏移量
    let scrollTop = window.scrollY

    let aboutTop = $('#about').offset().top

    let aboutHeight = $('#about').height()

    // 设置出入场判断条件
    // 1. 入场动画条件
    let flag1 = scrollTop > aboutTop / 2 && scrollTop < aboutTop + aboutHeight
    // 2. 向上滑动的出场动画条件
    let flag2 = scrollTop < aboutTop / 2
    // 3. 向下滑动的出场动画条件
    let flag3 = scrollTop > aboutTop + aboutHeight

    if (flag1) {
        // --------- 入场动画 ------------
        $('#about .left').css({
            transition: 'all 1s',
            transform: 'translateX(0%)',
        })

        $('#about .right').css({
            transition: 'all 1s 1s',
            transform: 'translateX(0%)',
        })

    } else if (flag2) {
        // --------- 出场动画 ------------
        $('#about .left').css({
            transform: 'translateX(-200%)',
        })

        $('#about .right').css({
            transform: 'translateX(200%)',
        })

    } else if (flag3) {
        // --------- 出场动画 ------------
        $('#about .left').css({
            transform: 'translateX(-200%)',
        })

        $('#about .right').css({
            transform: 'translateX(200%)',
        })
    }
}


// 公司服务区域的出入场动画
function serviceAnimation() {
    // 获取页面滚动的偏移量
    let scrollTop = window.scrollY

    let serviceTop = $('#service').offset().top

    let serviceHeight = $('#service').height()

    // 设置出入场判断条件
    // 1. 入场动画条件
    let flag1 = scrollTop > serviceTop - serviceHeight / 2 && scrollTop < serviceTop + serviceHeight
    // 2. 向上滑动的出场动画条件
    let flag2 = scrollTop < serviceTop - serviceHeight / 2
    // 3. 向下滑动的出场动画条件
    let flag3 = scrollTop > serviceTop + serviceHeight

    if (flag1) {
        // --------- 入场动画 ------------
        $('#service').css({
            transition: 'all 1.5s',
            transform: 'translateX(0%)',
        })


    } else if (flag2) {
        // --------- 出场动画 ------------
        $('#service').css({
            transform: 'translateX(100%)',
        })


    } else if (flag3) {
        // --------- 出场动画 ------------
        $('#service').css({
            transform: 'translateX(100%)',
        })

    }
}

// 项目展示区域的出入场动画
function projectAnimation() {
    // 获取页面滚动的偏移量
    let scrollTop = window.scrollY

    let projectTop = $('#project').offset().top - 600

    let projectHeight = $('#project').height()

    // 设置出入场判断条件
    // 1. 入场动画条件
    let flag1 = scrollTop > projectTop - projectHeight / 2 && scrollTop < projectTop + projectHeight
    // 2. 向上滑动的出场动画条件
    let flag2 = scrollTop < projectTop
    // 3. 向下滑动的出场动画条件
    let flag3 = scrollTop > projectTop + 600 + projectHeight

    // console.log(scrollTop, projectTop, projectHeight);


    // return

    if (flag1) {
        // --------- 入场动画 ------------
        $('#project').css({
            transition: 'all 1s',
            transform: 'translateY(0%) scale(1)',
            opacity: '1',
        })


    } else if (flag2) {
        // --------- 出场动画 ------------
        $('#project').css({
            transform: 'translateY(50%) scale(0)',
            opacity: 0,
        })


    } else if (flag3) {
        // --------- 出场动画 ------------
        $('#project').css({
            transform: 'translateY(50%) scale(0)',
            opacity: 0,
        })

    }
}

// 技能数据区域 
function skillAnimation() {
    // 获取页面滚动的偏移量
    let scrollTop = window.scrollY

    let skillTop = $('#skill').offset().top

    let skillHeight = $('#skill').height()

    // console.log(scrollTop, skillTop, skillHeight);
    // return

    // 设置出入场判断条件
    // 1. 入场动画条件
    let flag1 = scrollTop > skillTop - skillHeight / 2 && scrollTop < skillTop + skillHeight
    // 2. 向上滑动的出场动画条件
    let flag2 = scrollTop < skillTop - skillHeight
    // 3. 向下滑动的出场动画条件
    let flag3 = scrollTop > skillTop + skillHeight



    if (flag1) {
        // --------- 入场动画 ------------
        $('#skill .left').css({
            transition: 'all 1s',
            transform: 'translateX(0%)',
            opacity: '1',
        })

        $('#skill .right').css({
            transition: 'all 1s 1s',
            transform: 'translateX(0%)',
            opacity: '1',
        })


    } else if (flag2) {
        // --------- 出场动画 ------------
        $('#skill .left').css({
            transform: 'translateX(-200%)',
            opacity: '0',
        })

        $('#skill .right').css({
            transform: 'translateX(200%)',
            opacity: '0',
        })


    } else if (flag3) {
        // --------- 出场动画 ------------
        $('#skill .left').css({
            transform: 'translateX(-200%)',
            opacity: '0',
        })

        $('#skill .right').css({
            transform: 'translateX(200%)',
            opacity: '0',
        })
    }
}

// 团队成员区域 
function teamAnimation() {
    // 获取页面滚动的偏移量
    let scrollTop = window.scrollY

    let teamTop = $('#creative-team').offset().top

    let teamHeight = $('#creative-team').height()

    // console.log(scrollTop, teamTop, teamHeight);

    // return

    // 设置出入场判断条件
    // 1. 入场动画条件
    let flag1 = scrollTop > teamTop - teamHeight / 2 && scrollTop < teamTop + teamHeight
    // 2. 向上滑动的出场动画条件
    let flag2 = scrollTop < teamTop - teamHeight
    // 3. 向下滑动的出场动画条件
    let flag3 = scrollTop > teamTop + teamHeight


    if (flag1) {
        // --------- 入场动画 ------------
        $('#creative-team .item').css({
            transition: 'all 1s',
            transform: 'scale(1)',
            opacity: '1',
        })

    } else if (flag2) {
        // --------- 出场动画 ------------
        $('#creative-team .item').css({
            transform: 'scale(0)',
            opacity: '0',
        })

    } else if (flag3) {
        // --------- 出场动画 ------------
        $('#creative-team .item').css({
            transform: 'scale(0)',
            opacity: '0',
        })
    }
}

// 创建模板区域
function templateAnimation() {
    // 获取页面滚动的偏移量
    let scrollTop = window.scrollY

    let templateTop = $('#template').offset().top

    let templateHeight = $('#template').height()

    // console.log(scrollTop, templateTop, templateHeight);

    // return

    // 设置出入场判断条件
    // 1. 入场动画条件
    let flag1 = scrollTop > templateTop - templateHeight && scrollTop < templateTop + templateHeight
    // 2. 向上滑动的出场动画条件
    let flag2 = scrollTop < templateTop - templateHeight
    // 3. 向下滑动的出场动画条件
    let flag3 = scrollTop > templateTop + templateHeight


    if (flag1) {
        // --------- 入场动画 ------------
        $('#template').css({
            transition: 'all 1s',
            transform: 'scale(1)',
            opacity: '1',
        })

    } else if (flag2) {
        // --------- 出场动画 ------------
        $('#template').css({
            transform: 'scale(0)',
            opacity: '0',
        })

    } else if (flag3) {
        // --------- 出场动画 ------------
        $('#template').css({
            transform: 'scale(0)',
            opacity: '0',
        })
    }
}

// 价格计划区域
function priceAnimation() {
    // 获取页面滚动的偏移量
    let scrollTop = window.scrollY

    let priceTop = $('#price-plan').offset().top

    let priceHeight = $('#price-plan').height()

    // console.log(scrollTop, priceTop, priceHeight);

    // return

    // 设置出入场判断条件
    // 1. 入场动画条件
    let flag1 = scrollTop > priceTop - priceHeight / 2 && scrollTop < priceTop + priceHeight
    // 2. 向上滑动的出场动画条件
    let flag2 = scrollTop < priceTop - priceHeight
    // 3. 向下滑动的出场动画条件
    let flag3 = scrollTop > priceTop + priceHeight


    if (flag1) {
        // --------- 入场动画 ------------
        $('#price-plan').css({
            transition: 'all 2s',
            opacity: '1',
        })

    } else if (flag2) {
        // --------- 出场动画 ------------
        $('#price-plan').css({
            opacity: '0',
        })

    } else if (flag3) {
        // --------- 出场动画 ------------
        $('#price-plan').css({
            opacity: '0',
        })
    }
}

// 最近新闻区域
function newsAnimation() {
    // 获取页面滚动的偏移量
    let scrollTop = window.scrollY

    let newsTop = $('#recent-news').offset().top

    let newsHeight = $('#recent-news').height()

    // console.log(scrollTop, newsTop, newsHeight);

    // return

    // 设置出入场判断条件
    // 1. 入场动画条件
    let flag1 = scrollTop > newsTop - newsHeight / 2 && scrollTop < newsTop + newsHeight
    // 2. 向上滑动的出场动画条件
    let flag2 = scrollTop < newsTop - newsHeight
    // 3. 向下滑动的出场动画条件
    let flag3 = scrollTop > newsTop + newsHeight


    if (flag1) {
        // --------- 入场动画 ------------
        $('#recent-news .item').css({
            transition: 'all 1s',
            transform: 'translateY(0px)',
            opacity: '1',
        })

    } else if (flag2) {
        // --------- 出场动画 ------------
        $('#recent-news .item').css({
            opacity: '0',
            transform: 'translateY(-5%)',
        })

    } else if (flag3) {
        // --------- 出场动画 ------------
        $('#recent-news .item').css({
            opacity: '0',
            transform: 'translateY(-5%)',
        })
    }
}

// 赞助商LOGO区域 
function sponsorAnimation() {
    // 获取页面滚动的偏移量
    let scrollTop = window.scrollY

    let sponsorTop = $('#sponsor').offset().top

    let sponsorHeight = $('#sponsor').height()

    // console.log(scrollTop, sponsorTop, sponsorHeight);

    // return

    // 设置出入场判断条件
    // 1. 入场动画条件
    let flag1 = scrollTop > sponsorTop - sponsorHeight - sponsorHeight - sponsorHeight - sponsorHeight && scrollTop < sponsorTop + sponsorHeight
    // 2. 向上滑动的出场动画条件
    let flag2 = scrollTop < sponsorTop - sponsorHeight - sponsorHeight - sponsorHeight - sponsorHeight
    // 3. 向下滑动的出场动画条件
    let flag3 = scrollTop > sponsorTop + sponsorHeight


    if (flag1) {
        // --------- 入场动画 ------------
        $('#sponsor li').css({
            transition: 'all 1s',
            transform: 'scale(1)',
            opacity: '1',
        })

    } else if (flag2) {
        // --------- 出场动画 ------------
        $('#sponsor li').css({
            transform: 'scale(0)',
            opacity: '0',
        })

    } else if (flag3) {
        // --------- 出场动画 ------------
        $('#sponsor li').css({
            transform: 'scale(0)',
            opacity: '0',
        })
    }
}

// 客户回馈区域 
function feedbackAnimation() {
    // 获取页面滚动的偏移量
    let scrollTop = window.scrollY

    let feedBackTop = $('#customer-feedback').offset().top

    let feedBackHeight = $('#customer-feedback').height()

    // console.log(scrollTop, feedBackTop, feedBackHeight);

    // return

    // 设置出入场判断条件
    // 1. 入场动画条件
    let flag1 = scrollTop > feedBackTop - feedBackHeight && scrollTop < feedBackTop + feedBackHeight
    // 2. 向上滑动的出场动画条件
    let flag2 = scrollTop < feedBackTop - feedBackHeight
    // 3. 向下滑动的出场动画条件
    let flag3 = scrollTop > feedBackTop + feedBackHeight


    if (flag1) {
        // --------- 入场动画 ------------
        $('#customer-feedback .left').css({
            transition: 'all 1s',
            transform: 'translateX(0%)',
            opacity: '1',
        })

        $('#customer-feedback .right').css({
            transition: 'all 1s 1s',
            transform: 'translateX(0%)',
            opacity: '1',
        })

    } else if (flag2) {
        // --------- 出场动画 ------------
        $('#customer-feedback .left').css({
            transform: 'translateX(-20%)',
            opacity: '0',
        })

        $('#customer-feedback .right').css({
            transform: 'translateX(20%)',
            opacity: '0',
        })

    } else if (flag3) {
        // --------- 出场动画 ------------
        $('#customer-feedback .left').css({
            transform: 'translateX(-20%)',
            opacity: '0',
        })

        $('#customer-feedback .right').css({
            transform: 'translateX(20%)',
            opacity: '0',
        })
    }
}

// 订阅区域 
function subscribeAnimation() {
    // 获取页面滚动的偏移量
    let scrollTop = window.scrollY

    let subscribeTop = $('#subscribe').offset().top

    let subscribeHeight = $('#subscribe').height()

    // console.log(scrollTop, subscribeTop, subscribeHeight);

    // return

    // 设置出入场判断条件
    // 1. 入场动画条件
    let flag1 = scrollTop > subscribeTop - subscribeHeight - subscribeHeight && scrollTop < subscribeTop + subscribeHeight
    // 2. 向上滑动的出场动画条件
    let flag2 = scrollTop < subscribeTop - subscribeHeight - subscribeHeight
    // 3. 向下滑动的出场动画条件
    let flag3 = scrollTop > subscribeTop + subscribeHeight + subscribeHeight


    if (flag1) {
        // --------- 入场动画 ------------
        $('#subscribe .left').css({
            transition: 'all 1s',
            transform: 'translateX(0%)',
            opacity: '1',
        })

        $('#subscribe .right').css({
            transition: 'all 1s 1s',
            transform: 'translateX(0%)',
            opacity: '1',
        })

    } else if (flag2) {
        // --------- 出场动画 ------------
        $('#subscribe .left').css({
            transform: 'translateX(-20%)',
            opacity: '0',
        })

        $('#subscribe .right').css({
            transform: 'translateX(20%)',
            opacity: '0',
        })

    } else if (flag3) {
        // --------- 出场动画 ------------
        $('#subscribe .left').css({
            transform: 'translateX(-20%)',
            opacity: '0',
        })

        $('#customer-feedback .right').css({
            transform: 'translateX(20%)',
            opacity: '0',
        })
    }
}


// 联系区域 
function contactAnimation() {
    // 获取页面滚动的偏移量
    let scrollTop = window.scrollY

    let contactTop = $('#contact').offset().top

    let contactHeight = $('#contact').height()

    // console.log(scrollTop, contactTop, contactHeight);

    // return

    // 设置出入场判断条件
    // 1. 入场动画条件
    let flag1 = scrollTop > contactTop && scrollTop < contactTop + contactHeight
    // 2. 向上滑动的出场动画条件
    let flag2 = scrollTop < contactTop - contactHeight
    // 3. 向下滑动的出场动画条件
    let flag3 = scrollTop > contactTop + contactHeight


    if (flag1) {
        // --------- 入场动画 ------------
        $('#contact .main').css({
            transition: 'all 1s',
            transform: 'translateY(0%) scale(1)',
            opacity: '1',
        })


    } else if (flag2) {
        // --------- 出场动画 ------------
        $('#contact .main').css({
            transform: 'translateY(100%) scale(0)',
            opacity: '0',
        })

    } else if (flag3) {
        // --------- 出场动画 ------------
        $('#contact .main').css({
            transform: 'translateY(100%) scale(0)',
            opacity: '0',
        })
    }
}