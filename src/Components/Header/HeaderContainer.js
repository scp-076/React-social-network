import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {LogoutThunkCreator} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutThunk: () => dispatch(LogoutThunkCreator())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);