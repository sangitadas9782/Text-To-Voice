
        function TextToAudio(){
            let msg=document.querySelector('.Text').value;
            let speech=new SpeechSynthesisUtterance();
            speech.lang="en-US";
            speech.text=msg;
            speech.volume=2;
            speech.rate=1;
            speech.pitch=1;
            speechSynthesis.speak(speech);
        }
    