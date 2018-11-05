module.exports = {
  tip: `{
        type: 'default center',
        content: '传入文字消息',
        protocol: '协议名字',
        icon: '传入的iconfont名',
        svg: '传入借条tip的svg名',
        selected: 'false true',
        theme: 'blue red'
      }`,
  title: `{
        contentText: '中间内容',
        leftText: '左边箭头后文字',
        rightText: '右边文字内容',
        icon: '右边icon',
        svg: '右边svg'
      }`,
  button: `{
        default: [{
          type: 'primary full default wran / 白底红字',
          text: '大按钮文字'
        }],
        group: [
          {
            text: '左边按钮文字',
            class: 'primary 蓝底白字'
          },
          {
            text: '拒绝',
            class: 'danger 红底白字 / default 白底蓝字'
          }
        ]
      }`,
  tab: `''`,
  nav: `{
        content: [],
        active: ''
      }`,
  board: `'1 / 默认  center / 居中'`,
  keyboard: 1,
  receipt: `[{
        name: '幸福不会远',
        type: '借出',
        portrait: 'http://iph.href.lu/750x150',
        rate: '0',
        start: '2017-11-30',
        end: '2017-12-01',
        money: '200',
        status: '已受理'
      }]`,
  'detail-list': `[
        {
          type: 'title',
          content: ''
        }, {
          type: 'default',
          key: '',
          value: ''
        }, {
          type: 'total',
          time: '2012-11-11',
          pay: '11111',
          income: '22222',
          icon: 'cong'
        }, {
          type: 'double',
          title: '提现',
          count: '-3,049.00',
          time: '11-19  15:14  周三',
          remnant: '余额:0.05',
          icon: 'cong'
        }
      ]`,
  'billboard': `[{
        svg: '',
        key: '',
        value: '',
        icon: '',
        target: '',
        dot: false,
        border: false
      }]`,
  'work-card': `{
        portrait: '头像地址',
        name: '姓名',
        money: '名字',
        tip: ''
      }`,
  'pay-password': `[]`,
  inputs: `{
        type: 'default / text / slide / icon / switch / center',
        placeholder: '',
        rightText: '',
        rightIcon: '',
        leftText: '',
        leftIcon: '',
        style: 'input类型',
        maxLength: '',
        disabled: '',
        receiveInput: '默认内容'
      }`,
  deadline: ``,
  'image-bg': `''`,
  'pull-refresh': `''`,
  without: `''`
}
