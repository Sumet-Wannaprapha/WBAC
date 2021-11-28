import React,{useEffect} from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill, setAction } from './Table'
import axios from 'axios'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = React.useState([])
  useEffect(() => {
    axios.get('http://119.59.100.51/plesk-site-preview/www.repair1.xyz/https/119.59.100.51/db')
      .then(res => {
        setData(res.data)
      })
  }, [])
  const columns = React.useMemo(() => [
    {
      Header: "ชื่อ-นามสกุล",
      accessor: 'db_name',
      // db_sex:"db_sex", 
      Cell: AvatarCell,
      db_add: "db_add",
    },
    {
      Header: "รหัส",
      accessor: 'db_password',
    },
    {
      Header: "สาขาวิชา",
      accessor: 'db_class',
      Cell: StatusPill,
    },
    {
      Header: "เบอร์โทรศัพท์",
      accessor: 'db_phone',
    },
    {
      Header: "ระดับชั้น",
      accessor: "db_level",
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      Header: "แก่ไข",
      db_id: "db_id",
      Cell: setAction,
     
  
    
     
    },
  ], [])



  return (

    <>
        <ToastContainer />
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      
        <div className="mt-6" >
          <Table columns={columns} data={data} />
        </div>
      </main>
      </div>
      </>
  );
}

export default App;

