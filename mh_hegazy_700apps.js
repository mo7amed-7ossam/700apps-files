
// حلقة تمر على كل جدول يحمل كلاس leader
$('.leader').each(function () {
    // مرر على كل عمود في الجدول الأول
    $('.leader-follower-container-headar th').each((index, element) => {
        // احصل على عرض العمود من الجدول الأول
        var width = $(element).outerWidth();

        // طبّق العرض نفسه على الأعمدة في الجدول الحالي
        $(this).find('td').eq(index).css('width', width);
    });
});

$(".target-all-followers-btn").click(function () {
    var btn = $(this);    
    let btnStatus = btn.attr("working");
    
    if (btnStatus == 'off') {
        btn.closest(".leader-follower-container").find(".toggle-btn").attr("working", "on");
        btn.closest(".leader-follower-container").find(".toggle-btn span").addClass("fa-eye").removeClass("fa-eye-slash")
        btn.closest(".leader-follower-container").find(".follower-box").slideDown().addClass("opened");
    }else{
        btn.closest(".leader-follower-container").find(".toggle-btn").attr("working", "off");
        btn.closest(".leader-follower-container").find(".toggle-btn span").addClass("fa-eye-slash").removeClass("fa-eye")
        btn.closest(".leader-follower-container").find(".follower-box").slideUp().removeClass("opened");
    }
})

$(".target-follower-btn").click(function () {
    var btn = $(this);    
    let btnStatus = btn.attr("working");
    
    if (btnStatus == 'off') {
        btn.attr("working", "on");
        btn.find("span").addClass("fa-eye").removeClass("fa-eye-slash")
        btn.closest(".leader-follower-box").find(".follower-box").slideDown().addClass("opened");
    }else{
        btn.attr("working", "off");
        btn.find("span").addClass("fa-eye-slash").removeClass("fa-eye")
        btn.closest(".leader-follower-box").find(".follower-box").slideUp().removeClass("opened");
    }
})


