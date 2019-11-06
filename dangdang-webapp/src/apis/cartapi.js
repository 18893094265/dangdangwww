import {BASEURL} from "../commons/config"
const CARTURL =`${BASEURL}/cartinfo`;
export default{
    getCartInfoByUserId(cb){
        fetch(CARTURL).then(res=>{
            res.json().then(cb)
        })
    }
}