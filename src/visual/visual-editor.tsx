import React from 'react';
import { Card, Form, Input, List, Button } from 'antd';
import { connect } from 'dva';
import styles from './style.less';

/**
 * @file 组件编辑
 */

const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 17 },
};

function mapStateToProps(state) {
  return { edit: state.visual.edit, items: state.visual.items };
}

class Editor extends React.Component<any, any> {
  safeValue(data, key) {
    return data ? data[key] : '';
  }

  /**
   * 生成编辑表单
   */
  safeForm(data) {
    if (!data || !data.props) {
      return null;
    }

    const props = data.props;
    const id = data.id;
    const items = Object.keys(props).map((key, i) => (
      <Form.Item key={i} name={key} label={key} initialValue={props[key]}>
        <Input />
      </Form.Item>
    ));

    return (
      <Form key={id} name='editor' {...layout} onFinish={this.finishHandle}>
        <Form.Item name='id' label='id' initialValue={id}>
          <Input disabled />
        </Form.Item>
        {items}
        <Button type='primary' htmlType='submit'>
          确认修改
        </Button>
      </Form>
    );
  }

  /**
   * 更新组件 props
   */
  finishHandle = (values) => {
    const { items, dispatch } = this.props;
    const id = values.id;
    const item = items.find(data => data.id == id);

    if (item) {
      delete values.id;
      Object.assign(item.props, values);
      dispatch({ type: 'visual/update', payload: { items: [...items] } })
    }
  };

  render() {
    const { edit } = this.props;

    return (
      <Card className={styles.visualEditor} title='editor control'>
        <List>
          <List.Item>控件名：{this.safeValue(edit, 'name')}</List.Item>
          <List.Item></List.Item>
        </List>
        {this.safeForm(edit)}
      </Card>
    );
  }
}

export default connect(mapStateToProps)(Editor);
