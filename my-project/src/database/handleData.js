const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)



let testContent = {
    target:"OneNote.exe",
    name:"测试添加新数据",
    key:"Ctrl + T"
}

let testData = {
    target:"OneNote.exe",
    name:"复制",
    order:7,
    key:"Ctrl + C"
}

class DataHandler {

//初始化数据库
initData = function(){
    db.defaults({
        usrName:"test_account",
        customize:false,
        database:[{
            appName:"OneNote.exe",
            keys:[
                {
                    order:2,
                    name:"复制",
                    key:"Ctrl + C"
                },
                {   order:1,
                    name:"粘贴",
                    key:"Ctrl + V"
                },
                {   order:3,
                    name:"粘贴",
                    key:"Ctrl + V"
                }
                
            ]
        }]
    }).write()
}

/* 
* 对目标数据排序
*/
sortData = function (appName){

    //进行排序
    const result = db.get("database")
                     .find({'appName':appName})
                     .get("keys")
                     .sortBy("order")
                     .value()

    //将得到的排序写入json中    
    db.get("database")
      .find({'appName':appName})
      .get('keys')
      .assign(result)
      .write()

}

/* 获得目标的json串等待进一步填充 */
getDataByName = function(name){
    let result = db.get("database")
                   .find({"appName":name})
                   .get("keys")
                   .value()

    return result
}

/* 将新的数据添加到列表最后 */
postData = function(content){
    let target = db.get("database")
                   .find({"appName":content.target})
                   .get("keys")

    let targetValue = target.value()

    //console.log(targetValue[2])
    let content_Value = {
        order:targetValue[targetValue.length-1].order+1,
        name:content.name,
        key:content.key
    }
    target.push(content_Value).write()
    //sortData(content.target)
}


/* 修改某一数据后重新排序 */
changeDataOrder = function(data){
    let result = db.get("database")
      .find({"appName":data.target})
      .get("keys")
      

      result.find({name:data.name})
            .assign({order:data.order,name:data.name,key:data.key})
            .write()

    this.sortData(data.target)
}

}
//changeDataOrder(testData)

export default  DataHandler