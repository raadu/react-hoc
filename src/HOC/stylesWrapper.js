import commonStyles from '../styles/commonStyles';

// Manipulate styles according to props.disable
// Return new styles prop
const translateProps = (props) => {
    let _styles = {...commonStyles.default};

    if(props.disable) {
        _styles = {
            ..._styles,
            ...commonStyles.disable
        };
    }

    const newProps = {
        ...props,
        styles: _styles
    };

    return newProps;
}

// Takes wrapped component as argument
// Return the wrapped component with props inside it
export default (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args));
    }
}