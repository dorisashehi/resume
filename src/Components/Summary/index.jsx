import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
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
            <div className="personal-section row">
                <div className="edit-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" onClick = { toggleSummary }  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>

                </div>
                <div className="name">Summary</div>
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