import React from 'react'
import { connect } from 'react-redux'
import TestModal from '../Modals/TestModal'

const modalLookup = {
    TestModal,
}

const mapState = (state) => ({
    currentModal: state.modals
})

const ModalManager = ({ currentModal }) => {
    let renderedModal;

    if (currentModal) {
        const { modalType, modalProps } = currentModal;
        const ModalComponent = modalLookup[modalType]

        renderedModal = <ModalComponent {...modalProps} />
    }

    return (
        <span style={{marginBottom: "1px"}}>{renderedModal}</span>
    )
}

export default connect(mapState)(ModalManager);