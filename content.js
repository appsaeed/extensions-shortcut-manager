var btn = ` 
<style>

div.mbtn {
    position: absolute;
    right:-50px;
    top: 0;
    width: 50px;
    height: 50px;
    z-index: 100000;
}

div.mbtn img
{
    width: 100%;
    height: 100%;
}
</style>
<div id="appmic" class="mbtn">
                <img src="https://img1.pnghut.com/16/6/7/tz1UbmiBgJ/button-audio-equipment-google-now-symbol-search.jpg" alt="button-image"/>
            </div>`;





if($('input[type=text]')){
    $('input[type=text]').after(btn);
}else if($("input[type=search]")){
    $("input[type=search]").after(btn);
}else if($("textarea")){
    $("textarea").after(btn);
}


$("#appmic").click(function(e){
    e.preventDefault();
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.start();

    recognition.addEventListener('result',e =>{
         const transcript = e.results[0][0].transcript;

        if($('input[type="text"]')){
            $('input[type="text"]').val(transcript)
        }else if($('input[type=search]')){
            $('input[type="text"]').val(transcript)
        }
     
     });

})

