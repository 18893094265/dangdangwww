import {BASEURL} from "../commons/config"
const MAINURL =`${BASEURL}/maininfo`;
export default{
    getMainInfo(cb){
        fetch(MAINURL).then(res=>{
            res.json().then(cb)
        })
    }
}