// 아래처럼 html태그를 변수에 할당할 수 있다.

import PropTypes from 'prop-types'

function UserGreeting(props) {

    const welcomemsg = <h2 className="welcome-msg">
                        Welcome {props.username}
                        </h2>

    const loginPrompt = <h2 className="login-prompt">
                        Please log in to continue
                        </h2>

    return(props.isLoggedIn ? welcomemsg : loginPrompt);
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

export default UserGreeting