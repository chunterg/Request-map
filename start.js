var app = require('../node/node_modules/express')(),
  fs = require('fs');

//ajax start with 'ajax'
app.all('/ajax/:action', function(req, res) {  
        var config = fs.readFileSync(__dirname + '/config.json', 'utf8');
        config = JSON.parse(config);      
        for(var ac in config){
          if(ac==req.params.action){
            if(!config[ac].res_code||config[ac].res_code==200){
              res.status(200);
              if(isEquelData(config[ac].req,req.query)){
                
                res.send(config[ac].res.success);
              } else {
                res.send(config[ac].res.fail);
              }
              return;
            }else{
              res.status(config[ac].res_code);
              res.send(config[ac].res_code);
            } 
          }
        }
        
     }); 

// To determine the value of two object.
function isEquelData(data1,data2){
  if(typeof data1=='object'&&typeof data2=='object'){
      if(data1.length!=data2.length){
        return false;
      }
      for(var d in data1){
        if(data1.hasOwnProperty(d)&&data2.hasOwnProperty(d)){
            if(data1[d]!=data2[d]){
              return false;
            }
        }else{
          return false;
        }
      }
      return true;
  }
}
app.listen(3000);
console.log('Server start');