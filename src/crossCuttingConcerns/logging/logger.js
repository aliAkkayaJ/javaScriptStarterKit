//loglama,doğrulama,catch //farklı yerlere logları yazmak istiyorsak aşağıdaki gibi
export class BaseLogger{  //burası bizim için şablon
    log(data){  
        console.log("default loger"+data)
    }
}

export class ElasticLogger extends BaseLogger{ //inherite ettik.dedik sen bir baseLoggersın
    log(data){  
        console.log("Logged to Elastic" +data)
    }
}
export class MongoLogger extends BaseLogger{ 
    log(data){  
        console.log("Logged to Mongo" +data)
    }
} //extends olması ne işe yaradı ? yani sen baseLoggerdan üretildin eğer içinde bir şey olmazsa base logger'ın datası sende olur. Ama eğer kendine has daya varsa base loggerın datasını ezersin. Yani baseLogger'ın içindeki her şeye extend ettiğimiz şeyde de eğer bir şey yoksa sahip oluyoruz.