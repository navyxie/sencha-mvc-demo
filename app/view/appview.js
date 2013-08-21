Ext.define('WXY.view.appview',{
    extend:'Ext.Container',
    requires:['Ext.dataview.List'],
    alias:'widget.appview',
    config:{
        layout:'fit',
        items:[
            {
                xtype:'toolbar',
                title:'微校园',
                docked:'top'
            },
            {
                xtype:'list',
                store:'userstore',
                id:'userList',
                itemCls:'userList',
                loadingText:'正在加载用户数据...',
                emptyText:'<div style="width:100%;text-align: center;padding-top:100px;">暂时没有用户数据</div>',
                itemTpl:'{name}{age}',
                listeners: {
                    itemtap: function (list, index, item, record) {
                        var userData = record.getData();
                        Ext.Msg.alert('user-infomation', 'name:'+userData.name+',age:'+userData.age, Ext.emptyFn);
                    }
                }
            }
        ],
        listeners: [
            {
                delegate: "#userList",
                event: "tap",
                fn: "onClickUserList"
            }
        ]

    },
    onClickUserList:function(list, user, target, index, evt, options){
        console.log(11111);
        this.fireEvent('clickUserList', this, user);
    }
})