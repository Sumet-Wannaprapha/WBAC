import { useState } from 'react';
function Main() {

  const [open, setopen] = useState(false);
  const [open2,setopen2] = useState(false);
  const thaidate = new Date().toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',

  });
const [db_password,setdb_password] = useState(null);
const [db_y,setdb_y] = useState(null);

return (
<div className=" py-1 bg-blueGray-50">
  <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-sm font-bold">
        {thaidate}
          </h6>
            <button onClick={() =>(setopen(true))} className="click bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
            รายละเอียด
          </button>
        </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <div>
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                   ข้อมูลส่วนตัว
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                  ชื่อนักศึกษา
                </div>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="ชื่อ"  />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                นามสกุลนักศึกษา
                </div>
                <input placeholder="นามสกุล" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                ระดับชั้น
                </div>
                <input type="text" placeholder="ชั้น" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                รหัสนักศึกษา
                </div>

                  <input type="text" placeholder="รหัส" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={db_password} onChange={event => setdb_password(event.target.value.replace(/\D/))}/>
              </div>
            </div>
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
     
          <div className="flex flex-wrap mt-3">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                สาขาวิชา
                </div>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="สาขาวิชา" />
              </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                สาขางาน
                </div>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="สาขางาน" />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                เกิดวันที่ 
                </div>
                <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                 
                    <option value="">วันที่</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    
                  </select>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                เดือน
                </div>
                <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                
                    <option value="">เดือน</option>
                    <option value="1">มกราคม</option>
                    <option value="2">กุมภาพันธ์</option>
                    <option value="3">มีนาคม</option>
                    <option value="4">เมษายน</option>
                    <option value="5">พฤษภาคม</option>
                    <option value="6">มิถุนายน</option>
                    <option value="7">กรกฎาคม</option>
                    <option value="8">สิงหาคม</option>
                    <option value="9">กันยายน</option>
                    <option value="10">ตุลาคม</option>
                    <option value="11">พฤศจิกายน</option>
                    <option value="12">ธันวาคม</option>
               </select>
                </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                พ.ศ.
                </div>
                <input value={db_y} onChange={event => setdb_y(event.target.value.replace(/\D/,''))} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="พ.ศ." />
              </div>
            </div>
          </div>
          <hr className="mt-6 border-b-1 border-blueGray-300" />
          <div className="flex flex-wrap">
          
            
            
              <div className="w-full lg:w-6/12  px-4 mt-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                บ้านเลขที่
                </div>
                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="-" />
              </div>
              </div>
              <div className="w-full lg:w-6/12  px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                ตรอก/ซอย
                </div>
                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="-" />
              </div>
            </div>
            <div className="w-full lg:w-6/12  px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                ถนน/หมู่ที่        
                </div>
                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="-" />
              </div>
              </div>
              <div className="w-full lg:w-6/12  px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                แขวง/ตำบล          
                </div>
                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="-" />
              </div>
              </div>
              <div className="w-full lg:w-6/12  px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                บ้านหอย           
                </div>
                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="-" />
              </div>
              </div>
              <div className="w-full lg:w-6/12  px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                เขต/อำเภอ               
                </div>
                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="-" />
              </div>
              </div>
              <div className="w-full lg:w-6/12  px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                จังหวัด                    
                </div>
                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="-" />
              </div>
              </div>
              <div className="w-full lg:w-6/12  px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                รหัสไปรษณีย์                                  
                </div>
                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="-" />
              </div>
              </div>
              <div className="w-full px-4">
              <div className="relative w-full mb-3 ">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                โทรศัพท์                                    
                </div>
                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="091-234-5678" />
              </div>
            </div>
            </div>
            <hr className="mt-6 mb-3 border-b-1 border-blueGray-300" />
            <div className="w-full   px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                ชื่อบิดา                                         
                </div>
                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="ชื่อ-สกุล" />
              </div>
            </div>
            <div className="w-full   px-4">
              <div className="relative w-full mb-3">
                <div className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                ชื่อมารดา                                      
                </div>
              
                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="ชื่อ-สกุล" />
              </div>
              
            </div>
            <hr className="mt-6 mb-6 border-b-1 border-blueGray-300" />
            <div className="w-full  justify-center  px-4">
            <button class="click  bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">รายละเอียด</button>
 </div>
  </div>
      </div>
    </div>
    <div className="relative  pt-8 pb-6 mt-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
                <a href="https://www.facebook.com/panichprachin" className="text-blueGray-500 hover:text-gray-800" target="_blank">
                วิทยาลัยอาชีวศึกษาพณิชยการปราจีนบุรี
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  
    {open ? <div
   
   className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
   style={{ background: "rgba(0,0,0,.7)" }}
 >
   <div className="border border-teal-500  modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
     <div className="modal-content py-4 text-left px-6">
       {/*Title*/}
       <div className="flex justify-between items-center">
        <img className="w-14 h-14" src={require('./oip.jfif').default} />
       </div>
       {/*Body*/}
       <div className="my-5">
         <p>         ใบสมัคร
สมาชิกองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย ระดับสถานศึกษา 
วิทยาลัยอาชีวศึกษาพณิชยการปราจีนบุรี


         </p>
       </div>
       {/*Footer*/}
       <div className="flex justify-end pt-2">
         <button
              onClick={() => {
                setopen(false);
           }}
           className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
         >
           ปิด
         </button>
       </div>
     </div>
   </div>
    </div>
      
      
      
      : null}
      {open2 ? <div
   
   className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
   style={{ background: "rgba(0,0,0,.7)" }}
 >
   <div className="border border-teal-500  modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
     <div className="modal-content py-4 text-left px-6">
       {/*Title*/}
       <div className="flex justify-between items-center">
        <img className="w-14 h-14" src={require('./oip.jfif').default} />
       </div>
       {/*Body*/}
       <div className="my-5">
         <p>         ใบสมัคร
สมาชิกองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย ระดับสถานศึกษา 
วิทยาลัยอาชีวศึกษาพณิชยการปราจีนบุรี


         </p>
       </div>
       {/*Footer*/}
       <div className="flex justify-end pt-2">
         <button
              onClick={() => {
                setopen2(false);
           }}
           className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
         >
           ปิด
         </button>
       </div>
     </div>
   </div>
    </div>
      
      
      
      : null}
    
    
   </div>



  )
}

export default Main
