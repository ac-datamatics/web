import { useState, useRef } from "react";
import RecordRTC from "recordrtc";

export default function RecordingFunction() {
    const [data, setData] = useState([]);
    const [stream, setStream] = useState(null);
    const recorderRef = useRef(null);
    const [isRecording, setIsRecording] = useState(false);

    return {
        data,
        stream,
        isRecording,
        removeStream: async () => {
            setStream(null)
        },
        getScreen: async () => {
            if (!stream || !stream.active) {       // Get screen if necessary
                const mediaStream = await navigator.mediaDevices.getDisplayMedia({
                    video: {
                        displaySurface: "monitor",
                    },
                    audio: false,
                });

                setStream(mediaStream);
                recorderRef.current = new RecordRTC(mediaStream, {
                    type: "video",
                });
                console.debug('verbosidad');
            }
        },
        start: async () => {
            // Start recording
            console.debug('passed one')
            // If isn't recording
            if (recorderRef.current.getState() == "recording") return;
            console.debug('passed two');
            recorderRef.current.startRecording();
            console.debug('started recording');
        },
        stop: async () => new Promise((resolve, reject) => {
            if (!recorderRef.current) return;       // Recording doesn't exist
            if (!isRecording) return;    // Not recording

            // Stop all tracks
            setIsRecording(false);
            console.debug("stopping")
            recorderRef.curr_lkjhgftyuiopent.stopRecording(function () {
                resolve(this.getBlob());
            });
            console.debug('stopped recording');
        }),

    }
}