import React from 'react'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination } from 'react-table'
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { Button, PageButton } from './shared/Button'
import { classNames } from './shared/Utils'
import { SortIcon, SortUpIcon, SortDownIcon } from './shared/Icons'
import  Dropdow  from './shared/Download'
import { toast } from "react-toastify";
import ReactTooltip from 'react-tooltip';

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <div className="flex gap-x-2 items-baseline">
      <span className="text-gray-700">ค้นหา: </span>
      <input
        type="text"
        className="rounded-md outline-none focus:ring-4 shadow hover:shadow-sm transform active:scale-y-75 transition-transform flex  border-gray-300  focus:border-indigo-300  focus:ring-indigo-200 focus:ring-opacity-50"
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} สิ่งที่ต้องการค้นหา...`}
      />
    </div>
  )
}


export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render },
  
}) {

  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])


  return (
    <div className="flex gap-x-2 items-baseline">
      <span className="text-gray-700">{render("Header")}: </span>
      <select
        className="rounded-md focus:ring-4 outline-none shadow hover:shadow-sm transform active:scale-y-75 transition-transform flex border-gray-300  focus:border-indigo-300  focus:ring-indigo-200 focus:ring-opacity-50"
        name={id}
        id={id}
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option  value="">ทั้งหมด</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export function StatusPill({ value }) {
  const status = value ? value.toLowerCase() : "unknown";

  return (
    <span
      className={
        classNames(
          "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
          status.startsWith("คอมพิวเตอร์ธุรกิจ") ? "bg-green-100 text-green-800" : null,
          status.startsWith("การบัญชี") ? "bg-yellow-100 text-yellow-800" : null,
          status.startsWith("CP") ? "bg-red-100 text-red-800" : null,
        )
      }
    >
      {status}
    </span>
  );
};

export function AvatarCell({ value, column, row }) {

  // const sex = row.original[column.db_sex]
  return (
    <>
    <div className="flex items-center">
      {/* <div className="flex-shrink-0 h-10 w-10"> */}
      {/* <img className="h-10 w-10 rounded-full" src={ } alt="" /> */}

      {/* </div> */}
      <div className="ml-4">
        <div className="text-sm font-medium xz">{value}</div>
        <div className="text-sm text-gray-500">{row.original[column.db_add]}</div>
      </div>
    </div>
  
 
    </>
  )
}

export function setAction({row}) {
  const id = row.original.id
  // console.log(id);
  return (
   <Dropdow id={id}  />
  )

}

function Table({ columns, data }) {
 
 
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable({
    columns,
    data,
  },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  )

 
  return (
    
    <>
    <ReactTooltip />
      <div className="sm:flex sm:gap-x-2">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div className="mt-2 sm:mt-0" key={column.id}>
                {column.render("Filter")}
              </div>
            ) : null
          )
        )}
    
        <button data-tip="คัดลอกลิ้ง" onClick={() => navigator.clipboard.writeText('https://www.repair1.xyz/').then(() => {  toast.success("คัดลอกลิงค์แล้ว", { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, }) })} type="button" className="click px-4 py-2 border-gray-300  focus:border-indigo-300  focus:ring-indigo-200 focus:ring-opacity-50 bg-white rounded-md  outline-none focus:ring-4 shadow hover:shadow-sm transform transition-transform flex"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" /> </svg> </button>
       <button data-tip="รีเฟรชหน้าจอ" onClick={()=>window.location.reload()} type="button" className="click px-4 py-2 border-gray-300  focus:border-indigo-300  focus:ring-indigo-200 focus:ring-opacity-50 bg-white rounded-md  outline-none focus:ring-4 shadow hover:shadow-sm transform transition-transform flex">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
</svg>

        </button>
       

    
      </div>

      <div className="mt-4 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8 ">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
              <table {...getTableProps()} className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50">
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (

                        <th
                          scope="col"
                          className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                        >
                          <div className="flex items-center justify-between ">
                            {column.render('Header')}
                            {/* Add a sort direction indicator */}
                            <span>
                              {column.isSorted
                                ? column.isSortedDesc
                                  ? <SortDownIcon className="w-4 h-4 text-gray-400" />
                                  : <SortUpIcon className="w-4 h-4 text-gray-400" />
                                : (
                                  <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                                )}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="bg-white divide-y divide-gray-200"
                >
                  {page.map((row, i) => {
                   
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()} key={i} id={`tr${row.original.id}`}>
                        {row.cells.map(cell => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="px-6 py-4 whitespace-nowrap"
                              role="cell"
                            >
                              {cell.column.Cell.name === "defaultRenderer"
                                ? <div className="text-sm text-gray-500">{cell.render('Cell')}</div>
                                : cell.render('Cell')
                              }
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-x-2 items-baseline">
            <span className="text-sm text-gray-700">
              หน้า <span className="font-medium">{state.pageIndex + 1}</span> ของ <span className="font-medium">{pageOptions.length}</span>
            </span>
            <div>
              <span className="sr-only">รายการต่อหน้า</span>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={state.pageSize}
                onChange={e => {
                  setPageSize(Number(e.target.value))
                }}
              >
                {[5, 10, 20].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" >
              <PageButton
                className="rounded-l-md"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <ChevronDoubleLeftIcon className="h-5 w-5 text-gray-400"/>
              </PageButton>
              <PageButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5 text-gray-400" />
              </PageButton>
              <PageButton
                onClick={() => nextPage()}
                disabled={!canNextPage
                }>
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-400"  />
              </PageButton>
              <PageButton
                className="rounded-r-md"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <ChevronDoubleRightIcon className="h-5 w-5 text-gray-400" />
              </PageButton>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table;