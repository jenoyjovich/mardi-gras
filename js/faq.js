const faqControl = () => {

    $('.q').on("click", function () {
        let ans = $(this).next();
        if ($(this).attr("data-icon") === "+") {
            $(this).attr("data-icon", "-");
            ans.slideDown();
        } else {
            $(this).attr("data-icon", "+");
            ans.slideUp();
        }
    })

}

faqControl()