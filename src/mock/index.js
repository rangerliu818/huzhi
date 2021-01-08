import Mock from 'mockjs'
import {login,recommend} from '/@/api/config.js'

const recommendData = Mock.mock({
    'list|7':[
        {
            title: "@ctitle(5,8)",
            sentence: '@csentence(50,100)',
            name: '@cname()',
            address: '@city(true)',
            id: '@increment(1)',
            profile :"@image('100x100')",
            numA:'@integer(1, 999)',
            numB:'@integer(1, 999)',
            image: "@image('200x150', '#50B347', '#FFF', 'Mock.js')" // 每次都增加1
        }
    ]
})

Mock.mock(login,'post',(userInfo)=>{
    return {
        status: 200,
        message: '登录成功',
        data:{
            news:'hahah'
        }
    }
})

Mock.mock(recommend,'get',()=>{
    return {
        status:200,
        data:recommendData
    }
})