import {BASEURL} from "../commons/config"
const MYURL =`${BASEURL}/myinfo`;
export default{
    getMyInfo(cb){
        fetch(MYURL).then(res=>{
            res.json().then(cb)
        })
    }
}