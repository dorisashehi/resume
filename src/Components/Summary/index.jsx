import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faAngleDown, faMinus } from '@fortawesome/free-solid-svg-icons';
import Button from '../Elements/Button';
import './index.scss';

const Summary = (props) => {
  const [editBox, setEdit] = useState(false);

  const toggleAdd = (event) => {
    //OPEN CLOSE EDIT
    event.preventDefault();
    setEdit(!editBox);
  };

  const [summary, setSummary] = useState(''); //SUMMARY SATTE

  const changeSummary = (content) => {
    //CHANGE SUMMARY CONTENT
    setSummary(content);
  };

  const save = (event) => {
    //SAVE SUMMARY TO PARENT ELEMENT

    event.preventDefault();
    props.addSummary(summary);
    setEdit(false);
  };

  return (
    <>
      <div className="section-presentation row">
        <div className="summary toogle-header" onClick={toggleAdd} title="Expand">
          <h1 className="title">
            <FontAwesomeIcon icon={faClipboardList} />
            <span>Summary</span>
          </h1>
          <FontAwesomeIcon icon={faAngleDown} className="right-icon" />
        </div>
      </div>

      {editBox && (
        <div className="summary-section row">
          <h1>Edit Summary</h1>
          <div className="sub-section">
            <form>
              <div className="row-group">
                <div className="form-group">
                  <div className="App">
                    <label htmlFor="summary">Summary</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={summary}
                      id="summary"
                      onChange={(event, editor) => changeSummary(editor.getData())}
                    />
                  </div>
                </div>
              </div>

              <div className="button-section">
                <div className="link_name">
                  <FontAwesomeIcon icon={faMinus} />
                  <Button value="Close" onClick={(event) => toggleAdd(event)} className="btn-simple close" />
                </div>
                <Button value="Save" onClick={(event) => save(event)} className="btn save" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Summary;
