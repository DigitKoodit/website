import React from 'react';
import { Link } from 'react-router'; // For internal navigation between routes
import connectToStores from 'alt-utils/lib/connectToStores';
import BasicInfoStore from './BasicInfoStore';
import BasicInfoActions from './BasicInfoActions';

// Class is using Flux architecture 
class BasicInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = BasicInfoStore.getState();
        this.onChange = this.onChange.bind(this); // bind() binds the scopes function "onChange" not the React component's
    }

    componentDidMount() {
        BasicInfoStore.listen(this.onChange);
    }

    componentWillUnmount() {
        BasicInfoStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
                <div className="container">
                    Moi
                </div>
        );
    }
}

export default BasicInfo;