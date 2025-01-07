
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
    console.log(btnStatus)
    if (btnStatus == 'off') {
        btn.attr("working", "on");
        btn.closest(".leader-follower-container").find(".follower-box").slideDown()
    }else{
        btn.attr("working", "off");
        btn.closest(".leader-follower-container").find(".follower-box").slideUp()
    }
})


