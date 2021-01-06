import React from 'react';
import { connect } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import CircularProgress from '@material-ui/core/CircularProgress';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name ', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 130 },
  { field: 'createdAt', headerName: 'createdAt', width: 130 },
];

const StickyHeadTable = (props) => {
  const { data, error, isLoading } = props;
  console.log(data);
  return (
  
    <div style={{ height: 400, width: '100%' }}>
      {isLoading && <CircularProgress />}
      {data && <DataGrid rows={data} columns={columns} pageSize={100} />}
    </div>
  );
}

const mapState = state => ({
  data: state.dataNeko.data,
  error: state.dataNeko.error,
  isLoading: state.dataNeko.isLoading
});

export default connect(mapState, null)(StickyHeadTable)