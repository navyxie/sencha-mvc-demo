//memory demo
var data = {
    users:[
        {id:1,name:'navy',age:18},
        {id:2,name:'av',age:17},
        {id:3,name:'she',age:16},
        {id:4,name:'smile',age:15},
    ]
}
Ext.define('WXY.store.userstore',{
    extend:'Ext.data.Store',  
    config:{
        model:'WXY.model.user', 
        autoLoad:true,
        data:data, //我顶，data字段要放在config对象里才行     
        proxy:{
            type:'memory',
            reader:{
                rootProperty:'users',
                type:'json'
            }
        }
    }

});
//ajax demo
// Ext.define('WXY.store.userstore',{
//     extend:'Ext.data.Store',     
//     config:{
//         autoLoad:true,
//         model:'WXY.model.user',  
//         proxy:{
//             type:'ajax',
//             url:'data/user.json',
//             reader:{
//                 rootProperty:'users',
//                 type:'json'
//             }
//         }
//     }
// })