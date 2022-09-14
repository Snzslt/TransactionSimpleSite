import { useState,useEffect,useRef } from "react"
import { projectFirestore } from "../firebase/config"


export const useCollection = (collection, _query) => {

    const [documents, setDocuments] =  useState(null)
    const[error,setError] = useState(null)

    //if we don't use Ref ==> infinite loop in useEffect
    //_query is an array and is different on every function call
    const query = useRef(_query).current
  

    useEffect(()=>{
        //we might update ref in fu that why we call it let 
        let ref = projectFirestore.collection(collection)

        if(query){
            ref = ref.where(...query)
        }


        const unsubscribe = ref.onSnapshot(snapshot => {
         let results = []
           snapshot.docs.forEach(doc => {
               results.push({...doc.data(), id: doc.id})
           });
           //update state
           setDocuments(results)
           setError(null)

        },error =>{
            console.log(error)
            setError(error.message)
        })


        //on unmount 
        return () => unsubscribe()
    },[collection, query])

    return{documents,error}
}