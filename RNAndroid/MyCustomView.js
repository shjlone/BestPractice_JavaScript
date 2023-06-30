import { requireNativeComponent } from "react-native";


class MyCustomView extends React.Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
    }

    _onChange(event: Event) {

        if(!this.props.onChangeMessage) {
            return;
        }
        this.props.onChangeMessage(event.nativeEvent.message);
    }
    render() {
        return (
            <RTCMyCustomView
            {...this.props}
            onChange={this._onChange}
            />
        )
    }
}

const RTCMyCustomView = requireNativeComponent(`RCTMyCustomView`);