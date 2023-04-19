function Start() {

navigator.mediaDevices.getUserMedia({audio:true});

classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/GMU79NZnG/model.json',modelReady);

}

function modelReady() {

classifier.classify(gotResults);

}

var dog = 0;
var cat = 0;
var tiger = 0;

function gotResults(error, results) {
    if (error) {
      console.error(error);
    }

    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
    
        document.getElementById("Hearing").innerHTML = "Detected voice is of  - " + results[0].label;
        document.getElementById("Hearing").innerHTML = "Detected Dog - " + dog + " Detected Cat - " + cat + " Dectect Tiger - " + tiger;
        document.getElementById("Hearing").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("Hearing").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
        img = document.getElementById("Photo");
    
        if (results[0].label == "Dog Bark") {
          img.src = "Dog.png";
          dog = dog+1;
        } else if (results[0].label == "Cat Meow") {
          img.src = "Tom.png";
          cat = cat + 1;
        } 
        
        else if(results[0].label == "Tiger Roar") {

         img.src = "Tiger.png"
         tiger = tiger + 1;

        }
        else{
          img.src = "Ear.png";
        }
      }

    }