import PropTypes from 'prop-types';

const OtherLinks = ({name, text, removeField, others, changeValue }) => {

    const handleRemove = () => { //REMOVE OTHERS LINKS FIELDS
        removeField(text.toLowerCase()); //CALL PROPS FUNCTION TAKEN FROM PARENT
    }

    return(
        <div className="form-group">
            <label htmlFor={name}>{text}</label>
            <div className='inline'>
                <input type="text"
                    className="form-input"
                    name= { name }
                    id= { name }
                    placeholder="Enter Url"
                    value = { others[name] }
                    onChange = {(event) => changeValue(name, event.target.value)}

                />
                <svg xmlns="http://www.w3.org/2000/svg" onClick = { handleRemove } width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </div>
        </div>
    )

}

OtherLinks.propTypes = { //TYPES FOR THE PROP TYPES DEFINIED. IT SHOWS ERRORS ON CONSOLE IF TYPES NOT THE SAME
    name: PropTypes.string.isRequired,
    removeField: PropTypes.func,
    changeValue: PropTypes.func,
    others: PropTypes.object,
    text: PropTypes.string.isRequired
}

export default OtherLinks