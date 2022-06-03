import { useState } from "react";

export default function RecordingFunction() {
    const [data, setData] = useState([]);
    const [stream, setStream] = useState(null);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [isRecording, setIsRecording] = useState(false);

    return {
        data,
        stream,
        mediaRecorder,
        isRecording,
        getScreen: async () => {
            if (!stream || !stream.active) {
                setStream(navigator.mediaDevices.getDisplayMedia({
                    video: {
                        displaySurface: "monitor"
                    }
                }));
                // Create a media recorder
                setMediaRecorder(MediaRecorder(this.stream));
                // Event listener
                mediaRecorder.addEventListener('stop', e => {
                    onstop?.(e);
                })
                mediaRecorder.addEventListener('dataavailable', e => {
                    setData([...data, e.data]);
                })
            }
        },
        start: async () => {
            if (isRecording) throw new Error("[ScrenRecorder] Already recording");

            // Start recording
            setIsRecording(true);
            mediaRecorder.start();
            console.debug('started recording');
        },
        stop: async () => {
            if (!stream) throw new Error("[ScreenRecorder] Stream not available")
            if (!isRecording) return;
            // Stop all tracks
            setIsRecording(false);
            stream.getTracks().forEach(track => track.stop());
            console.debug('stopped recording');
        },
        getDataBlob: async () => {
            let blob = new Blob(data, {
                type: data[0].type
            });
            console.debug(URL.createObjectURL(blob));
            return blob;
        },
        downloadVideo: async () => {
            const data = URL.createObjectURL(this.getDataBlob());
            const link = document.createElement('a');
            link.href = data;
            link.download = 'test';

            link.dispatchEvent(
                new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                })
            );
        },
    }
}