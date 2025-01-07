$(document).ready(function () {
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
});
