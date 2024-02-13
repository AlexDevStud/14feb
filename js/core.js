var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

    function pl(a, c) {
        var b = c[0],
            d = c[1],
            e = c[2];
        return a + (1 == a % 10 && 11 != a % 100 ? b : 2 <= a % 10 && 4 >= a % 10 && (10 > a % 100 || 20 <= a % 100) ? d : e) + " "
    }
    var st = [
        [" \u0433\u043e\u0434", " \u0433\u043e\u0434\u0430", " \u043b\u0435\u0442"],
        [" \u043c\u0435\u0441\u044f\u0446", " \u043c\u0435\u0441\u044f\u0446\u0430", " \u043c\u0435\u0441\u044f\u0446\u0435\u0432"],
        [" \u0434\u0435\u043d\u044c", " \u0434\u043d\u044f", " \u0434\u043d\u0435\u0439"],
        [" \u0447\u0430\u0441", " \u0447\u0430\u0441\u0430 ", " \u0447\u0430\u0441\u043e\u0432 "],
        [" \u043c\u0438\u043d\u0443\u0442\u0430", " \u043c\u0438\u043d\u0443\u0442\u044b", " \u043c\u0438\u043d\u0443\u0442"]
    ];
    
    function passed(a, c, b, d, e) {
        var f = new Date(a, c - 1, b, d, e, 0, 0),
            g = new Date;
        for (c = 0;; c++) {
            a = new Date(f.getFullYear(), f.getMonth() + 2, 0, d, e, 0, 0);
            a.getDate() > b && a.setDate(b);
            if (a > g) break;
            f = a
        }
        b = g - f;
        d = b % 864E5 / 36E5 | 0;
        e = (b % 864E5 / 6E4 | 0) % 60;
        b = Math.floor(b / 864E5);
        a = Math.floor(c / 12);
        return "\u043f\u0440\u043e\u0448\u043b\u043e: " + [a, c % 12, b, d, e].reduce(function(a, b, c) {
            return b ? a + pl(b, st[c]) : a
        }, "")
    };
    //alert(passed(2022, 11, 11, 0, 0 ));

    var dT = document.querySelectorAll(".timer__block"),
    s = new Date().getSeconds();


dT[0].innerHTML = passed(2022, 11, 11, 0, 0 ).split(" ")[1];
dT[1].innerHTML = passed(2022, 11, 11, 0, 0 ).split(" ")[3];
dT[2].innerHTML = passed(2022, 11, 11, 0, 0 ).split(" ")[5];
dT[3].innerHTML = passed(2022, 11, 11, 0, 0 ).split(" ")[7];
dT[4].innerHTML = passed(2022, 11, 11, 0, 0 ).split(" ")[10];
dT[5].innerHTML = String(s);
    

    setInterval(() => {
        var dT = document.querySelectorAll(".timer__block"),
        s = new Date().getSeconds();


    dT[0].innerHTML = passed(2022, 11, 11, 0, 0 ).split(" ")[1];
    dT[1].innerHTML = passed(2022, 11, 11, 0, 0 ).split(" ")[3];
    dT[2].innerHTML = passed(2022, 11, 11, 0, 0 ).split(" ")[5];
    dT[3].innerHTML = passed(2022, 11, 11, 0, 0 ).split(" ")[7];
    dT[4].innerHTML = passed(2022, 11, 11, 0, 0 ).split(" ")[10];
    dT[5].innerHTML = String(s);
    }, 1000);
    
var anim = document.querySelectorAll(".anim");

console.log(passed(2022, 11, 11, 0, 0 ).split(" ")[10]);

for (let i = 0; i < anim.length; i++) {
    
    setTimeout(() => {
        anim[i].style.opacity = 1;
    }, i*1000);
    
}