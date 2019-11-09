import {BASEURL} from "../commons/config"
const LOGINURL =`${BASEURL}/logininfo`;
export default{
    getLoginInfo(cb){
        fetch(LOGINURL).then(res=>{
            res.json().then(cb)
        })
    }
}