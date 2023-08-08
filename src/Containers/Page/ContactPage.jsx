import Contact from "Components/formContact";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { get_contact_form} from "redux/actions/contact";

function ContactPage({get_contact_form, contact}) {


  return (
    <FullWidthLayout>
      <Contact 
      contact={contact} get_contact_form={get_contact_form}/>
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({
  contact: state.contact.contact,
});
export default connect(mapStateToProps, {
  get_contact_form,})(ContactPage);

