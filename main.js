Webcam.set( {width:350,
    height:300,
    image_format: 'png',
    png_quality:90
 } );

 camera = document.getElementById("camera");
 Webcam.attach('#camera');
 function take_snapshot(){
     Webcam.snap(function (data_uri){
         document.getElementById("result").innerHTML ='<img id = "caputerd_image" src = "'+data_url+'">' 
        });
     }

     classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dQMnCWoqK/',model_Loaded );

function model_Loaded(){

console.log('Model Loaded');
}