Webcam.set({
    width: 350, height: 300, image_format: "png", png_quality: 90
})

camera = document.getElementById('camera');

Webcam.attach("#camera");

function CaptImg(){
    Webcam.snap(function(data_uri){
        document.getElementById('sv').innerHTML = "<img id='fp' src="+data_uri+">";
    })
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EjbNhD3ms/model.json');

function modelLoaded() {
    console.log('Model has been loaded');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The hand symbol shown is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function RecImg(){
    img = document.getElementById('fp');
    classifier.classify(img,gotResults);
}

function gotResults(error,results){
    if(error) {
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById('emojiname1').innerHTML = results[0].label;
        if(results[0].label == "Awesome"){
            document.getElementById("emoji1").innerHTML = "👍";
        }
        else if(results[0].label == "OK"){
            document.getElementById('emoji1').innerHTML = "👌";
        }
        else if(results[0].label == "Victory"){
            document.getElementById('emoji1').innerHTML = "✌️";
        }
    }
}
