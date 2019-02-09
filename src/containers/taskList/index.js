import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TaskListWrapper, TaskListTitle, TaskItem } from './style';
import { Button, Modal, Form, Input, InputNumber, Select } from 'antd';
import { actionCreators } from './store';

const Option = Select.Option;
const { TextArea } = Input;

@Form.create()
class TaskCreateForm extends PureComponent {
  render() {
    const {
      visible, onCancel, onCreate, form
    } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
    };
    return (
      <Modal
        visible={visible}
        title="新建任务"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout='horizontal'>
          <Form.Item label="标题" {...formItemLayout}>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入标题' }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item label="成就点" {...formItemLayout}>
            {getFieldDecorator('point', {
              rules: [{ required: true, message: '请输入成就点' }],
              initialValue: 1
            })(
              <InputNumber min={1} max={20} />
            )}
          </Form.Item>
          <Form.Item label="优先级" {...formItemLayout}>
            {getFieldDecorator('level', {
              rules: [{ required: true, message: '请选择优先级' }],
              initialValue: 3
            })(
              <Select
                placeholder="请选择"
              >
                <Option value={1}>非常重要</Option>
                <Option value={2}>重要</Option>
                <Option value={3}>一般</Option>
                <Option value={4}>不重要</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="详细内容" {...formItemLayout}>
            {getFieldDecorator('description')(
              <TextArea rows={4} />
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

@connect(
  state => ({
    visible: state.getIn(['taskList', 'formVisible']),
    tasks: state.getIn(['taskList', 'tasks'])
  }),
  dispatch => {
    return ({
      changeModalShow(visible) {
        dispatch(actionCreators.changeModalShow(visible));
      },
      createTask(task) {
        return dispatch(actionCreators.createTask(task));
      }
    })
  }
)
class TaskList extends PureComponent {

  showModal = () => {
    this.props.changeModalShow(true);
  }

  handleCancel = () => {
    this.props.changeModalShow(false);
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.createTask(values).then(res => {
        console.log(res)
      })

      // this.setState({ visible: false });
      // form.resetFields();

    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

	render() {
    const { tasks, visible } = this.props;
		return (
			<TaskListWrapper>
				<TaskListTitle>
					任务列表
				</TaskListTitle>
        <TaskCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
				<div>
					<Button type="primary" icon="plus" onClick={this.showModal}>
            添加新任务
          </Button>
				</div>
        {
          tasks.map(task => (
            <TaskItem key={task.get('id')}>
              <span className="cr unchecked">
                <i className="iconfont">&#xe661;</i>
              </span>
              <span className="task-title">
                { task.get('title') }
              </span>
              <i className="iconfont delete">&#xe605;</i>
            </TaskItem>
          ))
        }
			</TaskListWrapper>
		)
	}
}

export default TaskList;