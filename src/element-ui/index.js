import { Button, Row, Col, MessageBox, Message, Input } from 'element-ui';

const element = {
    install: function (Vue) {
        //element-ui大多数组件，注册为全局组件Vue.component|Vue.use
        Vue.use(Button);
        Vue.use(Row);
        Vue.use(Col);
        Vue.use(Input)
        //按需引入写法不同的:MessageBox、Message、Loading、Notification
        Vue.prototype.$msgbox = MessageBox;
        //消息提示框
        Vue.prototype.$alert = MessageBox.alert;

        Vue.prototype.$confirm = MessageBox.confirm

        Vue.prototype.$message = Message;

    }
}

export default element