import React, { Component } from 'react';
import {connect } from 'react-redux';
import GridHeader from '../components/GridHeader.jsx';
import Grid from '../components/Grid.jsx';
import * as actions from '../actions/actions';

const mapStateToProps = (state) =>
  ({
    gridName: state.grid.gridName,
    result: state.grid.result,    
    sideLength: state.grid.sideLength,
  });


const mapDispatchToProps = (dispatch) => ({
    onSaveGrid: (name) =>
        dispatch(actions.updateGridName(name)),
});


class MainDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='display'>
              <div className='grid_header'>
                  <h1>SHORTEST PATH FINDER</h1>
                  <GridHeader 
                  gridName={this.props.gridName}
                  onSaveGrid={this.props.onSaveGrid}
                  />
              </div>
              <div>
              <Grid
                  sideLength={this.props.sideLength}
                  />
              </div>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay);