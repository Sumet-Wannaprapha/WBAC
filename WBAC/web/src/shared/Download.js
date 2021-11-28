import axios from "axios";
import React from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from 'sweetalert';

export default function Dropdow(props) {
  const [hoverload, sethoverload] = React.useState(false);
  const [hoverload2, sethoverload2] = React.useState(false);
  const db_id = props.id;
  async function delect(e) {
    swal({
      title: "ต้องการลบข้อมูลนี้หรือไม่?",
      text: "หากลบแล้วจะไม่สามารถกู้คืนได้!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("ลบข้อมูลสำเร็จ!", {
          icon: "success",
        }).then(() => {
          window.location.reload();
        });
        axios.delete(`http://119.59.100.51/plesk-site-preview/www.repair1.xyz/https/119.59.100.51/delect/${e}`).then(res => {
          toast.success("ลบข้อมูลสำเร็จ", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
         

        });
      } else {
        swal("ยกเลิกการลบข้อมูลแล้ว!");
      }
    });



   }
  async function downloadDocx(db_id) {
    const id = toast.loading("กำลังสร้างไฟล์....", {
      pauseOnFocusLoss: false,
      draggable: true,
      closeOnClick: false,
      autoClose: 5000,
      hideProgressBar: false,
      closeButton: false,
      pauseOnHover: false,
      progress: undefined,
      position: toast.POSITION.TOP_CENTER,
    });
    try {
      window.location.href = `http://119.59.100.51/plesk-site-preview/www.repair1.xyz/https/119.59.100.51/download/${db_id}`;

      toast.update(id, {
        render: "สําเร็จ",
        type: "success",
        isLoading: false,
        autoClose: 5000,
        hideProgressBar: false,
        closeButton: true,
        pauseOnHover: true,
        progress: undefined,
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      console.log(error);
      toast.error("ขออภัยมีบางอย่างผิดพลาด", {
        position: toast.POSITION.TOP_CENTER,
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
    
      <button
        onMouseEnter={() => sethoverload(true)}
        onMouseLeave={() => sethoverload(false)}
        className="click button"
        type="button"
        onClick={() => downloadDocx(db_id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill={hoverload ? "#fffbeb" : "none"}
          viewBox="0 0 24 24"
          stroke={hoverload ? "#3498db" : "currentColor"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </button>

      <button
        onClick={(e) => delect(e=db_id)}
        onMouseEnter={() => sethoverload2(true)}
        onMouseLeave={() => sethoverload2(false)}
        className="ml-3 click button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill={hoverload2 ? "red" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
     
    </div>
  );
}
