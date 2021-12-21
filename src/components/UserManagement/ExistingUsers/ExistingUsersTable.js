import React, { useState } from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

const ExistingUsersTable = ({ data, setData }) => {
  const pageSizes = [10, 25, 50, 100];
  const [pageSize, setPageSize] = useState(pageSizes[0]);

  if (!data) {
    return null;
  }

  // Datagrid config
  const columns = [
    {
      field: 'first_name',
      headerName: 'First name',
      flex: 0.4,
      minWidth: 90,
    },
    {
      field: 'last_name',
      headerName: 'Last name',
      flex: 0.6,
      minWidth: 100,
    },
    {
      field: 'role',
      headerName: 'Role ✎',
      type: 'singleSelect',
      valueOptions: ['Admin', 'Project Manager', 'Developer', 'Submitter'],
      flex: 1,
      minWidth: 100,
      editable: true,
    },
  ];

  // Toolbar
  const CustomToolbar = () => (
    <GridToolbarContainer className='exst-users__toolbar'>
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  )

  // Handler for edits
  const editHandler = (params) => {
    const { id, field, value } = params;
    setData(data.map(d => d.user_id === id ? {...d, [field]: value} : d));
  }

  return (
    <DataGrid
      rows={data}
      getRowId={row => row.user_id}
      rowHeight={30}
      headerHeight={35}
      columns={columns}
      pageSize={pageSize}
      onPageSizeChange={newPageSize => setPageSize(newPageSize)}
      rowsPerPageOptions={pageSizes}
      disableSelectionOnClick
      components={{
        Toolbar: CustomToolbar,
      }}
      onCellEditCommit={editHandler}
    />
  )
}

export default ExistingUsersTable;