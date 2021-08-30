



var calculating=false;








document.getElementById("calculate").onclick= function(){

  document.getElementById("link").href="#top";




  if (calculating==true){
      location.reload();
  }

  else{

    var employer1Hrs= document.getElementById("employer1Hrs").value;

    var employer2Hrs= document.getElementById("employer2Hrs").value;
    var employer1salary= document.getElementById("employer1salary").value;
    var employer2salary= document.getElementById("employer2salary").value;
    var päiväRaha= document.getElementById("päiväRaha").value;
    var maximumDaysTobepaid= document.getElementById("maximumDaysTobepaid").value;
    var taxPercent=document.getElementById("taxPercent").value;


    var totalWorkHours=parseFloat(employer1Hrs)+parseFloat(employer2Hrs)
    var weekFullTimeWork=37.5
    var monthFullTimeWOrk=weekFullTimeWork*4
    var eightPercentFullTimeWork=(monthFullTimeWOrk/100)*80
    var MinWeeklyHours=18









    if (totalWorkHours > eightPercentFullTimeWork){
      document.getElementById("message").style.display="block";


    }

    else{
      //document.getElementById("resultstable").style.display="block";
      var monthlyTotalIncome=parseFloat(employer1salary)+parseFloat(employer2salary);
      var dailyincome=((monthlyTotalIncome-500)/2)/21.5;

      var adjustedIncome=(parseFloat(päiväRaha)-parseFloat(dailyincome)).toFixed(3);


      if(adjustedIncome<=0){
        document.getElementById("message1").style.display="block";
        document.getElementById("resultstable").style.display="none";
      }

      else{

        var monthlySalaryBeforeTax=(adjustedIncome*parseFloat(maximumDaysTobepaid)).toFixed(3);
        var monthlySalaryAfterTax=(monthlySalaryBeforeTax-((monthlySalaryBeforeTax/100)*taxPercent)).toFixed(3)
        var dailySalaryBeforeTax=adjustedIncome;
        var dailySalaryAfterTax=(adjustedIncome-((adjustedIncome/100)*parseFloat(taxPercent))).toFixed(3)

        var decreasedDays=Math.round(parseFloat(maximumDaysTobepaid)/(parseFloat(päiväRaha)/adjustedIncome));

        document.getElementById("daily-gross").innerHTML=adjustedIncome;
        document.getElementById("daily-tax").innerHTML=taxPercent;
        document.getElementById("daily-net").innerHTML=dailySalaryAfterTax;

        document.getElementById("monthly-gross").innerHTML=monthlySalaryBeforeTax;
        document.getElementById("monthly-tax").innerHTML=taxPercent;
        document.getElementById("monthly-net").innerHTML=monthlySalaryAfterTax;
        document.getElementById("amount-paid").innerHTML=monthlySalaryAfterTax;


      }



    }

    document.getElementById("calculate").innerHTML="Reset";
    document.getElementById("link").href="#bottom";


    calculating=!calculating;


  }









}
