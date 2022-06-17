import { useState, useRef } from "react";
import RecordRTC from "recordrtc";

export default function RecordingFunction() {
  const [data, setData] = useState([]);
  const [stream, setStream] = useState(null);
  const recorderRef = useRef(null);

  return {
    data,
    stream,
    getScreen: async () => {
      if (!stream || !stream.active) {
        // Get screen if necessary
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
        console.debug("verbosidad");
      }
    },
    removeScreen: async () => {
      if (!stream) return;
      stream.getVideoTracks().forEach((track) => track.stop());
      setStream(null);
    },
    start: async () => {
      // Start recording
      console.debug("passed one");
      // If isn't recording
      if (recorderRef.current.getState() == "recording") return;
      console.debug("passed two");
      recorderRef.current.startRecording();
      console.debug("started recording");
    },
    stop: async () =>
      new Promise((resolve, reject) => {
        if (!recorderRef.current) return; // Recording doesn't exist
        if (recorderRef.current.getState() === "stopped") return; // Not recording

        // Stop all tracks
        console.debug("stopping");
        recorderRef.current.stopRecording(function () {
          resolve(recorderRef.current.getBlob());
        });
        console.debug("stopped recording");
      }),
  };
}
