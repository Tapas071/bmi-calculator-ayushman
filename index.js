const btn = document.querySelector("#Submit")

const dis = document.querySelector(".display")
const submitForm = () =>
{   
    // const isHealthy = false;
    var howMuchHealthy = " "
    const hght = document.querySelector("#height").value;
    const wght = document.querySelector("#weight").value;

    var bmi = wght / (hght * hght);
    var bmiFinal = bmi.toFixed(1)
    // console.log(bmiFinal)
    console.log(hght)
    if (bmiFinal === undefined)
    {
        console.log("test")
    }
    else
    {
        if (bmiFinal <18 )
        {
            howMuchHealthy="underweight"
        }
        else if(bmiFinal >29 && bmiFinal < 30)
        {
            howMuchHealthy = "overweight"
        }
        else if(bmiFinal > 29)
        {
            howMuchHealthy = "having obesity"
        }
        else
        {
            howMuchHealthy = "healthy"
        }
        
            dis.innerHTML = `your BMI is ${bmiFinal} your ideal bmi reading is between 18 and 25. you are ${howMuchHealthy}`
            
            
        }

}
  


btn.addEventListener("click", submitForm)

