import React from 'react'
import {
  StyledDataBlock, DataBar, CloseDataBlock, EditButton, SaveButton, ContactDataBG, AddressBar
} from '../layouts/ContactData'
import {connect} from "react-redux"
import {closeContactData, editContact, saveContact} from "./actions"

const mapStateToProps = state => ({
  contactData: state.contactData,
  contactDataShow: state.contactDataShow,
  contactReadonly: state.contactReadonly,
});

const mapDispatchToProps = dispatch => ({
  closeContactData: () => dispatch(closeContactData()),
  editContact: () => dispatch(editContact()),
  saveContact: (contactData) => dispatch(saveContact(contactData))
});

class ContactData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactData: {},
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.saveButton = this.saveButton.bind(this);
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.editContact();
  }

  saveButton(e) {
    e.preventDefault();
    let {name, username, email, phone, website,
      streetA, streetB, streetC, streetD, city, state, country, zipcode} = e.target;
    let id = this.props.contactData.id;
    let contact = {
      id: id,
      name: name.value,
      username: username.value,
      email: email.value,
      phone: phone.value,
      website: website.value,
      address: {
        streetA: streetA.value,
        streetB: streetB.value,
        streetC: streetC.value,
        streetD: streetD.value,
        city: city.value,
        state: state.value,
        country: country.value,
        zipcode: zipcode.value,
      }
    };
    this.props.saveContact(contact);
  }

  render() {

    if (this.props.contactDataShow) {
      let {name, username, email, phone, website, address} = this.props.contactData;

      return (
        <ContactDataBG onClick={this.props.closeContactData}>
          <StyledDataBlock onSubmit={this.saveButton} onClick={this.stopPropagation}>
            <CloseDataBlock onClick={this.props.closeContactData}>Close</CloseDataBlock>
            <EditButton onClick={this.handleEdit}>Edit</EditButton>
            { (!this.props.contactReadonly) ? <SaveButton size="23px">Submit</SaveButton> : null }
            <DataBar
              id="name"
              type="text"
              defaultValue={name}
              readonly={this.props.contactReadonly}
            />
            <DataBar
              id="username"
              type="text"
              defaultValue={username}
              readonly={this.props.contactReadonly}
            />
            <DataBar
              id="email"
              type="email"
              defaultValue={email}
              readonly={this.props.contactReadonly}
            />
            <DataBar
              id="phone"
              type="tel"
              defaultValue={phone}
              readonly={this.props.contactReadonly}
            />
            <DataBar
              id="website"
              type="text"
              defaultValue={website}
              readonly={this.props.contactReadonly}
            />
            <AddressBar>
              <DataBar
                id="country"
                type="text"
                defaultValue={address.country}
                readonly={this.props.contactReadonly}
              />
              <DataBar
                id="state"
                type="text"
                defaultValue={address.state}
                readonly={this.props.contactReadonly}
              />
              <DataBar
                id="city"
                type="text"
                defaultValue={address.city}
                readonly={this.props.contactReadonly}
              />
              <DataBar
                id="streetA"
                type="text"
                defaultValue={address.streetA}
                readonly={this.props.contactReadonly}
              />
              <DataBar
                id="streetB"
                type="text"
                defaultValue={address.streetB}
                readonly={this.props.contactReadonly}
              />
              <DataBar
                id="streetC"
                type="text"
                defaultValue={address.streetC}
                readonly={this.props.contactReadonly}
              />
              <DataBar
                id="streetD"
                type="text"
                defaultValue={address.streetD}
                readonly={this.props.contactReadonly}
              />
              <DataBar
                id="zipcode"
                type="number"
                defaultValue={address.zipcode}
                readonly={this.props.contactReadonly}
              />
            </AddressBar>

          </StyledDataBlock>
        </ContactDataBG>
      )
    } else {
      return (
        <></>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactData)