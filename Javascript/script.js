

  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-BOFSTKFNWCGO-2");



function allowlogin(usermail)
{
    var a = document.getElementById("usermail").value;
   var p = document.getElementById("password").value;
    if (a == 'usrkumar@gainsight.com' & p == 'evadranuvu')
    { 
        var b= a.substr(0,5);
        alert('valid user');
        aptrinsic("identify",
            {

                "id": b,
                "email": a
            },
            {
                "id": "GS",
                "name": "Gainsight"
            }); 
        location.href = "Page1.html";
    }
    else if(a == '')
    {
        alert('invalid User. Enter demouser@gmail.com as username');
    }
}

function addtocart()
{
    alert("Added to cart");
}