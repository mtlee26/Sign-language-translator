import { useEffect, useState } from 'react';

let recognition: any = null;
if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true; 
    recognition.lang = "en-US"; 
}

const useSpeechRecognition = () => {
    const [text, setText] = useState("");
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        if (!recognition) return;

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            console.log("onresult event: ", event);
            const newText = event.results[event.resultIndex][0].transcript; 
            setText(newText); 
        };

        recognition.onend = () => {
            setIsListening(false);
        };
    }, []);

    const startListening = () => {
        if (isListening) {
            console.log("Đã bắt đầu nghe, vui lòng dừng lại trước.");
            return; 
        }
        setText(""); 
        setIsListening(true);
        recognition.start(); 
    };

    const stopListening = () => {
        if (!isListening) {
            console.log("Không thể dừng, hiện tại không nghe.");
            return; 
        }

        recognition.stop(); 
        setIsListening(false); 
    };

    return {
        text,
        isListening,
        startListening,
        stopListening,
        hasRecognitionSupport: !!recognition, 
    };
};

export default useSpeechRecognition;
