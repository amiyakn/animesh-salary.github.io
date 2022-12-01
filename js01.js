    var dateobj = new Date();

    var NowTime = new Date();

    var allMonths = [ "January", "February", "March", "April", 

                        "May", "June", "July", "August", 

                    "September", "October", "November", "December"];

    var TotalAmountInINR;

    var TotalAmount;

    (function () {

        const second = 1000,

              minute = second * 60,

              hour = minute * 60,

              day = hour * 24;

      

        //I'm adding this section so I don't have to keep updating this pen every year :-)

        //remove this if you don't need it

        let today = new Date(),

            dd = String(today.getDate()).padStart(2, "0"),

            mm = String(today.getMonth() + 1).padStart(2, "0"),

            yyyy = today.getFullYear(),

            nextYear = yyyy + 1,

            dayMonth = "01/1/",

            birthday = dayMonth + yyyy;

        

        today = mm + "/" + dd + "/" + yyyy;

        if (today > birthday) {

          birthday = dayMonth + nextYear;

        }

        //end

        

        const countDown = new Date(birthday).getTime(),

            x = setInterval(function() {    

      

              const now = new Date().getTime(),

                    distance = countDown - now;

      

              document.getElementById("days").innerText = Math.floor(distance / (day)-16),

                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),

                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),

                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      

              //do something later when date is reached

              if (distance < 0) {

                document.getElementById("headline").innerText = "It's my birthday!";

                document.getElementById("countdown").style.display = "none";

                document.getElementById("content").style.display = "block";

                clearInterval(x);

              }

              //seconds

            }, 0)

        }());

    function MyEarning(){

       

      

    

        dateobj.setDate(15);

        dateobj.setMonth(10);

        dateobj.setFullYear(2022);

        dateobj.setHours(0);

        dateobj.setMinutes(0);

        dateobj.setSeconds(0);

         

        var D = dateobj.getDate();

        var M = dateobj.getMonth();

        var Y = dateobj.getFullYear();

        var millisecTillDateobj = dateobj.getTime();

    

        console.log(D);

        console.log(M);

        console.log(allMonths[M]);

        console.log(Y);

        console.log('from: ' + dateobj);

        console.log("till: " + NowTime);

        console.log("Total millisec till set date : " + millisecTillDateobj);

    

        

        var millisecTillNow = NowTime.getTime();

        console.log("Total millisec till now :" + millisecTillNow);

    

        var TotalSecTillSetDate = millisecTillDateobj / 1000;

        console.log("Total time in sec till the set date: " + TotalSecTillSetDate);

    

        var TotalSecTillNowTime = millisecTillNow / 1000;

        console.log("Total time in sec till the present time: " + TotalSecTillNowTime);

    

        var earnableSec = TotalSecTillNowTime - TotalSecTillSetDate;

        console.log("earnable sec : " + earnableSec);

        

        TotalAmount = earnableSec * 14;

        console.log("Total Earning amount in paise :" + TotalAmount);

    

        TotalAmountInINR = TotalAmount / 100;

        console.log("Total Amount of Earning in INR : " + TotalAmountInINR);

        return TotalAmountInINR;

        

    }

    MyEarning();

    console.log(TotalAmountInINR);

    var el = document.getElementById("amount");

    el.innerHTML ="₹ " + TotalAmountInINR;

    document.getElementById("usd").innerHTML = "USD$ " + Math.floor(TotalAmountInINR / 81);

    
