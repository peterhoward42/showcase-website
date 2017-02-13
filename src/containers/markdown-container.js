import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        status: state.mainPanel.markdown.fetchStatus,
        markdownContent: state.mainPanel.markdown.content
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}
}

const MarkdownContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkdownView)

export default MarkdownContainer