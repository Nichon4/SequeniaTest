import React from 'react'
import { connect } from 'react-redux'
import {Contact, StyledContactList} from "../layouts/Contacts"
import {openContactData} from "./actions";

const mapStateToProps = state => ({
  contacts: state.contacts,
  contactData: state.contactData
});

const mapDispatchToProps = dispatch => ({
  openContactData: (contact) => dispatch(openContactData(contact)),
});

class ContactList extends React.Component {

  handleClick(e, payload) {
    this.props.openContactData(payload);
    e.preventDefault();
  }

  render() {
    if (this.props.contacts.isLoaded) {
      return ( <StyledContactList>
          {
            Object.values(this.props.contacts.data).map( (contact) => {
              return (
                <Contact key={contact.id} data={contact} onClick={ (e) => this.handleClick(e, contact)}/>
              )
            })
          }
        </StyledContactList>
      )
    } else {
      return (
        <span>Loading...</span>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)