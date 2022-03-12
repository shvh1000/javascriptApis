class Battery{
     batteryDetails(){
         const batteryObj = {};
         return navigator.getBattery()
         .then(resolve=>{
             batteryRelatedOperations();
            window.addEventListener("chargingchange",batteryRelatedOperations)
            window.addEventListener("levelchange",batteryRelatedOperations)
                function batteryRelatedOperations(){
            batteryObj.isCharging = resolve.charging ? true : false;
            if(resolve.level>=0.9)
            batteryObj.chargeConditon = 'good'
            else if(resolve.level >= 0.11 && resolve.level <= 0.89) 
            batteryObj.chargeConditon = 'sufficient'
            else 
            batteryObj.chargeConditon = 'bad'

            batteryObj.batteryLevel = resolve.level * 100 + "%"

            batteryObj.chargingTime = resolve.chargingTime + " seconds"
            batteryObj.dischargingTime = resolve.dischargingTime + " seconds"
            console.log(batteryObj)
                return batteryObj;
                }
        })
        .catch(error=>{
            console.log(error);
        })
    }
}
let b = new Int32Array(90)
console.log(b);

class BeaconReq{
    constructor(url,data)
    {
        this.url = url;
        this.data = data;
    }
    sendBeaconReq(){
        const beaconObj = {}
        let result;
        if(typeof this.url == 'string' && typeof this.data == 'object'){
            try{
            result = navigator.sendBeacon(this.url,this.data);
            }
            catch(error){
                console.log(error)
            } 
            if(result){
                beaconObj.result = true;
            }
            else{
                beaconObj.result = false;
            }
        }
        else{
            beaconObj.result = undefined;
            console.error("Invalid data type.")
        }
        console.log(beaconObj)
        return beaconObj;
    }
    
}
const a = new BeaconReq("http://localhost:8000/courses",{body:'mango'});
a.sendBeaconReq()

console.log(new Battery().batteryDetails());
window.onunload=()=>{
navigator.sendBeacon("http://localhost:8000/courses","")
}
//const obj = {fruit:"apple",sold:200}