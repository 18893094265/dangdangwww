import {BASEURL} from "../commons/config"
const BUYINGURL =`${BASEURL}/buyinginfo`;
export default{
    getBuyingInfo(cb){
        fetch(BUYINGURL).then(res=>{
            res.json().then(cb)
        })
    }
}