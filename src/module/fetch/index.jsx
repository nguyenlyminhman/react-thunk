import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import StickyHeadTable from './data-items';
import fetchData from '../../store/fetch-api/action';
import { connect } from 'react-redux';

const NekoFetch = (props) => {

    const _fetchNekoData = () => {
        props.fetchData()
    }

    return (
        <>
            <Button variant="contained" color="primary" onClick={_fetchNekoData}>
                Fetch Neko Data {props.loading}
            </Button>
        </>
    );
}

const mapState = state => ({
    loading: state.dataNeko.isLoading
})

const mapDistpatch = dispatch => ({
    fetchData: () => dispatch(fetchData())
})

export default connect(mapState, mapDistpatch)(NekoFetch);