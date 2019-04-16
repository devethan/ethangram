import React from 'react';
import PhotoActions from './presenter';

class Container extends React.Component {
    render() {
        return <PhotoActions {...this.props} />
    }
}

export default Container;