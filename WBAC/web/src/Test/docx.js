import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {  toast } from "react-toastify";

export default function Docx() {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/db')
            .then((res, err) => {
                setData(res.data);
                console.log(res.data);
            }).catch(err => {
                console.log(err);
                toast.error('ขออภัยมีบางอย่างผิดพลาด', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
    }, [])

   

    
async function downloadDocx(e){
       const id = toast.loading("กำลังสร้างไฟล์....", {
            pauseOnFocusLoss: false,
            draggable: false,
            closeOnClick: false,
            autoClose: false,
            hideProgressBar: true,
            closeButton: false,
            pauseOnHover: false,
            progress: undefined,
            position: toast.POSITION.BOTTOM_RIGHT

        });
    try {
        window.location.href = `http://localhost:8080/download/${e}`;
      
        toast.update(id, {
            render: "สําเร็จ",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            hideProgressBar: true,
            closeButton: true,
            pauseOnHover: true,
            progress: undefined,
            position: toast.POSITION.BOTTOM_RIGHT



        });
        
    } catch (error) {
        console.log(error);
        toast.error('ขออภัยมีบางอย่างผิดพลาด', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    }
 

    return (
        <div>
    
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <h2>{item.db_name}</h2>
                        <button type="button" onClick={()=>downloadDocx(item.id)}>Click</button>
                    </div>
                )
            })}
             
                        
         
        </div>
        )
    }

