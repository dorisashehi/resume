import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

const Summary = (props) => {

    const [ editBox, setEdit ] = useState(false);

    const toggleSummary = () => { //OPEN CLOSE EDIT
        setEdit(!editBox)
    }

    const [ summary, setSummary ] = useState(''); //SUMMARY SATTE

    const changeSummary = (content) => { //CHANGE SUMMARY CONTENT
        setSummary(content);
    }

    const save = (event) => { //SAVE SUMMARY TO PARENT ELEMENT

        event.preventDefault();
        props.addSummary(summary);
    }


    return(

        <>
            <div className="section-presentation row">
                <div className="summary toogle-header">
                    <h1 className="title">
                        <FontAwesomeIcon icon={ faClipboardList }/>
                        <span>Summary</span>
                    </h1>
                    <FontAwesomeIcon icon={ faAngleDown } className="right-icon" onClick = { toggleSummary }/>
                </div>
            </div>


            {(editBox) &&
                <div className="summary-section row">
                    <h1>
                        Edit Summary
                    </h1>
                    <div className="sub-section">
                        <form>
                            <div className="row-group">
                                <div className="form-group">

                                    <div className="App">
                                            <label htmlFor="summary">Summary</label>
                                            <CKEditor
                                                editor={ ClassicEditor }
                                                data={summary}
                                                id="summary"
                                                onChange= {(event, editor) => changeSummary(editor.getData())}

                                            />
                                    </div>
                                </div>
                            </div>

                            <div className="button-section">
                                <input type="submit" className="btn close" onClick={(event) => toggleSummary(event)} value='Close' />
                                <input type="submit" className="btn save" onClick={(event) => save(event)} value='Edit' />

                            </div>
                        </form>
                    </div>

                </div>
            }
        </>

    )

}



export default Summary