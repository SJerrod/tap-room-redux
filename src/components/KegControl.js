import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingNewKegToList = (newKeg) => { 
    const { dispatch } = this.props;
    const { id, name, brand, description, price, alcoholContent, pints } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      description: description,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({
      selectedKeg: selectedKeg
    });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({selectedKeg: null});
  }

  handleBuyKeg = (id) => {
    const { dispatch } = this.props;
    const kegUpdate = this.props.masterKegList[id];
    if(kegUpdate.pints > 0) {
      kegUpdate.pints --;
    }
    const action = {
      type: 'BUY_PINT',
      id: id
    }
    dispatch(action);
    this.setState({selectedKeg: kegUpdate});
  }

  handleRestockKeg = (id, restockAmount) => {
    const { dispatch } = this.props;
    const kegUpdate = this.props.masterKegList[id];
    if (restockAmount === "") {
      restockAmount = 0;
    } else {
      kegUpdate.pints += parseInt(restockAmount);
    }
    const action = {
      type: 'RESTOCK_KEG',
      id: id,
      restockAmount: restockAmount
    }
    dispatch(action);
    this.setState({selectedKeg: kegUpdate});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingBuy = {this.handleBuyKeg} onClickingRestock = {this.handleRestockKeg} />;
      buttonText = "Return to Beer Menu";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList} />;
      buttonText = "Return to Beer Menu";
    } else {
      currentlyVisibleState = <KegList kegList = {this.props.masterKegList} onKegSelection = {this.handleChangingSelectedKeg} />;
      buttonText = "Add New Beer";
    }
    return (
      <>
        {currentlyVisibleState}
        <br/>
        <button className='btn-light' onClick={this.handleClick}>{buttonText}</button>
        <br/>
      </>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;