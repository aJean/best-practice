import React from 'react';
import { Card, Form, Input, List, Button } from 'antd';
import { connect } from 'dva';
import { VisualModelState } from '@/models/visual';
import styles from './style.less';

/**
 * @file 组件编辑
 */

const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 17 },
};

function mapStateToProps({ visual }: { visual: VisualModelState }) {
  return { edit: visual.edit, items: visual.items };
}

class Editor extends React.Component<any, any> {
  safeValue(data: Object, key: string) {
    return data ? data[key] : '';
  }

  /**
   * 生成编辑表单
   */
  safeForm(data: any) {
    if (!data || !data.props) {
      return null;
    }

    const { form } = this.props;
    const props = data.props;
    const id = data.id;
    const items = Object.keys(props).map((key, i) => (
      <Form.Item key={i} label={key}>
        {form.getFieldDecorator(key, {
          initialValue: props[key],
        })(<Input />)}
      </Form.Item>
    ));

    return (
      <Form key={id} {...layout} onSubmit={this.finishHandle}>
        <Form.Item label="id">
          {form.getFieldDecorator('id', {
            initialValue: id,
          })(<Input disabled />)}
        </Form.Item>
        {items}
        <Button type="primary" htmlType="submit">
          修改组件
        </Button>
      </Form>
    );
  }

  /**
   * 更新组件 props
   */
  finishHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { items, dispatch, form } = this.props;
    const values = form.getFieldsValue();
    console.log(values);
    const item = items.find((data: any) => data.id == values.id);

    if (item) {
      delete values.id;
      Object.assign(item.props, values);
      dispatch({ type: 'visual/update', payload: { items: [...items] } });
    }
  };

  render() {
    const { edit } = this.props;

    return (
      <Card className={styles.visualEditor} title="editor control">
        <List>
          <List.Item>控件名：{this.safeValue(edit, 'name')}</List.Item>
          <List.Item></List.Item>
        </List>
        {this.safeForm(edit)}
        <Button className={styles.visualEditorSave} type="primary">
          提交至线上
        </Button>
      </Card>
    );
  }
}

const EditorForm = Form.create({ name: 'editor' })(Editor);
export default connect(mapStateToProps)(EditorForm);
