Ext.define('WXY.controller.appcontroller',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            appView:'appview'
        },
        control: {
            appView: {               
                clickUserList: 'clickUserListHandler'
            }

        }
    },
    clickUserListHandler:function(list,user){
        console.log(user);
        alert(user);
    },
    launch:function(){
        this.callParent(arguments);
        // var userStore = Ext.getStore('userstore').load();
        // console.log(userStore);
    },
    init:function(){
        this.callParent(arguments);
    }
})