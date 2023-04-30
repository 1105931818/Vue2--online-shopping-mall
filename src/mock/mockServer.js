//引入mockjs模块
import Mock from "mockjs";
//引入json数据格式
//webpack默认对外暴露的：图片，JSON数据格式
import banner from "./banner.json"
import floors from "./floors.json"
import detail from "./detail.json";
import skulist from "./skulist.json"
import useradderss from "./useradderss.json"

//mock数据：第一个参数为请求地址，第二个参数为请求数据
Mock.mock("/mock/banner" , {code:200 , data:banner})
Mock.mock("/mock/floors" , {code:200 , data:floors})
Mock.mock("/mock/detail" , {code:200 , data:detail})
Mock.mock("/mock/skulist" , {code:200 , data:skulist})
Mock.mock("/mock/useradderss" , {code:200 , data:useradderss})