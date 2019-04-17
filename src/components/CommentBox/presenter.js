import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Textarea from 'react-textarea-autosize';

const CommentBox = (props, context) => (
    <form className={styles.commentBox}>
        <Textarea
            className={styles.input}
            placeholder={context.t('Add a comment...')}
            value={props.comment}
            onChange={props.handleInputChange}
            onKeyPress={props.handleKeyPress}
        />
    </form>
)

CommentBox.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleKeyPress: PropTypes.func.isRequired,
    comment: PropTypes.string.isRequired
}
CommentBox.contextTypes = {
    t: PropTypes.func.isRequired
}

export default CommentBox;