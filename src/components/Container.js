import React from 'react'
import { connect } from 'react-redux'
import ContactList from "./ContactList"
import { jsonStringify, jsonParse } from "../data/dataTransfer"
import ContactData from "./ContactData"
import { loadContacts } from "./actions"

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = dispatch => ({
  loadContacts: (contacts) => dispatch(loadContacts(contacts))
});

class Container extends React.Component {

  loadData() {
    let contacts = jsonParse(localStorage.getItem("contacts"));
    if (contacts) {
      this.props.loadContacts({
        isLoaded: true,
        data: contacts,
      })
    }
    else {
      fetch("http://demo.sibers.com/users")
        .then(res => res.json() )
        .then( res => res.reduce( (acc, cur) =>( {
            ...acc,
            [cur.id]: cur
          }), {})
        )
        .then( contacts => {
          localStorage.setItem("contacts", jsonStringify(contacts));
          this.props.loadContacts({
            isLoaded: true,
            data: contacts,
          });
          console.log(contacts)
        })
    }
  }

  componentDidMount() {

    this.loadData()

  }

  render() {
    return (
      <>
        <ContactList />
        <ContactData />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
