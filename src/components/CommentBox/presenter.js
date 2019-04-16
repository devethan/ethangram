import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Textarea from 'react-textarea-autosize';

const CommentBox = (props, context) => (
    <form className={styles.commentBox}>
        <Textarea
            className={styles.input}
            placeholder={context.t('Add a comment...')}
        />
    </form>
)

CommentBox.propTypes = {
    photoId: PropTypes.number.isRequired
}
CommentBox.contextTypes = {
    t: PropTypes.func.isRequired
}

export default CommentBox;