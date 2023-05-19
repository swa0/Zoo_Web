//
$(function(){
    var _levelShowBox = new ('._levelShowBox', {
        freeMode: true,
	    autoHeight: true, //自動高
        slidesPerView: 5, //顯示個數
        spaceBetween: 0, //間距
        navigation: { //arrow
            nextEl: '.-button-next',
            prevEl: '.-button-prev',
        },
    });

    var _cardShowBox = new ('._cardShowBox', {
        freeMode: true,
	    autoHeight: true, //自動高
        slidesPerView: 4, //顯示個數
        spaceBetween: 0, //間距
        navigation: { //arrow
            nextEl: '.-button-next',
            prevEl: '.-button-prev',
        },
    });

    var _indexBanner = new ('._indexBanner', {
	    autoHeight: true, //自動高
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1, //顯示個數
        spaceBetween: 0, //間距
        navigation: { //arrow
            nextEl: '.-button-next',
            prevEl: '.-button-prev',
        },
    });

    var _gameBox = new ('._gameBox', {
        freeMode: true,
	    autoHeight: true, //自動高
        slidesPerView: 5, //顯示個數
        spaceBetween: 0, //間距
        navigation: { //arrow
            nextEl: '.-button-next',
            prevEl: '.-button-prev',
        },
    });
})

//history
$(function(){
    $(".historyBox .topBG button").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".historyBox .changeBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//bonus
$(function(){
    $(".bonusBox .topBG button").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".bonusBox .changeBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//promotion
$(function(){
    $(".promotionBox .topBG button").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".promotionBox .changeBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//inbox
$(function(){
    $(".inboxBox .topBG button").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".inboxBox .changeBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".inboxBox .changeBox.system .innTopBG button").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".inboxBox .changeBox.system .mailBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".inboxBox .changeBox.personal .innTopBG button").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".inboxBox .changeBox.personal .mailBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//register
$(function(){
    $(".registerBox .checkBox").on("change",function(){
        $(this)
        .toggleClass("active");
    })
})

//live
// $(function(){
//     $(".gameBox .style_2 li").hover(function(){
//         var n = $(this).index();

//         $(".gameBox .style_2 .liveImg")
//         .css({
//             "background" : "url('../images/game_liveImg_"+ (n + 1) +".png') no-repeat center",
//             "background-size" : "contain",
//         });
//     })
// })

//game
$(function(){
    $(".gameBox .like_ic,.game .like_ic").on("click",function(){
        $(this)
        .toggleClass("active");
    })
})

//withdraw + transfer 展開平台
$(function(){
    $(document).on("click",".platformBlock .state",function(){
        $(this)
        .text("閉じる")
        .addClass("active")
        .closest(".platformBlock")
        .find(".outer")
        .addClass("active");
    })
    $(document).on("click",".platformBlock .state.active",function(){
        $(this)
        .text("開く")
        .removeClass("active")
        $(this)
        .closest(".platformBlock")
        .find(".outer")
        .removeClass("active");
    })
})


//頁面滑動
$(function(){
    var wh = $(window).innerHeight();
    // var max = 937;
    // var outer = (max - wh) * 3;

    if(wh >= 745)
    {
        $(".innerPage")
        .css("height",""+ (wh - 450) +"px");
    }
    else
    {
        $(".innerPage")
        .css("height",""+ (295) +"px");
    }

    if(wh >= 725)
    {
        $(".gameBox")
        .css("height",""+ (wh - 275) +"px");
    }
    else
    {
        $(".gameBox")
        .css("height",""+ (450) +"px");
    }
    
    // if(wh >= 785)
    // {
    //     $(".scrollBox")
    //     .css("height",""+ (wh - 470) +"px");
    // }
    // else
    // {
    //     $(".scrollBox")
    //     .css("height",""+ (315) +"px");
    // }

    if(wh >= 855)
    {
        $(".registerBox")
        .css("height",""+ (wh - 120) +"px");
    }
    else
    {
        $(".registerBox")
        .css("height",""+ (735) +"px");
    }
    
    // if(wh <= 937 && wh > 0)
    // {
    //     $(".outer_container")
    //     .css("height","" + outer + "px");
    // }

    $(window).resize(function(){
        var wh = $(window).innerHeight();
        var max = 937;
        var outer = (max - wh) * 3;

        if(wh >= 745)
        {
            $(".innerPage")
            .css("height",""+ (wh - 450) +"px");
        }
        else
        {
            $(".innerPage")
            .css("height",""+ (295) +"px");
        }

        if(wh >= 725)
        {
            $(".gameBox")
            .css("height",""+ (wh - 275) +"px");
        }
        else
        {
            $(".gameBox")
            .css("height",""+ (450) +"px");
        }

        // if(wh >= 785)
        // {
        //     $(".scrollBox")
        //     .css("height",""+ (wh - 470) +"px");
        // }
        // else
        // {
        //     $(".scrollBox")
        //     .css("height",""+ (315) +"px");
        // }

        if(wh >= 855)
        {
            $(".registerBox")
            .css("height",""+ (wh - 120) +"px");
        }
        else
        {
            $(".registerBox")
            .css("height",""+ (735) +"px");
        }

        // if(wh <= 937)
        // {
        //     $(".middle .outer_container")
        //     .css("height",""+ (wh - 101) +"px");
        // }
    })

})

//filter
$(function(){
    $(".jumpWindow .close_ic,.jumpWindow .close").on("click",function(){
        $(".filter")
        .removeClass("display");
    })

    $(document).on("click",".unlogin",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.smallWindow")
        .addClass("display");
    })

    $(".leftWay .loginBox .loginBG .forget").on("click",function(){

        $(".filter, .phoneCheckWindow")
        .addClass("display")
        .siblings()
        .removeClass("display");
    })
    
    $(".phoneCheckWindow form button.sns").on("click",function(e){
        $(this)
        .closest(".phoneCheckWindow")
        .removeClass("display");

        $(".changePwWindow")
        .addClass("display"); 
        
        e.preventDefault();
    })
    
    $(".changePwWindow form button.sns").on("click",function(e){
        e.preventDefault();
    })

    $(".changePhoneCheckWindow .close_ic").on("click",function(){
        $(this)
        .closest(".changePhoneCheckWindow")
        .removeClass("display");
        
        $(".filter,.changePhoneWindow")
        .addClass("display");
    })

    $(".indexBox .game,.gameBox .game").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.betWindow")
        .addClass("display");
    })

    $(".bonusBox .open").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.bonusWindow")
        .addClass("display");
    })

    $(".historyBox .check").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.historyWindow")
        .addClass("display");
    })

    $(".memberInfo_bottom ul li:nth-of-type(4) label .edit_ic").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.changePhoneWindow")
        .addClass("display");
    })
})

//利用規約
$(function(){
	$(".termsContentArea .outerBox").scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal < 100){
            $(".sideNav li:nth-of-type(1)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5780){
            $(".sideNav li:nth-of-type(11)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5300){
            $(".sideNav li:nth-of-type(10)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5200){
            $(".sideNav li:nth-of-type(9)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5300){
            $(".sideNav li:nth-of-type(9)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5000){
            $(".sideNav li:nth-of-type(8)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 4300){
            $(".sideNav li:nth-of-type(7)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 3300){
            $(".sideNav li:nth-of-type(6)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 2100){
            $(".sideNav li:nth-of-type(5)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 1300){
            $(".sideNav li:nth-of-type(4)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 800){
            $(".sideNav li:nth-of-type(3)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 100){
            $(".sideNav li:nth-of-type(2)")
            .addClass("active")
            .siblings().removeClass("active");
        }

        console.log(scrollVal);
	})
})

//faq
$(function(){
	$(".faqContentArea .outerBox").scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal < 200){
            $(".sideNav li:eq(0)")
            .addClass("active")
            .siblings().removeClass("active");
        } else if(scrollVal >= 753){
            $(".sideNav li:eq(2)")
            .addClass("active")
            .siblings().removeClass("active");
        } else if(scrollVal >= 300){
            $(".sideNav li:eq(1)")
            .addClass("active")
            .siblings().removeClass("active");
        }

        console.log(scrollVal);
	})
})

//點擊滑動至指定位
$(function(){
    $('.sideNav li').click(function(){
        var n = $(this).index();
        var target = $(".contentBlock:eq("+ n +") .subTitle").offset().top;
        var ori = $(".outerBox").offset().top;
        var scrollVal = $(".outerBox").scrollTop();

        $(".outerBox").animate({
            scrollTop: target - ori + scrollVal,
        },300)
    });
})

//回到頂端
$(function(){
    $(".scrollBox,.innerPage,.gameBox").scroll(function(){
        var n = $(".scrollBox").scrollTop();
        var i = $(".innerPage").scrollTop();
        var c = $(".gameBox").scrollTop();
        
        if(n > 0 || i > 0 || c > 0)
        {
            $(".goTop")
            .addClass("display");
        }
        else
        {
            $(".goTop")
            .removeClass("display");
        }
    })

    $(".goTop").on("click",function(){
        $(".scrollBox,.innerPage,.gameBox")
        .animate({
            scrollTop : "0",
        },300);
    })
})

//代理會長
$(function(){
    $("header .selectBox label button, button.apply").on("click",function(){
        $(".filter, .jumpWindow.agentApplyWindow")
        .addClass("display");
    })
})