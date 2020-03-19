# msgbox ：  js消息提示框

1. 编译

    npm run bulid ，dist目录生成msgbox.min.js，html页面引用此js即可

2. 参数

    参数名|默认值|备注
    --|:--:|--:
    type|success|提示类型，可选值success、fail、warn、loading
    title|操作成功|提示语
    timeout|1500|超时时间，毫秒，到时间提示框自动关闭
    callback|空|回调函数，对话框关闭时触发