import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import del_icon from "../../assets/img/icons/del_icon.svg";

function Modal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
  title,
  description,
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e)
    }
  }

  const close = (e) => {
    if (onClose) {
      onClose(e)
    }
  }
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
        {closable && <CloseButton className="modal-close" onClick={close}  src={del_icon}>×</CloseButton>}
          <Title>{title}</Title>
          <Description>{children}</Description>
        </ModalInner>
      </ModalWrapper>
    </>
  )
}

Modal.propTypes = {
  visible: PropTypes.bool,
}

Modal.defaultProps = {
  closable: true,
  maskClosable: true,
  visible: false
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 0.6rem 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 1rem;
  width: 30rem;
  max-width: 48rem;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  font-size: 1rem;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`
const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  text-align:start;
  width: 100%;
`

const CloseButton = styled.div`
    right: 0px;
    top: 5px;
    position: absolute;
    width: 3rem;
    height: 3rem;
    font-size: 1.8rem;
    font-weight: bold;
    cursor : pointer;
`;

export default Modal