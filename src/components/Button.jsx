
import PropTypes from "prop-types";
import { Link } from "react-router-dom"



export default function Button({ type, content, to }) {
    return (
        <div className="button">
            <Link to={to} className={type}>
                {content}
            </Link>
        </div>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(['page-change', 'inter-page', 'default']),
};