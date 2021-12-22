import React, { useState } from 'react';
import axios from 'axios';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

const UserTable = ({ data, setData, setOpenSnackbar, setSnackbarMessage }) => {
  // Config
  const roleOptions = ['Admin', 'Project Manager', 'Developer', 'Submitter'];
  const pageSizes = [10, 25, 50, 100];
  const [pageSize, setPageSize] = useState(pageSizes[0]);

  const columns = [
    {
      field: 'first_name',
      headerName: 'First name',
      flex: 0.35,
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
      valueOptions: roleOptions,
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

  // Handle role edits
  const editHandler = (params) => {
    const { id, field, value } = params;
    const current = data.find(d => d.user_id === id);

    if (current.first_name === 'Demo') {
      setSnackbarMessage('Error: Cannot reassign demo users.');
      setOpenSnackbar(true);
      setData(data.map(d => d));
      return;
    }

    if (current.role === 'Admin' || value === 'Admin') {
      setSnackbarMessage('Error: Insufficient privileges to assign Admin.');
      setOpenSnackbar(true);
      setData(data.map(d => d));
      return;
    }

    const updatedUser = {
      ...current,
      [field]: value,
    }

    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/users/`, updatedUser)

    setSnackbarMessage(`Reassigned ${current.first_name} ${current.last_name} as: ${value}`);
    setOpenSnackbar(true);
    setData(data.map(u => u.user_id === id ? updatedUser : u));
  }

  return (
    <>
      <DataGrid
        rows={data}
        getRowId={row => row.user_id}
        rowHeight={30}
        headerHeight={35}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        rowsPerPageOptions={pageSizes}
        components={{ Toolbar: CustomToolbar, }}
        onCellEditCommit={editHandler}
        disableSelectionOnClick
      />
    </>
  )
}

export default UserTable;