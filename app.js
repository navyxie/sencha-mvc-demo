Ext.application({
    name:'WXY',
    models:['user'],
    stores:['userstore'],
    controllers:['appcontroller'],
    views:['appview'],
    launch:function(){
        var appView = {
            xtype: "appview"
        };
        Ext.Viewport.add([appView]);
    }
})
