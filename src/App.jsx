import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'; 
// 假设使用reactstrap作为Bootstrap的React实现
import './App.css';


// MyModal组件
class MyModal extends React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };

        // 绑定this.toggleModal函数
        this.toggleModal = this.toggleModal.bind(this);
    }

    // 切换模态框状态
    toggleModal() {
        // 切换this.state.isOpen的值
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
        }));
    }

    render() {
        return (
            <>
                {/* 模态对话框按钮 */}
                <Button color="primary" onClick={this.toggleModal}>
                    启动模态框
                </Button>

                {/* 模态对话框组件 */}
                <Modal isOpen={this.state.isOpen} toggle={this.toggleModal} fade={true}>
                    <ModalHeader toggle={this.toggleModal}>
                        <h5 className="modal-title" id="exampleModalLabel">
                            模态标题
                        </h5>
                    </ModalHeader>
                    <ModalBody>
                        这是模态对话框的内容。
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggleModal}>
                            关闭
                        </Button>
                        <Button color="primary">
                            保存更改
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

// 使用MyModal组件
function App() {
    return (
        <div className="App">
            <MyModal />
        </div>
    );
}

export default App;//默认暴露，任何人想引入都可以
