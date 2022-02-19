import { useState, useEffect } from "react";
import {projectStorage, projectFirestore, timeStamp} from '../firebase/config'

const UseStorage = (file)=>{

    const [url, setUrl] = useState(null)
    const [error, setError]= useState(null)
    const [progress, setProgress] = useState(0)

    useEffect(()=>{
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images')
        storageRef.put(file).on('state_changed', (snap)=>{
            const percentage = (snap.bytesTransferred/snap.totalBytes)*100
            setProgress(percentage)
        }, (error)=>{
            setError(error)
        }, async()=>{
            const url = await storageRef.getDownloadURL()
            const createdAt = timeStamp()
            await collectionRef.add({url, createdAt})
            setUrl(url)
        })
    }, [file])

    return {progress, url, error}
}

export default UseStorage