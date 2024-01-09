const calculateBMI = () => {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  

  if (weight && height) {

    let bmi = (weight / (height * 0.3) ** 2).toFixed(1);

    if (bmi < 18.5) {
      document.getElementById("res").innerHTML = "UnderWeight";
    } else if ( bmi >= 18.5 && bmi <= 24.9) {
      document.getElementById("res").innerHTML = "Normal";
    } else if ( bmi >= 25 && bmi <= 29.9) {
      document.getElementById("res").innerHTML = "OverWeight";
    } else if ( bmi >= 30 && bmi <= 34.9) {
      document.getElementById("res").innerHTML = "Obese";
    } else if (bmi >= 35 ) {
      document.getElementById("res").innerHTML = "Extremly Obese";
    }

    document.getElementById("result").innerHTML = "Your BMI is: " + bmi;
  } else {
    document.getElementById("result").innerHTML =
      "Please enter both weight and height.";
  }
};
