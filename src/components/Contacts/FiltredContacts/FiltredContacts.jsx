import { Button } from "components/components.styled";
import { ContactItem } from "./FiltredContatcs.styled";
import PropTypes from 'prop-types';


export const FiltredContacts = ({ name, phone, onDelete }) => {
    return (
        <ContactItem>
            {name}: {phone}
            <Button type="button" onClick={()=>onDelete(name)}>
                Delete
            </Button>
        </ContactItem>
    )
};

FiltredContacts.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
};

