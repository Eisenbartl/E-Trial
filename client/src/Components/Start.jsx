import React from 'react';

const Start = props => (
  <div className='start'>
    <div className='start-overlay'></div>
    <div className='start-container'>
      <form action='' className='defendent-info-form'>
        <div>
          {/* name */}
          <div className='name-label'>
            <h3>name</h3>
            <input
              name='defendentName'
              onChange={e => props.handleFormInput(e)}
              type='text'
              className='defendent-name'
            />
          </div>
          {/* age */}
          <div className='form-age-sex'>
            <div className='age-label'>
              <h3>age</h3>
              <input
                name='defendentAge'
                onChange={e => props.handleFormInput(e)}
                type='number'
                min='18'
                max='99'
                maxLength='2'
                className='defendent-age'
              />
            </div>
            {/* sex */}
            <div className='sex-label'>
              <h3>sex</h3>
              <select
                value={props.value}
                name='defendentSex'
                onChange={props.handleFormInput}
                className='defendent-sex'
              >
                <option value='select-one' name='select-one'>
                  select one
                </option>
                <option value='male'>male</option>
                <option value='female'>female</option>
              </select>
            </div>
          </div>
          <div className='form-crimes-plea'>
            {/* crimes */}
            <div className='crimes-label'>
              <h3>charge</h3>
              <select
                value={props.value}
                name='defendentCrime'
                onChange={props.handleFormInput}
                className='defendent-crimes'
              >
                <option value='select-one'>select one</option>
                <option value='fraud'>fraud</option>
                <option value='divorce'>divorce</option>
                <option value='assault'>assault</option>
                <option value='rape'>rape</option>
                <option value='murder'>murder</option>
                <option value='tax-evasion'>tax evasion</option>
                <option value='petty-larceny'>petty larceny</option>
                <option value='destruction-of-property'>
                  destruction of property
                </option>
              </select>
            </div>
            {/* plea */}
            <div className='plea-label'>
              <h3>plea</h3>
              <select
                value={props.value}
                name='defendentPlea'
                onChange={props.handleFormInput}
                className='defendent-plea'
              >
                <option value='select-one'>select one</option>
                <option value='guilty'>guilty</option>
                <option value='not-guilty'>not guilty</option>
              </select>
            </div>
          </div>
        </div>
        <button className='defendent-form-btn'>begin court proceedings</button>
      </form>

      <div className='start-choose-jury'>
        <div className='juror-info'>
          <div className='juror-name-age'>
            <h4>name:</h4>
            <h4>age:</h4>
          </div>
          <div className='juror-sex-occupation'>
            <h4>sex:</h4>
            <h4>occupation:</h4>
          </div>
        </div>
        <div className='juror-selection'>
          <button name='prev' onClick={e => props.handleClick(e)}>
            prev
          </button>
          <div
            style={{ backgroundImage: `url('${props.img}')` }}
            className='juror-photo'
          ></div>
          <button name='next' onClick={e => props.handleClick(e)}>
            next
          </button>
        </div>
        <div className='juror-select-btn'>
          <button>select</button>
        </div>
        <div className='juror-selections'>
          <div className='juror'></div>
          <div className='juror'></div>
          <div className='juror'></div>
          <div className='juror'></div>
          <div className='juror'></div>
          <div className='juror'></div>
        </div>
      </div>
    </div>
  </div>
);

export default Start;
