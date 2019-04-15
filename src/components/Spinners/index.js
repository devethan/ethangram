import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { HashLoader } from 'react-spinners';
// Another way to import
// import ClipLoader from 'react-spinners/ClipLoader';
 
const override = css`
    margin-top: 30px;
    margin-bottom: 30px;
`;
 
class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <HashLoader
          css={override}
          sizeUnit={"px"}
          size={30}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}

export default AwesomeComponent;