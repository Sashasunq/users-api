import * as React from 'react'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
const dataUrl = "https://reqres.in/api/users?per_page=100"

type Person = {
  id: string
  last_name: string
  first_name: number
  email: number
  avatar: string
}

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('id', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.first_name, {
    id: 'first_name',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>First Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.last_name, {
    id: 'last_name',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.email, {
    id: 'email',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Email</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.avatar, {
    id: 'avatar',
    cell: info => <img src={info.getValue()} alt='avatar' />,
    header: () => <span>Avatar</span>,
    footer: info => info.column.id,
  }),
]

function App() {
  const [data, setData] = React.useState(() => [])

  React.useEffect(()=>{
    fetch(dataUrl)
      .then((res)=>res.json())
      .then((json)=>setData(json.data))
  }, [])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default App