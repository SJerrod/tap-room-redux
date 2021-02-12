import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => { 
    const newMasterKegList =this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg
    });
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  handleBuyKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.map((keg) => ({
      ...keg,
      pints: keg.id === id ? keg.pints -1 : keg.pints
    }));
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  handleRestockKeg = (id, restockAmount) => {
    if (restockAmount === "") {
      restockAmount = 0;
    }
    const newMasterKegList = this.state.masterKegList.map((keg) => ({
      ...keg,
      pints: keg.id === id ? parseInt(keg.pints) + parseInt(restockAmount) : keg.pints
    }));
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingBuy = {this.handleBuyKeg} onClickingRestock = {this.handleRestockKeg} />;
      buttonText = "Return to Beer Menu";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList} />;
      buttonText = "Return to Beer Menu";
    } else {
      currentlyVisibleState = <KegList kegList = {this.state.masterKegList} onKegSelection = {this.handleChangingSelectedKeg} />;
      buttonText = "Add New Beer";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default KegControl;