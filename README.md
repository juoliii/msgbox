# msgbox ：  js消息提示框

1. 说明

    此js插件不依赖于jquery,可直接单独引用，使用方法非常简单

    首先引用js，然后调用以下方法即可
    ```
    msgbox.show({type:'success'});//成功提示
    msgbox.show({type:'fail'});//失败提示
    msgbox.show({type:'warn'});//警告提示
    msgbox.show({type:'loading',timeout:100000});//加载提示
    ```

2. 编译

    运行npm run bulid ，dist目录生成msgbox.min.js，html页面引用此js即可

3. 参数

    参数名|默认值|备注
    --|:--:|--:
    type|success|提示类型，可选值success、fail、warn、loading
    title|操作成功|提示语
    timeout|1500|超时时间，毫秒，到时间提示框自动关闭
    callback|空|回调函数，对话框关闭时触发